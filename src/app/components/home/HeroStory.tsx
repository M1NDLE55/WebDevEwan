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
              South African developer, carried away with AI agents, review
              loops, and a busy home server. Also lead developer on{" "}
              <Link
                href="/projects/SurveyScope"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                SurveyScope
              </Link>{" "}
              — told as a mage&apos;s chronicle. Skip to{" "}
              <a
                href="#chapter-arsenal"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                skills
              </a>{" "}
              or{" "}
              <Link
                href="/projects"
                className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 hover:text-amber-200"
              >
                projects
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
            These days, the mage&apos;s tower is a home server, and Ewan is
            spending a lot of time seeing how much <strong>AI agents</strong>{" "}
            can do for themselves. He builds tools to review their code, conjure
            test environments, and send them back to fix things. His main
            spellbook is <strong>T3 Code</strong>, accompanied by a variety of
            AI subscriptions — <em>“because I&apos;m insane.”</em> He&apos;s
            never been this motivated to mess with how he works.
          </p>
          <p className="mb-6 text-amber-50/90">
            By day, he&apos;s the lead developer on <strong>SurveyScope</strong>{" "}
            at WildEye Conservation, and proud of how far the platform has come.
            Away from that quest, it&apos;s local models, bots, and self-hosted
            tools that keep drawing him into another experiment. The chronicle
            began rather earlier, at <strong>Noordheuwel High School</strong>,
            with five distinctions and the first steps into the Digital Realms.
          </p>
        </Chapter>

        {/* Chapter I — Forging (academic) */}
        <Chapter
          id="chapter-forging"
          numeral="II"
          title="Chapter I — The Forging of the Mage"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            From <strong>2022 to 2024</strong>, Ewan trained at the Great
            Academy of <strong>North-West University</strong>, graduating with a
            <strong> BSc IT (cum laude)</strong>. C#, Java, C++, and the arts of
            databases were among the academic trials, alongside ASP.NET and
            WinForms .NET. Not every spell from the Academy travels in his
            everyday kit, but those years gave him plenty to build on —
            including a group project for lecturers to review student videos and
            leave feedback on web and mobile.
          </p>
        </Chapter>

        {/* Chapter II — Guild (professional) */}
        <Chapter
          id="chapter-guild"
          numeral="III"
          title="Chapter II — The Guild of Noble Craft"
        >
          <p className="dropcap mb-6 text-amber-50/90">
            In <strong>2024</strong>, Ewan worked as a freelance artificer,
            building and maintaining client websites on Shopify and custom
            stacks, mainly with TypeScript, React, and Next.js. From
            <strong> November 2024 to May 2026</strong>, he worked with the
            guild at
            <strong> Innoventix Consulting</strong> as a Software Developer. He
            was already lead developer on{" "}
            <Link
              href="/projects/SurveyScope"
              className="text-amber-300 underline decoration-amber-500/50 underline-offset-4 transition hover:text-amber-200"
            >
              <strong>SurveyScope</strong>
            </Link>
            , in collaboration with <strong>WildEye Conservation</strong>,
            working across React, Next.js, TypeScript, Python, and AWS.
          </p>
          <p className="mb-6 text-amber-50/90">
            When WildEye became an independent company, he moved there full time
            in <strong>June 2026</strong>, continuing as
            <strong> Lead Developer</strong> on SurveyScope. The working stack
            now is TypeScript, Vite, TanStack, React, and Python, with AWS
            wrapped in Amplify Gen 2. He picked up AWS through work; AI has
            since taken him much further beyond his usual stack. His own code
            review and testing tools now help check changes before release.
          </p>
        </Chapter>

        {/* Chapter III — Arsenal (skills) */}
        <Chapter
          id="chapter-arsenal"
          numeral="IV"
          title="Chapter III — The Mage's Arsenal"
        >
          <p className="dropcap mb-8 text-amber-50/90">
            A mage accumulates more artifacts than he carries into every quest.
            Here&apos;s the stack Ewan works with now, the AI and automation
            tools occupying his evenings, and a separate shelf for things
            he&apos;s dabbled with through projects, freelance work, or
            university.
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
            Some artifacts belong to the day job, some to a university guild,
            and some exist because Ewan wanted a tool while playing Tarkov.
            SurveyScope is the biggest shared quest here: it has grown from
            annotation into a platform for quality checks and population
            estimates. There&apos;s a lot in it now, and he&apos;s proud of what
            the team has built.
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
            The next quest keeps leading back to <strong>AI agents</strong>: how
            far can they get when they have the tools to review and test their
            own work? Ewan is building loops that check every commit, spin up
            local environments with <strong>Docker and QEMU</strong>, and send
            agents back through fixes until they can report back having made it
            through review and testing.
          </p>
          <p className="mb-6 text-amber-50/90">
            Meanwhile, local models, <strong>Hermes Agent</strong>, bots, and
            self-hosted review and testing services are giving his home server a
            workout, with access over <strong>Tailscale</strong>. There&apos;s
            plenty left to explore beyond his usual spellbook. SurveyScope
            remains an ongoing quest too: making it faster and nicer to use,
            even when that means rebuilding something he&apos;s already built.
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
