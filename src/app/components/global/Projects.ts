const tags = {
  Nextjs: { name: "Next.js", color: "bg-white" },
  Tailwind: { name: "Tailwind", color: "bg-cyan-300" },
  Django: { name: "Django", color: "bg-green-300" },
  Expo: { name: "Expo", color: "bg-orange-300" },
  Framer: { name: "Framer", color: "bg-pink-300" },
  AspNet: { name: "ASP.NET", color: "bg-violet-300" },
  WinForms: { name: "WinForms .NET", color: "bg-blue-300" },
};

const tech = {
  Nextjs: { name: "Next.js", href: "https://nextjs.org/" },
  Tailwind: { name: "Tailwind", href: "https://tailwindcss.com/" },
  JavaScript: {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  TypeScript: { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  Framer: { name: "Framer Motion", href: "https://www.framer.com/motion/" },
  Aceternity: { name: "Aceternity UI", href: "https://ui.aceternity.com/" },
  Zod: { name: "Zod", href: "https://zod.dev/" },
  ReactEmail: { name: "React Email", href: "https://react.email/" },
  ReactHotToast: {
    name: "React Hot Toast",
    href: "https://react-hot-toast.com/",
  },
  AspNet: {
    name: "ASP.NET",
    href: "https://dotnet.microsoft.com/en-us/apps/aspnet",
  },
  WinForms: {
    name: "WinForms .NET",
    href: "https://learn.microsoft.com/en-us/dotnet/desktop/winforms/overview/?view=netdesktop-8.0",
  },
  cSharp: {
    name: "C#",
    href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  sqlServer: {
    name: "SQL Server",
    href: "https://www.microsoft.com/en-za/sql-server/sql-server-2019",
  },
  Django: {
    name: "Django",
    href: "https://www.djangoproject.com/",
  },
  Expo: {
    name: "Expo",
    href: "https://expo.dev/",
  },
};

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
  tags?: { name: string; color: string }[];
};

export const projects = new Map<string, Project>([
  [
    "eft-toolset",
    {
      name: "EFT Toolset (Beta)",
      shortDescription:
        "A suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      description:
        "This application provides a suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      localHref: "/project/eft-toolset",
      tech: [tech.Nextjs, tech.Tailwind, tech.JavaScript],
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
      tags: [tags.Nextjs, tags.Tailwind],
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
        tech.Nextjs,
        tech.Tailwind,
        tech.TypeScript,
        tech.Framer,
        tech.Aceternity,
        tech.Zod,
        tech.ReactEmail,
        tech.ReactHotToast,
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
      tags: [tags.Nextjs, tags.Tailwind, tags.Framer],
    },
  ],
  [
    "hms-t-and-l-system",
    {
      name: "HMS T&L System (WIP)",
      shortDescription:
        "A multiplatform system for lecturers at NWU to review students' video submissions.",
      description:
        "This system allows students to upload videos, which are stored and tagged in a database. Lecturers can log in, stream the videos, and provide text feedback.",
      localHref: "/project/hms-t-and-l-system",
      tech: [tech.Nextjs, tech.Django, tech.Expo],
      links: {
        github: [
          {
            name: "Django Backend GitHub Repo",
            href: "https://github.com/bernard-paetzold/HMS-TLS-ingenious-plebs",
          },
          {
            name: "Next.js Web App GitHub Repo (TBA)",
            href: "",
          },
          {
            name: "Expo Mobile App GitHub Repo (TBA)",
            href: "",
          },
        ],
      },
      tags: [tags.Nextjs, tags.Expo, tags.Django],
    },
  ],
  [
    "brighton-medical",
    {
      name: "Brighton Medical",
      shortDescription:
        "This project is an exam submission for the NWU module CMPG 212.",
      description:
        "This project is an exam submission for the NWU module CMPG 212. It consists of a web and desktop application developed for Brighton Medical as part of a case study.",
      localHref: "/project/brighton-medical",
      tech: [tech.AspNet, tech.WinForms, tech.cSharp, tech.sqlServer],
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
      tags: [tags.AspNet, tags.WinForms],
    },
  ],
]);
