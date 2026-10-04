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
    jobTitle: "Lead Developer",
    email: "ewantrollip@webdevewan.com",
    worksFor: {
      "@type": "Organization",
      name: "WildEye Conservation",
      url: "https://wildeyeconservation.org/",
    },
    alumniOf: { "@type": "CollegeOrUniversity", name: "North-West University" },
    hasCredential: {
      "@type": "EducationalOccupationalCredential",
      name: "BSc IT (cum laude)",
      credentialCategory: "degree",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
    },
    sameAs: [
      "https://github.com/M1NDLE55",
      "https://www.linkedin.com/in/ewan-trollip/",
    ],
    knowsAbout: [
      "AI agents",
      "Automated code review and testing",
      "Self-hosted tooling and local models",
      "TypeScript",
      "Vite",
      "TanStack",
      "React",
      "Python",
      "AWS through Amplify Gen 2",
      "Aerial wildlife survey software",
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
