"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [time, setTime] = useState<string>("00:00:00");
  const [scrolled, setScrolled] = useState<boolean>(false);

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
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 w-full z-50 px-6 py-5 transition-all duration-300 pointer-events-none"
    >
      <div
        className={`max-w-screen-2xl mx-auto flex justify-between items-center rounded-full px-7 py-3.5 border transition-all duration-500 pointer-events-auto ${
          scrolled
            ? "bg-[#051610]/85 backdrop-blur-xl border-emerald-500/20 shadow-2xl shadow-black/70"
            : "bg-white/[0.03] backdrop-blur-md border-white/10 shadow-lg shadow-black/30"
        }`}
      >
        {/* Left: Time & Location */}
        <div className="hidden md:flex items-center gap-3 text-xs md:text-sm font-medium opacity-70">
          <span className="w-2 h-2 rounded-full bg-mory-accent animate-pulse" />
          <span className="font-mono">{time}</span>
          <span className="opacity-40">|</span>
          <span className="font-integral font-normal text-xs tracking-wider">Lille, FR</span>
        </div>

        {/* Center: Large Logo */}
        <Link
          href="/"
          className="absolute left-1/2 -translate-x-1/2 text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-mory-accent drop-shadow-[0_0_16px_rgba(0,255,148,0.6)] font-integral hover:scale-105 transition-transform"
        >
          MORY AI LABS
        </Link>

        {/* Right: Menu & CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-xs md:text-sm font-integral font-normal tracking-wider uppercase">
            <Link href="/about" className="hover:text-mory-accent transition-colors">
              À Propos
            </Link>
            <Link href="/services" className="hover:text-mory-highlight transition-colors">
              Services
            </Link>
          </div>

          <Link
            href="/contact"
            className="group flex items-center gap-2.5 bg-mory-accent text-mory-bg px-6 py-2.5 rounded-full font-integral font-normal text-xs md:text-sm tracking-wider uppercase hover:bg-white hover:text-mory-bg transition-all duration-300 shadow-[0_0_20px_rgba(0,255,148,0.4)] hover:shadow-[0_0_25px_rgba(255,255,255,0.6)]"
          >
            <span>Discutons</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}
