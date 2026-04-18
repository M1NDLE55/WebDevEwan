import type { Project } from "../global/Projects";
import { Calendar, User, Users, Briefcase, GraduationCap, Sparkles } from "lucide-react";

const typeConfig: Record<
  NonNullable<Project["type"]>,
  { label: string; className: string; icon: React.ComponentType<{ size?: number; className?: string }> }
> = {
  client: {
    label: "Client",
    className: "border-emerald-400/60 text-emerald-200",
    icon: Briefcase,
  },
  academic: {
    label: "Academic",
    className: "border-sky-400/60 text-sky-200",
    icon: GraduationCap,
  },
  personal: {
    label: "Personal",
    className: "border-amber-400/60 text-amber-200",
    icon: Sparkles,
  },
};

export default function ProjectMeta({
  project,
  size = "sm",
}: {
  project: Project;
  size?: "sm" | "md";
}) {
  const hasAny = project.year || project.role || project.type;
  if (!hasAny) return null;

  const pill =
    size === "md"
      ? "text-xs px-2.5 py-1"
      : "text-[10px] px-2 py-0.5";
  const iconSize = size === "md" ? 13 : 11;

  const typeInfo = project.type ? typeConfig[project.type] : null;
  const TypeIcon = typeInfo?.icon;
  const RoleIcon = project.role === "solo" ? User : Users;

  return (
    <div className="flex flex-wrap gap-1.5">
      {project.year && (
        <span
          className={`inline-flex items-center gap-1.5 border border-amber-500/40 bg-neutral-900/60 uppercase tracking-widest text-amber-100/80 ${pill}`}
        >
          <Calendar size={iconSize} className="opacity-70" />
          {project.year}
        </span>
      )}
      {project.role && (
        <span
          className={`inline-flex items-center gap-1.5 border border-amber-500/40 bg-neutral-900/60 uppercase tracking-widest text-amber-100/80 ${pill}`}
        >
          <RoleIcon size={iconSize} className="opacity-70" />
          {project.role === "solo" ? "Solo Mage" : "Guild Member"}
        </span>
      )}
      {typeInfo && TypeIcon && (
        <span
          className={`inline-flex items-center gap-1.5 border bg-neutral-900/60 uppercase tracking-widest ${typeInfo.className} ${pill}`}
        >
          <TypeIcon size={iconSize} className="opacity-80" />
          {typeInfo.label}
        </span>
      )}
    </div>
  );
}
