const tags = {
  Nextjs: { name: "Next.js", color: "bg-white" },
  Tailwind: { name: "Tailwind", color: "bg-cyan-300" },
  shadcn: { name: "shadcn/ui", color: "border border-white text-white" },
  Django: { name: "Django", color: "bg-green-300" },
  Expo: { name: "Expo", color: "bg-orange-300" },
  Framer: { name: "Framer", color: "bg-pink-300" },
  AspNet: { name: "ASP.NET", color: "bg-violet-300" },
  WinForms: { name: "WinForms .NET", color: "bg-blue-300" },
  React: { name: "React", color: "bg-blue-400" },
  Amplify: { name: "Amplify", color: "bg-indigo-200" },
};

const tech = {
  Nextjs: { name: "Next.js", href: "https://nextjs.org/" },
  Tailwind: { name: "Tailwind", href: "https://tailwindcss.com/" },
  JavaScript: {
    name: "JavaScript",
    href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  TypeScript: { name: "TypeScript", href: "https://www.typescriptlang.org/" },
  shadcn: { name: "shadcn/ui", href: "https://ui.shadcn.com/" },
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
  React: { name: "React", href: "https://react.dev/" },
  Amplify: { name: "Amplify", href: "https://docs.amplify.aws/" },
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
    hideOG?: boolean;
  };
  tags?: { name: string; color: string }[];
};

export const projects = new Map<string, Project>([
  [
    "detweb",
    {
      name: "Detweb",
      shortDescription: "Analysis platform for aerial survey data.",
      description: "Analysis platform for aerial survey data.",
      localHref: "/project/detweb",
      tech: [tech.React, tech.Amplify, tech.TypeScript],
      links: {
        github: [
          {
            name: "GitHub Repo",
            href: "https://github.com/WildEyeConservation/Detweb",
          },
        ],
        website: "https://wildeyeconservation.org/elephant-survey-system/",
        hideOG: true,
      },
      tags: [tags.React, tags.Amplify],
    },
  ],
  [
    "webdevewan",
    {
      name: "WebDevEwan",
      shortDescription: "My personal portfolio website.",
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
    "eft-toolset",
    {
      name: "EFT Toolset",
      shortDescription:
        "A suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      description:
        "This application provides a suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      localHref: "/project/eft-toolset",
      tech: [tech.Nextjs, tech.Tailwind, tech.TypeScript, tech.shadcn],
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
      tags: [tags.Nextjs, tags.Tailwind, tags.shadcn],
    },
  ],
  [
    "hms-t-and-l-system",
    {
      name: "Teaching & Learning System",
      shortDescription:
        "A multiplatform system for lecturers at NWU to review students' video submissions.",
      description:
        "This system allows students to upload videos, which are stored and tagged in a database. Lecturers can log in, stream the videos, and provide text feedback.",
      localHref: "/project/hms-t-and-l-system",
      tech: [
        tech.Nextjs,
        tech.TypeScript,
        tech.Zod,
        tech.shadcn,
        tech.Django,
        tech.Expo,
      ],
      links: {
        github: [
          {
            name: "Next.js Web App GitHub Repo",
            href: "https://github.com/bernard-paetzold/HMS-TLS-Web-App-ingenious-plebs",
          },
          {
            name: "Expo Mobile App GitHub Repo",
            href: "https://github.com/bernard-paetzold/HMS-TLS-App-ingenious-plebs-",
          },
          {
            name: "Django Backend GitHub Repo",
            href: "https://github.com/bernard-paetzold/HMS-TLS-ingenious-plebs",
          },
        ],
      },
      tags: [tags.Nextjs, tags.Expo, tags.Django],
    },
  ],
]);
