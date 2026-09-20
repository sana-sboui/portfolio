"use client";

import type { Language } from "@/domain/models/portfolio";
import { experiences } from "@/infrastructure/content/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { SectionHeading } from "../layout/sectionheading";

interface Props {
    language: Language;
}

export function ExperienceSection({ language }: Props) {
    const t = copy[language];

    return (
        <section id="experience" className="py-24 md:py-32">
            <div className="mx-auto max-w-5xl px-5">
                <div className="mb-14 max-w-2xl">
                    <SectionHeading eyebrow="04" title={t.navExperience} />

                    <p className="mt-4 text-base leading-7 text-[var(--muted)]">
                        {t.experienceSectionIntro}
                    </p>
                </div>

                <div className="relative">
                    <div
                        className="absolute bottom-2 left-[7px] top-2 w-px bg-[var(--border)] md:left-[175px]"
                        aria-hidden="true"
                    />

                    <div className="space-y-10">
                        {experiences.map((experience) => (
                            <article
                                key={`${experience.company}-${experience.period[language]}`}
                                className="group relative grid gap-5 md:grid-cols-[150px_1fr] md:gap-10"
                            >
                                <div className="relative pl-7 md:pl-0 md:pt-1">
                                    <span
                                        className="absolute left-0 top-1.5 h-4 w-4 rounded-full border-4 border-[var(--background)] bg-[var(--primary)] md:left-auto md:right-[-31px]"
                                        aria-hidden="true"
                                    />

                                    <p className="text-sm font-semibold text-[var(--primary)]">
                                        {experience.period[language]}
                                    </p>
                                </div>

                                <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40">
                                    <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                                        <div>
                                            <h3 className="text-lg font-bold">
                                                {experience.company}
                                            </h3>

                                            <p className="mt-1 text-sm font-medium text-[var(--primary)]">
                                                {experience.role[language]}
                                            </p>
                                        </div>

                                        {experience.recent && (
                                            <span className="w-fit rounded-full border border-[var(--border)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                                                {t.recentBadge}
                                            </span>
                                        )}
                                    </div>

                                    <p className="mt-4 text-sm font-semibold">
                                        {experience.project}
                                    </p>

                                    <p className="mt-2 max-w-3xl text-sm leading-6 text-[var(--muted)]">
                                        {experience.description[language]}
                                    </p>

                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {experience.technologies.map((technology) => (
                                            <span
                                                key={technology}
                                                className="rounded-full bg-[var(--background)] px-2.5 py-1 text-xs font-medium text-[var(--muted)]"
                                            >
                                                {technology}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}