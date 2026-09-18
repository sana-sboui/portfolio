"use client";

import { ArrowUpRight, ExternalLink, Play, Images } from "lucide-react";
import type { Language, Project } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";

interface Props {
  project: Project;
  language: Language;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, language, onOpen }: Props) {
  const t = copy[language];

  const hasVideo = Boolean(project.videoUrl);
  const hasScreenshots = Boolean(project.screenshots && project.screenshots.length > 0);

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      <button
        type="button"
        onClick={() => onOpen(project)}
        className="relative block w-full overflow-hidden text-left"
        aria-label={`${t.viewProject} — ${project.name}`}
      >
        <div className="relative aspect-[16/9] overflow-hidden bg-[var(--surface-soft)]">
          <img
            src={project.coverImage}
            alt=""
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

          {project.featured && (
            <span className="absolute left-4 top-4 rounded-full bg-[var(--background)]/90 px-3 py-1.5 text-xs font-bold text-[var(--primary)] backdrop-blur-sm">
              {t.featured}
            </span>
          )}

          <div className="absolute bottom-4 right-4 flex gap-2">
            {hasVideo && (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)]/90 text-[var(--primary)] backdrop-blur-sm"
                aria-label={t.videoAvailable}
              >
                <Play size={15} fill="currentColor" />
              </span>
            )}

            {hasScreenshots && (
              <span
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--background)]/90 text-[var(--primary)] backdrop-blur-sm"
                aria-label={t.screenshotsAvailable}
              >
                <Images size={17} />
              </span>
            )}
          </div>
        </div>
      </button>

      <div className="flex flex-1 flex-col p-6 md:p-7">
        <p className="mb-2 text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
          {project.category[language]}
        </p>

        <h3 className="text-2xl font-black tracking-tight">{project.name}</h3>

        <p className="mt-3 flex-1 text-sm leading-7 text-[var(--muted)]">
          {project.description[language]}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-medium"
            >
              {technology}
            </span>
          ))}
        </div>

        <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-[var(--border)] pt-5">
          <button
            type="button"
            onClick={() => onOpen(project)}
            className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:opacity-90"
          >
            {t.viewProject}
            <ArrowUpRight size={15} />
          </button>

          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-bold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {t.demo}
              <ExternalLink size={14} />
            </a>
          )}

          {project.sourceUrl && (
            <a
              href={project.sourceUrl}
              target="_blank"
              rel="noreferrer"
              onClick={(event) => event.stopPropagation()}
              className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-bold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
            >
              {t.source}
              <ExternalLink size={14} />
            </a>
          )}
        </div>
      </div>
    </article>
  );
}