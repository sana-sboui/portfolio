"use client";

import { CheckCircle2 } from "lucide-react";

import type { Language } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { SectionHeading } from "../layout/sectionheading";

interface Props {
    language: Language;
}

export function AboutSection({ language }: Props) {
    const t = copy[language];

    return (
        <section id="about" className="mx-auto max-w-6xl px-5 py-24">
            <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
                <SectionHeading eyebrow="02" title={t.navAbout} />

                <div>
                    <h3 className="text-2xl font-bold leading-tight md:text-3xl">
                        {t.aboutTitle}
                    </h3>

                    <p className="mt-5 max-w-3xl text-base leading-8 text-[var(--muted)]">
                        {t.aboutText}
                    </p>

                    <div className="mt-9 grid gap-4 sm:grid-cols-2">
                        <div className="rounded-2xl bg-[var(--surface)] p-5 ring-1 ring-[var(--border)]">
                            <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--primary)]">
                                {t.education}
                            </p>

                            <p className="mt-3 font-bold">{t.degree}</p>
                            <p className="mt-2 text-sm text-[var(--muted)]">{t.ranking}</p>
                            <p className="mt-1 text-sm text-[var(--muted)]">{t.pfe}</p>
                        </div>

                        <div className="rounded-2xl bg-[var(--surface)] p-5 ring-1 ring-[var(--border)]">
                            <p className="text-xs font-bold uppercase tracking-[.14em] text-[var(--primary)]">
                                Focus
                            </p>

                            <div className="mt-3 space-y-2 text-sm">
                                {[
                                    "Clean architecture",
                                    "Secure APIs",
                                    "Accessible interfaces",
                                    "AI-assisted services",
                                ].map((item) => (
                                    <p key={item} className="flex items-center gap-2">
                                        <CheckCircle2
                                            size={16}
                                            className="text-[var(--primary)]"
                                        />
                                        {item}
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}