"use client";

import { motion } from "framer-motion";
import React from "react";

type ChapterProps = {
  id: string;
  numeral: string;
  title: string;
  children: React.ReactNode;
};

export default function Chapter({
  id,
  numeral,
  title,
  children,
}: ChapterProps) {
  return (
    <motion.section
      id={id}
      className="scroll-mt-32 py-10"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mb-5 flex items-baseline gap-4">
        <span className="select-none font-bold tracking-[0.3em] text-amber-500/70 text-sm">
          {numeral}
        </span>
        <h2 className="text-2xl font-semibold text-amber-300 md:text-3xl">
          {title}
        </h2>
      </div>
      <div className="rune-divider mb-6 text-amber-500/50">
        <span aria-hidden className="text-xs">
          ◆
        </span>
      </div>
      {children}
    </motion.section>
  );
}
