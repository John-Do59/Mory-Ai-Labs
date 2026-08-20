"use client";

import Link from "next/link";
import Image from "next/image";
import {
  BrainCircuit,
  ShieldCheck,
  Zap,
  ArrowRight,
  Code2,
  Cpu,
  Layers,
  Sparkles,
  Rocket,
  Database,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBannerCard from "@/components/ParallaxBannerCard";

export default function AboutPage() {
  const values = [
    {
      icon: BrainCircuit,
      title: "Intelligence Stratégique",
      description:
        "Je ne développe pas de l'IA pour la beauté de l'algorithme, mais pour générer un retour sur investissement direct, concret et mesurable dès les premières semaines.",
      tag: "Approche ROI-Centric",
    },
    {
      icon: ShieldCheck,
      title: "Souveraineté & Sécurité",
      description:
        "Vos données métiers restent votre propriété exclusive. Je privilégie le déploiement de modèles ouverts (open-source) sur vos infrastructures cloud privées ou souveraines.",
      tag: "Protection Maximale",
    },
    {
      icon: Zap,
      title: "Vitesse d'Exécution PoC",
      description:
        "De la formalisation du besoin au premier prototype fonctionnel connecté à vos flux de données en moins de 14 jours ouvrés.",
      tag: "Time-to-Value Réduit",
    },
  ];

  const stats = [
    { value: "14j", label: "Du brief au prototype fonctionnel" },
    { value: "100%", label: "Vous repartez avec le code source" },
    { value: "1", label: "Seul interlocuteur, de A à Z" },
    { value: "5+", label: "Secteurs d'activité maîtrisés de l'intérieur" },
  ];

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />
      <div className="absolute top-2/3 -right-32 w-[600px] h-[600px] bg-[var(--accent-secondary)]/15 rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />

      <div className="max-w-screen-2xl mx-auto">
        
        {/* SECTION 1 : GRANDE CARTE HORIZONTALE Mory-AI-Labs13 (1344×768) */}
        <ParallaxBannerCard
          src="/images/Mory-AI-Labs13.webp"
          alt="Mory AI Labs — AI Engineer"
          className="mb-16"
          priority
          badgeTopLeft={
            <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider backdrop-blur-md">
              AI Engineer Full-Stack · De A à Z
            </span>
          }
        />

        {/* SECTION 2 : TITRE & TEXTE EN DESSOUS */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 font-integral">
            DU TERRAIN AU CODE. <br />
            <span className="title-gradient">
              MON PARCOURS.
            </span>
          </h1>

          <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl font-normal leading-relaxed transition-colors duration-500 max-w-3xl mx-auto">
            Avant d'écrire ma première ligne de code, j'ai travaillé sur le terrain — en logistique, grande distribution, BTP, industrie et paysage. C'est cette expérience qui donne à mes applications IA une longueur d'avance : je comprends les métiers pour lesquels je construis.
          </p>
        </div>

        {/* SECTION 3 : GRANDE CARTE HORIZONTALE AVEC L'IMAGE Mory-AI-Labs15 (1344×768) */}
        <ParallaxBannerCard
          src="/images/Mory-AI-Labs15.webp"
          alt="Mory AI Labs — Applications IA &amp; Modèles"
          className="mb-24"
          overlayBottom={
            <div className="flex flex-wrap items-end justify-between gap-4">
              <div>
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-[11px] font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-2 w-fit backdrop-blur-md">
                  Architecture &amp; Modèles IA
                </span>
                <p className="text-white text-base sm:text-xl font-bold font-integral drop-shadow-md">
                  Du Pipeline de Données au Produit en Production
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] neomorph-pill px-4 py-2 backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                <span>Production &amp; Déploiement Continu</span>
              </div>
            </div>
          }
        />

        {/* Founder Bio Bento Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neomorph-card p-8 md:p-14 mb-24 relative overflow-hidden group hover:border-[var(--accent-primary)] transition-colors"
        >
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-primary)] block mb-2">
                Fondateur &amp; AI Engineer
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-integral">
                Amaury Rammanat
              </h2>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6 font-sans transition-colors duration-500">
                Avant de concevoir des systèmes d'IA, j'ai passé des années sur le terrain — en logistique, en industrie et dans le paysage. Cette réalité opérationnelle, je la connais par cœur : les heures perdues sur des tâches manuelles, les devis chronophages et le manque d'outils adaptés. J'ai très vite compris que l'IA était le tournant technologique majeur à ne pas manquer pour transformer ces métiers. Devenu AI Engineer, je construis aujourd'hui des applications et des agents pensés pour le monde réel : simples à prendre en main, connectés à vos données et immédiatement rentables.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-white">
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill">
                  Applications IA Full-Stack (Web &amp; Cloud)
                </span>
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill">
                  IA Connectée à vos Données Métier
                </span>
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill">
                  Agents Autonomes &amp; Automatisation
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 rounded-full overflow-hidden shadow-[0_0_50px_var(--accent-glow),0_0_80px_var(--accent-secondary)] ring-2 ring-[var(--accent-primary)]/60 hover:ring-[var(--accent-primary)] transition-all duration-500 group-hover:scale-105">
                <Image
                  src="/images/Mory-AI-Labs12.webp"
                  alt="Mory AI Labs"
                  fill
                  sizes="224px"
                  className="object-cover object-center select-none transition-transform duration-700 ease-out hover:scale-110"
                />
                {/* Overlay subtil */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-t from-[var(--bg-primary)]/40 via-transparent to-transparent pointer-events-none" />
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="neomorph-card p-8 text-center flex flex-col justify-center items-center"
            >
              <span className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] mb-2 stat-val">
                {stat.value}
              </span>
              <p className="text-xs md:text-sm text-[var(--text-secondary)] font-medium transition-colors duration-500">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-secondary)] block mb-2">
              Principes Fondateurs
            </span>
            <h2 className="text-3xl md:text-5xl font-bold uppercase tracking-tight text-white font-integral">
              Ma Philosophie de Travail
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((val, index) => {
              const Icon = val.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className="neomorph-card p-8 group hover:border-[var(--accent-primary)] transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-primary)] mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-2">
                      {val.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[var(--accent-primary)] transition-colors font-integral">
                      {val.title}
                    </h3>
                    <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                      {val.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* SECTION BUILDER SAAS IA & ACCÉLÉRATION BUSINESS */}
        <div className="mb-24">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-secondary)] block mb-3">
              Stack Technique &amp; Expertise Full-Stack
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-integral mb-4">
              Ce que je maîtrise <span className="title-gradient">de A à Z</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base transition-colors duration-500">
              Du design de l'interface au déploiement cloud, je gère l'intégralité de la stack — un seul interlocuteur pour votre projet complet.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Pilier 1 : Développement SaaS IA */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase px-3 py-1 rounded-full neomorph-pill">
                    Product Builder
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  Frontend &amp; Applications Web IA
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Interfaces réactives et premium avec Next.js / React / TypeScript. De la landing page à l'application SaaS complète avec dashboard, authentification et UX orientée conversion.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Applications web complètes, dashboards &amp; espaces clients</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Systèmes de paiement, abonnements &amp; facturation</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Assistants IA conversationnels intégrés aux flux utilisateurs</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pilier 2 : Data Engineering & Pipelines */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-secondary)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent-secondary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-secondary)] group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-[var(--accent-secondary)] uppercase px-3 py-1 rounded-full neomorph-pill">
                    Data Core
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  Backend, APIs &amp; Pipelines de Données
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  APIs performantes avec FastAPI / Python, pipelines de données structurés, bases vectorielles pour vos agents IA — tout ce qui fait tourner votre produit en coulisses.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span>Connexion directe à vos bases de données, CRM et documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span>Recherche intelligente et réponses précises sans hallucination</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span>Isolation totale de vos données &amp; conformité RGPD stricte</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pilier 3 : Machine Learning & Modèles Spécialisés */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase px-3 py-1 rounded-full neomorph-pill">
                    AI &amp; ML Modeling
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  Machine Learning &amp; Vision par Ordinateur
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Modèles prédictifs entraînés sur vos données métier, analyse automatique d'images et de photos terrain. Des outils de prédiction qui connaissent votre secteur — pas des boîtes noires génériques.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Modèles entraînés sur votre vocabulaire et vos règles métier</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Scoring prédictif, détection d'anomalies &amp; prévisions</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Analyse automatique de photos de terrain &amp; documents scannés</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Pilier 4 : DevOps, Déploiement & Accélération Business */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-[var(--accent-primary)] transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-[var(--accent-primary)]/10 border border-[var(--card-border)] flex items-center justify-center text-[var(--accent-primary)] group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase px-3 py-1 rounded-full neomorph-pill">
                    DevOps &amp; ROI
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  DevOps, Cloud &amp; Déploiement
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Docker, CI/CD, déploiement sur cloud souverain, monitoring en temps réel. Je gère la mise en production de A à Z — votre app tourne, je surveille que ça reste stable.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Docker · CI/CD · Déploiement Cloud Souverain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Monitoring de dérive (drift), latence &amp; coûts GPU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Focus ROI : automatisation rentable et scalable</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neomorph-card p-10 text-center flex flex-col items-center justify-center"
        >
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-integral">
            Un projet en tête ?
          </h3>
          <p className="text-[var(--text-secondary)] text-base max-w-xl mb-8 font-sans transition-colors duration-500">
            Décrivez-moi votre problématique métier en quelques lignes. Je vous réponds personnellement sous 48h avec une première analyse — gratuite, sans engagement.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full btn-theme-primary font-integral font-normal text-xs uppercase tracking-wider shadow-xl"
          >
            <span>Parlons de votre projet</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
