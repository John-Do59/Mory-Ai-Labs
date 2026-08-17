"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      num: "01",
      title: "Audit & Prototypage (S1-S2)",
      description:
        "Immersion dans vos opérations, cartographie de vos flux de données et livraison d'un PoC (Proof of Concept) fonctionnel en 10 jours.",
      highlight: "accent",
    },
    {
      num: "02",
      title: "Entraînement & Architecture",
      description:
        "Développement des pipelines de données, fine-tuning des modèles sur vos règles métiers et tests rigoureux de précision.",
      highlight: "highlight",
    },
    {
      num: "03",
      title: "Déploiement & Suivi ROI",
      description:
        "Mise en production sécurisée avec monitoring continu, dashboards d'observabilité et formation de vos équipes.",
      highlight: "accent",
    },
  ];

  return (
    <section className="py-28 px-6 bg-white/[0.02] border-t border-white/[0.06] relative" id="processus">
      <div className="max-w-screen-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full vision-pill text-xs font-mono text-mory-accent mb-4 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-mory-accent" />
              De l'Idée à la Production
            </div>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white">
              Notre Méthodologie <span className="text-mory-highlight">Agile</span>
            </h2>
          </div>
          <span className="mt-4 md:mt-0 text-sm text-mory-secondary/60 font-mono">
            Délivrer vite · Mesurer le ROI · Scaler
          </span>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.15 }}
              className={`p-8 rounded-3xl vision-glass-panel group transition-colors ${
                step.highlight === "accent"
                  ? "hover:border-mory-accent/30"
                  : "hover:border-mory-highlight/30"
              }`}
            >
              <span
                className={`text-5xl font-black text-white/10 mb-6 block transition-colors stat-val ${
                  step.highlight === "accent"
                    ? "group-hover:text-mory-accent"
                    : "group-hover:text-mory-highlight"
                }`}
              >
                {step.num}
              </span>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3">{step.title}</h3>
              <p className="text-mory-secondary/80 text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
