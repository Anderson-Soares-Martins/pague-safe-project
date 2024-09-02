import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logo from "@/app/assets/logoBar.webp";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pague Safe",
  description: "Generated by create next app",
  icons: [{ rel: "icon", url: logo.src }]
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
