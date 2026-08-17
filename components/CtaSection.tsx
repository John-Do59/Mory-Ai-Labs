"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CtaSection() {
  return (
    <section className="py-28 px-6 relative overflow-hidden">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="vision-glass-panel p-10 md:p-16 lg:p-20 text-center relative overflow-hidden border border-mory-accent/20"
        >
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-96 h-96 bg-mory-accent/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl mx-auto relative z-10">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full vision-pill text-xs font-mono text-mory-accent mb-6 uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-mory-accent animate-ping" />
              Prêt à passer à l'action ?
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
              Accélérez votre avantage concurrentiel avec l'IA.
            </h2>
            <p className="text-mory-secondary/90 text-base md:text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Que vous ayez un cas d'usage précis ou un flux opérationnel à automatiser, nos ingénieurs
              cadrent votre solution sous 48h.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-mory-accent text-mory-bg font-bold text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,148,0.6)] transition-all duration-300 shadow-xl"
              >
                <span>Planifier un Échange Stratégique</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 px-7 py-4 rounded-full vision-pill text-white text-sm font-semibold uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
              >
                <span>Découvrir le Studio</span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
