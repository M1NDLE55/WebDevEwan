import Link from "next/link";

export default function About() {
  return (
    <div
      id="welcome"
      className="center-div mt-[150px] flex-col px-4 sm:mt-[200px]"
    >
      <h2 className="max-w-2xl text-balance text-center text-3xl sm:text-4xl">
        Let&apos;s Talk
      </h2>
      <div className="center-div mt-5 w-full max-w-4xl rounded-md border border-violet-500 bg-white p-4 md:rounded-full md:py-10">
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
