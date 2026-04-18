import Link from "next/link";
import type { Project } from "../global/Projects";
import { ArrowLeft, ArrowRight } from "lucide-react";

type ProjectNavProps = {
  prev: Project | null;
  next: Project | null;
};

export default function ProjectNav({ prev, next }: ProjectNavProps) {
  if (!prev && !next) return null;

  return (
    <nav
      aria-label="Project navigation"
      className="grid gap-3 md:grid-cols-2"
    >
      {prev ? (
        <Link
          href={prev.localHref}
          className="notch-plate group flex flex-col gap-1 p-4 text-left [--notch-bg:#141414] [--notch-border-a:0.4] hover:[--notch-border-a:1] md:p-5"
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-400/80">
            <ArrowLeft
              size={12}
              className="transition group-hover:-translate-x-0.5"
            />
            Previous Quest
          </span>
          <span className="text-lg font-bold text-amber-100 md:text-xl">
            {prev.name}
          </span>
          <span className="text-xs text-amber-100/60 line-clamp-1">
            {prev.description}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
      {next ? (
        <Link
          href={next.localHref}
          className="notch-plate group flex flex-col items-end gap-1 p-4 text-right [--notch-bg:#141414] [--notch-border-a:0.4] hover:[--notch-border-a:1] md:p-5"
        >
          <span className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest text-amber-400/80">
            Next Quest
            <ArrowRight
              size={12}
              className="transition group-hover:translate-x-0.5"
            />
          </span>
          <span className="text-lg font-bold text-amber-100 md:text-xl">
            {next.name}
          </span>
          <span className="text-xs text-amber-100/60 line-clamp-1">
            {next.description}
          </span>
        </Link>
      ) : (
        <span aria-hidden />
      )}
    </nav>
  );
}
