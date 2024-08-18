import Contact from "@/app/components/global/Contact";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FloatingNav } from "@/app/components/ui/FloatingNavbar";
import { navItems } from "@/app/components/global/NavItems";
import { type Project, projects } from "@/app/components/global/Projects";
import { Link as LinkIcon } from "lucide-react";

export default function Page({ params }: { params: { name: string } }) {
  if (!projects.has(params.name)) {
    notFound();
  }

  const project = projects.get(params.name) as Project;

  return (
    <main>
      <FloatingNav
        navItems={navItems}
        button={{ name: "Contact", link: "/contact" }}
      />
      <div className="relative flex w-full overflow-hidden rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.03] md:h-screen md:items-center md:justify-center">
        <Spotlight className="-left-10 -top-20 md:left-60" fill="white" />
        <div className="relative z-10 mx-auto w-full max-w-7xl p-4 py-40 text-center md:pb-4 md:pt-0">
          <span className="mx-auto text-center text-xs font-normal italic text-neutral-300 md:text-base">
            viewing project
          </span>
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text p-2 text-center text-4xl font-bold text-transparent md:text-8xl">
            {project.name}
          </h1>
          <p className="mx-auto mt-4 max-w-lg px-5 text-center text-lg font-normal text-neutral-300 md:text-xl">
            {project.description}
          </p>
          <Link
            href="#breakdown"
            className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-50 bg-[linear-gradient(110deg,#000103,45%,#4c1d95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50"
          >
            View breakdown
          </Link>
        </div>
      </div>
      <div
        id="breakdown"
        className="flex w-full justify-center break-words px-4 pb-20 sm:px-8 md:pb-60"
      >
        <div className="w-full max-w-7xl">
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-3xl font-bold text-transparent md:text-7xl">
            Project Breakdown
          </h2>
          <div
            className={`grid w-full grid-cols-1 gap-y-4 text-neutral-50 sm:gap-y-8 md:grid-cols-2 md:gap-x-8 ${project.APIs && "lg:grid-cols-3"}`}
          >
            <div
              className={`rounded-xl border border-neutral-700 bg-neutral-950 p-4 ${!project.APIs && "md:col-span-2 lg:col-span-1"}`}
            >
              <h3 className="text-xl font-bold md:text-3xl">Technologies</h3>
              <ul className="mt-2 md:text-lg">
                {project.tech.map((tech: { name: string; href: string }) => (
                  <li key={tech.name}>
                    <LinkIcon className="mr-2 inline" size={16} />
                    <a
                      href={tech.href}
                      target="blank"
                      className="underline underline-offset-2"
                    >
                      {tech.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            {project.APIs && (
              <div className="rounded-xl  border border-neutral-700 bg-neutral-950 p-4">
                <h3 className="text-xl font-bold md:text-3xl">APIs</h3>
                <ul className="mt-2 md:text-lg">
                  {project.APIs.map((API: { name: string; href: string }) => (
                    <li key={API.name}>
                      <LinkIcon className="mr-2 inline" size={16} />
                      <a
                        href={API.href}
                        target="blank"
                        className="underline underline-offset-2"
                      >
                        {API.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
            <div className="rounded-xl border border-neutral-700 bg-neutral-950 p-4 md:col-span-2 lg:col-span-1">
              <h3 className="text-xl font-bold md:text-3xl">Important Links</h3>
              <ul className="mt-2">
                {project.links.website && (
                  <li className="md:text-lg">
                    <LinkIcon className="mr-2 inline" size={16} />
                    <a
                      href={project.links.website}
                      target="blank"
                      className="underline underline-offset-2"
                    >
                      Project Website
                    </a>
                  </li>
                )}
                {project.links.github &&
                  (project.links.github.length > 1 ? (
                    project.links.github.map(({ name, href }) => (
                      <li key={name} className="md:text-lg">
                        <LinkIcon className="mr-2 inline" size={16} />
                        <a
                          href={href}
                          target="blank"
                          className="underline underline-offset-2"
                        >
                          {name}
                        </a>
                      </li>
                    ))
                  ) : (
                    <li className="md:text-lg">
                      <LinkIcon className="mr-2 inline" size={16} />
                      <a
                        href={project.links.github[0].href}
                        target="blank"
                        className="underline underline-offset-2"
                      >
                        {project.links.github[0].name}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
