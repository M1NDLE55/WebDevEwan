import { notFound } from "next/navigation";
import { type Project, projects } from "@/app/components/global/Projects";
import Banner from "@/app/components/home/Banner";
import {
  Link as LinkIcon,
  Hammer,
  FlaskConical,
  ExternalLink,
} from "lucide-react";

export default async function Page(props: {
  params: Promise<{ name: string }>;
}) {
  const params = await props.params;
  if (!projects.has(params.name)) {
    notFound();
  }

  const project = projects.get(params.name) as Project;

  return (
    <main className="flex flex-1 flex-col justify-center">
      <section className="items-center justify-center px-6">
        <div className="mx-auto w-full max-w-6xl text-center">
          <Banner title={project.name} />
          <p className="mx-auto mt-6 max-w-2xl text-amber-100/90 md:text-lg">
            {project.description}
          </p>
        </div>
      </section>
      <div
        id="breakdown"
        className="flex w-full justify-center break-words px-4 pb-9 pt-5 sm:px-8 md:pt-12"
      >
        <div className="w-full max-w-7xl">
          <h2 className="bg-gradient-to-b from-amber-100 to-amber-300 bg-clip-text pb-6 text-center text-3xl font-extrabold tracking-wide text-transparent sm:text-4xl md:text-5xl">
            The Ledger of Works
          </h2>
          <div
            className={`grid w-full grid-cols-1 gap-y-6 text-amber-50 sm:gap-y-8 md:grid-cols-2 md:gap-x-8 ${project.APIs && "lg:grid-cols-3"}`}
          >
            <div
              className={`rounded-2xl border-4 border-amber-700/70 bg-gradient-to-br from-amber-900/60 to-stone-900/70 p-5 shadow-xl backdrop-blur-sm ${!project.APIs && "md:col-span-2 lg:col-span-1"}`}
            >
              <div className="flex items-center gap-2">
                <Hammer className="text-amber-300" />
                <h3 className="text-2xl font-bold md:text-3xl">
                  Forge & Tools
                </h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2 md:text-lg">
                {project.tech.map((tech: { name: string; href: string }) => (
                  <li key={tech.name} className="group">
                    <a
                      href={tech.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-amber-600/50 bg-amber-800/20 px-3 py-1.5 text-amber-100 transition hover:bg-amber-700/30"
                    >
                      <LinkIcon size={16} className="opacity-80" />
                      <span>{tech.name}</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {project.APIs && (
              <div className="rounded-2xl border-4 border-amber-700/70 bg-gradient-to-br from-amber-900/60 to-stone-900/70 p-5 shadow-xl backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <FlaskConical className="text-amber-300" />
                  <h3 className="text-2xl font-bold md:text-3xl">
                    Allied Guilds (APIs)
                  </h3>
                </div>
                <ul className="mt-3 flex flex-wrap gap-2 md:text-lg">
                  {project.APIs.map((API: { name: string; href: string }) => (
                    <li key={API.name}>
                      <a
                        href={API.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-full border border-amber-600/50 bg-amber-800/20 px-3 py-1.5 text-amber-100 transition hover:bg-amber-700/30"
                      >
                        <LinkIcon size={16} className="opacity-80" />
                        <span>{API.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-2xl border-4 border-amber-700/70 bg-gradient-to-br from-amber-900/60 to-stone-900/70 p-5 shadow-xl backdrop-blur-sm md:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2">
                <ExternalLink className="text-amber-300" />
                <h3 className="text-2xl font-bold md:text-3xl">
                  Portals & Tomes
                </h3>
              </div>
              <ul className="mt-3 flex flex-wrap gap-2">
                {project.links.website && (
                  <li className="md:text-lg">
                    <a
                      href={project.links.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-amber-600/50 bg-amber-800/20 px-3 py-1.5 text-amber-100 transition hover:bg-amber-700/30"
                    >
                      <LinkIcon size={16} className="opacity-80" />
                      <span>Visit the Keep</span>
                    </a>
                  </li>
                )}
                {project.links.github &&
                  project.links.github.map(({ name, href }) => (
                    <li key={name} className="md:text-lg">
                      {href !== "" ? (
                        <a
                          href={href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-amber-600/50 bg-amber-800/20 px-3 py-1.5 text-amber-100 transition hover:bg-amber-700/30"
                        >
                          <LinkIcon size={16} className="opacity-80" />
                          <span>Tome: {name}</span>
                        </a>
                      ) : (
                        <span className="text-amber-200/80">{name}</span>
                      )}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
