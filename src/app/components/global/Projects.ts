export type Project = {
  name: string;
  shortDescription: string;
  description: string;
  localHref: string;
  tech: { name: string; href: string }[];
  APIs?: { name: string; href: string }[];
  links: {
    github?: { name: string; href: string }[];
    website?: string;
  };
};

export const projects = new Map<string, Project>([
  [
    "eft-toolset",
    {
      name: "EFT Toolset",
      shortDescription:
        "A suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      description:
        "This application provides a suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      localHref: "/project/eft-toolset",
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
        github: [
          {
            name: "GitHub Repo",
            href: "https://github.com/M1NDLE55/eft-toolset",
          },
        ],
        website: "https://www.eft-toolset.com/",
      },
    },
  ],
  [
    "webdevewan",
    {
      name: "WebDevEwan",
      shortDescription:
        "My personal portfolio website (you're viewing it now).",
      description: "My personal portfolio website.",
      localHref: "/project/webdevewan",
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
        github: [
          {
            name: "GitHub Repo",
            href: "https://github.com/M1NDLE55/WebDevEwan",
          },
        ],
        website: "https://www.webdevewan.com/",
      },
    },
  ],
  [
    "brighton-medical",
    {
      name: "Brighton Medical",
      shortDescription: "This project is an exam submission for the NWU module CMPG 212.",
      description:
        "This project is an exam submission for the NWU module CMPG 212. It consists of a web and desktop application developed for Brighton Medical as part of a case study.",
      localHref: "/project/brighton-medical",
      tech: [
        {
          name: "ASP.NET",
          href: "https://dotnet.microsoft.com/en-us/apps/aspnet",
        },
        {
          name: "WinForms .NET",
          href: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/?view=netdesktop-8.0",
        },
        {
          name: "C#",
          href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        },
        {
          name: "SQL Server",
          href: "https://www.microsoft.com/en-za/sql-server/sql-server-2019",
        },
      ],
      links: {
        github: [
          {
            name: "Web App GitHub Repo",
            href: "https://github.com/M1NDLE55/CMPG-212-Exam-WebApp",
          },
          {
            name: "Desktop App GitHub Repo",
            href: "https://github.com/M1NDLE55/CMPG-212-Exam-Desktop",
          },
        ],
      },
    },
  ],
]);
