import React, { useState } from 'react';
import { Project, Language } from '../types/portfolio';
import { TRANSLATIONS } from '../i18n/translations';
import { PERSONAL_INFO, DEMO_PROJECT_SAMPLE } from '../data/portfolio';
import { ProjectCard } from './ProjectCard';
import { FolderGit2, ExternalLink, Eye, X, FileCode } from 'lucide-react';

interface ProjectsSectionProps {
  projects: Project[];
  lang: Language;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({ projects, lang }) => {
  const [showDemoModal, setShowDemoModal] = useState(false);
  const t = TRANSLATIONS[lang].projects;

  return (
    <section id="projects" aria-labelledby="projects-heading" className="py-16 md:py-24 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6">
        {/* Section Header */}
        <div className="max-w-2xl">
          <div className="text-xs font-semibold tracking-wider text-[#d4af37] uppercase">
            {t.kicker}
          </div>
          <h2
            id="projects-heading"
            className="mt-3 text-3xl sm:text-4xl font-bold tracking-tight text-white"
          >
            {t.title}
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            {t.subtitle}
          </p>
        </div>

        {/* Content: Either grid of real projects or clean empty state */}
        {projects && projects.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} lang={lang} />
            ))}
          </div>
        ) : (
          <div className="mt-12 rounded-2xl border border-white/10 bg-[#121214] p-8 sm:p-12 text-center transition-all">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-xl bg-[#d4af37]/10 text-[#d4af37]">
              <FolderGit2 className="h-7 w-7" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
              {t.emptyTitle}
            </h3>

            <p className="mx-auto mt-3 max-w-lg text-sm leading-relaxed text-zinc-400">
              {t.emptyDescription}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <a
                href={PERSONAL_INFO.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-[#d4af37] px-5 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#e5c07b] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                <span>{t.emptyGithubButton}</span>
                <ExternalLink className="h-4 w-4" />
              </a>

              <button
                type="button"
                onClick={() => setShowDemoModal(true)}
                className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-[#18181b] px-4 py-2.5 text-sm font-medium text-zinc-300 transition-colors hover:border-[#d4af37]/40 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
              >
                <Eye className="h-4 w-4 text-[#d4af37]" />
                <span>{t.previewCardButton}</span>
              </button>
            </div>
          </div>
        )}

        {/* Modal: Card Layout Demonstration & Guide to add projects */}
        {showDemoModal && (
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
          >
            <div className="relative w-full max-w-lg rounded-2xl border border-white/10 bg-[#121214] p-6 shadow-2xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2">
                  <FileCode className="h-5 w-5 text-[#d4af37]" />
                  <h4 id="modal-title" className="text-base font-semibold text-white">
                    {t.previewModalTitle}
                  </h4>
                </div>
                <button
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  aria-label={t.closePreview}
                  className="rounded-lg p-1 text-zinc-400 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-4">
                <p className="text-xs text-zinc-400 leading-relaxed">
                  {t.previewNotice}
                </p>

                <div className="mt-4">
                  <ProjectCard project={DEMO_PROJECT_SAMPLE} lang={lang} isDemo={true} />
                </div>

                <div className="mt-4 rounded-lg bg-zinc-950 p-3 font-mono text-xs text-zinc-400 border border-white/5">
                  <span className="text-[#d4af37]">File:</span> src/data/portfolio.ts &rarr; export const PROJECTS = [...]
                </div>
              </div>

              <div className="mt-6 flex justify-end">
                <button
                  type="button"
                  onClick={() => setShowDemoModal(false)}
                  className="rounded-lg bg-zinc-800 px-4 py-2 text-xs font-semibold text-white hover:bg-zinc-700"
                >
                  {t.closePreview}
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
