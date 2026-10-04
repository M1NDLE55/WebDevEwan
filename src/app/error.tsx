"use client";

import { useEffect } from "react";
import { AlertTriangle } from "lucide-react";

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
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="notch-plate relative mx-auto w-full max-w-xl px-8 py-10 text-center [--notch-border-a:0.8]">
        <span
          aria-hidden
          className="clip-notch absolute inset-[1px] [z-index:-1] bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950"
        />

        <div className="mb-4 flex items-center justify-center gap-2 text-amber-400">
          <AlertTriangle size={14} />
          <span className="text-xs tracking-[0.3em] uppercase">
            A Gear Slipped
          </span>
        </div>

        <h1 className="text-4xl font-bold tracking-wide text-amber-100 md:text-6xl">
          A Mishap Befell Us
        </h1>

        <p className="mt-4 text-lg text-amber-50/90 md:text-xl">
          The mechanism stalled in the workshop.
        </p>
        <p className="mt-2 text-sm text-amber-200/70">
          Gather your tools and give the mechanism another try.
        </p>

        <div className="mt-8 flex justify-center">
          <button
            onClick={() => reset()}
            className="notch-plate-sm rune-glow inline-flex min-h-12 items-center justify-center px-8 text-sm font-semibold tracking-[0.2em] text-amber-100 uppercase transition [--notch-border-a:0.9] hover:text-amber-50 focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 focus:outline-none"
            aria-label="Try the page again"
          >
            Try Again
          </button>
        </div>
      </div>
    </main>
  );
}
