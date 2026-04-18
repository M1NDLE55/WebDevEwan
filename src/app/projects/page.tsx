import Banner from "../components/home/Banner";
import ProjectList from "../components/projects/ProjectList";

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
