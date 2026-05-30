import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Data Engineering Foundation",
  description:
    "The data engineering foundation powering Optimizely's product analytics platform — Snowflake, dbt, Segment, Fivetran, Airbyte.",
  openGraph: {
    title: "Data Engineering Foundation",
    description:
      "145B rows · 6.17 TB · 1.9M ELT queries/week. The infrastructure behind Optimizely's product analytics.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
