import React from "react";

export default function Banner({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="relative w-full px-8 py-6 text-center">
      <h1 className="text-2xl font-bold tracking-wide text-amber-100 sm:text-3xl md:text-5xl">
        {title}
      </h1>
      {subtitle && (
        <p className="mt-3 text-sm text-amber-200/70 sm:text-base">
          {subtitle}
        </p>
      )}
    </div>
  );
}
