import Image from "next/image";
import Link from "next/link";
import type { Project } from "../global/Projects";
import ProjectMeta from "./ProjectMeta";
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
  featured?: boolean;
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
  featured = false,
}: ProjectListItemProps) {
  const imageUrl = project.links.ogImage ?? null;
  const Icon = pickIconByProject(project);

  // Featured: stacked hero layout, image at top full-width.
  // Compact: side-by-side, smaller image.
  // Aspect 1200/630 matches OG image dimensions so nothing is cropped.
  const imageClasses = featured
    ? "clip-notch-sm aspect-[1200/630] w-full object-cover"
    : "clip-notch-sm aspect-[1200/630] w-full object-cover sm:w-56 md:w-48";

  const containerClasses = featured
    ? "notch-plate relative flex flex-col gap-5 p-4 [--notch-bg:#141414] [--notch-border-a:0.6] hover:[--notch-border-a:1] md:p-6"
    : "notch-plate group relative flex flex-col gap-4 p-4 [--notch-bg:#141414] [--notch-border-a:0.4] hover:[--notch-border-a:0.8] sm:flex-row sm:items-start md:p-5";

  return (
    <div className={containerClasses}>
      {/* Whole-card click target. aria-hidden + tabIndex=-1 so keyboard users
          still reach the card via the visible "Enter the Chronicle" button. */}
      <Link
        href={project.localHref}
        aria-hidden="true"
        tabIndex={-1}
        className="absolute inset-0 z-10"
      />
      {featured && (
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-400/80">
          <span className="h-px flex-1 bg-amber-500/30" />
          <span>Featured Quest</span>
          <span className="h-px flex-1 bg-amber-500/30" />
        </div>
      )}

      {/* Visual */}
      <div
        className={`shrink-0 ${featured ? "w-full" : "sm:w-56 md:w-48"}`}
      >
        {imageUrl ? (
          <Image
            alt={project.name}
            src={imageUrl}
            width={featured ? 1280 : 640}
            height={featured ? 720 : 360}
            className={imageClasses}
            priority={index < 2}
          />
        ) : (
          <div
            className={`clip-notch-sm flex aspect-[1200/630] items-center justify-center bg-gradient-to-br from-neutral-800 to-neutral-900 ${
              featured ? "w-full" : "w-full sm:w-56 md:w-48"
            }`}
          >
            <Icon
              className="text-amber-400/70"
              size={featured ? 72 : 48}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex min-w-0 flex-1 flex-col gap-3">
        <div className="flex flex-col gap-2">
          <ProjectMeta project={project} size={featured ? "md" : "sm"} />
          <h3
            className={`font-bold tracking-wide text-amber-100 ${
              featured ? "text-3xl md:text-4xl" : "text-xl md:text-2xl"
            }`}
          >
            {project.name}
          </h3>
          <p
            className={`text-amber-100/70 ${
              featured ? "md:text-base" : "text-sm"
            }`}
          >
            {project.description}
          </p>
        </div>

        {project.tags && project.tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {project.tags
              .slice(0, featured ? project.tags.length : 5)
              .map((tag) => (
                <span
                  key={tag.name}
                  className={`border bg-neutral-900/60 px-2 py-0.5 text-[10px] uppercase tracking-widest text-amber-100/80 ${tag.color}`}
                >
                  {tag.name}
                </span>
              ))}
            {!featured && project.tags.length > 5 && (
              <span className="border border-amber-500/30 bg-neutral-900/60 px-2 py-0.5 text-[10px] uppercase tracking-widest text-amber-100/50">
                +{project.tags.length - 5}
              </span>
            )}
          </div>
        )}

        <div className="mt-auto pt-1">
          <Link
            href={project.localHref}
            className="notch-plate-sm relative z-20 inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-widest text-amber-100 transition hover:text-amber-50"
            aria-label={`Open project page for ${project.name}`}
          >
            Enter the Chronicle
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
