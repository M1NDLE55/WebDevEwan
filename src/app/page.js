import Link from "next/link";
import Services from "./components/home/Services";
import Window from "./components/home/Window";
import Shapes from "./components/home/Shapes";

export default function Home() {
  return (
    <main className="pb-4">
      <Shapes />
      <div className="h-section-1 center-div flex-col px-4">
        <h1 className="text-balance text-center text-5xl font-bold leading-snug sm:text-6xl">
          It&apos;s Not <span className="text-[#8338ec]">Just a Website</span>,
          <br />
          It&apos;s an{" "}
          <span className="text-[#fb5607]">Unforgettable Experience</span>
        </h1>
        <Link
          href={{ pathname: "/quote", query: { ref: "cta-t" } }}
          className="mt-10 flex w-fit rounded-md border border-cyan-400 p-4 px-6 py-4 text-2xl transition-all hover:scale-105"
        >
          Get a Quote
        </Link>
      </div>
      <div className="center-div mt-40 px-7">
        <p className="text-xl sm:w-[700px] sm:text-2xl">
          {/* effect-glass-2 rounded-md border-orange-400 p-4 */}
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
      <div className="center-div mt-10 flex-col px-7">
        <h2 className="mb-10 w-full max-w-[700px] text-xl sm:text-2xl">
          So, when you&apos;re ready to take your online presence to the{" "}
          <span className="font-bold text-[#fb5607]">next level</span>,
          here&apos;s how I can help:
        </h2>
        <Services />
      </div>
      {/* <div className="center-div mb-16 mt-20 px-7">
        <h2 className="text-center text-5xl italic leading-loose sm:text-6xl sm:leading-loose">
          Feeling <b>inspired</b>?
          <br />
          Get a
          <br className="sm:hidden" />
          <Link
            href={{ pathname: "/quote", query: { ref: "cta-b" } }}
            className="mx-4 rounded-lg border-2 border-[#8338ec] px-6 py-4 font-bold text-[#8338ec] transition-colors hover:border-[#fb5607] hover:text-[#fb5607]"
          >
            free
          </Link>
          <br className="sm:hidden" />
          quote!
        </h2>
      </div> */}
    </main>
  );
}
