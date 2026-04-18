import Image from "next/image";
import Link from "next/link";
import { projects } from "../global/Projects";
import { Glasses } from "lucide-react";

export default function FeaturedQuest() {
  const project = projects.get("SurveyScope");
  if (!project) return null;
  const imageUrl = project.links.ogImage ?? null;

  return (
    <div className="mb-6">
      <Link
        href={project.localHref}
        className="notch-plate group relative block [--notch-bg:#141414] [--notch-border-a:0.4] hover:[--notch-border-a:1]"
        aria-label={`Open featured project: ${project.name}`}
      >
        <div className="flex flex-col gap-4 p-4 md:flex-row md:items-center md:gap-6 md:p-5">
          <div className="relative aspect-[1200/630] w-full shrink-0 overflow-hidden md:w-56">
            {imageUrl ? (
              <Image
                alt={project.name}
                src={imageUrl}
                width={1200}
                height={630}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-neutral-900">
                <Glasses className="text-amber-400" size={48} />
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="text-2xl font-bold text-amber-100">
              {project.name}
            </h3>
            <p className="mt-2 text-sm text-amber-100/70">
              {project.description}
            </p>
            <span className="mt-3 inline-flex items-center gap-2 text-sm uppercase tracking-widest text-amber-300 transition group-hover:text-amber-200">
              Enter the Chronicle
              <span aria-hidden className="transition group-hover:translate-x-1">
                →
              </span>
            </span>
          </div>
        </div>
      </Link>
    </div>
  );
}
