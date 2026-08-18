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
      className="min-h-screen flex flex-col justify-between px-6 pt-28 sm:pt-32 pb-12 relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500"
      id="hero-section"
    >
      {/* Background Ambient Glows */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-primary)]/80 via-transparent to-[var(--bg-primary)] pointer-events-none -z-30 transition-colors duration-500" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-tr from-[var(--accent-glow)] via-[var(--bg-secondary)]/30 to-transparent rounded-full blur-[180px] pointer-events-none -z-20 transition-all duration-700" />

      {/* Hero Foreground Content */}
      <div className="max-w-screen-2xl mx-auto w-full text-center relative z-20 my-auto flex flex-col items-center">
        
        {/* BADGE / CARD CIRCULAIRE PREMIUM : INTÉGRATION HAUTE FIDÉLITÉ DE L'IMAGE & GLOW HOLOGRAPHIQUE */}
        <motion.div
          style={{ y: mirrorY }}
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="relative mb-12 group flex items-center justify-center select-none"
        >
          {/* Double Halo Holographique Arrière-Plan (Vert Émeraude + Ultra-Violet) */}
          <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[#00FF94]/30 via-[#6A01FE]/40 to-[#98FC03]/25 blur-[60px] group-hover:blur-[80px] group-hover:opacity-100 opacity-70 transition-all duration-700 pointer-events-none" />
          <div className="absolute -inset-2 rounded-full bg-gradient-to-bl from-[#6A01FE]/40 via-transparent to-[#00FF94]/35 blur-2xl transition-all duration-700 pointer-events-none" />

          {/* Anneau Lumineux Extérieur Conique Bicolore (#00FF94 ⇄ #6A01FE) */}
          <div className="relative w-[280px] sm:w-[380px] md:w-[450px] lg:w-[490px] aspect-square rounded-full p-[3px] sm:p-[4px] bg-[conic-gradient(from_210deg_at_50%_50%,#00FF94_0deg,#6A01FE_130deg,#98FC03_250deg,#00FF94_360deg)] shadow-[0_0_50px_rgba(0,255,148,0.4),0_0_80px_rgba(106,1,254,0.5),0_30px_70px_rgba(0,0,0,0.95)] transition-all duration-700 group-hover:scale-[1.025] group-hover:shadow-[0_0_70px_rgba(0,255,148,0.6),0_0_110px_rgba(106,1,254,0.75),0_35px_80px_rgba(0,0,0,1)]">
            
            {/* Disque Central Noir Profond & Verre Saphir */}
            <div className="relative w-full h-full rounded-full overflow-hidden bg-[#030B09] flex items-center justify-center">
              
              {/* L'image circulaire cadrée au millimètre */}
              <Image
                src="/images/Mory-AI-Labs.png"
                alt="Mory AI Labs Emblème Circulaire"
                fill
                sizes="(max-width: 768px) 380px, 500px"
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
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
          className="mb-6 max-w-5xl mx-auto"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight uppercase font-bold text-white drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)] font-integral">
            INTELLIGENCE ARTIFICIELLE <br />
            <span className="title-gradient">
              SUR-MESURE &amp; SOUVERAINE.
            </span>
          </h1>
        </motion.div>

        {/* Subtitle with Typewriter */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto text-base sm:text-lg text-[var(--text-secondary)] mb-10 h-[3.5rem] flex items-center justify-center font-normal drop-shadow-md transition-colors duration-500"
        >
          <p>
            {currentText}
            <span className="text-[var(--accent-primary)] font-bold animate-pulse ml-0.5">|</span>
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
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full btn-theme-primary font-integral font-normal text-xs md:text-sm uppercase tracking-wider shadow-xl shadow-black/50"
          >
            <span>Démarrer un Cadrage IA</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="#solutions"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full neomorph-pill text-white font-integral font-normal text-xs md:text-sm uppercase tracking-wider hover:border-[var(--accent-primary)] transition-all duration-300"
          >
            <span>Explorer nos Solutions</span>
            <ChevronDown className="w-4 h-4 opacity-60" />
          </a>
        </motion.div>
      </div>

      {/* Bottom Status Bar */}
      <div className="max-w-screen-2xl mx-auto w-full relative z-20 flex flex-wrap items-center justify-between gap-4 text-xs font-integral font-normal uppercase tracking-wider text-[var(--text-secondary)] pt-6 border-t border-[var(--card-border)] mt-8 transition-colors duration-500">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span className="text-white">Agents Autonomes &amp; Modèles Prédictifs Métiers</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-white">100% Souverain &amp; Sécurisé</span>
          <span className="opacity-40">|</span>
          <span>Lille &amp; Paris</span>
        </div>
      </div>
    </section>
  );
}
