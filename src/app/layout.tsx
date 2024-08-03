import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";
import Footer from "./components/global/Footer";
import React from "react";
import { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title:
    "Student and Freelance Web Developer Based in South Africa | WebDevEwan",
  description:
    "Hey there! I'm Ewan, a student and freelance web developer based in South Africa.",
  openGraph: {
    title:
      "Student and Freelance Web Developer Based in South Africa | WebDevEwan",
    description:
      "Hey there! I'm Ewan, a student and freelance web developer based in South Africa.",
    type: "website",
  },
  metadataBase: new URL("https://www.webdevewan.com/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth bg-black">
      <body className={inter.className}>
        {children}
        <Toaster position="bottom-right" />
        <Footer />
      </body>
    </html>
  );
}
