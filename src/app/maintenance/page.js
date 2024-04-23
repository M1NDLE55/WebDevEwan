import Image from "next/image";
import Shapes from "../components/home/Shapes";

export default function Page() {
  return (
    <main className="relative h-screen w-screen overflow-clip">
      <Shapes />
      <div className="absolute left-1/2 top-1/2 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center p-4 text-center text-4xl font-bold sm:text-5xl">
        <Image
          src="/construction.svg"
          alt="construction barricade"
          height={100}
          width={100}
        />
        <h1>
          Under
          <br />
          Maintenance
        </h1>
      </div>
    </main>
  );
}
