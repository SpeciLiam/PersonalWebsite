import type { Metadata } from "next";
import { Bodoni_Moda, DM_Sans, Syne } from "next/font/google";
import "./globals.css";

const bodySans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

const displaySerif = Bodoni_Moda({
  variable: "--font-bodoni",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const labelSans = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Liam Van | Cloud, AI, and Full-Stack Engineer",
  description:
    "Personal website for Liam Van, a software engineer focused on cloud systems, AI-assisted tooling, and product-minded full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${bodySans.variable} ${displaySerif.variable} ${labelSans.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
