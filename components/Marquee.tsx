"use client";

import { motion } from "framer-motion";

const items = [
  "APPS IA SUR-MESURE",
  "AGENTS AUTONOMES",
  "PROTOTYPE EN 14 JOURS",
  "VOS DONNÉES RESTENT LES VÔTRES",
  "FULL-STACK IA",
  "DU CODE AU CLOUD",
  "UN SEUL INTERLOCUTEUR",
  "MACHINE LEARNING & VISION",
];

export default function Marquee() {
  return (
    <div className="py-6 border-y border-[var(--marquee-border)] bg-[var(--marquee-bg)] backdrop-blur-xl overflow-hidden relative z-20 transition-colors duration-500">
      <div className="flex w-[200%] animate-marquee select-none">
        <div className="flex items-center gap-12 whitespace-nowrap px-6">
          {items.map((item, index) => (
            <div key={index} className="flex items-center gap-12">
              <span className="text-xl sm:text-2xl font-bold uppercase tracking-wider font-integral text-white hover:text-[var(--accent-primary)] transition-colors">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-primary)] shadow-[0_0_12px_var(--accent-primary)] transition-colors duration-500" />
            </div>
          ))}
        </div>
        <div className="flex items-center gap-12 whitespace-nowrap px-6">
          {items.map((item, index) => (
            <div key={`dup-${index}`} className="flex items-center gap-12">
              <span className="text-xl sm:text-2xl font-bold uppercase tracking-wider font-integral text-white hover:text-[var(--accent-primary)] transition-colors">
                {item}
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-[var(--accent-secondary)] shadow-[0_0_12px_var(--accent-secondary)] transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
