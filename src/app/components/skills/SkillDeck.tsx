"use client";

import React, { useState } from "react";
import SkillCard from "./SkillCard";
import { motion, AnimatePresence } from "framer-motion";
import {
  Code2,
  Sparkles,
  Database,
  Cloud,
  Wrench,
  Globe,
  ChevronDown,
} from "lucide-react";

type Rarity = "common" | "rare" | "legendary";

const skillCategories: {
  title: string;
  rarity: Rarity;
  icon: React.ComponentType<{ size?: number; className?: string }>;
  skills: { name: string; description: string }[];
}[] = [
  {
    title: "Languages of Power",
    rarity: "legendary",
    icon: Code2,
    skills: [
      { name: "TypeScript", description: "Typed magic for safer spells." },
      { name: "JavaScript", description: "The language of the web realms." },
      { name: "C#", description: "Strong and versatile incantations." },
      { name: "Python", description: "Elegant scripts of great wisdom." },
      { name: "C++", description: "Powerful but dangerous magic." },
      { name: "Java", description: "Reliable spells for vast kingdoms." },
    ],
  },
  {
    title: "Frameworks of the Realms",
    rarity: "rare",
    icon: Sparkles,
    skills: [
      { name: "React", description: "The enchanted UI library." },
      { name: "Next.js", description: "The portal between pages." },
      { name: "Expo", description: "Mobile magic for all devices." },
      { name: "Django", description: "The Python fortress." },
      { name: "ASP.NET", description: "The C# citadel." },
      {
        name: "Framer Motion",
        description: "Subtle animations and micro-charms.",
      },
    ],
  },
  {
    title: "Scrolls of Data",
    rarity: "rare",
    icon: Database,
    skills: [
      {
        name: "PostgreSQL",
        description: "The crystal of structured knowledge.",
      },
      { name: "Supabase", description: "The instant backend scroll." },
      { name: "SQL Server", description: "The iron vault of data." },
      {
        name: "DynamoDB",
        description: "A swift NoSQL codex of the AWS realms.",
      },
      { name: "Oracle", description: "Ancient database magic." },
      { name: "Access", description: "The humble village ledger." },
    ],
  },
  {
    title: "Runes of the Cloud",
    rarity: "rare",
    icon: Cloud,
    skills: [
      {
        name: "AWS Amplify",
        description: "A swift forge for full-stack spells.",
      },
      {
        name: "AWS AppSync",
        description: "GraphQL wards that bind data realms.",
      },
      {
        name: "Amazon SQS",
        description: "Queues that ferry messages between guilds.",
      },
      {
        name: "Amazon ECS",
        description: "Fleets of containers marching in order.",
      },
    ],
  },
  {
    title: "Tools of Craft",
    rarity: "common",
    icon: Wrench,
    skills: [
      { name: "Resend", description: "Messenger of enchanted letters." },
      { name: "Zod", description: "Guardian of data shapes." },
      { name: "shadcn/ui", description: "UI components forged in shadow." },
      { name: "Tailwind", description: "Winds that shape the design." },
      {
        name: "React Email",
        description: "Scrolls rendered for the couriers.",
      },
    ],
  },
  {
    title: "Other Enchantments",
    rarity: "common",
    icon: Globe,
    skills: [
      { name: "WordPress", description: "The builder of content castles." },
      { name: "Shopify", description: "The merchant's magic shop." },
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
        <h3 className="text-xs uppercase tracking-[0.3em] text-amber-400/80">
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
          <span className="text-xs uppercase tracking-widest">
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
                      <span className="text-xs uppercase tracking-widest">
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
                  className={
                    isActive ? "text-amber-300" : "text-amber-100/50"
                  }
                />
                <span className="whitespace-nowrap text-xs uppercase tracking-widest md:whitespace-normal">
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

          <p className="mt-4 text-[11px] uppercase tracking-widest text-amber-100/40">
            Hover a card to reveal its lore
          </p>
        </div>
      </div>
    </section>
  );
}
