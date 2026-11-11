import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

/** 2:40 — body copy family. */
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

/** 2:12, 2:38, 2:53 — display and heading family. */
const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

/** 2:16, 2:23, 2:50, 2:99, 2:103 — meta and label family. */
const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Berijalan Academy — Welcome Aboard Bootcamp Batch 19",
  description:
    "Orientasi intensif full stack & AI engineering. Perjalanan transformatif menjadi engineer profesional berkelas dunia.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${inter.variable} ${plusJakarta.variable} ${jetbrainsMono.variable} antialiased`}
    >
      <body className="min-h-dvh font-sans">{children}</body>
    </html>
  );
}