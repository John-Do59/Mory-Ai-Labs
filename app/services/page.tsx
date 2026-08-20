"use client";

import Link from "next/link";
import {
  Brain,
  Cpu,
  Database,
  Shield,
  Zap,
  ArrowRight,
  CheckCircle2,
  Terminal,
  Server,
  Workflow,
  Lock,
} from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBannerCard from "@/components/ParallaxBannerCard";

export default function ServicesPage() {
  const mainServices = [
    {
      icon: Brain,
      tag: "AGENTIQUE & AUTOMATISATION",
      title: "Agents IA Autonomes & Copilotes",
      description:
        "Création de copilotes sur-mesure capables de naviguer dans vos logiciels métiers, d'orchestrer des tâches répétitives et d'automatiser le support et les opérations avec une autonomie contrôlée.",
      deliverables: [
        "Architectures Multi-Agents spécialisées (LangGraph, CrewAI)",
        "Interconnexion directe avec vos ERP, CRM et APIs métiers",
        "Garde-fous stricts, traçabilité et validation humaine si requise",
      ],
    },
    {
      icon: Database,
      tag: "RAG & BASES VECTORIELLES",
      title: "Recherche Sémantique & RAG Souverain",
      description:
        "Indexation intelligente de vos bases documentaires (contrats, manuels, bases SQL) via des vector stores haute performance pour des réponses instantanées et garanties sans hallucination.",
      deliverables: [
        "Pipelines d'ingestion temps réel (pgvector, Qdrant, Milvus)",
        "Reranking sémantique & Chunking contextuel avancé",
        "Isolation totale des données et respect strict du RGPD",
      ],
    },
    {
      icon: Cpu,
      tag: "DEEP LEARNING & COMPUTER VISION",
      title: "Machine Learning & Modèles Sur-Mesure",
      description:
        "Entraînement et fine-tuning de modèles prédictifs et de vision industrielle pour automatiser l'analyse d'images, le scoring de risques ou la maintenance prédictive.",
      deliverables: [
        "Fine-Tuning de LLMs ouverts (Mistral, LLaMA, DeepSeek)",
        "Modèles de vision par ordinateur (détection, segmentation, OCR)",
        "Optimisation de l'inférence pour réduire les coûts GPU",
      ],
    },
  ];

  const engagementTiers = [
    {
      badge: "RAPIDITÉ & VALIDATION",
      title: "Sprint 14 Jours — Testez avant de vous engager",
      desc: "Vous m'expliquez votre problème. En 14 jours je vous livre un prototype fonctionnel sur vos vraies données. Vous décidez ensuite si vous voulez aller plus loin.",
      features: [
        "Échange initial et analyse de faisabilité sous 48h",
        "Prototype connecté à vos données réelles",
        "Rapport de benchmark & chiffrage du projet complet",
      ],
      cta: "Démarrer un Sprint",
    },
    {
      badge: "PROJET COMPLET",
      title: "De l'Idée au Produit Déployé",
      desc: "Architecture, développement, entraînement des modèles, mise en production et monitoring — je gère l'intégralité du projet de A à Z.",
      features: [
        "Stack complète : frontend, backend, ML, DevOps",
        "Déploiement sécurisé sur votre cloud souverain",
        "Vous repartez avec le code source et la documentation",
      ],
      cta: "Discuter du projet",
      highlighted: true,
    },
  ];

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-32 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />
      <div className="absolute top-3/4 -left-32 w-[600px] h-[600px] bg-[var(--accent-secondary)]/15 rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />

      <div className="max-w-screen-2xl mx-auto">
        {/* CARTE HORIZONTALE Mory-AI-Labs14 AVEC PARALLAX & NEOMORPHISME */}
        <ParallaxBannerCard
          src="/images/Mory-AI-Labs14.jpg"
          alt="Mory AI Labs Ingénierie & Solutions"
          className="mb-10"
          priority
        />

        {/* Titre & Description EN DESSOUS de la carte image */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 font-integral">
            CE QUE JE PEUX <br />
            <span className="title-gradient">CONSTRUIRE POUR VOUS.</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl font-normal leading-relaxed transition-colors duration-500">
            Du prototype en 14 jours au produit déployé en production — je gère toute la stack : frontend, backend, machine learning, DevOps. Un seul interlocuteur, zéro intermédiaire.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="space-y-12 mb-28">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="neomorph-card p-8 sm:p-12 group hover:border-[var(--accent-primary)] transition-all duration-500"
              >
                <div className="grid lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-6">
                    <div className="w-14 h-14 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-primary)] mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-2">
                      {service.tag}
                    </span>
                    <h2 className="text-2xl sm:text-4xl font-bold text-white mb-4 font-integral">
                      {service.title}
                    </h2>
                    <p className="text-[var(--text-secondary)] text-base leading-relaxed font-sans mb-6 transition-colors duration-500">
                      {service.description}
                    </p>
                  </div>

                  <div className="lg:col-span-6 border-t lg:border-t-0 lg:border-l border-[var(--card-border)] pt-6 lg:pt-0 lg:pl-8 transition-colors duration-500">
                    <span className="text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-primary)] block mb-4">
                      Livrables Clés :
                    </span>
                    <div className="space-y-3">
                      {service.deliverables.map((deliv, dIdx) => (
                        <div key={dIdx} className="flex items-center gap-3 text-sm text-white">
                          <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                          <span>{deliv}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Engagement Models */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-secondary)] block mb-2">
              On travaille ensemble comment ?
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white font-integral">
              DEUX FAÇONS DE DÉMARRER
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {engagementTiers.map((tier, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.08, ease: "easeOut" }}
                className={`neomorph-card p-8 sm:p-12 flex flex-col justify-between ${
                  tier.highlighted ? "border-2 border-[var(--accent-primary)] shadow-[0_0_40px_var(--accent-glow)]" : ""
                }`}
              >
                <div>
                  <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-3">
                    {tier.badge}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-integral">
                    {tier.title}
                  </h3>
                  <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-8 font-sans transition-colors duration-500">
                    {tier.desc}
                  </p>

                  <div className="space-y-3 mb-10">
                    {tier.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-3 text-sm text-white">
                        <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  href="/contact"
                  className={`w-full py-4 rounded-full font-integral font-normal text-xs uppercase tracking-wider text-center transition-all duration-300 flex items-center justify-center gap-2 ${
                    tier.highlighted
                      ? "btn-theme-primary shadow-lg"
                      : "neomorph-pill text-white hover:border-[var(--accent-primary)]"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
