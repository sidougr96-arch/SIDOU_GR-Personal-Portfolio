import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { TRANSLATIONS } from '../i18n/translations';
import { PERSONAL_INFO } from '../data/portfolio';
import { Github, Mail, Globe, Menu, X } from 'lucide-react';

interface NavbarProps {
  currentLang: Language;
  onLanguageChange: (lang: Language) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentLang, onLanguageChange }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = TRANSLATIONS[currentLang].nav;

  const toggleLanguage = () => {
    onLanguageChange(currentLang === 'en' ? 'fr' : 'en');
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-white/10 bg-[#09090b]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#about"
          className="group flex items-center gap-2 text-base font-bold tracking-tight text-white whitespace-nowrap shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded"
        >
          <span className="text-[#d4af37] transition-transform duration-200 group-hover:scale-110">◈</span>
          <span className="tracking-wider">{PERSONAL_INFO.displayName}</span>
        </a>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav
          aria-label="Primary"
          className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300"
        >
          <a
            href="#about"
            className="whitespace-nowrap transition-colors hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded px-1"
          >
            {t.about}
          </a>
          <a
            href="#projects"
            className="whitespace-nowrap transition-colors hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] rounded px-1"
          >
            {t.projects}
          </a>
        </nav>

        {/* Zone 3: Actions (Language Switcher, GitHub, Email) */}
        <div className="hidden md:flex items-center gap-4 shrink-0">
          {/* Language Switcher */}
          <button
            onClick={toggleLanguage}
            aria-label={t.switchLang}
            className="inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-[#141416] px-2.5 py-1.5 text-xs font-medium text-zinc-300 transition-colors hover:border-[#d4af37]/50 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <Globe className="h-3.5 w-3.5 text-[#d4af37]" />
            <span className={currentLang === 'en' ? 'font-semibold text-white' : 'text-zinc-500'}>EN</span>
            <span className="text-zinc-600" aria-hidden="true">/</span>
            <span className={currentLang === 'fr' ? 'font-semibold text-white' : 'text-zinc-500'}>FR</span>
          </button>

          {/* GitHub Link */}
          <a
            href={PERSONAL_INFO.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={t.github}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#141416] text-zinc-300 transition-colors hover:border-[#d4af37]/50 hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <Github className="h-4 w-4" />
          </a>

          {/* Email Link */}
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            aria-label={t.email}
            className="inline-flex items-center gap-2 rounded-md border border-[#d4af37]/40 bg-[#d4af37]/10 px-3.5 py-1.5 text-xs font-semibold text-[#f4d068] transition-colors hover:bg-[#d4af37]/20 hover:border-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            <Mail className="h-3.5 w-3.5" />
            <span>{t.email}</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          {/* Compact language switcher on mobile */}
          <button
            onClick={toggleLanguage}
            aria-label={t.switchLang}
            className="inline-flex items-center gap-1 rounded border border-white/10 bg-[#141416] px-2 py-1 text-xs font-medium text-zinc-300"
          >
            <span className="text-[#d4af37]">{currentLang.toUpperCase()}</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? t.menuClose : t.menuOpen}
            aria-expanded={mobileMenuOpen}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-white/10 bg-[#141416] text-zinc-300 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-[#0d0d0f] px-6 py-5">
          <nav className="flex flex-col gap-4 text-sm font-medium">
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              {t.about}
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 text-zinc-200 hover:text-[#d4af37]"
            >
              {t.projects}
            </a>
          </nav>

          <div className="mt-5 flex flex-col gap-3 pt-4 border-t border-white/10">
            <a
              href={PERSONAL_INFO.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-zinc-300 hover:text-[#d4af37]"
            >
              <Github className="h-4 w-4" />
              <span>{t.github}</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex items-center gap-2 text-sm text-[#f4d068] hover:text-white"
            >
              <Mail className="h-4 w-4" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
