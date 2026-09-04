import { Cinzel } from "next/font/google";
import "./globals.css";
import Footer from "./components/global/Footer";
import React from "react";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import MedievalNavbar from "./components/ui/MedievalNavbar";
import { SITE_DESCRIPTION, SITE_NAME, SITE_TITLE, SITE_URL } from "./lib/site";

const cinzel = Cinzel({
  subsets: ["latin"],
  weight: ["400", "700", "900"], // normal, bold, extra bold
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  applicationName: SITE_NAME,
  title: {
    default: SITE_TITLE,
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  authors: [{ name: "Ewan Trollip", url: SITE_URL }],
  creator: "Ewan Trollip",
  publisher: "Ewan Trollip",
  category: "technology",
  keywords: [
    "Ewan Trollip",
    "full-stack developer",
    "Johannesburg developer",
    "South African software developer",
    "conservation technology",
    "AI wildlife census",
    "Next.js developer",
    "AWS developer",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: "/",
    siteName: SITE_NAME,
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/opengraph-image.png",
        width: 1200,
        height: 630,
        alt: "WebDevEwan — Ewan Trollip's developer portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="scroll-smooth bg-neutral-950 font-serif text-amber-50"
    >
      <body className={`${cinzel.className} flex min-h-screen flex-col`}>
        <div
          aria-hidden
          className="pointer-events-none fixed -top-[5lvh] -left-[5vw] -z-10 h-[110lvh] w-[110vw] bg-[url('/polygon-bg.svg')] bg-cover bg-center"
        />
        <MedievalNavbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
