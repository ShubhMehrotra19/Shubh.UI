import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Shubh.UI",
  description: "UI Library, Shubh Merhrotra's Ui library, React, Next.js, TailwindCSS, open for all, all components, reguarly updated",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html style={{scrollbarWidth: 'none'}} lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
