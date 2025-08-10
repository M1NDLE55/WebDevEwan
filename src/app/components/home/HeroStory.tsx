import SkillDeck from "../skills/SkillDeck";
import Banner from "./Banner";
import Link from "next/link";

export default function HeroStory() {
  return (
    <section className="mx-auto max-w-5xl px-6 pb-9">
      {/* Banner */}
      <Banner title="The Legend of Ewan Trollip, Code Mage of the Digital Realms" />

      {/* Prologue */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold text-amber-300">
        Prologue — The Whisper of the Runes
      </h2>
      <p className="font-fantasy mb-6">
        In the quiet hills of <strong>Noordheuwel</strong>, under the watchful
        gaze of the Southern Stars, a young apprentice named{" "}
        <strong>Ewan</strong> stumbled upon an ancient tome — the{" "}
        <em>Runes of Delphi</em>. With trembling hands, he traced their symbols,
        and the air shimmered with the first sparks of magic. It was here that
        his journey began — a path not of sword and shield, but of logic and
        light, where spells were written in code and kingdoms were built in the
        realm unseen.
      </p>

      {/* Chapter I */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold text-amber-300">
        Chapter I — The Forging of the Mage
      </h2>
      <p className="font-fantasy mb-6">
        Ewan’s quest led him to the{" "}
        <strong>Great Academy of North-West University</strong>, where he
        trained under the Masters of C#, Python, C++, Java, and the sacred arts
        of SQL. Through trials and sleepless nights, he forged his first
        enchanted tools — the <em>Crystal of PostgreSQL</em>, the{" "}
        <em>Blade of ASP.NET</em>, and the <em>Mirror of WinForms</em> — each
        granting him new powers in the ever-expanding Digital Realms.
      </p>

      {/* Chapter II */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold text-amber-300">
        Chapter II — The Mage’s Arsenal
      </h2>
      <p className="font-fantasy mb-8">
        Over the years, Ewan gathered a formidable collection of magical
        artifacts and spells — each one a testament to battles fought and quests
        completed. Some were forged in the heat of academic trials, others in
        the wild lands of freelance work, and still more in the halls of noble
        guilds. Together, they form the arsenal of a mage destined for
        greatness. For a fuller chronicle of his deeds and studies, see his
        {" "}
        <a
          href="/ewan_trollip_cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 underline decoration-amber-500/60 underline-offset-4 transition hover:text-amber-300"
          title="Curriculum Vitae (PDF)"
        >
          curriculum vitae
        </a>
        .
      </p>

      <SkillDeck />

      {/* Interlude */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold text-amber-300">
        Interlude — The Artisan's Chronicles
      </h2>
      <p className="font-fantasy mb-6">
        From the forges of experience and the crucibles of curiosity came a
        series of crafted works — living artifacts shaped by code and guided by
        purpose. For those who would walk alongside the mage and witness these
        creations, the chronicles have been preserved. Step within and explore
        the tales etched into each project.
      </p>
      <div className="mt-6 flex flex-col items-center gap-4">
        <Link
          href="/projects"
          className="inline-flex min-h-14 items-center justify-center rounded-lg border-4 border-amber-400 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 px-8 text-xl font-semibold text-amber-100 shadow-lg backdrop-blur transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 text-center"
          aria-label="Explore The Artisan's Chronicles (projects page)"
          title="The Artisan's Chronicles"
        >
          Explore The Artisan's Chronicles
        </Link>
      </div>

      {/* Chapter III */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold text-amber-300">
        Chapter III — The Quest Ahead
      </h2>
      <p className="font-fantasy mb-6">
        Though already a skilled mage, Ewan’s heart yearns for mastery of both
        the <strong>Front-End Kingdom</strong> and the{" "}
        <strong>Back-End Empire</strong> — to become a true{" "}
        <em>Full Stack Archmage</em>. His vision is to craft seamless, living
        applications that bridge worlds and bring harmony to the lands of code.
      </p>

      {/* Epilogue */}
      <h2 className="mb-4 mt-8 text-2xl font-semibold text-amber-300">
        Epilogue — The Road Yet Untraveled
      </h2>
      <p className="font-fantasy">
        The mage’s journey is far from over. Beyond the horizon lie new realms,
        new spells, and new challenges. Those who seek him may find him through
        the{" "}
        <a
          href="https://www.linkedin.com/in/ewan-trollip/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 underline decoration-amber-500/60 underline-offset-4 transition hover:text-amber-300"
          title="LinkedIn"
        >
          <strong>Crystal of LinkedIn</strong>
        </a>
        , the{" "}
        <a
          href="https://github.com/M1NDLE55"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-400 underline decoration-amber-500/60 underline-offset-4 transition hover:text-amber-300"
          title="GitHub"
        >
          <strong>Scrolls of GitHub</strong>
        </a>
        , or by sending a raven through the royal couriers. The legend of Ewan
        Trollip is still being written — and the next chapter awaits.
      </p>

      <div className="mt-6 flex flex-col items-center gap-4">
        <Link
          href="/contact"
          className="inline-flex min-h-14 items-center justify-center rounded-lg border-4 border-amber-400 bg-gradient-to-br from-neutral-900/80 to-neutral-800/60 px-8 text-xl font-semibold text-amber-100 shadow-lg backdrop-blur transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 text-center"
          aria-label="Send a raven (contact page)"
        >
          Send a Raven
        </Link>
      </div>
    </section>
  );
}
