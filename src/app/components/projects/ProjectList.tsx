import ProjectListItem from "./ProjectListItem";
import { projects } from "../global/Projects";

export default function ProjectList() {
  const entries = Array.from(projects.values());

  if (entries.length === 0) return null;

  const [featured, ...rest] = entries;

  // Stats for the strip under the banner
  const totalProjects = entries.length;
  const totalTech = new Set(entries.flatMap((p) => p.tech.map((t) => t.name)))
    .size;
  const types = new Set(entries.map((p) => p.type).filter(Boolean));

  return (
    <div className="relative mx-auto w-full max-w-6xl px-4 pb-12 pt-6 md:px-6">
      {/* Stats */}
      <div className="mb-8 flex justify-center md:mb-10">
        <dl className="grid grid-cols-3 gap-3 text-center md:gap-5">
          <Stat label="Quests" value={totalProjects.toString()} />
          <Stat label="Artifacts" value={totalTech.toString()} />
          <Stat label="Realms" value={types.size.toString()} />
        </dl>
      </div>

      {/* Featured quest */}
      <div className="mb-8 md:mb-10">
        <ProjectListItem project={featured} index={0} featured />
      </div>

      {/* Rest — 2-col grid */}
      {rest.length > 0 && (
        <>
          <div className="mb-5 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-amber-400/70">
            <span className="h-px flex-1 bg-amber-500/20" />
            <span>Further Chronicles</span>
            <span className="h-px flex-1 bg-amber-500/20" />
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {rest.map((project, i) => (
              <ProjectListItem
                key={project.localHref}
                project={project}
                index={i + 1}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div
      className="notch-plate-sm px-3 py-2 [--notch-bg:#141414] [--notch-bg-hover:#141414] [--notch-border-a-hover:0.3] [--notch-border-a:0.3]"
    >
      <dt className="text-[10px] uppercase tracking-widest text-amber-400/70">
        {label}
      </dt>
      <dd className="text-lg font-bold text-amber-100 md:text-xl">{value}</dd>
    </div>
  );
}
