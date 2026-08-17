"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Crosshair,
  TreePine,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Briefcase,
  Sparkles,
  Calculator,
} from "lucide-react";
import { motion } from "framer-motion";

export default function ProjectsSection() {
  return (
    <section className="py-32 px-6 relative overflow-hidden bg-[#051610]" id="solutions">
      {/* Ambient Halos */}
      <div className="absolute top-1/4 -left-40 w-[500px] h-[500px] bg-emerald-500/10 rounded-full blur-[160px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 -right-40 w-[500px] h-[500px] bg-mory-highlight/10 rounded-full blur-[160px] pointer-events-none -z-10" />

      <div className="max-w-screen-2xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-6"
        >
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full neomorph-pill text-xs font-integral font-normal text-mory-accent mb-4 tracking-wider uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-mory-accent animate-pulse" />
              Solutions &amp; Déploiements Opérationnels
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold uppercase tracking-tight text-white font-integral">
              Nos Produits &amp;{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-accent to-mory-highlight">
                Innovations
              </span>
            </h2>
          </div>
          <div className="mt-4 md:mt-0 text-left md:text-right">
            <span className="block text-xs font-integral font-normal uppercase tracking-widest text-emerald-300/60 mb-1">
              CAS D'USAGE B2B CONCRETS
            </span>
            <span className="text-lg md:text-xl font-integral font-bold text-white uppercase tracking-tight">
              ROI &amp; Avantage Compétitif
            </span>
          </div>
        </motion.div>

        <div className="flex flex-col gap-24">
          {/* PROJECT 1 : ArboResilience (CARTE À GAUCHE / TEXTE À DROITE) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center neomorph-card p-6 md:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -left-24 w-64 h-64 bg-mory-accent/15 rounded-full blur-3xl pointer-events-none" />

            {/* CARD COMPACTE (GAUCHE - COL 5) */}
            <div className="lg:col-span-5">
              <div className="neomorph-inset overflow-hidden relative group/mockup p-2">
                <div className="flex items-center justify-between px-3 py-2 bg-black/40 rounded-t-xl border-b border-emerald-500/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300/60 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-mory-accent" />
                    arboresilience.ai
                  </span>
                  <span className="w-2.5" />
                </div>

                <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-black/50">
                  <Image
                    src="/images/ArboResilience.png"
                    alt="ArboResilience Plateforme IA"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center group-hover/mockup:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover/mockup:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-lg bg-black/85 backdrop-blur-md border border-emerald-500/20 text-xs">
                    <div className="flex items-center gap-1.5">
                      <TreePine className="w-3.5 h-3.5 text-mory-accent" />
                      <span className="font-medium text-white/90 text-[11px]">
                        Modèle Climat 2100
                      </span>
                    </div>
                    <span className="text-[9px] font-integral font-normal px-1.5 py-0.5 rounded bg-mory-accent/15 text-mory-accent uppercase">
                      GIEC CMIP6
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* TEXTE & CONVERSION (DROITE - COL 7) */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-integral font-normal bg-mory-accent/10 text-mory-accent border border-mory-accent/20 uppercase tracking-wide">
                  <Crosshair className="w-3 h-3" />
                  Bureaux d'Études · Collectivités · Aménageurs
                </span>
                <span className="text-xs font-mono text-emerald-300/60">
                  #RésilienceForestière
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 font-integral">
                ArboResilience{" "}
                <span className="text-mory-accent text-base md:text-lg font-normal block md:inline font-sans">
                  — Sécurisez vos plantations face au climat
                </span>
              </h3>

              <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed mb-5 font-normal">
                Évitez les pertes financières massives sur vos reboisements et aménagements urbains.
                Notre IA croise projections climatiques (GIEC CMIP6), topographie et stress
                hydrique pour certifier la viabilité de vos essences à horizon 2050–2100.
              </p>

              <div className="grid sm:grid-cols-3 gap-2.5 mb-5">
                <div className="p-3.5 rounded-2xl neomorph-pill">
                  <div className="text-xl font-bold text-mory-accent stat-val">-70%</div>
                  <div className="text-[11px] text-white/80 font-medium">
                    Mortalité post-plantation
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl neomorph-pill">
                  <div className="text-xl font-bold text-white stat-val">100%</div>
                  <div className="text-[11px] text-white/80 font-medium">
                    Subventions &amp; RSE sécurisées
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl neomorph-pill">
                  <div className="text-xl font-bold text-mory-highlight stat-val">2100</div>
                  <div className="text-[11px] text-white/80 font-medium">Horizon simulé</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 mb-6 text-xs text-emerald-100/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                  <span>Cartographie géospatiale des zones à risque</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                  <span>Recommandations d'essences par microclimat</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                  <span>Rapport d'audit PDF pour décideurs</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-accent shrink-0" />
                  <span>API intégrable à vos SIG &amp; outils internes</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-emerald-500/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mory-accent text-mory-bg font-integral font-normal text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_25px_rgba(0,255,148,0.5)] transition-all duration-300 shadow-lg"
                >
                  <span>Demander un Audit Territorial (15 min)</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-white/50">Démonstration gratuite sur vos données</span>
              </div>
            </div>
          </motion.div>

          {/* PROJECT 2 : GreenOps AI (TEXTE À GAUCHE / CARTE À DROITE) */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.8 }}
            className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center neomorph-card p-6 md:p-8 lg:p-10 relative overflow-hidden"
          >
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-mory-highlight/15 rounded-full blur-3xl pointer-events-none" />

            {/* TEXTE & CONVERSION (GAUCHE - COL 7 - ORDER 2 MOBILE / ORDER 1 DESKTOP) */}
            <div className="lg:col-span-7 flex flex-col justify-center order-2 lg:order-1">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-integral font-normal bg-mory-highlight/10 text-mory-highlight border border-mory-highlight/20 uppercase tracking-wide">
                  <Briefcase className="w-3 h-3" />
                  Entreprises Paysagistes · Artisans &amp; Aménageurs
                </span>
                <span className="text-xs font-mono text-emerald-300/60">
                  #Productivité #ClosingDevis
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-2 font-integral">
                GreenOps AI{" "}
                <span className="text-mory-highlight text-base md:text-lg font-normal block md:inline font-sans">
                  — Vos devis paysagers en 30 secondes chrono
                </span>
              </h3>

              <p className="text-emerald-100/90 text-sm md:text-base leading-relaxed mb-5 font-normal">
                Ne perdez plus vos soirées à chiffrer à la main. Téléchargez une photo de terrain ou un
                plan : l'IA calcule les métrés, sélectionne les fournitures au juste prix et édite un
                devis commercial conforme prêt à signer.
              </p>

              <div className="grid sm:grid-cols-3 gap-2.5 mb-5">
                <div className="p-3.5 rounded-2xl neomorph-pill">
                  <div className="text-xl font-bold text-mory-highlight stat-val">+15h</div>
                  <div className="text-[11px] text-white/80 font-medium">
                    Gagnées / semaine par artisan
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl neomorph-pill">
                  <div className="text-xl font-bold text-white stat-val">+28%</div>
                  <div className="text-[11px] text-white/80 font-medium">
                    Taux de signature client
                  </div>
                </div>
                <div className="p-3.5 rounded-2xl neomorph-pill">
                  <div className="text-xl font-bold text-mory-accent stat-val">30s</div>
                  <div className="text-[11px] text-white/80 font-medium">
                    Temps moyen d'édition PDF
                  </div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-2 mb-6 text-xs text-emerald-100/80">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
                  <span>Extraction automatique des surfaces sur plan ou photo</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
                  <span>Catalogue fournisseurs &amp; marges personnalisées</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
                  <span>Génération PDF professionnel avec signature électronique</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-mory-highlight shrink-0" />
                  <span>Synchronisation WhatsApp &amp; CRM paysagiste</span>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-3 border-t border-emerald-500/10">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-mory-highlight text-white font-integral font-normal text-xs uppercase tracking-wider hover:bg-white hover:text-mory-bg hover:shadow-[0_0_25px_rgba(255,127,63,0.5)] transition-all duration-300 shadow-lg"
                >
                  <span>Rejoindre l'Accès Pilote Gratuit</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <span className="text-xs text-white/50">Phase beta privée · Places limitées</span>
              </div>
            </div>

            {/* CARD COMPACTE (DROITE - COL 5 - ORDER 1 MOBILE / ORDER 2 DESKTOP) */}
            <div className="lg:col-span-5 order-1 lg:order-2">
              <div className="neomorph-inset overflow-hidden relative group/mockup p-2">
                <div className="flex items-center justify-between px-3 py-2 bg-black/40 rounded-t-xl border-b border-emerald-500/10 mb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                    <span className="w-2.5 h-2.5 rounded-full bg-white/20" />
                  </div>
                  <span className="text-[11px] font-mono text-emerald-300/60 flex items-center gap-1">
                    <Sparkles className="w-3 h-3 text-mory-highlight" />
                    greenops.app
                  </span>
                  <span className="w-2.5" />
                </div>

                <div className="relative aspect-[16/11] overflow-hidden rounded-lg bg-black/50">
                  <Image
                    src="/images/greenopq-ai10.png"
                    alt="GreenOps IA Devis Paysagisme"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-center group-hover/mockup:scale-105 transition-transform duration-700 ease-out opacity-90 group-hover/mockup:opacity-100"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                  <div className="absolute bottom-2.5 left-2.5 right-2.5 flex items-center justify-between p-2 rounded-lg bg-black/85 backdrop-blur-md border border-emerald-500/20 text-xs">
                    <div className="flex items-center gap-1.5">
                      <Calculator className="w-3.5 h-3.5 text-mory-highlight" />
                      <span className="font-medium text-white/90 text-[11px]">Chiffrage en 30s</span>
                    </div>
                    <span className="text-[9px] font-integral font-normal px-1.5 py-0.5 rounded bg-mory-highlight/15 text-mory-highlight uppercase">
                      VISION IA
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
