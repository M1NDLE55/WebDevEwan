import Services from "../components/home/Services";
// import Shapes from "../components/home/Shapes";
import Hero from "../components/home/Hero";
import About from "../components/home/About";
import Contact from "../components/home/Contact";

export default function Home() {
  return (
    <main>
      {/* <Shapes /> */}
      <Hero />
      <About />
      <Services />
      <Contact />
    </main>
  );
}
