import Link from "next/link";

export default function Hero() {
  return (
    <div className="h-section-1 center-div relative flex-col px-4">
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
          className="w-full rounded-md border border-red-500 bg-white p-4 px-6 py-4 text-center text-xl shadow-lg shadow-red-200 transition-colors hover:border-red-600 sm:h-full sm:w-fit sm:text-2xl"
        >
          Read More
        </Link>
        <Link
          href="/quote"
          className="w-fit rounded-md bg-red-500 p-4 px-6 py-4 text-center text-xl text-white shadow-lg transition-colors hover:bg-red-600 sm:h-full sm:text-2xl"
        >
          Contact Me
        </Link>
      </div>
      <svg
        className="absolute bottom-0 -z-10 h-16 w-full"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="-720.1 -76.144 720.2 76.24"
      >
        <path
          d="M-63.2985-69.37C-49.9434-63.68-38.324-54.582-29.6081-42.9899L0 0-720 0C-720 0-709.99-12.9202-690.075-16.4792L-105.5-75.5C-91.2745-77.1415-76.654-75.06-63.2985-69.37Z"
          fill="white"
        />
      </svg>
    </div>
  );
}
