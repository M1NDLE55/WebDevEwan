import Image from "next/image";
import type { Project } from "../global/Projects";
import ProjectMeta from "./ProjectMeta";
import {
  Glasses,
  GraduationCap,
  Swords,
  ScrollText,
  Code2,
} from "lucide-react";

function pickIcon(project: Project) {
  const key = project.name.toLowerCase();
  if (key.includes("survey") || key.includes("scope")) return Glasses;
  if (key.includes("tarkov") || key.includes("eft")) return Swords;
  if (key.includes("teaching") || key.includes("learning"))
    return GraduationCap;
  if (key.includes("web") || key.includes("portfolio")) return Code2;
  return ScrollText;
}

export default function ProjectHero({ project }: { project: Project }) {
  const imageUrl = project.links.ogImage ?? null;
  const Icon = pickIcon(project);

  return (
    <div className="flex flex-col gap-5">
      {/* Cover image */}
      <div className="notch-plate-sm relative aspect-[1200/630] w-full [--notch-bg:transparent] [--notch-bg-hover:transparent] [--notch-border-a-hover:0.3] [--notch-border-a:0.3]">
        <div className="clip-notch-sm absolute inset-[1px] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-950">
          {imageUrl ? (
            <Image
              alt={project.name}
              src={imageUrl}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center">
              <Icon className="text-amber-400/60" size={96} />
            </div>
          )}
        </div>
      </div>

      {/* Meta */}
      <ProjectMeta project={project} size="md" />

      {/* Title */}
      <h1 className="text-3xl font-bold tracking-wide text-amber-100 md:text-5xl">
        {project.name}
      </h1>
    </div>
  );
}
