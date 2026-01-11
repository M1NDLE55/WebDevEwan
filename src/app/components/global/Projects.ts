const tags = {
  Nextjs: { name: "Next.js", color: "border-stone-300/60" },
  Tailwind: { name: "Tailwind", color: "border-cyan-400/60" },
  shadcn: { name: "shadcn/ui", color: "border-zinc-400/60" },
  Django: { name: "Django", color: "border-green-700/60" },
  Expo: { name: "Expo", color: "border-orange-600/60" },
  Framer: { name: "Framer", color: "border-pink-500/60" },
  AspNet: { name: "ASP.NET", color: "border-violet-600/60" },
  WinForms: { name: "WinForms .NET", color: "border-blue-600/60" },
  React: { name: "React", color: "border-sky-500/60" },
  Amplify: { name: "Amplify", color: "border-indigo-400/60" },
  DynamoDB: { name: "DynamoDB", color: "border-blue-700/60" },
  AppSync: { name: "AppSync", color: "border-rose-600/60" },
  SQS: { name: "SQS", color: "border-purple-600/60" },
  ECS: { name: "ECS", color: "border-amber-600/60" },
  Python: { name: "Python", color: "border-yellow-600/60" },
  TypeScript: { name: "TypeScript", color: "border-sky-500/60" },
  Zod: { name: "Zod", color: "border-emerald-600/60" },
  ReactEmail: { name: "React Email", color: "border-red-500/60" },
  ReactHotToast: { name: "React Hot Toast", color: "border-orange-500/60" },
  Resend: { name: "Resend", color: "border-blue-500/60" },
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
  DynamoDB: {
    name: "Amazon DynamoDB",
    href: "https://aws.amazon.com/dynamodb/",
  },
  AppSync: { name: "AWS AppSync", href: "https://aws.amazon.com/appsync/" },
  SQS: { name: "Amazon SQS", href: "https://aws.amazon.com/sqs/" },
  ECS: { name: "Amazon ECS", href: "https://aws.amazon.com/ecs/" },
  Python: { name: "Python", href: "https://www.python.org/" },
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
    "SurveyScope",
    {
      name: "SurveyScope",
      shortDescription: "AI Aerial-Census Software",
      description:
        "SurveyScope is a powerful web application that leverages the latest artificial intelligence (AI) to assist in the annotation of aerial-census data – by detecting and identifying the animals contained therein.",
      localHref: "/projects/SurveyScope",
      tech: [
        tech.React,
        tech.TypeScript,
        tech.Amplify,
        tech.AppSync,
        tech.DynamoDB,
        tech.SQS,
        tech.ECS,
        tech.Python,
      ],
      links: {
        github: [
          {
            name: "GitHub Repo",
            href: "https://github.com/WildEyeConservation/Detweb",
          },
        ],
        website: "https://wildeyeconservation.org/surveyscope/",
        hideOG: true,
      },
      tags: [
        tags.React,
        tags.TypeScript,
        tags.Amplify,
        tags.AppSync,
        tags.DynamoDB,
        tags.SQS,
        tags.ECS,
        tags.Python,
      ],
    },
  ],
  [
    "webdevewan",
    {
      name: "WebDevEwan",
      shortDescription: "My personal portfolio website.",
      description:
        "A fast, clean portfolio built with Next.js + Tailwind and TypeScript. Smooth Framer Motion touches, Zod + React Email + Resend for contact, and Microlink for OG previews. Accessible and snappy.",
      localHref: "/projects/webdevewan",
      tech: [
        tech.Nextjs,
        tech.Tailwind,
        tech.TypeScript,
        tech.Framer,
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
      tags: [
        tags.Nextjs,
        tags.Tailwind,
        tags.TypeScript,
        tags.Framer,
        tags.Zod,
        tags.ReactEmail,
        tags.ReactHotToast,
        tags.Resend,
      ],
    },
  ],
  [
    "eft-toolset",
    {
      name: "EFT Toolset",
      shortDescription:
        "A suite of tools to assist players of Escape From Tarkov (EFT) in their gameplay experience.",
      description:
        "Quick tools for Escape From Tarkov. Uses fresh TARKOV.DEV data in a clean, mobile UI (Next.js, Tailwind, shadcn/ui). Fast search and filters, type-safe with TypeScript.",
      localHref: "/projects/eft-toolset",
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
      tags: [tags.Nextjs, tags.Tailwind, tags.TypeScript, tags.shadcn],
    },
  ],
  [
    "teaching-and-learning-system",
    {
      name: "Teaching & Learning System",
      shortDescription:
        "A multiplatform system for lecturers at NWU to review students' video submissions.",
      description:
        "This system allows students to upload videos, which are stored and tagged in a database. Lecturers can log in, stream the videos, and provide text feedback.",
      localHref: "/projects/teaching-and-learning-system",
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
      tags: [
        tags.Nextjs,
        tags.TypeScript,
        tags.Zod,
        tags.shadcn,
        tags.Django,
        tags.Expo,
      ],
    },
  ],
]);
