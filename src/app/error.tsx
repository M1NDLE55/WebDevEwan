"use client";

import { useEffect } from "react";
import { StaticNav } from "./components/ui/StaticNavBar";
import { navItems } from "./components/global/NavItems";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="relative flex min-h-[calc(100vh-105px)] w-full items-center  justify-center bg-black bg-grid-white/[0.1] md:min-h-[calc(100vh-65px)]">
      <StaticNav navItems={navItems} hasContact />
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="z-20 text-center">
        <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text p-2 text-center text-4xl font-bold text-transparent md:text-8xl">
          Error
        </h1>
        <p className="mx-auto mt-4 max-w-lg px-5 text-center text-lg font-normal text-neutral-300 md:text-xl">
          Something unexpected happend!
        </p>
        <button
          onClick={() => reset()}
          className="mt-6 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-neutral-50 bg-[linear-gradient(110deg,#000103,45%,#4c1d95,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50"
        >
          Try again
        </button>
      </div>
    </main>
  );
}
