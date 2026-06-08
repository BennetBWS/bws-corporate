import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";
import { COMPANY } from "@/lib/constants";

export const metadata: Metadata = {
  title: {
    default: `${COMPANY.nameJa} — 卓越した豊かさを、すべての人に。`,
    template: `%s — ${COMPANY.nameJa}`,
  },
  description:
    "Bennet BWSは、テクノロジーの力で課題を解決し、その先にある人の幸せと社会の豊かさまで見据えて支援します。",
  metadataBase: new URL("https://bws-bennet.com"),
  icons: {
    icon: "/Logo.png",
    apple: "/Logo.png",
  },
  openGraph: {
    title: `${COMPANY.nameJa}`,
    description: "卓越した豊かさを、すべての人に。",
    type: "website",
    locale: "ja_JP",
    images: ["/Logo.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
