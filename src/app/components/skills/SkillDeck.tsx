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
    title: "The Worn Spellbook",
    rarity: "legendary",
    description:
      "The spells kept within reach for daily quests: TypeScript runes, swift forges, and the cloud gates of Amplify Gen 2.",
    icon: Code2,
    skills: [
      {
        name: "TypeScript",
        description:
          "Typed runes that catch wayward spells before the casting.",
      },
      {
        name: "Vite",
        description: "A swift forge, keeping fresh spells close to the fire.",
      },
      {
        name: "TanStack",
        description:
          "A chest of charms for journeys through interfaces and data.",
      },
      {
        name: "React",
        description: "Enchanted pieces assembled into living interfaces.",
      },
      {
        name: "Python",
        description:
          "A versatile tool for scripts and quests beyond the browser.",
      },
      {
        name: "AWS / Amplify Gen 2",
        description:
          "Cloud citadels reached through the gates of Amplify Gen 2.",
      },
    ],
  },
  {
    title: "The Clockwork Workshop",
    rarity: "legendary",
    description:
      "Here, AI constructs meet home-forged wards of review and testing. The workshop hums with unfinished experiments.",
    icon: Sparkles,
    skills: [
      {
        name: "T3 Code",
        description:
          "The workbench where coding constructs receive their quests.",
      },
      {
        name: "Review & Test Loops",
        description:
          "Home-forged wards send faulty constructs back to mend their spells.",
      },
      {
        name: "Docker & QEMU",
        description:
          "Pocket test chambers built for constructs to put their spells to the trial.",
      },
      {
        name: "Local Models",
        description:
          "Small engines of reasoning housed within the mage's own tower.",
      },
      {
        name: "Hermes Agent & Bots",
        description:
          "Agents and clockwork helpers busy in the tower's workshops.",
      },
      {
        name: "Tailscale",
        description:
          "Hidden paths back to the tower's review and testing chambers.",
      },
    ],
  },
  {
    title: "Relics of Past Quests",
    rarity: "rare",
    description:
      "Treasures gathered on projects and merchant quests, some only briefly tried. Next.js still holds the walls of this chronicle.",
    icon: Wrench,
    skills: [
      {
        name: "Next.js & JavaScript",
        description:
          "Runes from earlier quests; Next.js still shelters this chronicle.",
      },
      {
        name: "Crystals of Data",
        description:
          "Convex, PostgreSQL, and Supabase: vaults visited on earlier quests.",
      },
      {
        name: "Charms of Form",
        description:
          "Tailwind CSS and shadcn/ui shape the vessel; Zod guards its runes.",
      },
      {
        name: "Expo & Resend",
        description:
          "Portals for travelling spells and departing ravens, tried on past quests.",
      },
      {
        name: "WordPress & Shopify",
        description:
          "Castle builders and merchant enchantments from earlier commissions.",
      },
    ],
  },
  {
    title: "Scrolls of the Academy",
    rarity: "common",
    description:
      "Scrolls carried home from North-West University: enchantments studied in the Academy, rather than spells in the daily kit.",
    icon: BookOpen,
    skills: [
      {
        name: "C#",
        description: "A sturdy blade first wielded in the Academy.",
      },
      {
        name: "Java & C++",
        description: "Two demanding tomes opened during the academic trials.",
      },
      {
        name: "SQL Server & Oracle",
        description: "Great vaults of knowledge explored beneath the Academy.",
      },
      {
        name: "Access",
        description: "The village ledger among the Academy's grander vaults.",
      },
      {
        name: "ASP.NET & WinForms",
        description:
          "The citadel and the mirror, studied in the Academy's workshops.",
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
