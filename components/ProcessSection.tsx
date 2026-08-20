"use client";

import { motion } from "framer-motion";
import ParallaxBannerCard from "./ParallaxBannerCard";

const steps = [
  {
    num: "01",
    phase: "PHASE 1 · 2 SEMAINES",
    title: "On échange, je prototype",
    description:
      "Vous m'expliquez votre problème métier. En 14 jours, je vous livre un prototype fonctionnel connecté à vos données réelles — pour que vous puissiez juger sur pièce.",
  },
  {
    num: "02",
    phase: "PHASE 2 · 4-8 SEMAINES",
    title: "Je construis le produit",
    description:
      "Architecture, développement, entraînement des modèles, tests de charge — je gère toute la stack pour livrer une application robuste et prête pour la production.",
  },
  {
    num: "03",
    phase: "PHASE 3 · DÉPLOIEMENT",
    title: "Déploiement & Transfert",
    description:
      "Je déploie sur votre cloud, je configure le monitoring, et je vous forme. Vous repartez avec le code source, la documentation, et un produit qui tourne.",
  },
];

export default function ProcessSection() {
  return (
    <section className="py-28 px-6 bg-[var(--bg-primary)] border-t border-[var(--card-border)] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        {/* CARTE HORIZONTALE Mory-AI-Labs16 AVEC PARALLAX & NÉOMORPHISME AU CENTRE */}
        <ParallaxBannerCard
          src="/images/Mory-AI-Labs16.png"
          alt="Mory AI Labs Roadmap d'Exécution"
          className="mb-16"
        />

        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-primary)] block mb-3">
            Comment je travaille
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-integral">
            DE L'IDÉE AU PRODUIT DÉPLOYÉ
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-all duration-300"
            >
              <div>
                <span className="text-5xl font-bold text-[var(--accent-primary)]/30 group-hover:text-[var(--accent-primary)]/70 transition-colors block mb-4 font-integral">
                  {step.num}
                </span>
                <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-2">
                  {step.phase}
                </span>
                <h3 className="text-2xl font-bold text-white mb-4 font-integral">
                  {step.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans transition-colors duration-500">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
