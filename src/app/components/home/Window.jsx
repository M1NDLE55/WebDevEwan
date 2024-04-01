import Link from "next/link";
import Image from "next/image";

export default function Window() {
  return (
    <div className="h-[600px] w-full max-w-[1000px] overflow-hidden rounded-xl border-2 border-black shadow-xl shadow-yellow-300">
      <div className="flex h-10 flex-row items-center justify-start gap-2 border-b-2 border-black pl-4">
        <Circle />
        <Circle />
        <Circle />
      </div>

      <div className="center-div relative h-[calc(100%-40px)] p-4">
        <div className="absolute right-5 top-0 hidden md:inline">
          <Image
            src="/star_black.png"
            width={250}
            height={250}
            alt="Picture of a star"
          />
        </div>
        <h2 className="text-center text-5xl italic leading-loose sm:text-6xl sm:leading-loose">
          Feeling <b>inspired</b>?
          <br />
          Get a
          <br className="sm:hidden" />
          <Link
            href={{ pathname: "/quote", query: { ref: "cta-b" } }}
            className="mx-4 rounded-lg border-2 border-[#8338ec] px-6 py-4 font-bold text-[#8338ec] transition-colors hover:border-[#fb5607] hover:text-[#fb5607]"
          >
            free
          </Link>
          <br className="sm:hidden" />
          quote!
        </h2>
      </div>
    </div>
  );
}

function Circle() {
  return <div className="h-3 w-3 rounded-full bg-black" />;
}
