import type { Metadata } from "next";
import { Syne, DM_Sans } from "next/font/google";
import Script from "next/script";
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
      <head>
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D87CO6BC77U9QCTA6N2G');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body>{children}</body>
    </html>
  );
}
