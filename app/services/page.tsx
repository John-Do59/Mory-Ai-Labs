"use client";

import Link from "next/link";
import {
  Check,
  ArrowRight,
  Bot,
  Database,
  TrendingUp,
  Clock,
  Layers,
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      num: "01",
      category: "Automatisation & Décision",
      title: "AGENTS IA & WORKFLOWS AUTONOMES",
      icon: Bot,
      color: "accent",
      description:
        "Nous concevons des agents IA personnalisés capables de gérer des flux de travail complexes de manière autonome. Du traitement de documents volumineux au pilotage de vos logiciels métiers, nos agents réduisent la charge manuelle jusqu'à 85%.",
      points: [
        "Intégration & Fine-Tuning de LLMs propriétaires (Mistral, LLaMA, GPT)",
        "Systèmes multi-agents avec validation humaine (Human-in-the-loop)",
        "Automatisation de back-office & copilotes métiers",
        "Connecteurs API, bases de connaissances RAG & Webhooks",
      ],
      deliverables: "Agent déployé en production, API sécurisée, monitoring continu.",
    },
    {
      num: "02",
      category: "Data Platform & Pipelines",
      title: "DATA ENGINEERING & ARCHITECTURES",
      icon: Database,
      color: "highlight",
      description:
        "Des flux de données robustes sont la colonne vertébrale de toute intelligence artificielle. Nous construisons des architectures ETL/ELT temps réel, des bases vectorielles et des pipelines souverains qui alimentent vos modèles avec des données propres et sécurisées.",
      points: [
        "Pipelines ETL / ELT haute performance (Airflow, dbt)",
        "Architectures Cloud & On-Premise sécurisées et souveraines",
        "Bases vectorielles & recherche sémantique (pgvector, Qdrant)",
        "APIs FastAPI scalables et conteneurisation Docker",
      ],
      deliverables: "Pipelines automatisés, base vectorielle indexée, documentation technique.",
    },
    {
      num: "03",
      category: "Modélisation & Prédiction",
      title: "MACHINE LEARNING & COMPUTER VISION",
      icon: TrendingUp,
      color: "accent",
      description:
        "Entraînement de modèles spécialisés sur vos séries temporelles et données métiers pour anticiper les fluctuations, calculer les risques et automatiser l'analyse visuelle de photos ou plans.",
      points: [
        "Modélisation prédictive & scoring de risque sur-mesure",
        "Vision par ordinateur & extraction intelligente d'images / plans",
        "Analyses géospatiales & simulations climatiques (GIS, CMIP6)",
        "Dashboards décisionnels & monitoring de dérive (drift)",
      ],
      deliverables: "Modèle entraîné, benchmark de précision, dashboard de prédiction.",
    },
  ];

  const packages = [
    {
      title: "Audit & PoC Sprint (10 Jours)",
      duration: "10 jours",
      badge: "Idéal pour démarrer",
      description:
        "Validation de la faisabilité technique et prototypage rapide d'un premier agent ou modèle sur vos données réelles.",
      features: [
        "Audit technique de vos données",
        "Cadrage de l'architecture cible",
        "Prototype fonctionnel interactif",
        "Calcul de ROI et feuille de route",
      ],
      highlight: true,
    },
    {
      title: "Ingénierie & Déploiement Complet",
      duration: "4 à 8 semaines",
      badge: "Sur-Mesure",
      description:
        "Conception, développement et mise en production de votre solution IA clé en main avec transfert de compétences.",
      features: [
        "Développement intégral des agents / pipelines",
        "Intégration dans vos systèmes existants",
        "Tests de charge, sécurité & RGPD",
        "Accompagnement & formation des équipes",
      ],
      highlight: false,
    },
  ];

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen relative overflow-hidden bg-[#051610]">
      {/* Halos */}
      <div className="absolute top-1/4 right-1/4 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/3 left-1/4 w-[500px] h-[500px] bg-mory-highlight/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-24"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-mory-accent mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-mory-accent animate-pulse" />
            Offres d'Ingénierie &amp; Solutions
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white mb-6 font-integral">
            NOTRE <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-accent via-emerald-300 to-mory-highlight">
              EXPERTISE.
            </span>
          </h1>
          <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl font-normal">
            Du cadrage stratégique au déploiement en production : découvrez comment nous concevons
            vos agents IA et infrastructures data sur-mesure.
          </p>
        </motion.div>

        {/* Services List */}
        <div className="space-y-16 mb-28">
          {services.map((service, index) => {
            const isAccent = service.color === "accent";
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="neomorph-card p-8 md:p-12 relative overflow-hidden"
              >
                <div className="flex items-center justify-between gap-4 mb-4">
                  <span
                    className={`text-xs font-integral font-normal uppercase tracking-widest ${
                      isAccent ? "text-mory-accent" : "text-mory-highlight"
                    }`}
                  >
                    {service.num} / {service.category}
                  </span>
                  <div
                    className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                      isAccent
                        ? "bg-mory-accent/10 text-mory-accent border border-mory-accent/20"
                        : "bg-mory-highlight/10 text-mory-highlight border border-mory-highlight/20"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 font-integral">
                  {service.title}
                </h2>

                <div className="grid md:grid-cols-12 gap-8 items-start mb-8">
                  <div className="md:col-span-6 text-emerald-100/90 text-base md:text-lg leading-relaxed">
                    <p className="mb-4">{service.description}</p>
                    <div className="p-4 rounded-xl neomorph-inset text-xs text-emerald-200/80">
                      <strong className="text-white block mb-1 font-integral uppercase">
                        Livrables clés :
                      </strong>
                      {service.deliverables}
                    </div>
                  </div>

                  <div className="md:col-span-6">
                    <ul className="space-y-3.5">
                      {service.points.map((pt, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-3 text-sm md:text-base text-white/90"
                        >
                          <Check
                            className={`w-5 h-5 shrink-0 ${
                              isAccent ? "text-mory-accent" : "text-mory-highlight"
                            }`}
                          />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement Modes */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-integral font-normal uppercase tracking-widest text-mory-accent block mb-2">
              Modalités de Collaboration
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white font-integral">
              Formats d'Intervention
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.15 }}
                className={`neomorph-card p-8 md:p-10 flex flex-col justify-between ${
                  pkg.highlight ? "border-mory-accent/30" : ""
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-xs font-integral font-normal text-mory-accent uppercase px-3 py-1 rounded-full neomorph-pill">
                      {pkg.badge}
                    </span>
                    <span className="text-xs font-mono text-emerald-300/60 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {pkg.duration}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3 font-integral">{pkg.title}</h3>
                  <p className="text-emerald-100/80 text-sm mb-6 leading-relaxed">
                    {pkg.description}
                  </p>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2.5 text-xs sm:text-sm text-white/90">
                        <Check className="w-4 h-4 text-mory-accent shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link
                  href="/contact"
                  className={`inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-integral font-normal text-xs uppercase tracking-wider transition-all duration-300 ${
                    pkg.highlight
                      ? "bg-mory-accent text-mory-bg hover:bg-white shadow-[0_0_20px_rgba(0,255,148,0.4)]"
                      : "neomorph-pill text-white hover:bg-white/10"
                  }`}
                >
                  <span>Demander un Cadrage</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-mory-accent text-mory-bg font-integral font-normal text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] transition-all duration-300 shadow-xl"
          >
            <span>Échanger avec nos Ingénieurs</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
