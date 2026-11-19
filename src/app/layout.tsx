import type { Metadata } from "next";
import { DM_Sans, DM_Mono } from "next/font/google";
import "./globals.css";
import { Suspense } from "react";

const sans = DM_Sans({ subsets: ["latin"], variable: "--font-dm-sans" });
const mono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-dm-mono" });

export const metadata: Metadata = {
  title: "DataFoundry — One database for AI, apps and agents",
  description: "DataFoundry is a unified data and AI platform with serverless Postgres, governed analytics and production agents.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <body><Suspense>{children}</Suspense></body>
    </html>
  );
}
