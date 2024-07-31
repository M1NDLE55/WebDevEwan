import Project from "./Project";

export default function Projects() {
  const projects = [
    {
      title: "EFT Toolset",
      description:
        "A suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      localHref: "/project/eft-toolset",
      trueHref: "https://www.eft-toolset.com/",
    },
    {
      title: "WebDevEwan",
      description: "My personal portfolio website (you're viewing it now).",
      localHref: "/project/webdevewan",
      trueHref: "https://www.webdevewan.com/",
    },
    {
      title: "Brighton Medical | CMPG 212",
      description:
        "This project is an exam submission for the NWU module CMPG 212.",
      localHref: "/project/brighton-medical",
      trueHref: null,
    },
  ];

  return (
    <div id="projects" className="flex w-full justify-center px-4 pb-40">
      <div className="w-full max-w-7xl">
        <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-7xl font-bold text-transparent">
          Projects
        </h2>
        <div className="flex -translate-x-4 flex-row">
          {projects.map((project) => (
            <Project key={project.title} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
}
