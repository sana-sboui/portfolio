"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink, FileText, Play, X } from "lucide-react";
import type { Language, Project } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";

interface Props {
    project: Project | null;
    language: Language;
    onClose: () => void;
}

export function ProjectModal({ project, language, onClose }: Props) {
    const t = copy[language];
    const [currentScreenshot, setCurrentScreenshot] = useState(0);

    useEffect(() => {
        if (!project) return;

        setCurrentScreenshot(0);

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleKeyDown);
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [project, onClose]);

    if (!project) return null;

    const screenshots = project.screenshots ?? [];
    const hasVideo = Boolean(project.videoUrl);
    const hasScreenshots = screenshots.length > 0;
    const hasResources = Boolean(project.resources?.length);

    const previousScreenshot = () => {
        setCurrentScreenshot((current) =>
            current === 0 ? screenshots.length - 1 : current - 1
        );
    };

    const nextScreenshot = () => {
        setCurrentScreenshot((current) =>
            current === screenshots.length - 1 ? 0 : current + 1
        );
    };

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <div className="relative flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--background)] shadow-2xl">
                <div className="flex items-start justify-between gap-6 border-b border-[var(--border)] p-6 md:p-7">
                    <div>
                        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[var(--primary)]">
                            {project.category[language]}
                        </p>

                        <h2
                            id="project-modal-title"
                            className="mt-2 text-2xl font-black tracking-tight md:text-3xl"
                        >
                            {project.name}
                        </h2>
                    </div>

                    <button
                        type="button"
                        onClick={onClose}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[var(--border)] transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        aria-label={t.closeProject}
                    >
                        <X size={19} />
                    </button>
                </div>

                <div className="overflow-y-auto">
                    <div className="p-6 md:p-7">
                        {hasVideo ? (
                            <div className="overflow-hidden rounded-2xl bg-black">
                                <video
                                    src={project.videoUrl}
                                    controls
                                    className="max-h-[55vh] w-full"
                                />
                                {project.note && (
                                    <div className="mt-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3.5">
                                        <p className="text-sm leading-6 text-[var(--muted)]">
                                            <span className="font-bold text-[var(--foreground)]">
                                                {t.noteLabel}
                                            </span>{" "}
                                            {project.note[language]}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ) : hasScreenshots ? (
                            <div className="relative overflow-hidden rounded-2xl bg-[var(--surface-soft)]">
                                <div className="aspect-video">
                                    <img
                                        src={screenshots[currentScreenshot]}
                                        alt={`${project.name} ${t.screenshotLabel} ${currentScreenshot + 1}`}
                                        className="h-full w-full object-contain"
                                    />
                                </div>

                                {screenshots.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={previousScreenshot}
                                            className="absolute left-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--background)]/90 shadow-lg transition-colors hover:text-[var(--primary)]"
                                            aria-label={t.previousScreenshot}
                                        >
                                            <ChevronLeft size={19} />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={nextScreenshot}
                                            className="absolute right-4 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[var(--background)]/90 shadow-lg transition-colors hover:text-[var(--primary)]"
                                            aria-label={t.nextScreenshot}
                                        >
                                            <ChevronRight size={19} />
                                        </button>

                                        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 gap-1.5 rounded-full bg-black/50 px-3 py-2">
                                            {screenshots.map((_, index) => (
                                                <button
                                                    key={index}
                                                    type="button"
                                                    onClick={() => setCurrentScreenshot(index)}
                                                    className={`h-1.5 rounded-full transition-all ${index === currentScreenshot
                                                        ? "w-6 bg-white"
                                                        : "w-1.5 bg-white/50"
                                                        }`}
                                                    aria-label={`${t.goToScreenshot} ${index + 1}`}
                                                />
                                            ))}
                                        </div>
                                    </>
                                )}
                            </div>
                        ) : (
                            <div className="flex aspect-video items-center justify-center rounded-2xl bg-[var(--surface-soft)]">
                                <div className="text-center">
                                    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--surface)]">
                                        <Play size={20} className="text-[var(--primary)]" />
                                    </div>
                                    <p className="mt-3 text-sm text-[var(--muted)]">
                                        {t.mediaComingSoon}
                                    </p>
                                </div>
                            </div>
                        )}

                        <div className="mt-7">
                            <p className="text-base leading-7 text-[var(--muted)]">
                                {project.description[language]}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.technologies.map((technology) => (
                                    <span
                                        key={technology}
                                        className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-semibold"
                                    >
                                        {technology}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {(project.demoUrl || project.sourceUrl || hasResources) && (
                            <div className="mt-7 flex flex-wrap gap-3 border-t border-[var(--border)] pt-6">
                                {project.demoUrl && (
                                    <a
                                        href={project.demoUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl bg-[var(--primary)] px-4 py-2.5 text-sm font-bold text-white transition-opacity hover:opacity-90"
                                    >
                                        {t.demo}
                                        <ExternalLink size={15} />
                                    </a>
                                )}

                                {project.sourceUrl && (
                                    <a
                                        href={project.sourceUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-bold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                                    >
                                        {t.source}
                                        <ExternalLink size={15} />
                                    </a>
                                )}

                                {project.resources?.map((resource) => (
                                    resource.url && (
                                        <a
                                            key={resource.url}
                                            href={resource.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="inline-flex items-center gap-2 rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-bold transition-colors hover:border-[var(--primary)] hover:text-[var(--primary)]"
                                        >
                                            <FileText size={15} />
                                            {resource.label[language]}
                                            <ExternalLink size={14} />
                                        </a>
                                    )
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}