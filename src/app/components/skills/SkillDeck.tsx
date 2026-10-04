"use client";

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Sparkles, BookOpen, Wrench, ChevronDown } from "lucide-react";

type Rarity = "common" | "rare" | "legendary";

const skillCategories: {
  title: string;
  rarity: Rarity;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: { name: string; description: string }[];
}[] = [
  {
    title: "Current Spellbook",
    rarity: "legendary",
    description:
      "My current development stack. AWS came through work, wrapped in Amplify Gen 2.",
    icon: Code2,
    skills: [
      { name: "TypeScript", description: "The language I mostly develop in." },
      { name: "Vite", description: "Part of my current stack on SurveyScope." },
      { name: "TanStack", description: "Part of the toolkit I work with now." },
      { name: "React", description: "The UI library in my current stack." },
      {
        name: "Python",
        description: "Alongside TypeScript in my current development work.",
      },
      {
        name: "AWS / Amplify Gen 2",
        description:
          "AWS learned through work, with Amplify Gen 2 wrapping it.",
      },
    ],
  },
  {
    title: "AI & Automation",
    rarity: "legendary",
    description:
      "The tools and experiments I'm spending time on: agents, review, testing, and my home server.",
    icon: Sparkles,
    skills: [
      {
        name: "T3 Code",
        description: "My main setup, with a variety of AI subscriptions.",
      },
      {
        name: "Review & Test Loops",
        description:
          "Home-grown tools to review commits, test changes, and send agents back to fix them.",
      },
      {
        name: "Docker & QEMU",
        description:
          "Local test environments spun up so agents can test their own work.",
      },
      {
        name: "Local Models",
        description: "Running and experimenting with models on my home server.",
      },
      {
        name: "Hermes Agent & Bots",
        description: "More agents and bots in the home-server experiments.",
      },
      {
        name: "Tailscale",
        description: "Access to my self-hosted review and testing services.",
      },
    ],
  },
  {
    title: "Past Adventures",
    rarity: "rare",
    description:
      "Dabbled with over the years in projects and freelance work. Next.js still powers this portfolio.",
    icon: Wrench,
    skills: [
      {
        name: "Next.js & JavaScript",
        description:
          "Used in projects and freelance work; this site is still Next.js.",
      },
      {
        name: "Data Stores",
        description:
          "Convex, PostgreSQL, and Supabase from projects over the years.",
      },
      {
        name: "UI & Validation",
        description: "Tailwind CSS, shadcn/ui, and Zod from previous projects.",
      },
      {
        name: "Expo & Resend",
        description: "Tools I've dabbled with in projects over the years.",
      },
      {
        name: "WordPress & Shopify",
        description:
          "Website and storefront tools from projects and freelance work.",
      },
    ],
  },
  {
    title: "Academy Scrolls",
    rarity: "common",
    description:
      "Academic experience from BSc IT at North-West University, 2022–2024. Separate from my current working stack.",
    icon: BookOpen,
    skills: [
      {
        name: "C#",
        description: "An academic language from my university years.",
      },
      {
        name: "Java & C++",
        description: "Languages explored through academic work.",
      },
      {
        name: "SQL Server & Oracle",
        description: "Databases used academically.",
      },
      {
        name: "Access",
        description: "Part of my academic database experience.",
      },
      {
        name: "ASP.NET & WinForms",
        description: ".NET frameworks used academically.",
      },
    ],
  },
];

const rarityDot: Record<Rarity, string> = {
  common: "bg-sky-400",
  rare: "bg-violet-400",
  legendary: "bg-amber-400",
};

export default function SkillDeck() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = skillCategories[activeIndex];
  const ActiveIcon = active.icon;

  return (
    <section
      className="notch-plate p-4 [--notch-bg:#141414] [--notch-border-a:0.3] md:p-6"
      aria-label="Skill arsenal"
    >
      <div className="mb-4 flex items-center justify-between gap-3">
        <h3 className="text-xs tracking-[0.3em] text-amber-400/80 uppercase">
          Arsenal
        </h3>
        <span className="text-xs text-amber-100/50">
          {active.skills.length}{" "}
          {active.skills.length === 1 ? "artifact" : "artifacts"}
        </span>
      </div>

      {/* Mobile selector — dropdown button revealing category options */}
      <div className="mb-4 md:hidden">
        <button
          type="button"
          aria-haspopup="listbox"
          aria-expanded={mobileOpen}
          aria-controls="arsenal-mobile-list"
          onClick={() => setMobileOpen((v) => !v)}
          className="flex w-full items-center gap-3 border border-amber-500/30 bg-amber-500/5 px-3 py-2.5 text-left text-amber-100 transition hover:border-amber-400/60 hover:bg-amber-500/10"
        >
          <ActiveIcon size={16} className="text-amber-300" />
          <span className="text-xs tracking-widest uppercase">
            {active.title}
          </span>
          <span
            aria-hidden
            className={`ml-auto h-1.5 w-1.5 shrink-0 ${rarityDot[active.rarity]}`}
          />
          <ChevronDown
            size={16}
            className={`text-amber-300 transition-transform duration-200 ${
              mobileOpen ? "rotate-180" : ""
            }`}
          />
        </button>
        <AnimatePresence initial={false}>
          {mobileOpen && (
            <motion.ul
              id="arsenal-mobile-list"
              role="listbox"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="overflow-hidden border-x border-b border-amber-500/20 bg-black/40"
            >
              {skillCategories.map((cat, i) => {
                const isActive = i === activeIndex;
                const Icon = cat.icon;
                return (
                  <li key={cat.title} role="option" aria-selected={isActive}>
                    <button
                      type="button"
                      onClick={() => {
                        setActiveIndex(i);
                        setMobileOpen(false);
                      }}
                      className={`flex w-full items-center gap-3 border-l-2 px-3 py-2.5 text-left text-sm transition ${
                        isActive
                          ? "border-amber-400 bg-amber-500/10 text-amber-100"
                          : "border-transparent text-amber-100/60 hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-100"
                      }`}
                    >
                      <Icon
                        size={16}
                        className={
                          isActive ? "text-amber-300" : "text-amber-100/50"
                        }
                      />
                      <span className="text-xs tracking-widest uppercase">
                        {cat.title}
                      </span>
                      <span
                        aria-hidden
                        className={`ml-auto h-1.5 w-1.5 shrink-0 ${rarityDot[cat.rarity]}`}
                      />
                    </button>
                  </li>
                );
              })}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>

      <div className="flex flex-col gap-4 md:flex-row md:gap-6">
        {/* Tab rail — desktop only; mobile uses the dropdown above */}
        <div
          role="tablist"
          aria-orientation="vertical"
          className="hidden shrink-0 gap-2 md:flex md:w-56 md:flex-col"
        >
          {skillCategories.map((cat, i) => {
            const isActive = i === activeIndex;
            const Icon = cat.icon;
            return (
              <button
                key={cat.title}
                role="tab"
                aria-selected={isActive}
                aria-controls={`arsenal-panel-${i}`}
                id={`arsenal-tab-${i}`}
                onClick={() => setActiveIndex(i)}
                className={`group flex shrink-0 items-center gap-3 border-l-2 px-3 py-2.5 text-left text-sm transition md:w-full ${
                  isActive
                    ? "border-amber-400 bg-amber-500/10 text-amber-100"
                    : "border-transparent text-amber-100/60 hover:border-amber-500/40 hover:bg-amber-500/5 hover:text-amber-100"
                }`}
              >
                <Icon
                  size={16}
                  className={isActive ? "text-amber-300" : "text-amber-100/50"}
                />
                <span className="text-xs tracking-widest whitespace-nowrap uppercase md:whitespace-normal">
                  {cat.title}
                </span>
                <span
                  aria-hidden
                  className={`ml-auto h-1.5 w-1.5 shrink-0 ${rarityDot[cat.rarity]}`}
                />
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`arsenal-panel-${activeIndex}`}
          aria-labelledby={`arsenal-tab-${activeIndex}`}
          className="min-h-[22rem] flex-1"
        >
          <p className="mb-4 text-sm text-amber-100/70">{active.description}</p>
          <AnimatePresence mode="wait">
            <motion.div
              key={active.title}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="flex flex-wrap justify-center gap-3 md:justify-start"
            >
              {active.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: index * 0.05,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                >
                  <SkillCard
                    name={skill.name}
                    description={skill.description}
                    category={active.title}
                    rarity={active.rarity}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          <p className="mt-4 text-[11px] tracking-widest text-amber-100/40 uppercase">
            Hover a card to reveal its lore
          </p>
        </div>
      </div>
    </section>
  );
}
