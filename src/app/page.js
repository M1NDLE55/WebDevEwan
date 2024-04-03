import Link from "next/link";
import Services from "./components/home/Services";
import Shapes from "./components/home/Shapes";

export default function Home() {
  return (
    <main className="pb-4">
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
          className="mt-10 flex w-fit rounded-md border border-cyan-400 p-4 px-6 py-4 text-2xl shadow-md transition-colors hover:border-green-400"
        >
          Get a Quote
        </Link>
      </div>
      <div className="center-div mt-40 px-7">
        <p className="border-l-2 border-violet-500 pl-4 text-xl sm:w-[700px] sm:text-2xl">
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
      <div className="center-div mt-14 flex-col px-4">
        <h2 className="mb-10 max-w-3xl text-balance text-center text-3xl sm:text-4xl">
          When you&apos;re ready to take your online presence to the{" "}
          <span className="font-bold text-[#fb5607]">next level</span>,<br />
          here&apos;s how I can help:
        </h2>
        <Services />
      </div>
    </main>
  );
}
