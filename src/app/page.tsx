import type { Metadata } from "next";
import HeroStory from "./components/home/HeroStory";
import { SITE_URL } from "./lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

const profileJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  url: SITE_URL,
  mainEntity: {
    "@type": "Person",
    name: "Ewan Trollip",
    url: SITE_URL,
    image: `${SITE_URL}/opengraph-image.png`,
    jobTitle: "Full-Stack Developer",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Johannesburg",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://github.com/M1NDLE55",
      "https://www.linkedin.com/in/ewan-trollip/",
    ],
    knowsAbout: [
      "Full-stack web development",
      "Conservation technology",
      "Artificial intelligence",
      "Next.js",
      "TypeScript",
      "Amazon Web Services",
    ],
  },
};

export default function Home() {
  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(profileJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HeroStory />
    </main>
  );
}
