import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { type Project, projects } from "@/app/components/global/Projects";
import ProjectHero from "@/app/components/projects/ProjectHero";
import ProjectNav from "@/app/components/projects/ProjectNav";
import {
  ExternalLink,
  Github,
  Scroll,
  Flame,
  Trophy,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

export async function generateMetadata(props: {
  params: Promise<{ name: string }>;
}): Promise<Metadata> {
  const { name } = await props.params;
  const project = projects.get(name);
  if (!project) return {};

  const title =
    project.name === "WebDevEwan"
      ? "WebDevEwan — Portfolio"
      : `${project.name} | WebDevEwan`;
  const description = project.description;
  const url = `/projects/${name}`;
  const socialImage = project.links.socialImage ?? project.links.ogImage;
  const images = socialImage
    ? [{ url: socialImage, width: 1200, height: 630, alt: project.name }]
    : undefined;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: images?.map((img) => img.url),
    },
  };
}

export default async function Page(props: {
  params: Promise<{ name: string }>;
}) {
  const params = await props.params;
  if (!projects.has(params.name)) {
    notFound();
  }

  const project = projects.get(params.name) as Project;

  // Prev/Next from the ordered Map
  const entries = Array.from(projects.values());
  const currentIdx = entries.findIndex((p) => p.localHref === project.localHref);
  const prev = currentIdx > 0 ? entries[currentIdx - 1] : null;
  const next =
    currentIdx >= 0 && currentIdx < entries.length - 1
      ? entries[currentIdx + 1]
      : null;

  return (
    <main className="flex flex-1 flex-col">
      <div className="mx-auto w-full max-w-6xl px-4 pb-12 pt-6 md:px-6 md:pt-10">
        {/* Back crumb */}
        <div className="mb-5">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-amber-300/80 transition hover:text-amber-200"
          >
            <ArrowLeft size={12} />
            Back to Chronicles
          </Link>
        </div>

        {/* Hero */}
        <ProjectHero project={project} />

        {/* Stack + links strip */}
        <div className="mt-6 flex flex-col gap-4 border-y border-amber-500/20 py-4 md:mt-8 md:flex-row md:items-center md:justify-between md:gap-6">
          <ChipList
            items={[
              ...project.tech.map((t) => ({ name: t.name, href: t.href })),
              ...(project.APIs ?? []),
            ]}
          />

          {(project.links.website || project.links.github) && (
            <div className="flex flex-wrap gap-4 text-sm">
              {project.links.website && (
                <a
                  href={project.links.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-200 hover:text-amber-100"
                >
                  <ExternalLink size={14} className="opacity-70" />
                  Visit the Keep
                </a>
              )}
              {project.links.github?.map(({ name, href }) => (
                <a
                  key={name}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-amber-200 hover:text-amber-100"
                >
                  <Github size={14} className="opacity-70" />
                  {name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Narrative */}
        <article className="mt-8 flex flex-col gap-8 md:mt-12">
          {project.quest && (
            <NarrativeSection
              id="quest"
              icon={Scroll}
              title="The Quest"
              body={project.quest}
            />
          )}
          {project.forging && (
            <NarrativeSection
              id="forging"
              icon={Flame}
              title="The Forging"
              body={project.forging}
            />
          )}
          {project.victory && (
            <NarrativeSection
              id="victory"
              icon={Trophy}
              title="The Victory"
              body={project.victory}
            />
          )}

          {project.highlights && project.highlights.length > 0 && (
            <section id="highlights">
              <div className="mb-4 flex items-center gap-3">
                <Sparkles className="text-amber-300" size={20} />
                <h2 className="text-xl font-bold text-amber-100 md:text-2xl">
                  Notable Enchantments
                </h2>
              </div>
              <ul className="flex flex-col gap-2">
                {project.highlights.map((h) => (
                  <li
                    key={h.label}
                    className="flex flex-col gap-0.5 border-l border-amber-500/30 pl-3 sm:flex-row sm:items-baseline sm:gap-3"
                  >
                    <span className="text-sm font-semibold text-amber-100">
                      {h.label}
                    </span>
                    {h.detail && (
                      <span className="text-xs text-amber-100/70">
                        <span className="hidden sm:inline">— </span>
                        {h.detail}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Empty-state hint visible only if no narrative content exists yet */}
          {!project.quest &&
            !project.forging &&
            !project.victory &&
            !(project.highlights && project.highlights.length) && (
              <section className="text-center text-sm italic text-amber-100/50">
                The full chronicle for this quest is still being transcribed.
              </section>
            )}
        </article>

        {/* Prev / Next */}
        <div className="mt-10 md:mt-14">
          <ProjectNav prev={prev} next={next} />
        </div>
      </div>
    </main>
  );
}

/* ---------- Small pieces ---------- */

function NarrativeSection({
  id,
  icon: Icon,
  title,
  body,
}: {
  id: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  body: string;
}) {
  return (
    <section id={id}>
      <div className="mb-3 flex items-center gap-3">
        <Icon className="text-amber-300" size={20} />
        <h2 className="text-xl font-bold text-amber-100 md:text-2xl">{title}</h2>
      </div>
      <p className="text-amber-100/85 md:text-lg">{body}</p>
    </section>
  );
}

function ChipList({ items }: { items: { name: string; href: string }[] }) {
  return (
    <ul className="flex flex-wrap gap-1.5">
      {items.map((item) => (
        <li key={item.name}>
          <a
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 border border-amber-500/40 bg-neutral-900/60 px-2 py-1 text-[11px] uppercase tracking-widest text-amber-100/90 transition hover:border-amber-400 hover:text-amber-100"
          >
            {item.name}
          </a>
        </li>
      ))}
    </ul>
  );
}
