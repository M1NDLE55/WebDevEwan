import SkillDeck from "../skills/SkillDeck";
import Banner from "./Banner";
import Chapter from "./Chapter";
import ChapterRail from "./ChapterRail";
import FeaturedQuest from "./FeaturedQuest";
import Link from "next/link";
import { FileText, MapPin } from "lucide-react";

const chapters = [
  { id: "prologue", label: "Prologue", numeral: "I" },
  { id: "chapter-forging", label: "The Forging", numeral: "II" },
  { id: "chapter-guild", label: "The Guild", numeral: "III" },
  { id: "chapter-arsenal", label: "The Arsenal", numeral: "IV" },
  { id: "interlude", label: "Chronicles", numeral: "V" },
  { id: "chapter-quest", label: "The Quest", numeral: "VI" },
  { id: "epilogue", label: "Epilogue", numeral: "VII" },
];

export default function HeroStory() {
  return (
    <>
      <ChapterRail chapters={chapters} />

      {/* Banner spans the wider column to match the Projects pages */}
      <section className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
        <Banner
          title="The Legend of Ewan Trollip"
          subtitle="Code Mage of the Digital Realms"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-6 pb-12">
        {/* TL;DR + quick-access pills */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-col items-center gap-2 text-sm text-amber-100/80 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
            <span className="inline-flex items-center gap-2 text-amber-400">
              <MapPin size={14} />
              <span className="tracking-widest uppercase">TL;DR</span>
            </span>
            <span className="hidden sm:inline">
              Full-stack developer from South Africa, lead developer on{" "}
              <Link
                href="/projects/SurveyScope"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                SurveyScope
              </Link>{" "}
              (AI wildlife census) — told as a mage&apos;s chronicle. Skip to{" "}
              <a
                href="#chapter-arsenal"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                skills
              </a>{" "}
              or{" "}
              <Link
                href="/projects"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                projects
              </Link>
              .
            </span>
          </p>
          <a
            href="/ewan_trollip_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-plate-sm rune-glow inline-flex shrink-0 items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest text-amber-200 uppercase transition hover:text-amber-100"
            title="Download CV (PDF)"
          >
            <FileText size={14} />
            Download CV
          </a>
        </div>

        {/* Prologue */}
        <Chapter
          id="prologue"
          numeral="I"
          title="Prologue — The Whisper of the Runes"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            In the quiet hills of <strong>Noordheuwel</strong>, under the
            watchful gaze of the Southern Stars, a young apprentice named{" "}
            <strong>Ewan</strong> stumbled upon an ancient tome — the{" "}
            <em>Runes of Delphi</em>. His earliest trials at the village school
            yielded <strong>five distinctions</strong>, an early omen that his
            path would be no ordinary one. With trembling hands, he traced the
            tome&apos;s symbols, and the air shimmered with the first sparks of
            magic. It was here that his journey began — a path not of sword and
            shield, but of logic and light, where spells were written in code
            and kingdoms were built in the realm unseen.
          </p>
        </Chapter>

        {/* Chapter I — Forging (academic) */}
        <Chapter
          id="chapter-forging"
          numeral="II"
          title="Chapter I — The Forging of the Mage"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            Ewan&apos;s quest led him to the{" "}
            <strong>Great Academy of North-West University</strong>, where he
            trained under the Masters of C#, Python, C++, Java, and the sacred
            arts of SQL. Through trials and sleepless nights, he forged his
            first enchanted tools — the <em>Crystal of PostgreSQL</em>, the{" "}
            <em>Blade of ASP.NET</em>, and the <em>Mirror of WinForms</em> —
            emerging from the Academy crowned <strong>cum laude</strong>, each
            artifact granting him new powers in the ever-expanding Digital
            Realms.
          </p>
        </Chapter>

        {/* Chapter II — Guild (professional) */}
        <Chapter
          id="chapter-guild"
          numeral="III"
          title="Chapter II — The Guild of Noble Craft"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            With the Academy behind him, Ewan ventured first into the wild lands
            as a <strong>freelance artificer</strong> — crafting storefronts and
            sites for merchants across Shopify and custom stacks, sharpening his
            trade with TypeScript, React, and Next.js at his side. In time, a
            call came from the halls of <strong>Innoventix Consulting</strong>,
            where he was welcomed as a Software Developer and entrusted with a
            quest of true consequence: lead developer on{" "}
            <Link
              href="projects/SurveyScope/"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
            >
              <strong>SurveyScope</strong>
            </Link>
            , an AI-powered aerial-census platform forged in league with{" "}
            <strong>WildEye Conservation</strong>. There, amid React,
            TypeScript, and the arcane cloud lattices of AWS, he wields spells
            that help researchers count and identify wildlife across vast skies
            — where code serves not coin alone, but the creatures of the realm.
          </p>
        </Chapter>

        {/* Chapter III — Arsenal (skills) */}
        <Chapter
          id="chapter-arsenal"
          numeral="IV"
          title="Chapter III — The Mage's Arsenal"
        >
          <p className="dropcap mb-8 text-amber-50/90">
            Over the years, Ewan gathered a formidable collection of magical
            artifacts and spells — each one a testament to battles fought and
            quests completed. Some were forged in the heat of academic trials,
            others in the wild lands of freelance work, and still more in the
            halls of noble guilds.
          </p>

          <SkillDeck />
        </Chapter>

        {/* Interlude — Featured Quest + Projects CTA */}
        <Chapter
          id="interlude"
          numeral="V"
          title="Interlude — The Artisan's Chronicles"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            From the forges of experience and the crucibles of curiosity came a
            series of crafted works — living artifacts shaped by code and guided
            by purpose. One such work stands above the rest, a quest of true
            consequence forged in the wild skies of conservation.
          </p>

          <FeaturedQuest />

          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="notch-plate-sm rune-glow inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold tracking-[0.2em] whitespace-nowrap text-amber-100 uppercase transition [--notch-border-a:0.9] hover:text-amber-50 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none sm:px-8"
              aria-label="Explore The Artisan's Chronicles (projects page)"
            >
              Browse All Chronicles
            </Link>
          </div>
        </Chapter>

        {/* Chapter IV — Quest Ahead */}
        <Chapter
          id="chapter-quest"
          numeral="VI"
          title="Chapter IV — The Quest Ahead"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            The mage&apos;s ambition is no longer to reach the summit — it is to
            widen the path. With each new spell, Ewan seeks to deepen his
            mastery of the <strong>cloud citadels of AWS</strong> and the
            emerging arts of machine intuition, forging tools that bridge
            research and software. His vision: to scale the work of{" "}
            <strong>conservation technology</strong> — systems that turn raw
            data into living knowledge, and aid those who steward the wild
            places of the world.
          </p>
        </Chapter>

        {/* Epilogue */}
        <Chapter
          id="epilogue"
          numeral="VII"
          title="Epilogue — The Road Yet Untraveled"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            The mage&apos;s journey is far from over. Beyond the horizon lie new
            realms, new spells, and new challenges. Those who seek him may find
            him through the{" "}
            <a
              href="https://www.linkedin.com/in/ewan-trollip/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
              title="LinkedIn"
            >
              <strong>Crystal of LinkedIn</strong>
            </a>
            , the{" "}
            <a
              href="https://github.com/M1NDLE55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
              title="GitHub"
            >
              <strong>Scrolls of GitHub</strong>
            </a>
            , or by sending a raven through the royal couriers. The legend of
            Ewan Trollip is still being written — and the next chapter awaits.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="mailto:ewantrollip@webdevewan.com"
              className="notch-plate-sm rune-glow inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold tracking-[0.2em] whitespace-nowrap text-amber-100 uppercase transition [--notch-border-a:0.9] hover:text-amber-50 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none sm:px-8"
              aria-label="Send an email to Ewan"
            >
              Send a Raven
            </a>
          </div>
        </Chapter>
      </section>
    </>
  );
}
