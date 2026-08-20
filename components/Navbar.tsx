"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Menu, X, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const [time, setTime] = useState<string>("00:00:00");
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("fr-FR", {
          timeZone: "Europe/Paris",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateClock();
    const timer = setInterval(updateClock, 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 w-full z-50 px-3 sm:px-6 py-3 sm:py-5 transition-all duration-300 pointer-events-none"
      >
        <div
          className={`max-w-screen-2xl mx-auto flex justify-between items-center rounded-full px-4 sm:px-7 py-2.5 sm:py-3.5 border transition-all duration-500 pointer-events-auto shadow-2xl backdrop-blur-xl ${
            scrolled
              ? "bg-[var(--navbar-bg)] border-[var(--navbar-border)] shadow-black/80"
              : "bg-[var(--navbar-bg)] border-[var(--navbar-border)] shadow-black/40"
          }`}
        >
          {/* Left: Logo + Brand on Mobile / Left Info on Desktop */}
          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link href="/" className="flex items-center gap-2.5 group">
              <div className="flex-shrink-0 relative w-8 h-8 sm:w-10 sm:h-10 rounded-full overflow-hidden ring-2 ring-[var(--accent-primary)]/40 group-hover:ring-[var(--accent-primary)] transition-all duration-300 shadow-[0_0_14px_var(--accent-glow)]">
                <Image
                  src="/images/Mory-AI-Labs12.webp"
                  alt="Mory AI Labs Logo"
                  fill
                  sizes="40px"
                  className="object-cover object-center"
                  priority
                />
              </div>
              <span className="lg:hidden text-sm sm:text-base font-bold tracking-tight text-white font-integral group-hover:text-[var(--accent-primary)] transition-colors whitespace-nowrap">
                MORY AI LABS
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-2 text-[var(--text-secondary)] text-xs">
              <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
              <span className="font-mono text-white">{time}</span>
              <span className="opacity-40">|</span>
              <span className="font-integral font-normal text-xs tracking-wider text-white">Lille, FR</span>
            </div>

            {/* Bouton de Bascule de Thème (Theme Switcher Desktop) */}
            <button
              onClick={toggleTheme}
              aria-label="Changer de thème Dark Mode"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal tracking-wider uppercase transition-all duration-300 hover:scale-105 border-[var(--card-border)]"
              title={theme === "cyber-emerald" ? "Passer au thème Ultra-Violet" : "Passer au thème Cyber-Emerald"}
            >
              {theme === "cyber-emerald" ? (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#98FC03] shadow-[0_0_8px_#98FC03]" />
                  <span className="text-white text-[10px] sm:text-xs">Emerald Dark</span>
                </>
              ) : (
                <>
                  <span className="w-2.5 h-2.5 rounded-full bg-[#6A01FE] shadow-[0_0_8px_#6A01FE]" />
                  <span className="text-white text-[10px] sm:text-xs">Violet Dark</span>
                </>
              )}
            </button>
          </div>

          {/* Center: Logo Image + Text (Desktop Large Only) */}
          <Link
            href="/"
            className="hidden lg:flex absolute left-1/2 -translate-x-1/2 items-center gap-2.5 group"
          >
            <div className="relative w-8 h-8 rounded-full overflow-hidden ring-1 ring-[var(--accent-primary)]/50 group-hover:ring-[var(--accent-primary)] transition-all duration-300 shadow-[0_0_12px_var(--accent-glow)] flex-shrink-0">
              <Image
                src="/images/Mory-AI-Labs12.webp"
                alt="Mory AI Labs"
                fill
                sizes="36px"
                className="object-cover object-center"
              />
            </div>
            <span className="text-xl md:text-2xl font-bold tracking-tight text-white drop-shadow-[0_0_20px_var(--accent-glow)] font-integral group-hover:text-[var(--accent-primary)] transition-colors whitespace-nowrap">
              MORY AI LABS
            </span>
          </Link>

          {/* Right: Navigation Links + CTA + Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 sm:gap-4">
            <div className="hidden md:flex gap-6 text-xs md:text-sm font-integral font-normal tracking-wider uppercase text-white">
              <Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">
                À Propos
              </Link>
              <Link href="/services" className="hover:text-[var(--accent-primary)] transition-colors">
                Services
              </Link>
            </div>

            <Link
              href="/contact"
              className="hidden sm:inline-flex items-center gap-2 btn-theme-primary px-4 sm:px-6 py-2 sm:py-2.5 rounded-full font-integral font-normal text-xs tracking-wider uppercase shadow-lg"
            >
              <span>Discutons</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-9 h-9 rounded-full neomorph-pill text-white border border-[var(--card-border)] hover:border-[var(--accent-primary)] transition-colors"
              aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              {mobileMenuOpen ? <X className="w-4 h-4 text-[var(--accent-primary)]" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Navigation Modal */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-x-3 top-20 z-40 md:hidden bg-[var(--bg-primary)]/95 border border-[var(--card-border)] rounded-3xl p-6 shadow-2xl backdrop-blur-2xl transition-colors duration-500"
          >
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-integral uppercase text-white hover:text-[var(--accent-primary)] transition-colors py-2 border-b border-[var(--card-border)]/50"
              >
                Accueil
              </Link>
              <Link
                href="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-integral uppercase text-white hover:text-[var(--accent-primary)] transition-colors py-2 border-b border-[var(--card-border)]/50"
              >
                À Propos &amp; Parcours
              </Link>
              <Link
                href="/services"
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-integral uppercase text-white hover:text-[var(--accent-primary)] transition-colors py-2 border-b border-[var(--card-border)]/50"
              >
                Services &amp; Offres
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-integral uppercase text-[var(--accent-primary)] py-2 border-b border-[var(--card-border)]/50"
              >
                <span>Parlons de votre projet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              {/* Theme Switcher inside Mobile Menu */}
              <div className="pt-2 flex items-center justify-between">
                <span className="text-xs font-integral text-[var(--text-secondary)] uppercase">Mode d'affichage</span>
                <button
                  onClick={toggleTheme}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-full neomorph-pill text-xs font-integral text-white border border-[var(--card-border)]"
                >
                  <span
                    className={`w-2.5 h-2.5 rounded-full ${
                      theme === "cyber-emerald" ? "bg-[#98FC03]" : "bg-[#6A01FE]"
                    }`}
                  />
                  <span>{theme === "cyber-emerald" ? "Emerald Dark" : "Violet Dark"}</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
