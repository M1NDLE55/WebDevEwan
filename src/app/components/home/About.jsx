import Link from "next/link";

export default function About() {
  return (
    <div id="welcome" className="center-div mt-[200px] px-4">
      <div className="rounded-full border border-violet-500  px-28 py-10">
        <p className="w-full max-w-2xl text-center text-xl sm:text-2xl">
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
    </div>
  );
}
