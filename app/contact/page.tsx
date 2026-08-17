"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2, MessageSquare, ShieldCheck, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    budget: "poc",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="pt-36 pb-28 px-6 min-h-screen flex flex-col justify-center relative overflow-hidden bg-[#051610]">
      {/* Background Glows */}
      <div className="absolute top-1/3 left-1/4 w-[550px] h-[550px] bg-emerald-500/10 rounded-full blur-[180px] pointer-events-none -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-mory-highlight/10 rounded-full blur-[180px] pointer-events-none -z-10" />

      <div className="max-w-screen-xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full neomorph-pill text-xs font-integral font-normal text-mory-accent mb-6 uppercase tracking-wider">
            <span className="w-1.5 h-1.5 rounded-full bg-mory-accent animate-ping" />
            Échange Stratégique IA &amp; Cadrage
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tight text-white mb-4 font-integral">
            LANCEZ UN <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-mory-highlight via-emerald-300 to-mory-accent">
              PROJET IA.
            </span>
          </h1>
          <p className="text-emerald-100/90 text-lg md:text-xl max-w-2xl font-normal">
            Partagez-nous votre défi métier ou votre projet de solution sur-mesure. Nos ingénieurs
            analysent votre besoin et vous répondent sous 24 à 48 heures.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14">
          {/* Left Column: Direct Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="lg:col-span-5 flex flex-col justify-between neomorph-card p-8 md:p-10"
          >
            <div>
              <h2 className="text-2xl font-bold text-white mb-8 font-integral">Contact Direct</h2>
              <div className="space-y-8">
                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-mory-accent block mb-1.5">
                    Email Direct
                  </span>
                  <a
                    href="mailto:rammanatamaury@gmail.com"
                    className="text-lg md:text-xl font-semibold text-white hover:text-mory-accent transition-colors underline decoration-mory-accent/50 underline-offset-4"
                  >
                    rammanatamaury@gmail.com
                  </a>
                </div>

                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-mory-highlight block mb-1.5">
                    Réseau Professionnel
                  </span>
                  <a
                    href="https://www.linkedin.com/in/amaury-dev-data-ia/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2.5 text-base font-medium text-white/90 hover:text-mory-highlight transition-colors group"
                  >
                    <svg
                      className="w-5 h-5 fill-current text-mory-highlight group-hover:scale-110 transition-transform"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.2V10.9H6.46M7.83 6.64c-.88 0-1.6.72-1.6 1.6s.72 1.6 1.6 1.6c.88 0 1.6-.72 1.6-1.6s-.72-1.6-1.6-1.6Z" />
                    </svg>
                    <span>amaury-dev-data-ia</span>
                  </a>
                </div>

                <div>
                  <span className="text-xs font-integral font-normal uppercase tracking-widest text-emerald-300/60 block mb-1.5">
                    Localisation
                  </span>
                  <div className="flex items-start gap-2.5 text-sm text-white/80">
                    <MapPin className="w-5 h-5 text-mory-accent shrink-0 mt-0.5" />
                    <span>
                      Lille &amp; Paris, France
                      <br />
                      <span className="text-xs text-emerald-200/60">Interventions France &amp; International</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-8 mt-8 border-t border-white/[0.06] space-y-2 text-xs font-mono text-emerald-200/60">
              <div className="flex items-center gap-2 text-emerald-300">
                <ShieldCheck className="w-4 h-4 text-mory-accent" />
                <span>NDA &amp; Confidentialité garantis</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-mory-highlight" />
                <span>Cadrage technique et chiffrage sous 48h</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7 neomorph-card p-8 md:p-12 relative"
          >
            {submitted ? (
              <div className="text-center py-16">
                <CheckCircle2 className="w-16 h-16 text-mory-accent mx-auto mb-6 animate-bounce" />
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-integral">
                  Demande Transmise !
                </h3>
                <p className="text-emerald-100/90 text-base max-w-md mx-auto mb-8 font-normal">
                  Merci pour votre message. Nous analysons vos éléments techniques et revenons vers vous
                  avec une première estimation sous 48 heures.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 rounded-full neomorph-pill text-xs font-integral font-normal uppercase text-white hover:bg-white/10 transition-colors"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-integral font-normal uppercase tracking-wider text-mory-accent">
                      Votre Nom
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jean Dupont"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-mory-accent transition-colors text-white placeholder-white/20 text-sm"
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-xs font-integral font-normal uppercase tracking-wider text-mory-accent">
                      Votre Email Professionnel
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jean@entreprise.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-mory-accent transition-colors text-white placeholder-white/20 text-sm"
                    />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-integral font-normal uppercase tracking-wider text-mory-highlight">
                    Entreprise / Organisation
                  </label>
                  <input
                    type="text"
                    placeholder="Nom de votre société"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-mory-highlight transition-colors text-white placeholder-white/20 text-sm"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-xs font-integral font-normal uppercase tracking-wider text-mory-highlight">
                    Description de votre Besoin / Objectif IA
                  </label>
                  <textarea
                    rows={5}
                    required
                    placeholder="Présentez brièvement vos processus à automatiser, vos flux de données ou votre projet d'agent IA..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-black/30 border border-white/10 rounded-xl px-4 py-3.5 focus:outline-none focus:border-mory-highlight transition-colors text-white placeholder-white/20 text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-mory-accent text-mory-bg font-integral font-normal text-xs uppercase tracking-wider hover:bg-white hover:shadow-[0_0_25px_rgba(0,255,148,0.5)] transition-all duration-300 shadow-xl"
                >
                  <span>Transmettre la Demande de Cadrage</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
