import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center justify-center pb-9">
      <div className="z-20 mx-4 max-w-xl rounded-2xl border-4 border-amber-600/80 bg-amber-900/40 p-8 text-center shadow-xl backdrop-blur-sm">
        <h1 className="text-4xl font-bold tracking-wide text-amber-100 md:text-7xl">
          404
        </h1>
        <p className="mt-4 text-lg text-amber-100/90 md:text-xl">
          The scroll you seek cannot be found.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center justify-center rounded-full border-2 border-amber-400 bg-amber-700/30 px-6 py-3 text-amber-100 shadow transition hover:bg-amber-700/50 hover:text-amber-50 focus:outline-none focus:ring-2 focus:ring-amber-400/60"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
