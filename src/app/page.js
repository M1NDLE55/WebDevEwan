import Hero from "./components/home/Hero";
import About from "./components/home/About";
import Projects from "./components/home/Projects";
import Contact from "./components/global/Contact";
import { FloatingNav } from "./components/ui/FloatingNavbar";
import { navItems } from "./components/global/NavItems";

export default function Home() {
  return (
    <main>
      <FloatingNav
        navItems={navItems}
        button={{ name: "Contact", link: "/contact" }}
      />
      <Hero />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
