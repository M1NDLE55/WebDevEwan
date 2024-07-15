import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[calc(100vh-129px)] items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-center text-4xl text-red-500">404</h1>
        <p className="text-center text-xl">
          The page you&apos;re looking for doesn&apos;t exist
        </p>
        <Link
          href={{ pathname: "/" }}
          className="rounded-md bg-red-500 p-3 px-6 py-4 text-xl text-white shadow-lg transition-all hover:bg-red-600"
        >
          Take Me Back
        </Link>
      </div>
    </main>
  );
}
