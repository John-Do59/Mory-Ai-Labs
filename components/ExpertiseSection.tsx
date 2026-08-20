"use client";

import { Brain, Cpu, Database, Network, ShieldCheck, Zap } from "lucide-react";
import { motion } from "framer-motion";

const expertises = [
  {
    icon: Brain,
    tag: "AUTOMATISATION MÉTIER",
    title: "Agents IA & Assistants Sur-Mesure",
    description:
      "Vos équipes passent des heures sur des tâches répétitives ? Je construis des agents IA qui les exécutent seuls : génération de devis, tri de documents, réponses aux clients. Vous gardez le contrôle, l'IA fait le travail.",
  },
  {
    icon: Database,
    tag: "VOS DONNÉES, VOS RÉPONSES",
    title: "Applications IA Connectées à Vos Données",
    description:
      "Vos manuels, contrats et bases de données contiennent des réponses que vos équipes cherchent manuellement ? Je construis des apps qui interrogent vos documents et renvoient des réponses sourcées et fiables — sans que vos données quittent votre serveur.",
  },
  {
    icon: Cpu,
    tag: "PRÉDICTION & VISION",
    title: "Machine Learning & Analyse d'Images",
    description:
      "Prédire les pannes, scorer les risques, analyser des photos de terrain automatiquement ? J'entraîne des modèles spécialisés sur vos données historiques — des outils de prédiction taillés pour votre métier, pas des solutions génériques.",
  },
];

export default function ExpertiseSection() {
  return (
    <section className="py-28 px-6 bg-[var(--bg-primary)] relative overflow-hidden transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-primary)] block mb-3">
            Ce que je construis
          </span>
          <h2 className="text-3xl sm:text-5xl font-bold uppercase tracking-tight text-white font-integral">
            MES DOMAINES D'INTERVENTION
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {expertises.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-all duration-300"
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
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
