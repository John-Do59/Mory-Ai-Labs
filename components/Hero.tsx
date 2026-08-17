"use client";

import { useEffect, useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ChevronDown } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const typewriterPhrases = [
  "De la R&D prédictive aux agents métiers autonomes : nous concevons, entraînons et déployons vos solutions d'IA propriétaires.",
  "Architectures de données souveraines et modèles d'apprentissage sur-mesure pour transformer vos opérations.",
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
      className="min-h-screen flex flex-col justify-between px-6 pt-28 sm:pt-32 pb-12 relative overflow-hidden bg-[#051610]"
      id="hero-section"
    >
      {/* Ambient Forest Sapphire Background Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#051610]/80 via-transparent to-[#051610] pointer-events-none -z-30" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-tr from-emerald-500/15 via-mory-accent/10 to-transparent rounded-full blur-[180px] pointer-events-none -z-20" />

      {/* Hero Foreground Content */}
      <div className="max-w-screen-2xl mx-auto w-full text-center relative z-20 my-auto flex flex-col items-center">
        
        {/* BADGE / CARD CIRCULAIRE ÉPOUSANT LA BORDURE VERTE DU CERCLE DE L'IMAGE */}
        <motion.div
          style={{ y: mirrorY }}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-10 group flex items-center justify-center"
        >
          {/* Halo lumineux circulaire d'arrière-plan */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-mory-accent/30 via-emerald-400/20 to-mory-highlight/20 blur-2xl group-hover:blur-3xl transition-all duration-700 pointer-events-none" />

          {/* Card Circulaire épousant les contours */}
          <div className="relative w-[280px] sm:w-[380px] md:w-[460px] lg:w-[500px] aspect-square rounded-full p-2 sm:p-2.5 bg-gradient-to-b from-emerald-400/40 via-black/85 to-[#051610] border-2 border-mory-accent/50 shadow-[0_0_60px_rgba(0,255,148,0.45),0_15px_45px_rgba(0,0,0,0.9),inset_0_0_25px_rgba(0,255,148,0.2)] backdrop-blur-2xl overflow-hidden flex items-center justify-center transition-all duration-700 group-hover:scale-[1.03] group-hover:border-mory-accent group-hover:shadow-[0_0_80px_rgba(0,255,148,0.6)]">
            
            {/* Surface Vitrée Circulaire Intérieure */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#030E0A] flex items-center justify-center p-1 sm:p-1.5">
              
              {/* L'image circulaire prenant tout le disque intérieur */}
              <Image
                src="/images/Mory-AI-Labs.png"
                alt="Mory AI Labs Emblème Circulaire"
                fill
                sizes="(max-width: 768px) 380px, 500px"
                className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
                priority
              />

              {/* Reflet Verre Saphir Diagonal */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.08] to-transparent pointer-events-none rounded-full" />

              {/* Anneau de lueur interne */}
              <div className="absolute inset-0 rounded-full border border-mory-accent/20 pointer-events-none" />
            </div>

            {/* Biseau lumineux supérieur */}
            <div className="absolute inset-x-1/4 top-0 h-[2px] bg-gradient-to-r from-transparent via-white/70 to-transparent pointer-events-none" />
          </div>
        </motion.div>

        {/* Clear & Legible Integral CF Title */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-6 max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight uppercase font-bold text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] font-integral">
            INTELLIGENCE ARTIFICIELLE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-accent via-emerald-300 to-mory-highlight">
              SUR-MESURE &amp; SOUVERAINE.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-emerald-100/90 mb-10 h-[3.5rem] flex items-center justify-center font-normal drop-shadow-md"
        >
          <p>
            {currentText}
            <span className="text-mory-accent font-bold animate-pulse ml-0.5">|</span>
          </p>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-mory-accent text-mory-bg font-integral font-normal text-xs md:text-sm uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,148,0.6)] transition-all duration-300 shadow-xl shadow-black/50"
          >
            <span>Démarrer un Cadrage IA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full neomorph-pill text-white font-integral font-normal text-xs md:text-sm uppercase tracking-wider hover:bg-white/10 transition-all duration-300"
          >
            <span>Explorer nos Solutions</span>
            <ChevronDown className="w-4 h-4 opacity-60" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Status Bar (z-20) */}
      <div className="max-w-screen-2xl mx-auto w-full relative z-20 flex flex-wrap items-center justify-between gap-4 text-xs font-integral font-normal uppercase tracking-wider text-white/70 pt-6 border-t border-emerald-500/15 mt-8">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-mory-accent animate-pulse" />
          <span>Agents Autonomes &amp; Modèles Prédictifs Métiers</span>
        </div>
        <div className="flex items-center gap-4">
          <span>100% Souverain &amp; Sécurisé</span>
          <span className="opacity-40">|</span>
          <span>Lille &amp; Paris</span>
        </div>
      </div>
    </section>
  );
}
