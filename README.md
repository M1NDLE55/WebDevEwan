# WebDevEwan

The source for [webdevewan.com](https://www.webdevewan.com), Ewan Trollip's
personal portfolio. The site presents Ewan's background and skills as a
fantasy-themed narrative, with a separate project index and individual project
case studies.

## What is included

- Narrative home page with responsive chapter navigation
- Filter-free project index generated from a typed project registry
- Statically generated project case-study pages
- Downloadable CV and direct email contact link
- Open Graph, Twitter card, canonical, robots, sitemap, and Person structured
  metadata
- Vercel Web Analytics and Speed Insights
- Content Security Policy and defensive browser headers

The site has no database, authentication, contact form, or email-sending API.
The Contact link opens the visitor's configured email client using `mailto:`.

## Stack

- [Next.js](https://nextjs.org/) App Router
- [React](https://react.dev/) and [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide](https://lucide.dev/) and
  [Heroicons](https://heroicons.com/) icons
- [Vercel Analytics](https://vercel.com/docs/analytics) and
  [Speed Insights](https://vercel.com/docs/speed-insights)

## Local development

Requires Node.js 20.9 or newer.

```bash
git clone https://github.com/M1NDLE55/WebDevEwan.git
cd WebDevEwan
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). No environment variables
are required.

## Commands

```bash
npm run dev    # Start the local Turbopack development server
npm run build  # Create and type-check the production build
npm run start  # Serve the production build
npm run lint   # Run ESLint
```

## Content and SEO

Project content lives in
[`src/app/components/global/Projects.ts`](src/app/components/global/Projects.ts).
Adding an entry there automatically updates the project index, static project
routes, and XML sitemap. Shared site metadata is defined in
[`src/app/lib/site.ts`](src/app/lib/site.ts).

## License

Licensed under the [MIT License](LICENSE).
