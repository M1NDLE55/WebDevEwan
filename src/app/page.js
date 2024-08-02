import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Contact from "./components/global/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
