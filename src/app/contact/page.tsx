import ContactForm from "../components/contact/Contact";
import Banner from "../components/home/Banner";

export default function Page() {
  return (
    <main className="flex flex-1">
      <div className="relative flex w-full items-center justify-center">
        <section className="z-20 w-full max-w-3xl px-6 pb-9">
          <Banner title="Send a Raven" />

          <h2 className="mb-2 mt-6 text-center text-2xl font-semibold text-amber-300 md:text-3xl">
            Words to the Court Scribe
          </h2>
          <p className="font-fantasy mx-auto max-w-2xl text-center text-neutral-200/90">
            Speak, traveler. Inscribe thy name, mark thy sigil, and let thy message
            ride upon swift wings. Whether quest, counsel, or camaraderie, thy words
            shall find their way to my hall.
          </p>

          <div className="mt-5 rounded-lg border-4 border-amber-400 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 p-4 md:p-6 shadow-lg backdrop-blur">
            <ContactForm />
          </div>
        </section>
      </div>
    </main>
  );
}
