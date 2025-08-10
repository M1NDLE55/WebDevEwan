import Banner from "../components/home/Banner";
import ProjectList from "../components/projects/ProjectList";

export default function ProjectsPage() {
  return (
    <main>
      <section className="mx-auto max-w-6xl px-6">
        <Banner title="The Artisan's Chronicles" />
      </section>
      <ProjectList />
    </main>
  );
}
