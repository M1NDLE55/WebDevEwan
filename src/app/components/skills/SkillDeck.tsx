"use client";

import React, { useMemo, useState } from "react";
import SkillCard from "./SkillCard";
import { motion, AnimatePresence } from "framer-motion";

const skillCategories = [
  {
    title: "Languages of Power",
    rarity: "legendary",
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
    skills: [
      {
        name: "AWS Amplify",
        description: "A swift forge for full‑stack spells.",
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
    skills: [
      { name: "Resend", description: "Messenger of enchanted letters." },
      { name: "Zod", description: "Guardian of data shapes." },
      { name: "shadcn/ui", description: "UI components forged in shadow." },
      { name: "Tailwind", description: "Winds that shape the design." },
      {
        name: "React Email",
        description: "Scrolls rendered for the couriers.",
      },
      {
        name: "Microlink",
        description: "Windows into distant pages (OG magic).",
      },
    ],
  },
  {
    title: "Other Enchantments",
    rarity: "common",
    skills: [
      { name: "WordPress", description: "The builder of content castles." },
      { name: "Shopify", description: "The merchant's magic shop." },
    ],
  },
];

export default function SkillDeck() {
  // Track the opened skill per category (mobile only)
  const [openMobileByCategory, setOpenMobileByCategory] = useState<
    Record<number, number | null>
  >({});
  // Track flipped state for the opened card (mobile)
  const [flippedMobileKey, setFlippedMobileKey] = useState<string | null>(null);

  const rarityBadge = useMemo(
    () => ({
      common:
        "bg-gradient-to-br from-blue-700 via-blue-500 to-blue-700 border-blue-300",
      rare: "bg-gradient-to-br from-violet-700 via-violet-500 to-violet-700 border-violet-300",
      legendary:
        "bg-gradient-to-br from-amber-700 via-amber-500 to-amber-700 border-amber-300",
    }),
    [],
  );

  return (
    <section>
      {skillCategories.map((category, catIndex) => {
        const openIndex = openMobileByCategory[catIndex] ?? null;
        return (
          <div key={category.title} className="mb-14">
            <h2 className="mb-3 text-2xl font-bold text-amber-300">
              {category.title}
            </h2>

            <p className="mb-3 text-xs text-stone-300 md:hidden">
              Tap to view card
            </p>

            {/* Desktop: original card grid */}
            <motion.div
              className="hidden flex-wrap gap-6 md:flex"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              variants={{
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {category.skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  variants={{
                    hidden: {
                      opacity: 0,
                      rotate: index % 2 === 0 ? -10 : 10,
                      y: 50,
                    },
                    visible: {
                      opacity: 1,
                      rotate: 0,
                      y: 0,
                      transition: { type: "spring", stiffness: 120 },
                    },
                  }}
                >
                  <SkillCard
                    name={skill.name}
                    description={skill.description}
                    category={category.title}
                    rarity={category.rarity as "common" | "rare" | "legendary"}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Mobile: list of skills with colored card icon, expandable full card */}
            <div className="md:hidden">
              <ul className="divide-y divide-stone-800 rounded-lg border border-stone-800">
                {category.skills.map((skill, skillIndex) => {
                  const isOpen = openIndex === skillIndex;
                  return (
                    <li key={skill.name}>
                      <button
                        type="button"
                        className="flex w-full items-center gap-3 px-4 py-3 text-left hover:bg-stone-900/40"
                        onClick={() => {
                          setOpenMobileByCategory((prev) => ({
                            ...prev,
                            [catIndex]: isOpen ? null : skillIndex,
                          }));
                          // Start with front side visible when opening
                          setFlippedMobileKey(null);
                        }}
                        aria-expanded={isOpen}
                        aria-controls={`skill-card-${catIndex}-${skillIndex}`}
                      >
                        <span
                          className={`inline-block h-5 w-4 rounded-sm border-2 ${rarityBadge[category.rarity as "common" | "rare" | "legendary"]}`}
                          aria-hidden="true"
                        />
                        <span className="flex-1 text-sm font-medium text-amber-100">
                          {skill.name}
                        </span>
                      </button>

                      <AnimatePresence initial={false} mode="wait">
                        {isOpen && (
                          <motion.div
                            id={`skill-card-${catIndex}-${skillIndex}`}
                            key={`open-${catIndex}-${skillIndex}`}
                            className="overflow-hidden px-4"
                            initial={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                            }}
                            animate={{
                              opacity: 1,
                              height: "auto",
                              marginTop: 8,
                              paddingTop: 16,
                              paddingBottom: 16,
                            }}
                            exit={{
                              opacity: 0,
                              height: 0,
                              marginTop: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                            }}
                            transition={{ duration: 0.25, ease: "easeInOut" }}
                          >
                            <div className="flex flex-col items-center gap-2">
                              <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.8 }}
                                exit={{ opacity: 0 }}
                                className="text-xs text-stone-300"
                              >
                                Tap card to flip
                              </motion.div>

                              <SkillCard
                                name={skill.name}
                                description={skill.description}
                                category={category.title}
                                rarity={
                                  category.rarity as
                                    | "common"
                                    | "rare"
                                    | "legendary"
                                }
                                disableHover
                                forceFlipped={
                                  flippedMobileKey ===
                                  `${catIndex}-${skillIndex}`
                                }
                                onClick={() =>
                                  setFlippedMobileKey((prev) =>
                                    prev === `${catIndex}-${skillIndex}`
                                      ? null
                                      : `${catIndex}-${skillIndex}`,
                                  )
                                }
                              />

                              <button
                                type="button"
                                className="mt-1 rounded-md border border-stone-700 px-3 py-1 text-xs text-stone-200 hover:bg-stone-800"
                                onClick={() => {
                                  setOpenMobileByCategory((prev) => ({
                                    ...prev,
                                    [catIndex]: null,
                                  }));
                                  setFlippedMobileKey(null);
                                }}
                              >
                                Close card
                              </button>
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        );
      })}
    </section>
  );
}
