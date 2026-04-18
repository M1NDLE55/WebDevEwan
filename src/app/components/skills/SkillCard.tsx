import React, { type JSX } from "react";
import {
  CodeBracketIcon,
  SparklesIcon,
  BookOpenIcon,
  WrenchScrewdriverIcon,
  GlobeAltIcon,
  CloudIcon,
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
  "Languages of Power": <CodeBracketIcon className="h-6 w-6" />,
  "Frameworks of the Realms": <SparklesIcon className="h-6 w-6" />,
  "Scrolls of Data": <BookOpenIcon className="h-6 w-6" />,
  "Runes of the Cloud": <CloudIcon className="h-6 w-6" />,
  "Tools of Craft": <WrenchScrewdriverIcon className="h-6 w-6" />,
  "Other Enchantments": <GlobeAltIcon className="h-6 w-6" />,
};

const rarityBorder: Record<string, string> = {
  common: "rgb(56 189 248 / 0.7)",
  rare: "rgb(167 139 250 / 0.7)",
  legendary: "rgb(251 191 36 / 0.8)",
};

const rarityAccent: Record<string, string> = {
  common: "text-sky-300",
  rare: "text-violet-300",
  legendary: "text-amber-300",
};

const rarityCorner: Record<string, string> = {
  common: "bg-sky-400",
  rare: "bg-violet-400",
  legendary: "bg-amber-400",
};

const rarityChaser: Record<string, string> = {
  common: "rgb(125 211 252)",
  rare: "rgb(196 181 253)",
  legendary: "rgb(252 211 77)",
};

const rarityFrontBg: Record<string, string> = {
  common: "#0c1a28",
  rare: "#170e26",
  legendary: "#231808",
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

  // Shared plate styling for both faces — rarity-colored border, neutral fill,
  // hover pinned to the same values so the built-in button hover on
  // `.notch-plate-sm` doesn't cause an amber flash during the flip.
  const frontPlateStyle = {
    "--notch-border": rarityBorder[rarity],
    "--notch-border-hover": rarityBorder[rarity],
    "--notch-bg": rarityFrontBg[rarity],
    "--notch-bg-hover": rarityFrontBg[rarity],
    // Override the utility's `isolation: isolate` — it would flatten the face
    // under `preserve-3d` and kill the back face's border on rotation.
    isolation: "auto",
    // The utility also forces `position: relative`, which would override the
    // `absolute` class in cascade and collapse the face to content size.
    position: "absolute",
  } as React.CSSProperties;

  const backPlateStyle = {
    ...frontPlateStyle,
    "--notch-bg": "#171717",
    "--notch-bg-hover": "#171717",
  } as React.CSSProperties;

  return (
    <div
      className="group h-40 w-32 [perspective:1000px]"
      onClick={onClick}
    >
      {/*
       * `z-0` establishes a stacking context on the flip wrapper so the face
       * pseudos (z-index: -1/-2) stay scoped here — without this they'd leak
       * behind other page content once `isolation` is dropped from the faces.
       * `z-0` is safe on a `preserve-3d` parent; `isolation`/`clip-path`/etc
       * would flatten the 3D.
       */}
      <div
        className={`relative z-0 h-full w-full transition-transform duration-500 [transform-style:preserve-3d] ${flipInteractionClass}`}
      >
        {/* Front */}
        <div
          className="notch-plate-sm absolute inset-0 flex flex-col items-center justify-center gap-2 p-3 text-center text-white [backface-visibility:hidden]"
          style={frontPlateStyle}
        >
          {/* border chaser — a rotating conic-gradient arc, clipped to the
              notched silhouette; the cover span hides the center so only the
              outer ring of the arc shows, tracing the border */}
          <span
            aria-hidden
            className="pointer-events-none absolute inset-0 overflow-hidden clip-notch-sm"
          >
            <span
              className="absolute left-1/2 top-1/2 aspect-square w-[200%] -translate-x-1/2 -translate-y-1/2 animate-[spin_3s_linear_infinite]"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, transparent 300deg, ${rarityChaser[rarity]} 345deg, transparent 360deg)`,
              }}
            />
          </span>
          <span
            aria-hidden
            className="pointer-events-none absolute inset-[2px] clip-notch-sm"
            style={{ background: rarityFrontBg[rarity] }}
          />

          {/* corner ticks */}
          <span
            aria-hidden
            className={clsx(
              "absolute left-1.5 top-1.5 h-1.5 w-1.5",
              rarityCorner[rarity],
            )}
          />
          <span
            aria-hidden
            className={clsx(
              "absolute right-1.5 top-1.5 h-1.5 w-1.5",
              rarityCorner[rarity],
            )}
          />
          <span
            aria-hidden
            className={clsx(
              "absolute bottom-1.5 left-1.5 h-1.5 w-1.5",
              rarityCorner[rarity],
            )}
          />
          <span
            aria-hidden
            className={clsx(
              "absolute bottom-1.5 right-1.5 h-1.5 w-1.5",
              rarityCorner[rarity],
            )}
          />

          <div className={clsx("relative mb-1", rarityAccent[rarity])}>
            {categoryIcons[category]}
          </div>
          <h3 className="relative text-sm font-bold leading-tight text-amber-50">
            {name}
          </h3>
          <p
            className={clsx(
              "relative text-[10px] uppercase tracking-widest",
              rarityAccent[rarity],
            )}
          >
            {rarity}
          </p>
        </div>

        {/* Back */}
        <div
          className="notch-plate-sm absolute inset-0 flex items-center justify-center p-3 text-center text-xs text-amber-100 [backface-visibility:hidden] [transform:rotateY(180deg)]"
          style={backPlateStyle}
        >
          {description || "A mysterious skill of great power."}
        </div>
      </div>
    </div>
  );
}
