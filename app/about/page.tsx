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

export default function AboutPage() {
  const values = [
    {
      icon: BrainCircuit,
      title: "Intelligence Stratégique",
      description:
        "Nous ne développons pas de l'IA pour la beauté de l'algorithme, mais pour générer un retour sur investissement tangible et quantifiable dès les premiers déploiements.",
      tag: "Approche ROI-Centric",
    },
    {
      icon: ShieldCheck,
      title: "Souveraineté & Sécurité",
      description:
        "Vos données métiers restent votre propriété exclusive. Nous privilégions le déploiement de modèles ouverts (open-source) sur vos infrastructures cloud privées ou souveraines.",
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
    { value: "< 14j", label: "Délai de livraison d'un PoC opérationnel" },
    { value: "100%", label: "Propriété intellectuelle cédée au client" },
    { value: "0", label: "Dépendance aux modèles propriétaires fermés" },
    { value: "24/7", label: "Disponibilité des agents autonomes déployés" },
  ];

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/4 -left-32 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />
      <div className="absolute top-2/3 -right-32 w-[600px] h-[600px] bg-[var(--accent-secondary)]/15 rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Page Hero */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="text-center max-w-4xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Studio d'Ingénierie &amp; Venture Builder
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold uppercase tracking-tight text-white mb-6 font-integral">
            L'EXCELLENCE DE L'IA <br />
            <span className="title-gradient">
              AU SERVICE DU BUSINESS.
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg md:text-xl font-normal leading-relaxed transition-colors duration-500">
            Mory AI Labs est un studio d'ingénierie spécialisé dans la conception, l'entraînement et la mise en production de solutions d'Intelligence Artificielle sur-mesure pour les entreprises exigeantes.
          </p>
        </motion.div>

        {/* CARD HORIZONTALE AVEC OVERLAY, SHADOW ET NEOMORPHISME (Image pexels-artempodrez) */}
        <motion.div
          initial={{ opacity: 0, y: 15, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="w-full max-w-5xl mx-auto mb-24 neomorph-card p-0 group relative overflow-hidden shadow-[0_25px_70px_rgba(0,0,0,0.85),0_0_40px_var(--accent-glow)] hover:border-[var(--accent-primary)] transition-all duration-500 rounded-[28px]"
        >
          <div className="relative w-full h-[260px] sm:h-[380px] md:h-[480px] lg:h-[540px] overflow-hidden bg-[var(--emblem-bg)] transition-colors duration-500">
            {/* Photo pexels-artempodrez */}
            <Image
              src="/images/pexels-artempodrez-8533136.jpg"
              alt="Mory AI Labs Laboratoire & Recherche IA"
              fill
              sizes="(max-width: 1280px) 100vw, 1200px"
              className="object-cover object-center select-none transition-transform duration-700 ease-out group-hover:scale-105"
              priority
            />

            {/* Overlay Gradient Sombre */}
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-primary)]/95 via-[var(--bg-primary)]/40 to-transparent pointer-events-none transition-colors duration-500" />

            {/* Reflet Diagonale Verre & Lueur */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.06] to-transparent pointer-events-none" />

            {/* Badges / Légende sur l'image en bas */}
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-end justify-between gap-4 pointer-events-none">
              <div>
                <span className="px-3 py-1 rounded-full neomorph-pill text-[11px] font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider block mb-2 w-fit">
                  R&amp;D &amp; Usine Logicielle IA
                </span>
                <p className="text-white text-base sm:text-xl font-bold font-integral drop-shadow-md">
                  Ingénierie Avancée &amp; Modélisation Sur-Mesure
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-[var(--text-secondary)] neomorph-pill px-4 py-2">
                <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
                <span>Production &amp; Déploiement Continu</span>
              </div>
            </div>
          </div>
        </motion.div>

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
                Fondateur &amp; Lead Ingénieur IA
              </span>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 font-integral">
                Rammanat Amaury
              </h2>
              <p className="text-[var(--text-secondary)] text-base md:text-lg leading-relaxed mb-6 font-sans transition-colors duration-500">
                Passionné par l'architecture logicielle de pointe et les modèles d'apprentissage profond, Rammanat Amaury a fondé Mory AI Labs avec une conviction forte : l'IA générative et prédictive doit cesser d'être un gadget pour devenir un levier opérationnel direct et rentable pour les entreprises.
              </p>
              <div className="flex flex-wrap gap-4 text-xs font-mono text-white">
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill">
                  FastAPI · PyTorch · Next.js · Qdrant
                </span>
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill">
                  Architectures RAG Avancées
                </span>
                <span className="px-3.5 py-1.5 rounded-full neomorph-pill">
                  Multi-Agents Autonomes
                </span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col items-center lg:items-end justify-center">
              <div className="w-48 h-48 sm:w-56 sm:h-56 rounded-full bg-gradient-to-tr from-[var(--accent-primary)]/30 via-[var(--accent-secondary)]/20 to-[var(--bg-secondary)]/60 p-2 shadow-[0_0_50px_var(--accent-glow)] border-2 border-[var(--accent-primary)]/50 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-[var(--emblem-bg)] flex flex-col items-center justify-center text-center p-4 transition-colors duration-500">
                  <span className="text-3xl font-bold text-white font-integral">100%</span>
                  <span className="text-xs text-[var(--text-secondary)] uppercase font-integral mt-1">
                    Exécution Sur-Mesure
                  </span>
                </div>
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
              Notre Philosophie d'Ingénierie
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
              Venture Builder &amp; Usine Logicielle IA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-integral mb-4">
              De l'Idée au SaaS IA <span className="title-gradient">Prêt à Générer du Chiffre</span>
            </h2>
            <p className="text-[var(--text-secondary)] text-sm md:text-base transition-colors duration-500">
              Nous combinons le meilleur du génie logiciel, de la data science et de l'exécution business pour concevoir des produits autonomes et ultra-rentables.
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
                  Développement SaaS IA &amp; Copilotes
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Création de plateformes SaaS de bout en bout : interfaces réactives Next.js / React, APIs rapides et robustes, architecture multi-tenant et expérience utilisateur ultra-fluide orientée conversion.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Next.js 15 · TypeScript · FastAPI · Tailwind</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Systèmes de paiement, abonnements &amp; dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Copilotes conversationnels intégrés aux flux clients</span>
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
                  Data Engineering &amp; Pipelines RAG
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Ingestion, transformation et indexation sémantique de vos flux de données. Nous bâtissons des bases vectorielles scalables pour alimenter vos agents sans hallucination et avec une latence minimale.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span>Pipelines ETL/ELT temps réel · Vector Stores (pgvector, Qdrant)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span>RAG avancé multi-sources &amp; structuration de documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-secondary)] shrink-0" />
                    <span>Sécurité des données &amp; étanchéité RGPD stricte</span>
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
                  Machine Learning &amp; Computer Vision
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Fine-tuning de modèles ouverts de pointe (Mistral, LLaMA) et algorithmes prédictifs spécialisés sur vos données historiques pour anticiper les risques et automatiser la vision par ordinateur.
                </p>

                <ul className="space-y-2.5 text-xs text-white font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Fine-tuning LLM sur règles métiers spécifiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Scoring prédictif, séries temporelles &amp; forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-[var(--accent-primary)] shrink-0" />
                    <span>Extraction et analyse intelligente d'images &amp; plans</span>
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
                  DevOps, Cloud &amp; Accélération Business
                </h3>
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Mise en production sécurisée avec intégration continue, observabilité en temps réel et accompagnement stratégique pour maximiser l'adoption, la réduction des coûts et la rentabilité dès le jour 1.
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
            Prêt à transformer vos opérations avec l'IA ?
          </h3>
          <p className="text-[var(--text-secondary)] text-base max-w-xl mb-8 font-sans transition-colors duration-500">
            Planifiez un échange technique de 30 minutes pour auditer vos cas d'usage avec nos ingénieurs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full btn-theme-primary font-integral font-normal text-xs uppercase tracking-wider shadow-xl"
          >
            <span>Démarrer une collaboration</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
