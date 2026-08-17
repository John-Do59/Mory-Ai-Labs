import Link from "next/link";

export default function Footer() {
  return (
    <footer className="py-20 px-6 border-t border-white/[0.08] relative overflow-hidden bg-black/50">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
        <div>
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white mb-2 block hover:text-mory-accent transition-colors font-integral"
          >
            MORY AI LABS
          </Link>
          <p className="text-xs text-mory-secondary/60 max-w-sm">
            Studio d'ingénierie en intelligence artificielle, agents autonomes et modélisation de données.
          </p>
        </div>

        <div className="flex flex-wrap gap-8 text-xs font-mono uppercase tracking-wider text-white/70">
          <Link href="/about" className="hover:text-mory-accent transition-colors">
            À Propos
          </Link>
          <Link href="/services" className="hover:text-mory-highlight transition-colors">
            Services
          </Link>
          <a
            href="https://www.linkedin.com/in/amaury-dev-data-ia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mory-accent transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/John-Do59"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-mory-highlight transition-colors"
          >
            GitHub
          </a>
          <Link href="/contact" className="text-mory-accent font-bold">
            Contact
          </Link>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto pt-8 mt-8 border-t border-white/[0.04] text-[11px] font-mono text-white/30 flex flex-col sm:flex-row justify-between gap-2">
        <span>© 2026 Mory AI Labs. Tous droits réservés.</span>
        <span>Lille / Paris — France</span>
      </div>
    </footer>
  );
}
