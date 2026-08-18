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
      path: "../public/fonts/IntegralCF-Bold.woff2",
      weight: "700",
      style: "normal",
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
    <html lang="fr" className={`${inter.variable} ${integralCF.variable}`} data-theme="cyber-emerald">
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
