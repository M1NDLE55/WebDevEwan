# /// script
# requires-python = ">=3.10"
# dependencies = ["reportlab>=4", "markdown-it-py>=3"]
# ///
"""Render the approved CV Markdown without changing its wording or source file."""

import argparse
from html import escape
from pathlib import Path

from markdown_it import MarkdownIt
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle
from reportlab.pdfbase import pdfmetrics
from reportlab.pdfbase.ttfonts import TTFont
from reportlab.platypus import PageBreak, Paragraph, SimpleDocTemplate


def inline_markup(token):
    parts = []
    for child in token.children or []:
        if child.type in {"text", "code_inline"}:
            parts.append(escape(child.content))
        elif child.type in {"softbreak", "hardbreak"}:
            parts.append(" ")
        elif child.type == "strong_open":
            parts.append("<b>")
        elif child.type == "strong_close":
            parts.append("</b>")
        elif child.type == "em_open":
            parts.append("<i>")
        elif child.type == "em_close":
            parts.append("</i>")
        elif child.type == "link_open":
            parts.append(f'<a href="{escape(child.attrGet("href"), quote=True)}" color="#000000">')
        elif child.type == "link_close":
            parts.append("</a>")
        else:
            raise ValueError(f"Unsupported inline token: {child.type}")
    return "".join(parts)


def export_cv(source, output, font_dir):
    for name, filename in [
        ("CV", "DejaVuSans.ttf"),
        ("CV-Bold", "DejaVuSans-Bold.ttf"),
        ("CV-Italic", "DejaVuSans-Oblique.ttf"),
        ("CV-BoldItalic", "DejaVuSans-BoldOblique.ttf"),
    ]:
        pdfmetrics.registerFont(TTFont(name, str(font_dir / filename)))
    pdfmetrics.registerFontFamily(
        "CV", normal="CV", bold="CV-Bold", italic="CV-Italic", boldItalic="CV-BoldItalic"
    )
    body = ParagraphStyle(
        "Body", fontName="CV", fontSize=9.2, leading=12.6,
        textColor=colors.black, spaceAfter=5.5, alignment=TA_LEFT,
    )
    styles = {
        "h1": ParagraphStyle("Name", parent=body, fontName="CV-Bold", fontSize=22, leading=28, spaceAfter=6),
        "h2": ParagraphStyle("Section", parent=body, fontName="CV-Bold", fontSize=12, leading=16, spaceBefore=10, spaceAfter=6, keepWithNext=True),
        "h3": ParagraphStyle("Subsection", parent=body, fontName="CV-Bold", fontSize=9.5, leading=13, spaceBefore=5, spaceAfter=5, keepWithNext=True),
    }
    story = []
    heading = None
    depth = 0
    title_seen = False
    for token in MarkdownIt().parse(source.read_text()):
        if token.type == "heading_open":
            heading = token.tag
        elif token.type == "heading_close":
            heading = None
        elif token.type == "bullet_list_open":
            depth += 1
        elif token.type == "bullet_list_close":
            depth -= 1
        elif token.type == "inline":
            # The document label is set above the name, not as a second large title.
            if heading == "h1" and not title_seen:
                title_seen = True
                story.append(Paragraph(inline_markup(token), ParagraphStyle(
                    "Label", parent=body, fontSize=9, spaceAfter=5,
                )))
                continue
            if heading == "h2" and token.content == "Experience":
                story.append(PageBreak())
            style = styles[heading] if heading else body
            if depth:
                style = ParagraphStyle(
                    f"List-{depth}", parent=body, leftIndent=12 * depth,
                    bulletIndent=12 * (depth - 1), spaceAfter=3,
                )
            story.append(Paragraph(inline_markup(token), style, bulletText="•" if depth else None))
        elif token.type not in {
            "paragraph_open", "paragraph_close", "list_item_open", "list_item_close", "hr"
        }:
            raise ValueError(f"Unsupported block token: {token.type}")

    def footer(canvas, doc):
        canvas.saveState()
        width, _ = A4
        canvas.setStrokeColor(colors.black)
        canvas.line(42, 34, width - 42, 34)
        canvas.setFont("CV", 8)
        canvas.setFillColor(colors.black)
        canvas.drawString(42, 21, "Ewan Trollip · Curriculum Vitae")
        canvas.drawRightString(width - 42, 21, str(doc.page))
        canvas.restoreState()

    output.parent.mkdir(parents=True, exist_ok=True)
    SimpleDocTemplate(
        str(output), pagesize=A4, leftMargin=42, rightMargin=42,
        topMargin=36, bottomMargin=46, title="Ewan Trollip — Curriculum Vitae",
        author="Ewan Trollip",
    ).build(story, onFirstPage=footer, onLaterPages=footer)


if __name__ == "__main__":
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, required=True)
    parser.add_argument("--output", type=Path, default=Path("public/ewan_trollip_cv.pdf"))
    parser.add_argument("--font-dir", type=Path, default=Path("/usr/share/fonts/truetype/dejavu"))
    args = parser.parse_args()
    if args.source.resolve() == args.output.resolve():
        parser.error("The output must differ from the approved source.")
    export_cv(args.source, args.output, args.font_dir)
