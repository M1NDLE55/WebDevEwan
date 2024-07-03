import Services from "../components/home/Services";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      {/* <Contact /> */}
    </main>
  );
}
