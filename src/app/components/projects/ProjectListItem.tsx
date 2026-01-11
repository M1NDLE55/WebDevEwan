"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "../global/Projects";
import {
  Glasses,
  GraduationCap,
  Swords,
  ScrollText,
  Code2,
} from "lucide-react";

type ProjectListItemProps = {
  project: Project;
  index: number;
};

function pickIconByProject(project: Project) {
  const key = project.name.toLowerCase();
  if (key.includes("survey") || key.includes("scope")) return Glasses;
  if (key.includes("tarkov") || key.includes("eft")) return Swords;
  if (key.includes("teaching") || key.includes("learning"))
    return GraduationCap;
  if (key.includes("web") || key.includes("portfolio")) return Code2;
  return ScrollText;
}

export default function ProjectListItem({
  project,
  index,
}: ProjectListItemProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  useEffect(() => {
    async function getMeta(href: string) {
      try {
        const response = await fetch(
          `https://api.microlink.io/?url=${href}&meta=true`,
        );
        const data = await response.json();
        const ogUrl = data?.data?.image?.url as string | undefined;
        if (ogUrl) setImageUrl(ogUrl);
      } catch (error) {
        // Best-effort only; gracefully fall back to icon
        console.warn("Microlink fetch failed", error);
      }
    }

    if (project.links.website && !project.links.hideOG) {
      getMeta(project.links.website);
    }
  }, [project.links.website, project.links.hideOG]);

  const Icon = useMemo(() => pickIconByProject(project), [project]);

  return (
    <div className="relative mx-auto max-w-2xl overflow-hidden rounded-2xl border-4 border-amber-600/70 bg-gradient-to-br from-amber-900/70 to-stone-900/70 p-4 shadow-xl backdrop-blur-sm transition hover:border-amber-400/80 md:mx-0 md:max-w-none md:p-6">
      <div className="relative z-[2] flex flex-col items-center gap-4 text-center md:flex-row md:items-center md:gap-6 md:text-left">
        {/* Visual */}
        <div className="flex shrink-0 items-center justify-center">
          {imageUrl ? (
            <Image
              alt={project.name}
              src={imageUrl}
              width={960}
              height={540}
              unoptimized
              className="h-36 w-64 rounded-lg object-cover md:h-40 md:w-72"
              priority={index < 2}
            />
          ) : (
            <div className="flex h-36 w-64 items-center justify-center rounded-lg bg-gradient-to-br from-amber-700 to-amber-900 md:h-40 md:w-72">
              <Icon className="text-amber-200" size={56} />
            </div>
          )}
        </div>

        {/* Content */}
        <div className="flex min-w-0 flex-1 flex-col gap-2 md:items-start">
          <h3 className="text-2xl font-bold tracking-wide text-amber-100 md:text-3xl">
            {project.name}
          </h3>
          <p className="text-amber-200/80">{project.shortDescription}</p>

          {project.tags && project.tags.length > 0 && (
            <div className="mt-1 flex flex-wrap justify-center gap-2 md:justify-start">
              {project.tags.map((tag) => (
                <span
                  key={tag.name}
                  className={`rounded-full border border-amber-700/60 bg-gradient-to-br from-amber-900/40 to-stone-900/40 px-2 py-0.5 text-sm text-amber-100 shadow-sm backdrop-blur-[1px] ${tag.color}`}
                >
                  {tag.name}
                </span>
              ))}
            </div>
          )}

          <div className="mt-3">
            <Link
              href={project.localHref}
              className="inline-flex items-center gap-2 rounded-full border-2 border-amber-400 bg-amber-700/30 px-4 py-2 text-amber-100 shadow hover:bg-amber-700/50 hover:text-amber-50"
              aria-label={`Open project page for ${project.name}`}
            >
              Enter the Chronicle
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
