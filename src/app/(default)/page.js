import Link from "next/link";
import Services from "../components/home/Services";
import Shapes from "../components/home/Shapes";

export default function Home() {
  return (
    <main>
      <Shapes />
      <div className="h-section-1 center-div flex-col px-4">
        <h1 className="text-balance text-center text-5xl font-bold sm:text-6xl">
          It&apos;s Not <span className="text-[#8338ec]">Just a Website</span>,
          <br />
          It&apos;s an{" "}
          <span className="text-[#fb5607]">Unforgettable Experience</span>
        </h1>
        <Link
          href={{ pathname: "/quote", query: { ref: "cta-t" } }}
          className="mt-10 w-fit rounded-md border border-cyan-400 p-4 px-6 py-4 text-center text-xl shadow-md transition-colors hover:border-green-400 sm:text-2xl"
        >
          Get a Quote
        </Link>
        <Link href="/#welcome" className="mt-5 text-lg underline sm:text-xl">
          Read More
        </Link>
      </div>
      <div id="welcome" className="center-div px-4 pt-[200px]">
        <p className="w-full max-w-2xl border-l-2 border-violet-500 pl-4 text-xl sm:text-2xl">
          Hey there, I&apos;m{" "}
          <Link href="/about-me" className="underline">
            Ewan
          </Link>
          . So, here&apos;s the deal &ndash; not having a killer website is like
          being invisible to potential customers. You&apos;re missing out on
          opportunities left, right, and center! But don&apos;t sweat it,
          because that&apos;s where I come in. I specialize in solving the whole
          &apos;invisible&apos; problem by creating websites that not only show
          off your brand but also hook visitors and turn them into loyal fans.
        </p>
      </div>
      <div className="center-div mt-20 flex-col px-4">
        <h2 className="max-w-2xl text-balance text-center text-3xl sm:text-4xl">
          When You&apos;re Ready to Take Your Online Presence to the{" "}
          <span className="font-bold text-[#fb5607]">Next Level</span>,<br />
          Here&apos;s How I Can Help:
        </h2>
        <Services />
      </div>
    </main>
  );
}
