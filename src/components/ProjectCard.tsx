import React from 'react';
import { Project, Language } from '../types/portfolio';
import { TRANSLATIONS } from '../i18n/translations';
import { ExternalLink, Github, Code2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  lang: Language;
  isDemo?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, lang, isDemo = false }) => {
  const t = TRANSLATIONS[lang].projects;

  return (
    <article className="group relative flex flex-col justify-between rounded-xl border border-white/10 bg-[#121214] p-6 transition-all duration-200 hover:border-[#d4af37]/40 hover:bg-[#161619]">
      <div>
        {/* Optional Project Screenshot / Fallback */}
        {project.imageUrl ? (
          <div className="mb-5 aspect-video w-full overflow-hidden rounded-lg border border-white/5 bg-zinc-900">
            <img
              src={project.imageUrl}
              alt={project.title[lang]}
              referrerPolicy="no-referrer"
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ) : (
          <div className="mb-5 flex h-28 w-full items-center justify-center rounded-lg border border-white/5 bg-zinc-900/60 text-zinc-500">
            <Code2 className="h-8 w-8 text-[#d4af37]/60" />
          </div>
        )}

        {/* Demo Indicator if applicable */}
        {isDemo && (
          <div className="mb-2 inline-flex items-center text-xs font-mono text-[#d4af37]/90 tracking-wide uppercase">
            Demo Layout
          </div>
        )}

        {/* Title */}
        <h3 className="text-xl font-semibold text-white tracking-tight group-hover:text-[#f4d068] transition-colors">
          {project.title[lang]}
        </h3>

        {/* Description */}
        <p className="mt-2 text-sm leading-relaxed text-zinc-400">
          {project.description[lang]}
        </p>

        {/* Technologies List - Clean unboxed text with typographic separators */}
        {project.technologies && project.technologies.length > 0 && (
          <div className="mt-4 pt-4 border-t border-white/5">
            <span className="sr-only">{t.cardTechnologies}:</span>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-zinc-400 font-mono">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={tech}>
                  <span className="text-zinc-300">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-zinc-600" aria-hidden="true">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Links - Only shown if links exist */}
      {(project.githubUrl || project.liveUrl) && (
        <div className="mt-6 flex items-center gap-4 pt-4 border-t border-white/5 text-xs font-medium">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <Github className="h-4 w-4" />
              <span>{t.cardSourceCode}</span>
            </a>
          )}

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-zinc-300 transition-colors hover:text-[#d4af37] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#d4af37]"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              <span>{t.cardLiveDemo}</span>
            </a>
          )}
        </div>
      )}
    </article>
  );
};
