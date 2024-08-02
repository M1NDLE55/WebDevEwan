import Contact from "@/app/components/global/Contact";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { notFound } from "next/navigation";
import Link from "next/link";
import { FloatingNav } from "@/app/components/ui/FloatingNavbar";
import { navItems } from "@/app/components/global/NavItems";

export default function Page({ params }: { params: { name: string } }) {
  const projects = new Map();

  projects.set("eft-toolset", {
    name: "EFT Toolset",
    description:
      "This application provides a suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
    tech: [
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "Tailwind", href: "https://tailwindcss.com/" },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
    ],
    APIs: [{ name: "TARKOV.DEV", href: "https://tarkov.dev/" }],
    links: {
      github: ["https://github.com/M1NDLE55/eft-toolset"],
      website: "https://www.eft-toolset.com/",
    },
  });

  projects.set("webdevewan", {
    name: "WebDevEwan",
    description: "My personal portfolio website.",
    tech: [
      { name: "Next.js", href: "https://nextjs.org/" },
      { name: "Tailwind", href: "https://tailwindcss.com/" },
      { name: "TypeScript", href: "https://www.typescriptlang.org/" },
      { name: "Framer Motion", href: "https://www.framer.com/motion/" },
      { name: "Aceternity UI", href: "https://ui.aceternity.com/" },
      { name: "Zod", href: "https://zod.dev/" },
      { name: "React Email", href: "https://react.email/" },
      { name: "React Hot Toast", href: "https://react-hot-toast.com/" },
    ],
    APIs: [
      { name: "Resend", href: "https://resend.com/" },
      { name: "Microlink", href: "https://microlink.io/" },
    ],
    links: {
      github: ["https://github.com/M1NDLE55/WebDevEwan"],
      website: "https://www.webdevewan.com/",
    },
  });

  projects.set("brighton-medical", {
    name: "Brighton Medical",
    description:
      "This project is an exam submission for the NWU module CMPG 212. It consists of a web and desktop application developed for Brighton Medical as part of a case study.",
    tech: [
      {
        name: "ASP.NET",
        href: "https://dotnet.microsoft.com/en-us/apps/aspnet",
      },
      {
        name: "WinForms .NET",
        href: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/?view=netdesktop-8.0",
      },
      { name: "C#", href: "https://learn.microsoft.com/en-us/dotnet/csharp/" },
      {
        name: "SQL Server",
        href: "https://www.microsoft.com/en-za/sql-server/sql-server-2019",
      },
    ],
    APIs: [],
    links: {
      github: [
        "https://github.com/M1NDLE55/CMPG-212-Exam-WebApp",
        "https://github.com/M1NDLE55/CMPG-212-Exam-Desktop",
      ],
      website: null,
    },
  });

  if (!projects.has(params.name)) {
    notFound();
  }

  const project = projects.get(params.name);

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
        className="flex w-full justify-center break-words px-4 pb-20 md:pb-60"
      >
        <div className="w-full max-w-7xl">
          <h2 className="bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text pb-4 text-3xl font-bold text-transparent md:text-7xl">
            Project Breakdown
          </h2>
          <div className="grid w-full grid-cols-1 gap-y-8 text-neutral-50 md:grid-cols-2 md:gap-x-8">
            <div
              className={`rounded-xl border border-neutral-700 bg-neutral-950 p-4 ${project.APIs.length === 0 && "col-span-2"}`}
            >
              <h3 className="text-xl font-bold md:text-3xl">Technologies</h3>
              <ul className="mt-2 translate-x-5 list-disc md:text-lg">
                {project.tech.map((tech: { name: string; href: string }) => (
                  <li key={tech.name}>
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
            {project.APIs.length > 0 && (
              <div className="rounded-xl  border border-neutral-700 bg-neutral-950 p-4">
                <h3 className="text-xl font-bold md:text-3xl">APIs</h3>
                <ul className="mt-2 translate-x-5 list-disc md:text-lg">
                  {project.APIs.map((API: { name: string; href: string }) => (
                    <li key={API.name}>
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
            <div className="rounded-xl border border-neutral-700 bg-neutral-950 p-4 md:col-span-2">
              <h3 className="text-xl font-bold md:text-3xl">Links</h3>
              {project.links.website && (
                <p className="mt-2 md:text-lg">
                  View this project&apos;s{" "}
                  <a
                    href={project.links.website}
                    target="blank"
                    className="underline underline-offset-2"
                  >
                    website
                  </a>
                </p>
              )}
              {project.links.github.length > 1 ? (
                <>
                  <p>View this project&apos;s GitHub repos: </p>
                  <ul>
                    {project.links.github.map((link: string) => (
                      <li key={link}>
                        <a
                          href={link}
                          target="blank"
                          className="underline underline-offset-2"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <p className="md:text-lg">
                  View this project&apos;s{" "}
                  <a
                    href={project.links.github[0]}
                    target="blank"
                    className="underline underline-offset-2"
                  >
                    GitHub repo
                  </a>
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </main>
  );
}
