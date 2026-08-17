"use client";

import Link from "next/link";
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
        "Nous analysons en profondeur vos gisements de données et vos processus métiers pour concevoir des solutions IA à fort retour sur investissement.",
      tag: "R&D & Métiers",
    },
    {
      icon: ShieldCheck,
      title: "Souveraineté & Sécurité",
      description:
        "Vos données et modèles restent votre propriété exclusive. Déploiements étanches, conformes RGPD et hébergés sur infrastructure souveraine.",
      tag: "Zero Data Leak",
    },
    {
      icon: Zap,
      title: "Exécution Rapide (PoC 10j)",
      description:
        "Du cadrage au premier prototype opérationnel en 10 jours. Nous itérons en continu pour intégrer la solution dans vos outils quotidiens.",
      tag: "Time to Market",
    },
  ];

  const stack = [
    { name: "Python / FastAPI", role: "Backend Haute Performance", icon: Code2 },
    { name: "PyTorch & Transformers", role: "Fine-Tuning & Modélisation", icon: Cpu },
    { name: "pgvector & Qdrant", role: "Bases Vectorielles RAG", icon: Layers },
    { name: "Docker & Cloud Souverain", role: "Déploiement Sécurisé", icon: Sparkles },
  ];

  const stats = [
    { val: "10j", label: "Délai moyen pour un PoC fonctionnel" },
    { val: "100%", label: "Propriété intellectuelle client" },
    { val: "+80%", label: "Gains de productivité constatés" },
    { val: "24/7", label: "Disponibilité des agents IA" },
  ];

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen relative overflow-hidden bg-[#051610]">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-mory-highlight/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-mory-accent mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-mory-accent animate-pulse" />
            Studio d'Ingénierie IA &amp; Produits
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white mb-6 font-integral">
            QUI <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-accent via-emerald-300 to-mory-highlight">
              SOMMES-NOUS.
            </span>
          </h1>

          <div className="grid md:grid-cols-12 gap-10 items-start mt-10">
            <div className="md:col-span-7 text-lg md:text-xl text-emerald-100/90 leading-relaxed font-normal">
              <p className="mb-6">
                <strong className="text-white font-semibold">Mory AI Labs</strong> est un studio
                d'ingénierie et de produits en intelligence artificielle fondé à Lille. Nous opérons à
                la convergence de la data science, du génie logiciel et des modèles de fondation pour
                bâtir des outils autonomes qui transforment la rentabilité des entreprises.
              </p>
              <p className="text-base text-emerald-200/70">
                Nous ne concevons pas des démonstrateurs éphémères : nous livrons des systèmes
                sécurisés, souverains et directement connectés à vos opérations réelles.
              </p>
            </div>

            <div className="md:col-span-5 space-y-6 neomorph-card p-6 md:p-8">
              <div>
                <span className="text-xs font-integral font-normal uppercase tracking-widest text-mory-accent block mb-1">
                  Fondateur &amp; Direction Technique
                </span>
                <p className="text-white font-semibold text-lg">Rammanat Amaury</p>
                <p className="text-xs text-emerald-300/70">Lille &amp; Paris, France</p>
              </div>
              <div className="border-t border-white/[0.06] pt-4">
                <span className="text-xs font-integral font-normal uppercase tracking-widest text-mory-highlight block mb-1">
                  Notre Mission
                </span>
                <p className="text-white/90 text-sm">
                  Démocratiser les agents autonomes et l'ingénierie de pointe pour décupler
                  l'efficacité opérationnelle des organisations.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-24"
        >
          {stats.map((stat, i) => (
            <div key={i} className="neomorph-card p-6 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-mory-accent mb-2 stat-val font-integral">
                {stat.val}
              </div>
              <div className="text-xs md:text-sm text-emerald-100/70">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* Pillars / Values */}
        <div className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-integral font-normal uppercase tracking-widest text-emerald-300/60 block mb-2">
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
                  className="neomorph-card p-8 group hover:border-mory-accent/30 transition-colors flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-mory-accent/10 border border-mory-accent/30 flex items-center justify-center text-mory-accent mb-6 group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-integral font-normal text-mory-accent uppercase tracking-wider block mb-2">
                      {val.tag}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-mory-accent transition-colors font-integral">
                      {val.title}
                    </h3>
                    <p className="text-emerald-100/80 text-sm leading-relaxed mb-6 font-sans">
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
            <span className="text-xs font-integral font-normal uppercase tracking-widest text-mory-highlight block mb-3">
              Venture Builder &amp; Usine Logicielle IA
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold uppercase tracking-tight text-white font-integral mb-4">
              De l'Idée au SaaS IA <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-accent to-mory-highlight">Prêt à Générer du Chiffre</span>
            </h2>
            <p className="text-emerald-100/80 text-sm md:text-base">
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
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-mory-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-mory-accent/10 border border-mory-accent/30 flex items-center justify-center text-mory-accent group-hover:scale-110 transition-transform">
                    <Rocket className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-mory-accent uppercase px-3 py-1 rounded-full neomorph-pill">
                    Product Builder
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  Développement SaaS IA &amp; Copilotes
                </h3>
                <p className="text-emerald-100/85 text-sm leading-relaxed mb-6 font-sans">
                  Création de plateformes SaaS de bout en bout : interfaces réactives Next.js / React, APIs rapides et robustes, architecture multi-tenant et expérience utilisateur ultra-fluide orientée conversion.
                </p>

                <ul className="space-y-2.5 text-xs text-emerald-200/90 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                    <span>Next.js 15 · TypeScript · FastAPI · Tailwind</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                    <span>Systèmes de paiement, abonnements &amp; dashboards</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
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
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-mory-highlight/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-mory-highlight/10 border border-mory-highlight/30 flex items-center justify-center text-mory-highlight group-hover:scale-110 transition-transform">
                    <Database className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-mory-highlight uppercase px-3 py-1 rounded-full neomorph-pill">
                    Data Core
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  Data Engineering &amp; Pipelines RAG
                </h3>
                <p className="text-emerald-100/85 text-sm leading-relaxed mb-6 font-sans">
                  Ingestion, transformation et indexation sémantique de vos flux de données. Nous bâtissons des bases vectorielles scalables pour alimenter vos agents sans hallucination et avec une latence minimale.
                </p>

                <ul className="space-y-2.5 text-xs text-emerald-200/90 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
                    <span>Pipelines ETL/ELT temps réel · Vector Stores (pgvector, Qdrant)</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
                    <span>RAG avancé multi-sources &amp; structuration de documents</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
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
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-emerald-400/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-400/10 border border-emerald-400/30 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                    <Cpu className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-emerald-400 uppercase px-3 py-1 rounded-full neomorph-pill">
                    AI &amp; ML Modeling
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  Machine Learning &amp; Computer Vision
                </h3>
                <p className="text-emerald-100/85 text-sm leading-relaxed mb-6 font-sans">
                  Fine-tuning de modèles ouverts de pointe (Mistral, LLaMA) et algorithmes prédictifs spécialisés sur vos données historiques pour anticiper les risques et automatiser la vision par ordinateur.
                </p>

                <ul className="space-y-2.5 text-xs text-emerald-200/90 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Fine-tuning LLM sur règles métiers spécifiques</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Scoring prédictif, séries temporelles &amp; forecasting</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
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
              className="neomorph-card p-8 md:p-10 flex flex-col justify-between group hover:border-mory-accent/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-mory-accent/10 border border-mory-accent/30 flex items-center justify-center text-mory-accent group-hover:scale-110 transition-transform">
                    <TrendingUp className="w-6 h-6" />
                  </div>
                  <span className="text-xs font-integral font-normal text-mory-accent uppercase px-3 py-1 rounded-full neomorph-pill">
                    DevOps &amp; ROI
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 font-integral">
                  DevOps, Cloud &amp; Accélération Business
                </h3>
                <p className="text-emerald-100/85 text-sm leading-relaxed mb-6 font-sans">
                  Mise en production sécurisée avec intégration continue, observabilité en temps réel et accompagnement stratégique pour maximiser l'adoption, la réduction des coûts et la rentabilité dès le jour 1.
                </p>

                <ul className="space-y-2.5 text-xs text-emerald-200/90 font-mono">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                    <span>Docker · CI/CD · Déploiement Cloud Souverain</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                    <span>Monitoring de dérive (drift), latence &amp; coûts GPU</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                    <span>Focus ROI : automatisation rentable et scalable</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="neomorph-card p-10 md:p-14 text-center border border-mory-accent/20 relative overflow-hidden"
        >
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4 font-integral">
              Vous avez un projet ou une idée d'automatisation ?
            </h3>
            <p className="text-emerald-100/80 text-sm md:text-base mb-8">
              Échangeons pendant 15 minutes pour évaluer la faisabilité et le ROI de votre cas d'usage.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-mory-accent text-mory-bg font-integral font-normal text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,148,0.5)] transition-all duration-300 shadow-xl"
            >
              <span>Démarrer une Collaboration</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
