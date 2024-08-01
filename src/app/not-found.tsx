import Link from "next/link";
import { LampContainer } from "./components/ui/Lamp";

export default function NotFound() {
  return (
    <LampContainer>
      <div className="relative z-10 mx-auto w-full max-w-7xl p-4 pt-20 text-center md:pt-0">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-8xl">
          404
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-center text-xl font-normal text-neutral-300">
          The page you&apos;re looking for doesn&apos;t exist
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-50 bg-[linear-gradient(110deg,#000103,45%,#4c1d95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50"
        >
          Take Me Back
        </Link>
      </div>
    </LampContainer>
  );
}
