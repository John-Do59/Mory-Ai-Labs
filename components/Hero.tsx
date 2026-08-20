"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const typewriterPhrases = [
  "Du pipeline de données au produit déployé — un seul interlocuteur, zéro intermédiaire.",
  "J'ai travaillé en logistique, BTP, industrie et paysage. Aujourd'hui je construis l'IA pour ces métiers.",
  "Agents IA, apps sur-mesure, SaaS métier : je transforme vos données en outils qui travaillent pour vous.",
];

export default function Hero() {
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const mirrorY = useTransform(scrollYProgress, [0, 1], [0, 50]);

  useEffect(() => {
    const fullText = typewriterPhrases[phraseIndex];
    const typingSpeed = isDeleting ? 20 : 35;

    const timeout = setTimeout(() => {
      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), 3000);
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false);
        setPhraseIndex((prev) => (prev + 1) % typewriterPhrases.length);
      } else {
        setCurrentText(
          isDeleting
            ? fullText.substring(0, currentText.length - 1)
            : fullText.substring(0, currentText.length + 1)
        );
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, phraseIndex]);

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex flex-col justify-between px-4 sm:px-6 pt-24 sm:pt-32 pb-8 sm:pb-12 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500"
      id="hero-section"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)] pointer-events-none -z-30 transition-colors duration-500" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[320px] sm:w-[600px] md:w-[850px] h-[320px] sm:h-[450px] md:h-[550px] bg-gradient-to-tr from-[var(--accent-glow)] via-[var(--bg-secondary)]/30 to-transparent rounded-full blur-[120px] sm:blur-[180px] pointer-events-none -z-20 transition-all duration-700" />

      {/* Hero Foreground Content */}
      <div className="max-w-screen-2xl mx-auto w-full text-center relative z-20 my-auto flex flex-col items-center">
        
        {/* BADGE / CARD CIRCULAIRE PREMIUM : INTÉGRATION HAUTE FIDÉLITÉ DE L'IMAGE & GLOW HOLOGRAPHIQUE */}
        <motion.div
          style={{ y: mirrorY }}
          initial={{ opacity: 0, y: -15, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative mb-8 sm:mb-12 group flex items-center justify-center select-none"
        >
          {/* Double Halo Holographique Arrière-Plan (Vert Émeraude + Ultra-Violet) */}
          <div className="absolute -inset-4 sm:-inset-6 rounded-full bg-gradient-to-tr from-[#00FF94]/30 via-[#6A01FE]/40 to-[#98FC03]/25 blur-[40px] sm:blur-[60px] group-hover:blur-[80px] group-hover:opacity-100 opacity-70 transition-all duration-700 pointer-events-none" />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-bl from-[#6A01FE]/40 via-transparent to-[#00FF94]/35 blur-xl sm:blur-2xl transition-all duration-700 pointer-events-none" />

          {/* Anneau Lumineux Extérieur Conique Bicolore (#00FF94 ⇄ #6A01FE) */}
          <div className="relative w-[220px] xs:w-[260px] sm:w-[360px] md:w-[440px] lg:w-[480px] aspect-square rounded-full p-[3px] sm:p-[4px] bg-[conic-gradient(from_210deg_at_50%_50%,#00FF94_0deg,#6A01FE_130deg,#98FC03_250deg,#00FF94_360deg)] shadow-[0_0_35px_rgba(0,255,148,0.4),0_0_60px_rgba(106,1,254,0.5),0_20px_50px_rgba(0,0,0,0.95)] sm:shadow-[0_0_50px_rgba(0,255,148,0.4),0_0_80px_rgba(106,1,254,0.5),0_30px_70px_rgba(0,0,0,0.95)] transition-all duration-700 group-hover:scale-[1.025]">
            
            {/* Disque Central Noir Profond & Verre Saphir */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#030B09] flex items-center justify-center">
              
              {/* L'image circulaire cadrée au millimètre */}
              <Image
                src="/images/Mory-AI-Labs11.webp"
                alt="Mory AI Labs — AI Engineer Indépendant"
                fill
                sizes="(max-width: 640px) 260px, (max-width: 1024px) 380px, 480px"
                className="object-cover object-center scale-[1.02] select-none transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                priority
              />

              {/* Reflet Verre Saphir Diagonal Subtil */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.07] to-transparent pointer-events-none rounded-full" />
              
              {/* Ombre Portée Intérieure Délicate pour fusionner le contour */}
              <div className="absolute inset-0 rounded-full shadow-[inset_0_0_20px_rgba(0,0,0,0.8),inset_0_1px_2px_rgba(255,255,255,0.25)] pointer-events-none" />
            </div>
          </div>
        </motion.div>

        {/* Clear & Legible Integral CF Title avec dégradé dynamique de thème */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
          className="mb-4 sm:mb-6 max-w-5xl mx-auto px-2"
        >
          <h1 className="text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.15] sm:leading-[1.1] tracking-tight uppercase font-bold text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] font-integral">
            JE CONSTRUIS VOS <br />
            <span className="title-gradient">
              APPLICATIONS IA.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.08 }}
          className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[var(--text-secondary)] mb-8 sm:mb-10 min-h-[4rem] sm:min-h-[3.5rem] px-3 flex items-center justify-center font-normal drop-shadow-md transition-colors duration-500"
        >
          <p className="leading-relaxed">
            {currentText}
            <span className="text-[var(--accent-primary)] font-bold animate-pulse ml-0.5">|</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, delay: 0.1, ease: "easeOut" }}
          className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full max-w-md sm:max-w-none px-4 sm:px-0"
        >
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 sm:py-4 rounded-full btn-theme-primary font-integral font-normal text-xs sm:text-sm uppercase tracking-wider shadow-xl shadow-black/50"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#solutions"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-7 py-3.5 sm:py-4 rounded-full neomorph-pill text-white font-integral font-normal text-xs sm:text-sm uppercase tracking-wider hover:border-[var(--accent-primary)] transition-all duration-300"
          >
            <span>Voir mes réalisations</span>
            <ChevronDown className="w-4 h-4 opacity-60" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Status Bar */}
      <div className="max-w-screen-2xl mx-auto w-full relative z-20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-integral font-normal uppercase tracking-wider text-[var(--text-secondary)] pt-4 sm:pt-6 border-t border-[var(--card-border)] mt-6 sm:mt-8 transition-colors duration-500 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span className="text-white">AI Engineer Indépendant</span>
        </div>
        <div className="flex items-center gap-3 sm:gap-4">
          <span className="text-white">Prototype livré en 14 jours</span>
          <span className="opacity-40">|</span>
          <span>Lille, France</span>
        </div>
      </div>
    </section>
  );
}
