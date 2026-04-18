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

export type ProjectType = "client" | "academic" | "personal";
export type ProjectRole = "solo" | "team";

export type Project = {
  name: string;
  description: string;
  localHref: string;
  tech: { name: string; href: string }[];
  APIs?: { name: string; href: string }[];
  links: {
    github?: { name: string; href: string }[];
    website?: string;
    ogImage?: string;
    socialImage?: string;
  };
  tags?: { name: string; color: string }[];
  // Scannable metadata for list + detail pages
  year?: string; // e.g. "2024" or "2023–2024"
  role?: ProjectRole;
  type?: ProjectType;
  // Optional narrative sections (STAR, themed). If omitted, sections are hidden.
  quest?: string; // The problem / brief
  forging?: string; // Role + approach
  victory?: string; // Outcome / impact
  highlights?: { label: string; detail?: string }[]; // 3–5 distinctive features
};

export const projects = new Map<string, Project>([
  [
    "SurveyScope",
    {
      name: "SurveyScope",
      description:
        "AI-assisted annotation for aerial wildlife census data, built with WildEye Conservation.",
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
        ogImage: "/wildeye-og.png",
        socialImage: "/wildeye-og-compressed.png",
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
      year: `2024–${new Date().getFullYear()}`,
      role: "team",
      type: "client",
      quest:
        "Conservation researchers need to count and identify wildlife across huge volumes of aerial-census imagery. Doing it by hand doesn't scale, and off-the-shelf tools don't fit the specialised workflow.",
      forging:
        "I work as lead developer on SurveyScope in collaboration with WildEye Conservation, building across React, TypeScript, and AWS (Amplify, AppSync, DynamoDB, SQS, ECS) with Python services behind the scenes. Recent focus has been backend optimisation and expanding the platform's workflow capabilities — model-guided annotation, quality-control pipelines, homography generation, and individual animal identification.",
      victory:
        "SurveyScope is live and actively used by conservationists, with ongoing development broadening what researchers can do with their imagery.",
      highlights: [
        {
          label: "Model-guided annotation",
          detail: "AI assists human annotators on aerial imagery.",
        },
        {
          label: "Quality-control pipelines",
          detail: "Structured review flow for census data.",
        },
        {
          label: "Homography generation",
          detail:
            "Aligns overlapping aerial frames so the same ground area can be compared.",
        },
        {
          label: "Individual animal identification",
          detail:
            "Re-identifies specific animals across frames to support tracking and prevent double-counts.",
        },
        {
          label: "AWS-native architecture",
          detail: "Amplify + AppSync + DynamoDB + SQS + ECS.",
        },
      ],
    },
  ],
  [
    "webdevewan",
    {
      name: "WebDevEwan",
      description:
        "My personal portfolio — built with Next.js, Tailwind, and TypeScript.",
      localHref: "/projects/webdevewan",
      tech: [tech.Nextjs, tech.Tailwind, tech.TypeScript, tech.Framer],
      links: {
        github: [
          {
            name: "GitHub Repo",
            href: "https://github.com/M1NDLE55/WebDevEwan",
          },
        ],
        website: "https://www.webdevewan.com/",
        ogImage: "/webdevewan-og.png",
      },
      tags: [tags.Nextjs, tags.Tailwind, tags.TypeScript, tags.Framer],
      year: "2024",
      role: "solo",
      type: "personal",
      quest:
        "I wanted a portfolio that felt distinctly mine — not another template — and doubled as a sandbox for trying ideas.",
      forging:
        "Built solo with Next.js, Tailwind, and TypeScript. Small Framer Motion touches and a hand-triangulated SVG background for atmosphere. Kept it accessible, fast, and easy to extend as new projects land.",
      victory:
        "Live at webdevewan.com and serving as the home for everything I build.",
      highlights: [
        { label: "Hand-triangulated SVG background" },
        { label: "Framer Motion micro-interactions" },
        {
          label: "Typed project registry",
        },
      ],
    },
  ],
  [
    "eft-toolset",
    {
      name: "EFT Toolset",
      description:
        "A mobile-first Escape From Tarkov companion powered by live TARKOV.DEV data.",
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
        ogImage: "/eft-toolset-og.png",
      },
      tags: [tags.Nextjs, tags.Tailwind, tags.TypeScript, tags.shadcn],
      year: "2024",
      role: "solo",
      type: "personal",
      quest:
        "Escape From Tarkov players constantly look things up mid-session — items, quests, traders. Existing tools felt heavy, especially on mobile.",
      forging:
        "A small, mobile-first companion built with Next.js, Tailwind, shadcn/ui, and TypeScript, pulling live data from the TARKOV.DEV GraphQL API. The focus was fast search, clean filters, and a UI that doesn't get in the way.",
      victory:
        "Live at eft-toolset.com — a lightweight reference I actually use while playing.",
      highlights: [
        {
          label: "Live TARKOV.DEV data",
          detail: "Always fresh item, quest, and trader info.",
        },
        { label: "Mobile-first layout" },
        {
          label: "Type-safe end to end",
        },
        { label: "Fast search & filters" },
      ],
    },
  ],
  [
    "teaching-and-learning-system",
    {
      name: "Teaching & Learning System",
      description:
        "A multiplatform system for NWU lecturers to review and feedback on student video submissions.",
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
      year: "2023",
      role: "team",
      type: "academic",
      quest:
        "An academic brief at North-West University: give lecturers a way to review student video submissions, across both web and mobile, with structured written feedback.",
      forging:
        "A team project split across three repos — a Next.js web app (TypeScript, Zod, shadcn/ui), an Expo mobile app, and a Django backend handling auth, storage, and tagging. Students upload and tag videos; lecturers log in, stream them, and leave text feedback.",
      victory:
        "Delivered end-to-end as a multiplatform system for the module, covering the full upload → review → feedback loop.",
      highlights: [
        {
          label: "Multiplatform",
          detail: "Web (Next.js) and mobile (Expo) clients.",
        },
        { label: "Django REST backend" },
        { label: "Video upload + tagging" },
        { label: "Lecturer feedback flow" },
      ],
    },
  ],
]);
