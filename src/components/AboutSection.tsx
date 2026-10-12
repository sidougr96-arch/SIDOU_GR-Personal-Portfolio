import React, { useState } from 'react';
import { Language } from '../types/portfolio';
import { PERSONAL_INFO } from '../data/portfolio';
import { TRANSLATIONS } from '../i18n/translations';
import { Github, Mail, Copy, Check, GraduationCap, Cpu } from 'lucide-react';

interface AboutSectionProps {
  lang: Language;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ lang }) => {
  const [copied, setCopied] = useState(false);
  const t = TRANSLATIONS[lang].about;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="about" aria-labelledby="about-heading" className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Personal Title & Introduction */}
          <div className="lg:col-span-7">
            {/* Academic Kicker - clean unboxed text */}
            <div className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
              {t.kicker}
            </div>

            <h1
              id="about-heading"
              className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight text-white"
            >
              {PERSONAL_INFO.displayName}
            </h1>

            {/* Neutral introduction strictly based on verified facts with emphasized option */}
            <p className="mt-6 text-base sm:text-lg leading-relaxed text-zinc-300">
              {lang === 'fr' ? (
                <>
                  Bienvenue sur mon portfolio personnel. Je poursuis actuellement ma{' '}
                  <span className="text-white font-medium">Licence — 3ème Année (L3)</span> en{' '}
                  <span className="text-white font-medium">Mathématiques et Informatique</span>, spécialité{' '}
                  <span className="text-white font-medium">Informatique</span>, avec une option académique approfondie en{' '}
                  <strong className="text-[#f4d068] font-bold">Systèmes informatiques</strong>.
                </>
              ) : (
                <>
                  Welcome to my personal portfolio. I am currently pursuing my{' '}
                  <span className="text-white font-medium">Licence — 3rd Year (L3)</span> in{' '}
                  <span className="text-white font-medium">Mathématiques et Informatique</span>, specializing in{' '}
                  <span className="text-white font-medium">Informatique</span>, with a dedicated academic focus on{' '}
                  <strong className="text-[#f4d068] font-bold">Systèmes informatiques</strong>.
                </>
              )}
            </p>

            {/* Direct Contact Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:bg-[#e5c07b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37] focus-visible:ring-offset-2 focus-visible:ring-offset-[#09090b]"
              >
                <Github className="h-4 w-4" />
                <span>{t.githubButton}</span>
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-[#141416] px-5 py-2.5 text-sm font-medium text-white transition-colors hover:border-[#d4af37]/60 hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                <Mail className="h-4 w-4" />
                <span>{t.emailButton}</span>
              </a>

              <button
                onClick={handleCopyEmail}
                type="button"
                aria-label={t.copyEmail}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#121214] px-4 py-2.5 text-sm text-zinc-300 transition-colors hover:border-white/25 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4 text-emerald-400" />
                    <span className="text-emerald-400 font-medium">{t.emailCopied}</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 text-zinc-400" />
                    <span>{PERSONAL_INFO.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Dedicated Education Card */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-[#121214] p-7 shadow-xl transition-all hover:border-[#d4af37]/30">
              {/* Card Header: Education */}
              <div className="flex items-center justify-between border-b border-white/5 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#d4af37]/15 text-[#d4af37] ring-1 ring-[#d4af37]/30">
                    <GraduationCap className="h-5 w-5" />
                  </div>
                  <div>
                    <h2 className="text-base font-bold tracking-tight text-white">
                      {t.educationTitle}
                    </h2>
                    <span className="text-xs text-zinc-500 font-mono">Curriculum</span>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1 text-xs font-mono text-[#d4af37] bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/20">
                  L3 Informatique
                </span>
              </div>

              {/* Verified academic facts */}
              <div className="mt-5 space-y-4">
                {/* 1. Degree */}
                <div className="flex flex-col border-b border-white/5 pb-3.5">
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    {t.degreeLabel}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-100">
                    {PERSONAL_INFO.academic.degree[lang]}
                  </span>
                </div>

                {/* 2. Field */}
                <div className="flex flex-col border-b border-white/5 pb-3.5">
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    {t.fieldLabel}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-100">
                    {PERSONAL_INFO.academic.field[lang]}
                  </span>
                </div>

                {/* 3. Speciality */}
                <div className="flex flex-col border-b border-white/5 pb-3.5">
                  <span className="text-xs font-medium text-zinc-500 uppercase tracking-wider">
                    {t.specialityLabel}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-zinc-100">
                    {PERSONAL_INFO.academic.speciality[lang]}
                  </span>
                </div>

                {/* 4. Option: "Systèmes informatiques" - VISUALLY EMPHASIZED */}
                <div className="relative mt-2 rounded-xl border border-[#d4af37]/40 bg-gradient-to-br from-[#d4af37]/15 via-[#18181b] to-[#141416] p-4.5 transition-all hover:border-[#d4af37]/60">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#d4af37] uppercase tracking-wider">
                      <Cpu className="h-3.5 w-3.5" />
                      <span>{t.optionLabel}</span>
                    </span>
                    <span className="text-[11px] font-mono text-[#f4d068]/80 uppercase">
                      {t.optionFocusBadge}
                    </span>
                  </div>

                  <div className="mt-2 flex items-baseline justify-between gap-2">
                    <span className="text-lg sm:text-xl font-bold tracking-tight text-[#f4d068]">
                      {PERSONAL_INFO.academic.option[lang]}
                    </span>
                  </div>

                  {lang === 'en' && (
                    <p className="mt-1 text-xs text-zinc-400 font-mono">
                      Computer Systems specialization
                    </p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
