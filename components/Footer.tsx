import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-[var(--card-border)] bg-[var(--footer-bg)] text-[var(--text-secondary)] py-16 px-6 relative z-10 transition-colors duration-500">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* Brand */}
        <div className="flex flex-col items-center md:items-start gap-2">
          <Link href="/" className="text-2xl font-bold tracking-tight text-white hover:text-[var(--accent-primary)] transition-colors font-integral">
            MORY AI LABS
          </Link>
          <p className="text-xs text-[var(--text-secondary)]/70 max-w-sm text-center md:text-left">
            Studio d'ingénierie &amp; Venture Builder en Intelligence Artificielle générative, modélisation prédictive et agents autonomes souverains.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-8 text-xs font-integral font-normal uppercase tracking-wider text-white">
          <Link href="/about" className="hover:text-[var(--accent-primary)] transition-colors">
            À Propos
          </Link>
          <Link href="/services" className="hover:text-[var(--accent-primary)] transition-colors">
            Services &amp; Offres
          </Link>
          <Link href="/contact" className="hover:text-[var(--accent-primary)] transition-colors">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/amaury-dev-data-ia/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--accent-primary)] transition-colors"
          >
            LinkedIn
          </a>
        </div>

        {/* Copyright */}
        <div className="text-xs text-[var(--text-secondary)]/50 text-center md:text-right font-mono">
          © {new Date().getFullYear()} MORY AI LABS. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
