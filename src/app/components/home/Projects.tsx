import Project from "./Project";
import { projects } from "../global/Projects";

export default function Projects() {
  const projectsArr = Array.from(projects);

  return (
    <div
      id="projects"
      className="flex w-full justify-center px-4 pb-20 md:pb-60"
    >
      <div className="w-full max-w-7xl">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-3xl font-bold text-transparent md:text-7xl">
          Projects
        </h2>
        <div className="flex -translate-x-4 flex-row overflow-x-auto pb-12 pt-1">
          {projectsArr.map(([key, project]) => (
            <Project key={key} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
