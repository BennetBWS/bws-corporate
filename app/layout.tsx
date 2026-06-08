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
    title: "株式会社Bennet BWS | Web制作・開発・コンサルティング",
    description: "卓越した豊かさを、すべての人に。東京・丸の内のWeb制作会社。",
    url: "https://www.bws-bennet.com",
    type: "website",
    locale: "ja_JP",
    images: [
      { url: "https://www.bws-bennet.com/ogp.png", width: 1200, height: 630 },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["https://www.bws-bennet.com/ogp.png"],
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
