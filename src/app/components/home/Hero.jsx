import Link from "next/link";

export default function Hero() {
  return (
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
  );
}
