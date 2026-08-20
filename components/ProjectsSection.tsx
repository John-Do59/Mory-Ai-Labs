"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section id="solutions" className="py-32 px-6 relative bg-[var(--bg-primary)] overflow-hidden transition-colors duration-500">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 -left-40 w-[600px] h-[600px] bg-[var(--accent-glow)] rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />
      <div className="absolute bottom-1/4 -right-40 w-[600px] h-[600px] bg-[var(--accent-secondary)]/15 rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] mb-6 uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            MES RÉALISATIONS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6 font-integral">
            CE QUE J'AI <br />
            <span className="title-gradient">
              CONSTRUIT.
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg font-normal transition-colors duration-500">
            Des applications IA nées du terrain — construites parce que j'ai vu les problèmes de mes propres yeux, en tant qu'ancien paysagiste et logisticien.
          </p>
        </div>

        {/* Alternating Layout Cards */}
        <div className="space-y-24">
          
          {/* Card 1: ArboResilience (Image à Gauche, Texte à Droite) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center neomorph-card p-6 sm:p-10 md:p-12 group hover:border-[var(--accent-primary)]/40 transition-colors duration-300">
            {/* Visual Column (Left) */}
            <div className="lg:col-span-6 order-1">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--emblem-bg)] border border-[#FFA18A]/35 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(255,161,138,0.22)] transition-all duration-300 group/img group-hover:border-[#FFA18A]/60 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(255,161,138,0.4)]">
                <Image
                  src="/images/ArboResilience.webp"
                  alt="ArboResilience — Diagnostic Arboré IA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                  priority
                />
                {/* Overlay Dégradé Subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider backdrop-blur-md">
                    Mon Produit · Nature &amp; Climat
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Right) */}
            <div className="lg:col-span-6 order-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-widest block mb-2">
                  PRODUIT PROPRE
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4 font-integral">
                  ArboResilience · Prédiction Climatique &amp; Viabilité des Arbres (2026-2100)
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Quand tu as entretenu des espaces verts pendant des années, tu sais que planter la mauvaise essence au mauvais endroit coûte cher. J'ai conçu ArboResilience pour permettre aux collectivités et gestionnaires d'anticiper la survie de leurs plantations face au changement climatique.
                </p>

                {/* Features Pill List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Sélection par adresse précise ou commune partout en France</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Prédiction de viabilité de chaque essence d'arbre de 2026 à 2100</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Intégration des caractéristiques &amp; traits botaniques (bases TRY, GBIF)</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Modélisation croisant données météo historiques et scénarios climatiques futurs</span>
                  </div>
                </div>
              </div>

              {/* ROI & CTA Footnote */}
              <div className="pt-6 border-t border-[var(--card-border)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-secondary)] block mb-1">
                    Politiques de Plantation &amp; Budgets
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white font-integral">
                    Sécuriser l'investissement sur chaque arbre planté (500€ à 2 000€ / sujet)
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-primary)] hover:text-white transition-colors group/btn"
                >
                  <span>Étudier ce cas</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          {/* Card 2: GreenOps AI (Texte à Gauche, Image à Droite) */}
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center neomorph-card p-6 sm:p-10 md:p-12 group hover:border-[var(--accent-secondary)]/40 transition-colors duration-300">
            {/* Content Column (Left on Desktop, Right on Mobile) */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-integral font-normal text-[var(--accent-secondary)] uppercase tracking-widest block mb-2">
                  PRODUIT PROPRE
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4 font-integral">
                  GreenOps AI · L'IA du Paysagiste
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Ancien paysagiste, je sais qu'un devis précis prend des heures. GreenOps AI fait le même travail en 3 minutes — parce que le moteur est alimenté par une vraie connaissance du métier. Devis automatiques, chiffrage des végétaux et matériaux, coordination terrain.
                </p>

                {/* Features Pill List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-secondary)] shrink-0" />
                    <span>Génération automatisée de devis précis à partir de notes vocales ou de plans</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-secondary)] shrink-0" />
                    <span>Moteur RAG connecté aux catalogues fournisseurs, pépinières et grilles tarifaires</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-secondary)] shrink-0" />
                    <span>Planning dynamique et suivi des chantiers pour solopreneurs et équipes paysagères</span>
                  </div>
                </div>
              </div>

              {/* ROI & CTA Footnote */}
              <div className="pt-6 border-t border-[var(--card-border)] flex flex-wrap items-center justify-between gap-4">
                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-secondary)] block mb-1">
                    ROI &amp; Avantage Compétitif
                  </span>
                  <span className="text-xl sm:text-2xl font-bold text-white font-integral">
                    Devis finalisé en moins de 3 minutes
                  </span>
                </div>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-secondary)] hover:text-white transition-colors group/btn"
                >
                  <span>Étudier ce cas</span>
                  <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Visual Column (Right) */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--emblem-bg)] border border-[#FFA18A]/35 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(255,161,138,0.22)] transition-all duration-500 group/img group-hover:border-[#FFA18A]/60 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(255,161,138,0.4)]">
                <Image
                  src="/images/greenopq-ai10.webp"
                  alt="GreenOps AI Platform Paysagiste"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                />
                {/* Overlay Dégradé Subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-secondary)] uppercase tracking-wider backdrop-blur-md">
                    Mon Produit · Paysage &amp; Devis IA
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
