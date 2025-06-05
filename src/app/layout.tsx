import "@mantine/core/styles.css";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'react-photo-view/dist/react-photo-view.css';
import { Loader } from "@/components/Loader/Loader";
import { LanguageProvider } from "@/context/LanguageContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Giffari Zakawaly - Frontend Developer Portfolio",
  description:
    "Frontend Developer dengan spesialisasi React & TypeScript.",
  keywords: [
    "Giffari Zakawaly",
    "Giffari Zakawaly Portfolio",
    "Frontend Developer",
    "Frontend Developer Indonesia",
    "Portfolio",
    "React Developer",
    "Web Developer Indonesia",
    "Giffari",
    "Next.js Portfolio",
  ],
  authors: [{ name: "Giffari Zakawaly", url: "https://giffariz.com" }],
  creator: "Giffari Zakawaly",
  metadataBase: new URL("https://giffariz.com"),
  robots: { index: true, follow: true },
  icons: { icon: "/favicon.ico" },
  openGraph: {
    title: "Giffari Zakawaly - Frontend Developer Portfolio",
    description:
      "Frontend Developer dengan spesialisasi React & TypeScript.",
    url: "https://giffariz.com",
    siteName: "Giffari Zakawaly - Frontend Developer Portfolio",
    images: [
      {
        url: "/pic/og.webp",
        width: 1200,
        height: 630,
        alt: "Giffari Zakawaly - Frontend Developer Portfolio",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Giffari Zakawaly - Frontend Developer Portfolio",
    description:
      "Frontend Developer dengan spesialisasi React & TypeScript.",
    images: ["/pic/og.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <MantineProvider withGlobalClasses withCssVariables>
          <Loader />
          <LanguageProvider>
            {children}
            <Analytics />
            <SpeedInsights />
          </LanguageProvider>
        </MantineProvider>
      </body>
    </html>
  );
}
