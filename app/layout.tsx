import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const integralCF = localFont({
  src: [
    {
      path: "../public/fonts/IntegralCF-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/IntegralCF-RegularOblique.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/IntegralCF-DemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/IntegralCF-DemiBoldOblique.woff2",
      weight: "600",
      style: "italic",
    },
    {
      path: "../public/fonts/IntegralCF-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/IntegralCF-BoldOblique.woff2",
      weight: "700",
      style: "italic",
    },
    {
      path: "../public/fonts/IntegralCF-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
    {
      path: "../public/fonts/IntegralCF-HeavyOblique.woff2",
      weight: "900",
      style: "italic",
    },
  ],
  variable: "--font-integral",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Mory AI Labs | Studio d'Ingénierie IA & Agents Autonomes",
  description:
    "Laboratoire d'ingénierie et de développement de solutions d'intelligence artificielle sur-mesure, agents autonomes et modèles prédictifs haute performance.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${integralCF.variable} scroll-smooth`} data-theme="cyber-emerald">
      <body className="relative bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased transition-colors duration-500">
        <ThemeProvider>
          <div className="grain" />
          <Navbar />
          <main className="relative">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
