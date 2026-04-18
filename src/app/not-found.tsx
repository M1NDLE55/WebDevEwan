import Link from "next/link";
import { Compass } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center px-4 py-16">
      <div className="notch-plate relative mx-auto w-full max-w-xl px-8 py-10 text-center [--notch-border-a:0.8]">
        <span
          aria-hidden
          className="clip-notch absolute inset-[1px] [z-index:-1] bg-gradient-to-b from-neutral-900 via-neutral-900 to-neutral-950"
        />

        <div className="mb-4 flex items-center justify-center gap-2 text-amber-400">
          <Compass size={14} />
          <span className="text-xs uppercase tracking-[0.3em]">
            Lost in the Realms
          </span>
        </div>

        <h1 className="text-5xl font-bold tracking-wide text-amber-100 md:text-7xl">
          404
        </h1>

        <p className="mt-4 text-lg text-amber-50/90 md:text-xl">
          The scroll you seek has faded from this realm.
        </p>
        <p className="mt-2 text-sm text-amber-200/70">
          Perhaps it was never written, or the runes have shifted with time.
        </p>

        <div className="mt-8 flex justify-center">
          <Link
            href="/"
            className="notch-plate-sm rune-glow inline-flex min-h-12 items-center justify-center px-8 text-sm font-semibold uppercase tracking-[0.2em] text-amber-100 transition hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-neutral-900 [--notch-border-a:0.9]"
            aria-label="Return to the beginning of the legend"
          >
            Return to the Legend
          </Link>
        </div>
      </div>
    </main>
  );
}
