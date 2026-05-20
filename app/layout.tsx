import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import "./globals.css";

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TheLoop Marketing Agency — Social Media Bureau",
  description:
    "TheLoop Marketing Agency is een premium social media bureau dat merken laat groeien via organische short-form content en krachtige ad creatives op TikTok, Meta en LinkedIn.",
  keywords: [
    "social media bureau",
    "TikTok marketing",
    "short-form content",
    "ad creatives",
    "Meta advertenties",
    "influencer marketing",
    "content strategie Nederland",
  ],
  openGraph: {
    title: "TheLoop Marketing Agency — Social Media Bureau",
    description:
      "Van short-form content tot killer ad creatives — wij zorgen dat jouw merk gezien, onthouden en gekozen wordt.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="nl" className={`${syne.variable} ${dmSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
