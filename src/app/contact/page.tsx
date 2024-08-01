import ContactForm from "../components/contact/Contact";
import { LampContainer } from "../components/ui/Lamp";

export default function Page() {
  return (
    <LampContainer>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 text-center md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-8xl">
          Get in Touch
        </h1>
        <ContactForm />
      </div>
    </LampContainer>
  );
}
