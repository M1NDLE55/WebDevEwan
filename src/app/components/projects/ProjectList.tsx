import ProjectListItem from "./ProjectListItem";
import { projects } from "../global/Projects";

export default function ProjectList() {
  const entries = Array.from(projects.values());

  return (
    <div className="relative mx-auto w-full max-w-5xl space-y-6 px-4 py-9 md:space-y-8 md:px-6">
      {entries.map((project, index) => (
        <ProjectListItem key={project.localHref} project={project} index={index} />
      ))}
    </div>
  );
}


