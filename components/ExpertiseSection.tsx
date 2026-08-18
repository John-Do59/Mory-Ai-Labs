"use client";

import { Brain, Cpu, Database, Network, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const expertises = [
  {
    icon: Brain,
    tag: "AGENTIQUE & AUTOMATISATION",
    title: "Agents IA Autonomes & Copilotes",
    description:
      "Conception d'architectures multi-agents capables d'exécuter des workflows complexes, d'interagir avec vos APIs et d'orchestrer vos processus métier sans intervention humaine.",
  },
  {
    icon: Database,
    tag: "DATA & SOUVERAINETÉ",
    title: "Pipelines RAG & Bases Vectorielles",
    description:
      "Indexation intelligente et sémantique de vos patrimoines documentaires avec pgvector et Qdrant pour des réponses contextuelles fiables à 100% et sans hallucination.",
  },
  {
    icon: Cpu,
    tag: "MACHINE LEARNING",
    title: "Modélisation Prédictive & Fine-Tuning",
    description:
      "Entraînement et spécialisation de modèles ouverts (Mistral, LLaMA) et algorithmes de Computer Vision adaptés à vos contraintes sectorielles et réglementaires.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-28 px-6 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-primary)] block mb-3">
            Pôles d'Excellence
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-integral">
            NOTRE EXPERTISE TECHNIQUE
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertises.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-colors"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-primary)] mb-8 group-hover:scale-110 transition-transform">
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-2">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl font-bold text-white mb-4 font-integral">
                    {item.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed font-sans transition-colors duration-500">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
