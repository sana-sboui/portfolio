"use client";

import { Github, Linkedin, Mail } from "lucide-react";

import type { Language } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { site } from "@/infrastructure/content/site";

interface Props {
    language: Language;
}

export function ContactSection({ language }: Props) {
    const t = copy[language];

    return (
        <section id="contact" className="border-t border-[var(--border)]">
            <div className="mx-auto max-w-6xl px-5 py-24">
                <div className="rounded-[2rem] bg-[var(--primary)] p-8 text-white md:p-12">
                    <p className="text-sm font-bold uppercase tracking-[.18em] text-white/70">
                        06
                    </p>

                    <div className="mt-4 grid gap-10 md:grid-cols-[1fr_auto] md:items-end">
                        <div>
                            <h2 className="max-w-3xl text-4xl font-black tracking-tight md:text-5xl">
                                {t.contactTitle}
                            </h2>

                            <p className="mt-5 max-w-2xl leading-7 text-white/80">
                                {t.contactText}
                            </p>
                        </div>

                        <div className="flex flex-wrap gap-3">
                            <a
                                href={`mailto:${site.email}`}
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-3 font-bold text-[var(--primary)]"
                            >
                                <Mail size={17} className="text-[var(--primary)]" />
                                <span className="text-[var(--primary)]">
                                    {t.email}
                                </span>
                            </a>

                            <a
                                href={site.linkedin}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={t.linkedin}
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"
                            >
                                <Linkedin size={19} />
                            </a>

                            <a
                                href={site.github}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={t.github}
                                className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10"
                            >
                                <Github size={19} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}