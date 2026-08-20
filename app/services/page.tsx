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
      tag: "AUTOMATISATION MÉTIER",
      title: "Agents IA Autonomes & Copilotes",
      description:
        "Création d'assistants sur-mesure capables de naviguer dans vos outils métiers, d'exécuter des tâches répétitives et d'automatiser vos processus avec un contrôle total.",
      deliverables: [
        "Agents connectés directement à vos logiciels, ERP et CRM",
        "Automatisation de devis, traitement de documents et support client",
        "Traçabilité complète, sécurité et validation humaine intégrée",
      ],
    },
    {
      icon: Database,
      tag: "VOS DONNÉES & IA",
      title: "Applications IA Connectées à vos Données",
      description:
        "Indexation intelligente de vos bases documentaires (contrats, manuels, historiques SQL) pour des réponses fiables, instantanées et sourcées à 100%.",
      deliverables: [
        "Recherche intelligente multi-documents et bases de données",
        "Réponses précises sans hallucination avec sources citées",
        "Isolation totale des données et respect strict du RGPD",
      ],
    },
    {
      icon: Cpu,
      tag: "PRÉDICTION & VISION",
      title: "Machine Learning & Modèles Sur-Mesure",
      description:
        "Entraînement de modèles prédictifs et d'analyse d'images spécialisés sur votre secteur pour anticiper les risques, prédire les pannes ou automatiser le contrôle visuel.",
      deliverables: [
        "Modèles entraînés sur vos données historiques et règles métier",
        "Analyse automatique de photos de terrain et détection visuelle",
        "Architecture optimisée pour un fonctionnement rapide et économique",
      ],
    },
  ];

  const engagementTiers = [
    {
      badge: "FORFAIT CADRÉ & RAPIDE",
      title: "Sprint Prototype (14 Jours)",
      desc: "Une mission forfaitaire courte et à budget maîtrisé pour concevoir et tester un premier prototype fonctionnel sur vos données réelles, et valider le ROI avant tout engagement lourd.",
      features: [
        "Cadrage technique et définition précise du périmètre",
        "Développement d'un prototype connecté à vos données",
        "Rapport de performance & feuille de route de production",
      ],
      cta: "Commander un Sprint",
    },
    {
      badge: "CLÉ EN MAIN",
      title: "Développement & Déploiement Complet",
      desc: "Conception, développement sur-mesure, entraînement des modèles, mise en production et monitoring — une prestation complète de A à Z avec un interlocuteur unique.",
      features: [
        "Stack complète : frontend, backend, IA/ML, DevOps",
        "Déploiement sécurisé sur votre cloud ou serveurs dédiés",
        "Code source, documentation et propriété intellectuelle 100% à vous",
      ],
      cta: "Lancer un Projet",
      highlighted: true,
    },
  ];

  return (
    <div className="pt-24 sm:pt-36 pb-16 sm:pb-28 px-4 sm:px-6 min-h-screen relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/4 -right-32 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[var(--accent-glow)] rounded-full blur-[120px] sm:blur-[180px] pointer-events-none -z-10 transition-all duration-700" />
      <div className="absolute top-3/4 -left-32 w-[320px] sm:w-[600px] h-[320px] sm:h-[600px] bg-[var(--accent-secondary)]/15 rounded-full blur-[120px] sm:blur-[180px] pointer-events-none -z-10 transition-all duration-700" />

      <div className="max-w-screen-2xl mx-auto">
        {/* CARTE HORIZONTALE Mory-AI-Labs14 AVEC PARALLAX & NEOMORPHISME */}
        <ParallaxBannerCard
          src="/images/Mory-AI-Labs14.webp"
          alt="Mory AI Labs — Services &amp; Applications IA"
          className="mb-10"
          priority
        />

        {/* Titre & Description EN DESSOUS de la carte image */}
        <div className="text-center max-w-4xl mx-auto mb-14 sm:mb-20">
          <h1 className="text-3xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-4 sm:mb-6 font-integral leading-tight">
            CE QUE JE PEUX <br />
            <span className="title-gradient">CONSTRUIRE POUR VOUS.</span>
          </h1>
          <p className="text-[var(--text-secondary)] text-sm sm:text-lg md:text-xl font-normal leading-relaxed transition-colors duration-500 px-2">
            Du prototype en 14 jours au produit déployé en production — je gère toute la stack : frontend, backend, machine learning, DevOps. Un seul interlocuteur, zéro intermédiaire.
          </p>
        </div>

        {/* Main Services Grid */}
        <div className="space-y-8 sm:space-y-12 mb-20 sm:mb-28">
          {mainServices.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05, ease: "easeOut" }}
                className="neomorph-card p-6 sm:p-10 md:p-12 group hover:border-[var(--accent-primary)] transition-all duration-500"
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
