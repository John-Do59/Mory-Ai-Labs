"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-28 px-6 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        <div className="relative rounded-3xl p-10 sm:p-16 md:p-20 text-center overflow-hidden bg-[var(--bg-card)] border-2 border-[var(--card-border)] shadow-[0_0_80px_var(--accent-glow)] transition-all duration-500">
          {/* Ambient Glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-gradient-to-r from-[var(--accent-glow)] via-[var(--accent-secondary)]/20 to-[var(--bg-secondary)]/30 blur-[120px] pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] mb-6 uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              Un projet en tête ?
            </div>

            <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6 font-integral">
              DÉCRIVEZ-MOI VOTRE <br />
              <span className="title-gradient">
                PROBLÈME MÉTIER.
              </span>
            </h2>

            <p className="text-[var(--text-secondary)] text-base sm:text-lg mb-10 max-w-xl mx-auto font-normal transition-colors duration-500">
              Envoyez-moi un email avec votre problématique. Je vous réponds personnellement sous 48 heures avec une première analyse de faisabilité — gratuite, sans engagement.
            </p>

            <Link
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 rounded-full btn-theme-primary font-integral font-normal text-xs md:text-sm uppercase tracking-wider shadow-2xl hover:scale-105 transition-transform"
            >
              <span>Parlons de votre projet</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
