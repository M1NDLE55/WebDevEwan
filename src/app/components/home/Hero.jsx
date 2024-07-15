import Link from "next/link";

export default function Hero() {
  return (
    <div className="center-div flex-col px-4 py-32 lg:pb-44 lg:pt-28">
      <h1 className="text-balance text-center text-5xl font-bold sm:text-6xl">
        Hey there! I&apos;m Ewan
      </h1>
      <p className="mt-5 rounded-full border border-red-500 bg-white px-2 py-1 text-center text-red-500 sm:text-lg">
        Websites <span className="text-red-500">|</span> Web Apps{" "}
        <span className="text-red-500">|</span> Mobile Apps
      </p>
      <p className="mt-5 text-center text-lg sm:text-xl">
        Long Story Short - I Build Stuff
      </p>
      <div className="center-div mt-8 flex-col gap-4 sm:flex-row sm:gap-2">
        <Link
          href="/#about"
          className="w-full rounded-md border border-red-500 bg-white px-6 py-4 text-center text-xl shadow-lg shadow-red-200 transition-colors hover:border-red-600 sm:h-full sm:w-fit sm:text-2xl"
        >
          Read More
        </Link>
        <Link
          href="/#contact"
          className="w-fit rounded-md bg-red-500 px-6 py-4 text-center text-xl text-white shadow-lg transition-colors hover:bg-red-600 sm:h-full sm:text-2xl"
        >
          Contact Me
        </Link>
      </div>
    </div>
  );
}
