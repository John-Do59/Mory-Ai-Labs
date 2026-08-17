"use client";

import { Bot, TrendingUp, Database, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function ExpertiseSection() {
  const pillars = [
    {
      icon: Bot,
      color: "accent",
      title: "Agents Autonomes & Copilotes",
      description:
        "Conception d'agents IA intelligents capables de raisonner, d'analyser des documents complexes, de manipuler vos outils et d'automatiser des flux entiers sans intervention humaine.",
      tags: "LLMs · RAG · Workflows",
    },
    {
      icon: TrendingUp,
      color: "highlight",
      title: "Machine Learning & Prédictif",
      description:
        "Entraînement de modèles statistiques et algorithmes avancés sur vos données propriétaires pour anticiper les risques, optimiser vos coûts et prédire vos tendances critiques.",
      tags: "Scoring · Forecasting · GIS",
    },
    {
      icon: Database,
      color: "white",
      title: "Architectures Data & Cloud",
      description:
        "Pipelines ETL/ELT robustes, vector databases, APIs FastAPI scalables et conteneurisation Docker pour un passage en production sécurisé et souverain.",
      tags: "FastAPI · PostgreSQL · Docker",
    },
  ];

  return (
    <section className="py-32 px-6 bg-white/[0.01] border-t border-white/[0.06] relative" id="expertise">
      <div className="max-w-screen-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full vision-pill text-xs font-mono text-mory-accent mb-4 tracking-wider uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-mory-accent" />
            Ce Que Nous Construisons Pour Vous
          </div>
          <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white mb-6">
            L'Ingénierie IA au service de vos{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-accent to-emerald-300">
              Gains Métiers
            </span>
          </h2>
          <p className="text-mory-secondary/80 text-base">
            Nous transformons vos flux de données et vos processus manuels en systèmes intelligents
            autonomes et ultra-performants.
          </p>
        </motion.div>

        {/* 3 Bento Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            const isAccent = pillar.color === "accent";
            const isHighlight = pillar.color === "highlight";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.15 }}
                className="vision-glass-panel p-8 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform ${
                      isAccent
                        ? "bg-mory-accent/10 border border-mory-accent/30 text-mory-accent"
                        : isHighlight
                        ? "bg-mory-highlight/10 border border-mory-highlight/30 text-mory-highlight"
                        : "bg-white/10 border border-white/20 text-white"
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3
                    className={`text-xl md:text-2xl font-bold text-white mb-3 transition-colors ${
                      isAccent
                        ? "group-hover:text-mory-accent"
                        : isHighlight
                        ? "group-hover:text-mory-highlight"
                        : "group-hover:text-emerald-300"
                    }`}
                  >
                    {pillar.title}
                  </h3>
                  <p className="text-mory-secondary/80 text-sm leading-relaxed mb-6">
                    {pillar.description}
                  </p>
                </div>
                <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between text-xs font-mono text-white/50">
                  <span>{pillar.tags}</span>
                  <ArrowUpRight
                    className={`w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                      isAccent
                        ? "text-mory-accent"
                        : isHighlight
                        ? "text-mory-highlight"
                        : "text-white"
                    }`}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
