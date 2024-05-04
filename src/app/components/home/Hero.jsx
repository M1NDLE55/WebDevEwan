import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-section-1 center-div flex-col px-4">
      <h1 className="text-balance text-center text-5xl font-bold sm:text-6xl">
        Hey there! I&apos;m Ewan
      </h1>
      <p className="mt-4 text-lg sm:text-xl">Software Developer | Student</p>
      <div className="center-div mt-10 flex-col gap-4 sm:flex-row sm:gap-2">
        <Link
          href="/#welcome"
          className="w-full rounded-md border border-red-500 p-4 px-6 py-4 text-center text-xl shadow-lg shadow-red-200 transition-colors hover:border-red-600 sm:w-fit sm:text-2xl"
        >
          Read More
        </Link>
        <Link
          href={{ pathname: "/quote", query: { ref: "cta-t" } }}
          className="w-fit rounded-md bg-red-500 p-4 px-6 py-4 text-center text-xl text-white shadow-lg transition-colors hover:bg-red-600 sm:text-2xl"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
