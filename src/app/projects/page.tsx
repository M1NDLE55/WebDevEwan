import type { Metadata } from "next";
import Banner from "../components/home/Banner";
import ProjectList from "../components/projects/ProjectList";
import { SITE_NAME } from "../lib/site";

const title = "Projects";
const description =
  "Explore Ewan Trollip's full-stack, AI, conservation technology, and software projects.";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: "/projects" },
  openGraph: {
    title: `${title} | ${SITE_NAME}`,
    description,
    url: "/projects",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${title} | ${SITE_NAME}`,
    description,
  },
};

export default function ProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
        <Banner
          title="The Artisan's Chronicles"
          subtitle="A living record of quests, tools, and collaborations."
        />
      </section>
      <ProjectList />
    </main>
  );
}
