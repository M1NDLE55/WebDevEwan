import React from "react";

export default function Banner({ title }: { title: string }) {
  return (
    <div className="relative flex w-full items-center justify-center">
      <div className="rounded-lg border-4 border-amber-400 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 px-8 py-4 shadow-lg text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-amber-100 md:text-5xl">
          {title}
        </h1>
      </div>
    </div>
  );
}
