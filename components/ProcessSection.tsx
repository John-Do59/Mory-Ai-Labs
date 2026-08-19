"use client";

import { motion } from "framer-motion";
import ParallaxBannerCard from "./ParallaxBannerCard";

const steps = [
  {
    num: "01",
    phase: "PHASE 1 · 2 SEMAINES",
    title: "Cadrage & PoC Validé",
    description:
      "Audit de faisabilité technique sur vos données réelles, benchmark d'architectures et livraison d'un prototype fonctionnel chiffré.",
  },
  {
    num: "02",
    phase: "PHASE 2 · 4-8 SEMAINES",
    title: "Ingénierie & Fine-Tuning",
    description:
      "Entraînement des modèles spécialisés, intégration des pipelines RAG, développement des agents et tests de robustesse sous charge.",
  },
  {
    num: "03",
    phase: "PHASE 3 · DÉPLOIEMENT",
    title: "Mise en Prod & Monitoring",
    description:
      "Intégration dans votre infrastructure cloud souveraine, observabilité de latence / dérive et transfert de compétences à vos équipes.",
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
            Méthodologie Éprouvée
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-integral">
            NOTRE ROADMAP D'EXÉCUTION
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
