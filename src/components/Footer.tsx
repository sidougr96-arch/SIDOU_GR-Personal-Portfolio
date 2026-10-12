import React from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolio';
import { TRANSLATIONS } from '../i18n/translations';
import { Github, Mail, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export const Footer: React.FC<FooterProps> = ({ lang }) => {
  const t = TRANSLATIONS[lang].footer;
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-white/10 bg-[#09090b] py-12 text-sm text-zinc-500">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        {/* Brand & Copyright */}
        <div className="flex flex-col items-center gap-1 sm:items-start">
          <div className="flex items-center gap-2 font-semibold text-zinc-300">
            <span className="text-[#d4af37]">◈</span>
            <span>{PERSONAL_INFO.displayName}</span>
          </div>
          <p className="text-xs text-zinc-500">
            © {currentYear} {PERSONAL_INFO.displayName}. {t.rights}
          </p>
          <p className="text-xs text-zinc-600">
            {t.tagline}
          </p>
        </div>

        {/* Links & Back to Top */}
        <div className="flex items-center gap-6">
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="text-zinc-400 transition-colors hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded"
          >
            <Github className="h-4 w-4" />
          </a>

          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label="Email"
            className="text-zinc-400 transition-colors hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded"
          >
            <Mail className="h-4 w-4" />
          </a>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label={t.backToTop}
            className="inline-flex items-center gap-1.5 rounded border border-white/10 bg-[#121214] px-2.5 py-1.5 text-xs text-zinc-400 hover:border-[#d4af37]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <span>{t.backToTop}</span>
            <ArrowUp className="h-3 w-3" />
          </button>
        </div>
      </div>
    </footer>
  );
};
