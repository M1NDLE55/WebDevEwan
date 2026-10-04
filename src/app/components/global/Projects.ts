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
  Vite: { name: "Vite", color: "border-violet-400/60" },
  TanStack: { name: "TanStack", color: "border-red-400/60" },
  Amplify: { name: "Amplify Gen 2", color: "border-indigo-400/60" },
  DynamoDB: { name: "DynamoDB", color: "border-blue-700/60" },
  AppSync: { name: "AppSync", color: "border-rose-600/60" },
  SQS: { name: "SQS", color: "border-purple-600/60" },
  ECS: { name: "ECS", color: "border-amber-600/60" },
  Python: { name: "Python", color: "border-yellow-600/60" },
  TypeScript: { name: "TypeScript", color: "border-sky-500/60" },
  Zod: { name: "Zod", color: "border-emerald-600/60" },
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
  Vite: { name: "Vite", href: "https://vite.dev/" },
  TanStack: { name: "TanStack", href: "https://tanstack.com/" },
  Amplify: {
    name: "AWS / Amplify Gen 2",
    href: "https://docs.amplify.aws/react/",
  },
  DynamoDB: {
    name: "Amazon DynamoDB",
    href: "https://aws.amazon.com/dynamodb/",
  },
  AppSync: { name: "AWS AppSync", href: "https://aws.amazon.com/appsync/" },
  SQS: { name: "Amazon SQS", href: "https://aws.amazon.com/sqs/" },
  ECS: { name: "Amazon ECS", href: "https://aws.amazon.com/ecs/" },
  Python: { name: "Python", href: "https://www.python.org/" },
};

export type ProjectType = "client" | "professional" | "academic" | "personal";
export type ProjectRole = "solo" | "team";

export type Project = {
  name: string;
  description: string; // Short tagline for cards and prev/next navigation
  // Search-facing copy. Google shows seoTitle as the result title and prefers
  // summary as the snippet when the same text also appears on the page.
  seoTitle: string; // ~50–60 chars incl. " | WebDevEwan"; set absoluteTitle to skip the suffix
  absoluteTitle?: boolean;
  summary: string; // ~140–160 chars, first person, rendered as the lead paragraph
  imageAlt?: string; // Descriptive alt text for the cover image
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
  roleLabel?: string; // More specific role, while retaining solo/team attribution
  publisher?: { name: string; url: string };
  type?: ProjectType;
  // Optional narrative sections (STAR, themed). If omitted, sections are hidden.
  quest?: string; // The problem / brief
  forging?: string; // Role + approach
  victory?: string; // Outcome / impact
  highlights?: { label: string; detail?: string }[]; // Distinctive features
};

export const projects = new Map<string, Project>([
  [
    "SurveyScope",
    {
      name: "SurveyScope",
      description:
        "WildEye Conservation’s aerial wildlife survey platform, from model-guided annotation and quality checks to population estimates.",
      seoTitle: "SurveyScope by WildEye: AI Aerial Wildlife Census Platform",
      summary:
        "I’m the lead developer on SurveyScope, WildEye Conservation’s platform for aerial imagery annotation, quality checks, and wildlife population estimates.",
      imageAlt:
        "Close-up of a lion's face in warm sepia tones beside the WildEye Conservation logo",
      localHref: "/projects/SurveyScope",
      tech: [
        tech.TypeScript,
        tech.Vite,
        tech.TanStack,
        tech.React,
        tech.Python,
        tech.Amplify,
      ],
      links: {
        github: [
          {
            name: "GitHub Repo",
            href: "https://github.com/WildEyeConservation/SurveyScope",
          },
        ],
        website: "https://wildeyeconservation.org/surveyscope/",
        ogImage: "/wildeye-og.png",
        socialImage: "/wildeye-og-compressed.png",
      },
      tags: [
        tags.TypeScript,
        tags.Vite,
        tags.TanStack,
        tags.React,
        tags.Python,
        tags.Amplify,
      ],
      year: "2024–present",
      role: "team",
      roleLabel: "Lead Developer",
      publisher: {
        name: "WildEye Conservation",
        url: "https://wildeyeconservation.org/",
      },
      type: "professional",
      quest:
        "Aerial wildlife surveys need a path from imagery to population estimates. SurveyScope brings annotation, checks for missed animals, quality control, and analysis into one platform, with AI models helping along the way.",
      forging:
        "I was already lead developer on SurveyScope at Innoventix Consulting (November 2024–May 2026), in collaboration with WildEye Conservation. When WildEye became an independent company, I moved there full time in June 2026 and continued as Lead Developer. The current stack is TypeScript, Vite, TanStack, React, and Python, with AWS wrapped in Amplify Gen 2. I also built and use my own AI code review and testing tools to check changes before release.",
      victory:
        "We’ve built SurveyScope into a platform covering model-guided annotation, false-negative review, quality control and user testing, homography creation, chain linking, and Jolly II results. I’m proud of how far it’s come. These days I spend a lot of time on performance and usability, which sometimes means rebuilding functionality I’ve already built.",
      highlights: [
        {
          label: "Model-guided annotation",
          detail: "AI models help with annotating aerial survey imagery.",
        },
        {
          label: "False-negative review",
          detail: "A workflow to find animals the models missed.",
        },
        {
          label: "Quality control & user testing",
          detail:
            "Quality control workflows and user testing are part of the platform’s development.",
        },
        {
          label: "Automatic & manual homography creation",
          detail: "Aligning overlapping images for comparison.",
        },
        {
          label: "Chain linking",
          detail:
            "Identifying the same animal across overlapping images to avoid counting it twice.",
        },
        {
          label: "Jolly II results",
          detail: "Result generation and analysis for population estimates.",
        },
      ],
    },
  ],
  [
    "webdevewan",
    {
      name: "WebDevEwan",
      description:
        "My Next.js portfolio, where I tell my story as a fantasy mage’s chronicle.",
      seoTitle: "WebDevEwan Portfolio | Built with Next.js by Ewan Trollip",
      absoluteTitle: true,
      summary:
        "The portfolio you’re reading: my story as a fantasy mage’s chronicle, built with Next.js, Tailwind, TypeScript, and Framer Motion.",
      imageAlt: "WebDev/Ewan wordmark in bold white type on a dark background",
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
        "I wanted a place to share what I build and what I get carried away with. A fantasy mage’s chronicle felt like a fitting home for it.",
      forging:
        "Built solo with Next.js, Tailwind, and TypeScript, with Framer Motion touches and a hand-triangulated SVG background for atmosphere. The chapter navigation and typed project registry hold the story and case studies together. This portfolio remains Next.js, even though my current day-to-day stack uses Vite and TanStack.",
      victory:
        "Live at webdevewan.com: a home for my story and selected projects, from the day job to things I use while gaming.",
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
        "A Tarkov companion I built and use while playing, for quick item, quest, and trader lookups using TARKOV.DEV data.",
      seoTitle: "EFT Toolset: Escape From Tarkov Companion App",
      summary:
        "A mobile-first Escape From Tarkov companion I built to look up items, quests and traders fast, using live TARKOV.DEV data, Next.js, shadcn/ui and TypeScript.",
      imageAlt:
        "EFT Toolset wordmark in distressed white stencil type on a dark background",
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
        "I kept looking up items, quests, and traders while playing Escape From Tarkov, so I built a companion for those quick mid-session lookups.",
      forging:
        "A small, mobile-first companion built with Next.js, Tailwind, shadcn/ui, and TypeScript, pulling live data from the TARKOV.DEV GraphQL API. The focus was fast search, clean filters, and a UI that doesn't get in the way.",
      victory:
        "Live at eft-toolset.com — a lightweight reference I actually use while playing.",
      highlights: [
        {
          label: "Live TARKOV.DEV data",
          detail:
            "Item, quest, and trader information from the TARKOV.DEV API.",
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
        "A university group project for lecturers to review student videos and leave feedback on web and mobile.",
      seoTitle: "Teaching & Learning System: NWU Video Feedback App",
      summary:
        "A North-West University team project I worked on: Next.js web app, Expo mobile app and Django backend letting lecturers review student videos and leave feedback.",
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
