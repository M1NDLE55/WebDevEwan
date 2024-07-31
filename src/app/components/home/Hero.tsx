import Link from "next/link";
import { Spotlight } from "../ui/Spotlight";

export default function Hero() {
  return (
    <div className="relative flex h-screen w-full overflow-hidden rounded-md bg-black/[0.96] antialiased bg-grid-violet-300/[0.03] md:items-center md:justify-center">
      <Spotlight
        className="-top-40 left-0 md:-top-20 md:left-60"
        fill="white"
      />
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 text-center md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-8xl">
          WebDevEwan
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-xl font-normal text-neutral-300">
          Hey there! I&apos;m Ewan, a student and freelance web developer based
          in South Africa.
        </p>
        <Link
          href=""
          className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-50 bg-[linear-gradient(110deg,#000103,45%,#4c1d95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50"
        >
          View my projects
        </Link>
      </div>
    </div>
  );
}
