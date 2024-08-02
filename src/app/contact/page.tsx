import ContactForm from "../components/contact/Contact";
import { StaticNav } from "../components/ui/StaticNavBar";
import { navItems } from "../components/global/NavItems";

export default function Page() {
  return (
    <main>
      <StaticNav navItems={navItems} />
      <div className="relative flex min-h-[calc(100vh-65px)] w-full  items-center justify-center bg-black bg-grid-white/[0.1]">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="z-20">
          <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text p-2 text-center text-4xl font-bold text-transparent md:text-8xl">
            Get in Touch
          </h1>
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
