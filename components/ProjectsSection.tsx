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
            CAS D'USAGE B2B CONCRETS
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight text-white mb-6 font-integral">
            SOLUTIONS &amp; PRODUITS <br />
            <span className="title-gradient">
              DÉPLOYÉS EN PRODUCTION.
            </span>
          </h2>
          <p className="text-[var(--text-secondary)] text-base sm:text-lg font-normal transition-colors duration-500">
            Études de cas réelles conçues et orchestrées par notre studio pour transformer des problématiques industrielles en valeur économique mesurable.
          </p>
        </div>

        {/* Alternating Layout Cards */}
        <div className="space-y-24">
          
          {/* Card 1: ArboResilience (Image à Gauche, Texte à Droite) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center neomorph-card p-6 sm:p-10 md:p-12 group hover:border-[var(--accent-primary)]/40 transition-all duration-500"
          >
            {/* Visual Column (Left) */}
            <div className="lg:col-span-6 order-1">
              <div className="relative w-full h-[320px] sm:h-[420px] md:h-[460px] rounded-2xl sm:rounded-3xl overflow-hidden bg-[var(--emblem-bg)] border border-[#FFA18A]/35 shadow-[0_15px_40px_rgba(0,0,0,0.85),0_0_25px_rgba(255,161,138,0.22)] transition-all duration-500 group/img group-hover:border-[#FFA18A]/60 group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.95),0_0_35px_rgba(255,161,138,0.4)]">
                <Image
                  src="/images/ArboResilience.png"
                  alt="ArboResilience IA"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                />
                {/* Overlay Dégradé Subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider backdrop-blur-md">
                    Écologie &amp; Prédiction
                  </span>
                </div>
              </div>
            </div>

            {/* Content Column (Right) */}
            <div className="lg:col-span-6 order-2 flex flex-col justify-between">
              <div>
                <span className="text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-widest block mb-2">
                  CAS D'USAGE B2B CONCRETS
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4 font-integral">
                  ArboResilience · Diagnostic &amp; Résilience du Patrimoine Arboré
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Plateforme intelligente de vision par ordinateur et de modélisation prédictive des risques d'arbres pour les collectivités et gestionnaires d'infrastructures.
                </p>

                {/* Features Pill List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Détection automatisée des défauts structurels par Computer Vision</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Scoring prédictif de risque d'arrachement selon les vents et essences</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-primary)] shrink-0" />
                    <span>Tableau de bord cartographique SIG et alertes en temps réel</span>
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
                    -40% sur les coûts d'intervention
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
          </motion.div>

          {/* Card 2: GreenOps AI (Texte à Gauche, Image à Droite) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center neomorph-card p-6 sm:p-10 md:p-12 group hover:border-[var(--accent-secondary)]/40 transition-all duration-500"
          >
            {/* Content Column (Left on Desktop, Right on Mobile) */}
            <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col justify-between">
              <div>
                <span className="text-xs font-integral font-normal text-[var(--accent-secondary)] uppercase tracking-widest block mb-2">
                  CAS D'USAGE B2B CONCRETS
                </span>
                <h3 className="text-2xl sm:text-4xl font-bold uppercase tracking-tight text-white mb-4 font-integral">
                  GreenOps AI · Optimisation Énergétique &amp; Décarbonation
                </h3>
                <p className="text-[var(--text-secondary)] text-sm sm:text-base leading-relaxed mb-6 font-sans transition-colors duration-500">
                  Système d'agents autonomes dédié au pilotage intelligent et à l'optimisation des flux énergétiques industriels et logistiques en continu.
                </p>

                {/* Features Pill List */}
                <div className="space-y-3 mb-8">
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-secondary)] shrink-0" />
                    <span>Modélisation thermodynamique temps réel et séries temporelles</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-secondary)] shrink-0" />
                    <span>Pilotage dynamique des charges et des pointes de consommation</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-white">
                    <CheckCircle2 className="w-5 h-5 text-[var(--accent-secondary)] shrink-0" />
                    <span>Reporting automatique conforme aux normes CSRD et ISO 50001</span>
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
                    -25% sur la facture énergétique
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
                  src="/images/greenopq-ai10.png"
                  alt="GreenOps AI Platform"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 select-none"
                />
                {/* Overlay Dégradé Subtil */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/20 pointer-events-none" />
                <div className="absolute top-4 left-4 z-10">
                  <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-secondary)] uppercase tracking-wider backdrop-blur-md">
                    Industrie &amp; Climat
                  </span>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
