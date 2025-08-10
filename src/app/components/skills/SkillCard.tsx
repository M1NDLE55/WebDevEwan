import React, { type JSX } from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";

interface SkillCardProps {
  name: string;
  description?: string;
  category: string;
  rarity?: "common" | "rare" | "legendary";
  forceFlipped?: boolean;
  disableHover?: boolean;
  onClick?: () => void;
}

const categoryIcons: Record<string, JSX.Element> = {
  "Languages of Power": <CodeBracketIcon className="h-8 w-8" />,
  "Frameworks of the Realms": <SparklesIcon className="h-8 w-8" />,
  "Scrolls of Data": <BookOpenIcon className="h-8 w-8" />,
  "Tools of Craft": <WrenchScrewdriverIcon className="h-8 w-8" />,
  "Other Enchantments": <GlobeAltIcon className="h-8 w-8" />,
};

const rarityColors: Record<string, string> = {
  common: "from-blue-700 via-blue-500 to-blue-700 border-blue-300",
  rare: "from-violet-700 via-violet-500 to-violet-700 border-violet-300",
  legendary: "from-amber-700 via-amber-500 to-amber-700 border-amber-300",
};

export default function SkillCard({
  name,
  description,
  category,
  rarity = "common",
  forceFlipped = false,
  disableHover = false,
  onClick,
}: SkillCardProps) {
  const flipInteractionClass = forceFlipped
    ? "[transform:rotateY(180deg)]"
    : disableHover
      ? ""
      : "group-hover:[transform:rotateY(180deg)]";
  return (
    <div className="group h-64 w-48 [perspective:1000px]" onClick={onClick}>
      <div
        className={`relative h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipInteractionClass}`}
      >
        {/* Front */}
        <div
          className={clsx(
            "absolute inset-0 flex flex-col justify-between rounded-xl p-4 [backface-visibility:hidden]",
            "bg-gradient-to-br",
            rarityColors[rarity],
            "overflow-hidden border-2 shadow-lg",
          )}
        >
          {/* Shimmer overlay */}
          <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
            <div className="mb-3">{categoryIcons[category]}</div>
            <h3 className="text-xl font-bold">{name}</h3>
            <p className="mt-1 text-xs capitalize">{rarity}</p>
          </div>
        </div>

        {/* Back */}
        <div className="absolute inset-0 flex items-center justify-center rounded-xl border-2 border-stone-700 bg-stone-900 p-4 text-center text-sm text-amber-100 [backface-visibility:hidden] [transform:rotateY(180deg)]">
          {description || "A mysterious skill of great power."}
        </div>
      </div>
    </div>
  );
}
