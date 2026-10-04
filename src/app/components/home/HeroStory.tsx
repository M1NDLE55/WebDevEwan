import SkillDeck from "../skills/SkillDeck";
import Banner from "./Banner";
import Chapter from "./Chapter";
import ChapterRail from "./ChapterRail";
import FeaturedQuest from "./FeaturedQuest";
import Link from "next/link";
import { FileText, MapPin } from "lucide-react";

const chapters = [
  { id: "prologue", label: "Prologue", numeral: "I" },
  { id: "chapter-forging", label: "The Forging", numeral: "II" },
  { id: "chapter-guild", label: "The Guild", numeral: "III" },
  { id: "chapter-arsenal", label: "The Arsenal", numeral: "IV" },
  { id: "interlude", label: "Chronicles", numeral: "V" },
  { id: "chapter-quest", label: "The Quest", numeral: "VI" },
  { id: "epilogue", label: "Epilogue", numeral: "VII" },
];

export default function HeroStory() {
  return (
    <>
      <ChapterRail chapters={chapters} />

      {/* Banner spans the wider column to match the Projects pages */}
      <section className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
        <Banner
          title="The Legend of Ewan Trollip"
          subtitle="Code Mage of the Digital Realms"
        />
      </section>

      <section className="mx-auto max-w-5xl px-6 pt-6 pb-12">
        {/* TL;DR + quick-access pills */}
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="flex flex-col items-center gap-2 text-sm text-amber-100/80 sm:flex-row sm:flex-wrap sm:gap-x-3 sm:gap-y-1">
            <span className="inline-flex items-center gap-2 text-amber-400">
              <MapPin size={14} />
              <span className="tracking-widest uppercase">TL;DR</span>
            </span>
            <span className="text-center sm:text-left">
              A code mage from South Africa, building AI constructs and filling
              his home tower with experiments. Lead developer on{" "}
              <Link
                href="/projects/SurveyScope"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                SurveyScope
              </Link>{" "}
              and keeper of this chronicle. Explore the{" "}
              <a
                href="#chapter-arsenal"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                arsenal
              </a>{" "}
              or{" "}
              <Link
                href="/projects"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                quests
              </Link>
              .
            </span>
          </p>
          <a
            href="/ewan_trollip_cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="notch-plate-sm rune-glow inline-flex shrink-0 items-center justify-center gap-2 px-4 py-2 text-xs font-semibold tracking-widest text-amber-200 uppercase transition hover:text-amber-100"
            title="Download CV (PDF)"
          >
            <FileText size={14} />
            Download CV
          </a>
        </div>

        {/* Prologue */}
        <Chapter
          id="prologue"
          numeral="I"
          title="Prologue — The Whisper of the Runes"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            In a tower in the southern realms, the runes are still glowing.
            <strong> Ewan</strong> has been building{" "}
            <strong>AI constructs</strong>, setting them quests, and forging the
            wards that send them back when their spells go awry. His home server
            hums beneath the experiments; at the workbench,
            <strong> T3 Code</strong> sits alongside more AI subscriptions than
            any sensible mage would keep.
          </p>
          <p className="mb-6 text-amber-50/90">
            But every mage begins as an apprentice. In the quiet hills of
            <strong> Noordheuwel</strong>, under the watchful gaze of the
            Southern Stars, a younger Ewan first traced the{" "}
            <em>Runes of Delphi</em>. His trials at Noordheuwel High School
            yielded <strong>five distinctions</strong>, and those first sparks
            drew him towards a different kind of adventure — one where spells
            were written in code and kingdoms took shape in the realm unseen.
          </p>
        </Chapter>

        {/* Chapter I — Forging (academic) */}
        <Chapter
          id="chapter-forging"
          numeral="II"
          title="Chapter I — The Forging of the Mage"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            The apprentice&apos;s road led to the{" "}
            <strong>Great Academy of North-West University</strong>. Between{" "}
            <strong>2022 and 2024</strong>, he studied the tongues of C#, Java,
            and C++, peered into the vaults of databases, and wielded the{" "}
            <em>Blade of ASP.NET</em> and the
            <em> Mirror of WinForms</em>. Alongside fellow apprentices, he
            helped forge a teaching and learning system: a way for lecturers to
            review student videos and leave their counsel across web and mobile.
            When the Academy&apos;s gates opened again, he stepped through with
            a <strong>BSc IT (cum laude)</strong> and a spellbook with plenty of
            room left in it.
          </p>
        </Chapter>

        {/* Chapter II — Guild (professional) */}
        <Chapter
          id="chapter-guild"
          numeral="III"
          title="Chapter II — The Guild of Noble Craft"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            In <strong>2024</strong>, the young artificer took his craft to the
            merchants, building and tending storefronts with Shopify,
            TypeScript, React, and Next.js. That November, an invitation arrived
            from
            <strong> Innoventix Consulting</strong>. Within its halls he served
            as a Software Developer, and together with{" "}
            <strong>WildEye Conservation</strong> took up the mantle of lead
            developer on{" "}
            <Link
              href="/projects/SurveyScope"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
            >
              <strong>SurveyScope</strong>
            </Link>
            . Aerial images became the maps for this shared quest: find the
            animals, check what was missed, and carry the survey through to
            population estimates.
          </p>
          <p className="mb-6 text-amber-50/90">
            His chapter with Innoventix closed in <strong>May 2026</strong>.
            WildEye had become an independent company, and in{" "}
            <strong>June 2026</strong> he joined its ranks full time as{" "}
            <strong>Lead Developer</strong>, carrying SurveyScope&apos;s quest
            onward. The artifact had grown considerably; now came the patient
            work of making it swifter and easier to wield. Some days, that meant
            taking an old enchantment apart and forging it again. He was proud
            of what they had built — and the review and testing wards from his
            own workshop were finding their way into the guild&apos;s work too.
          </p>
        </Chapter>

        {/* Chapter III — Arsenal (skills) */}
        <Chapter
          id="chapter-arsenal"
          numeral="IV"
          title="Chapter III — The Mage's Arsenal"
        >
          <p className="dropcap mb-8 text-amber-50/90">
            The tower&apos;s shelves tell their own story. Within reach lies the
            worn spellbook of daily work; nearby, a clockwork workshop hums with
            agents and unfinished experiments. Further back rest relics from
            earlier quests and scrolls carried home from the Academy. Ewan has
            tried many enchantments over the years. These are the ones he keeps
            close, and the ones whose lore belongs to an earlier chapter.
          </p>

          <SkillDeck />
        </Chapter>

        {/* Interlude — Featured Quest + Projects CTA */}
        <Chapter
          id="interlude"
          numeral="V"
          title="Interlude — The Artisan's Chronicles"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            Every quest leaves an artifact behind. Some bear the marks of a
            whole guild; others were hammered out alone, or made simply to keep
            a Tarkov raid from becoming another evening of searching for things.
            Among these chronicles stands <strong>SurveyScope</strong>, a shared
            work from the wild skies: once a task of annotation, now a longer
            journey through quality checks and population estimates. Its forge
            is still warm.
          </p>

          <FeaturedQuest />

          <div className="mt-6 flex justify-center">
            <Link
              href="/projects"
              className="notch-plate-sm rune-glow inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold tracking-[0.2em] whitespace-nowrap text-amber-100 uppercase transition [--notch-border-a:0.9] hover:text-amber-50 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none sm:px-8"
              aria-label="Explore The Artisan's Chronicles (projects page)"
            >
              Browse All Chronicles
            </Link>
          </div>
        </Chapter>

        {/* Chapter IV — Quest Ahead */}
        <Chapter
          id="chapter-quest"
          numeral="VI"
          title="Chapter IV — The Quest Ahead"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            A new trail has caught the mage&apos;s eye. What happens when a
            construct can try its own spells, face the review wards, and return
            to the forge without waiting for its maker? Ewan has been building
            just such a workshop: every commit meets a review, while
            <strong> Docker and QEMU</strong> open pocket test chambers. The
            agents go around again, mending their work, before returning with
            news that they have passed the trials.
          </p>
          <p className="mb-6 text-amber-50/90">
            Within the home tower, local models share their quarters with
            <strong> Hermes Agent</strong>, bots, and the review and testing
            services that keep the experiments moving.{" "}
            <strong>Tailscale</strong> lays the hidden paths back to those
            chambers. AI has led him much further into the unmapped realms.
            SurveyScope&apos;s forge still needs tending, but there is always
            another door in the tower, and Ewan has never been this eager to see
            what lies behind it.
          </p>
        </Chapter>

        {/* Epilogue */}
        <Chapter
          id="epilogue"
          numeral="VII"
          title="Epilogue — The Road Yet Untraveled"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            The mage&apos;s journey is far from over. Beyond the horizon lie new
            realms, new spells, and new challenges. Those who seek him may find
            him through the{" "}
            <a
              href="https://www.linkedin.com/in/ewan-trollip/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
              title="LinkedIn"
            >
              <strong>Crystal of LinkedIn</strong>
            </a>
            , the{" "}
            <a
              href="https://github.com/M1NDLE55"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
              title="GitHub"
            >
              <strong>Scrolls of GitHub</strong>
            </a>
            , or by sending a raven from your own mail client. The legend of
            Ewan Trollip is still being written — and the next chapter awaits.
          </p>

          <div className="mt-6 flex justify-center">
            <a
              href="mailto:ewantrollip@webdevewan.com"
              className="notch-plate-sm rune-glow inline-flex min-h-12 items-center justify-center px-5 text-sm font-semibold tracking-[0.2em] whitespace-nowrap text-amber-100 uppercase transition [--notch-border-a:0.9] hover:text-amber-50 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none sm:px-8"
              aria-label="Send an email to Ewan"
            >
              Email Ewan
            </a>
          </div>
        </Chapter>
      </section>
    </>
  );
}
