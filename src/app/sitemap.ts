import type { MetadataRoute } from "next";
import { projects } from "./components/global/Projects";
import { SITE_URL } from "./lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const projectPages: MetadataRoute.Sitemap = Array.from(projects.values()).map(
    (project) => ({
      url: new URL(project.localHref, SITE_URL).toString(),
      changeFrequency: "yearly",
      priority: 0.7,
    }),
  );

  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_URL}/projects`,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    ...projectPages,
  ];
}
