"use client";

import { useEffect, useState } from "react";

export type RailChapter = {
  id: string;
  label: string;
  numeral: string;
};

export default function ChapterRail({ chapters }: { chapters: RailChapter[] }) {
  const [active, setActive] = useState<string>(chapters[0]?.id ?? "");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio currently intersecting
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible.length > 0) {
          setActive(visible[0].target.id);
        }
      },
      {
        // Trigger when a chapter is roughly centered in the viewport
        rootMargin: "-40% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      },
    );

    chapters.forEach((c) => {
      const el = document.getElementById(c.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [chapters]);

  return (
    <aside
      className="pointer-events-none fixed left-6 top-1/2 z-40 hidden -translate-y-1/2 xl:block"
      aria-hidden="true"
    >
      <ol className="pointer-events-auto flex flex-col gap-3">
        {chapters.map((c) => {
          const isActive = c.id === active;
          return (
            <li key={c.id}>
              <a
                href={`#${c.id}`}
                className="group flex items-center gap-3"
                title={c.label}
              >
                <span
                  className={`notch-plate-xs flex h-7 w-7 items-center justify-center text-[10px] font-bold tracking-widest transition [--notch-bg:#141414] ${
                    isActive
                      ? "text-amber-200 [--notch-border-a:1]"
                      : "text-amber-500/60 group-hover:text-amber-300 [--notch-border-a:0.4] group-hover:[--notch-border-a:0.8]"
                  }`}
                >
                  {c.numeral}
                </span>
                <span
                  className={`whitespace-nowrap text-xs uppercase tracking-widest transition ${
                    isActive
                      ? "text-amber-200 opacity-100"
                      : "text-amber-100/50 opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {c.label}
                </span>
              </a>
            </li>
          );
        })}
      </ol>
    </aside>
  );
}
