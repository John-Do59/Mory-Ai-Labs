"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, ShieldCheck, Sparkles, Loader2, AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import ParallaxBannerCard from "@/components/ParallaxBannerCard";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }

      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Une erreur est survenue lors de l'envoi");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden bg-[var(--bg-primary)] transition-colors duration-500">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-[var(--accent-glow)] rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[var(--accent-secondary)]/15 rounded-full blur-[180px] pointer-events-none -z-10 transition-all duration-700" />

      <div className="max-w-screen-xl mx-auto w-full">
        {/* CARTE HORIZONTALE Mory-AI-Labs16 AVEC PARALLAX & NÉOMORPHISME */}
        <ParallaxBannerCard
          src="/images/Mory-AI-Labs16.webp"
          alt="Mory AI Labs Échange Stratégique IA & Cadrage"
          className="mb-14"
          priority
          badgeTopLeft={
            <span className="px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-[var(--accent-primary)] uppercase tracking-wider backdrop-blur-md flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)] animate-ping" />
              Échange Stratégique IA &amp; Cadrage
            </span>
          }
        />

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white mb-4 font-integral">
            PARLONS DE <br />
            <span className="title-gradient">
              VOTRE PROJET.
            </span>
          </h1>
          <p className="text-[var(--text-secondary)] text-lg md:text-xl max-w-2xl font-normal transition-colors duration-500">
            Décrivez-moi votre problématique métier en quelques lignes. Je vous réponds personnellement sous 48 heures avec une première analyse de faisabilité — gratuite, sans engagement.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.05, ease: "easeOut" }}
            className="lg:col-span-5 flex flex-col justify-between neomorph-card p-8 md:p-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 font-integral">Contact Direct</h2>
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--accent-primary)] block mb-1.5">
                    Email
                  </span>
                  <a
                    href="mailto:rammanatamaury@gmail.com"
                    className="text-white hover:text-[var(--accent-primary)] font-mono text-sm sm:text-base transition-colors break-all"
                  >
                    rammanatamaury@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-[var(--text-secondary)] block mb-1.5">
                    Localisation
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-white">
                    <MapPin className="w-5 h-5 text-[var(--accent-primary)] shrink-0 mt-0.5" />
                    <span>
                      Lille &amp; Paris, France
                      <br />
                      <span className="text-xs text-[var(--text-secondary)]/80">Interventions France &amp; International</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-[var(--card-border)] space-y-2 text-xs font-mono text-[var(--text-secondary)]">
              <div className="flex items-center gap-2 text-white">
                <ShieldCheck className="w-4 h-4 text-[var(--accent-primary)]" />
                <span>NDA &amp; Confidentialité garantis</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[var(--accent-secondary)]" />
                <span>Réponse personnelle sous 48h — gratuite</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.35, delay: 0.08, ease: "easeOut" }}
            className="lg:col-span-7 neomorph-card p-8 md:p-12 relative"
          >
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-[var(--accent-primary)] mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-integral">
                  Demande Transmise !
                </h3>
                <p className="text-[var(--text-secondary)] text-base max-w-md mx-auto mb-8 font-normal">
                  Merci pour votre message. Nous analysons vos éléments techniques et revenons vers vous
                  avec une première estimation sous 48 heures.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", company: "", message: "" });
                  }}
                  className="px-6 py-2.5 rounded-full neomorph-pill text-xs font-integral font-normal uppercase text-white hover:bg-white/10 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {error && (
                  <div className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 flex items-center gap-3 text-red-300 text-sm">
                    <AlertCircle className="w-5 h-5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-primary)]">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-[var(--emblem-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-white placeholder-white/20 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-primary)]">
                      Votre Email Professionnel
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-[var(--emblem-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--accent-primary)] transition-colors text-white placeholder-white/20 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-secondary)]">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de votre société"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-[var(--emblem-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--accent-secondary)] transition-colors text-white placeholder-white/20 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-integral font-normal uppercase tracking-wider text-[var(--accent-secondary)]">
                    Description de votre Besoin / Objectif IA
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Présentez brièvement vos processus à automatiser, vos flux de données ou votre projet d'agent IA..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-[var(--emblem-bg)] border border-[var(--card-border)] rounded-xl px-4 py-3.5 focus:outline-none focus:border-[var(--accent-secondary)] transition-colors text-white placeholder-white/20 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full btn-theme-primary font-integral font-normal text-xs uppercase tracking-wider shadow-xl disabled:opacity-50"
                >
                  {loading ? (
                    <>
                      <span>Envoi en cours...</span>
                      <Loader2 className="w-4 h-4 animate-spin" />
                    </>
                  ) : (
                    <>
                      <span>Envoyer mon message</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
