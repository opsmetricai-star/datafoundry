import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: "DataFoundry: the AI-native data platform for enterprise decisions",
  description: "DataFoundry is the AI-native data platform that analyzes, predicts, decides and automates across the business.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body><Suspense>{children}</Suspense></body>
    </html>
  );
}
