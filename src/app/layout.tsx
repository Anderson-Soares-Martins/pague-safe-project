import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import logoBar from "@/app/assets/logoBar.webp";
import logo from "@/app/assets/Logo.svg";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Pague Safe - Aumente suas Conversões com Segurança",
  description:
    "A Pague Safe oferece um gateway de alta conversão com checkout personalizável, segurança e alta taxa de aprovação. Ideal para e-commerce e infoprodutos. Saiba mais e aumente seu faturamento!",
  icons: [{ rel: "icon", url: logoBar.src }],
  openGraph: {
    title: "Pague Safe - Aumente suas Conversões com Segurança",
    description:
      "Com o gateway Pague Safe, você alcança 98,4% de conversão, garantindo segurança, saque rápido e antifraude eficiente.",
    url: "https://www.paguesafe.com",
    images: [
      {
        url: logo.src,
        width: 800,
        height: 600,
        alt: "Pague Safe Logo"
      }
    ],
    siteName: "Pague Safe"
  }
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
