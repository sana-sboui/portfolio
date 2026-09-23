"use client";

import { ArrowDownRight, ArrowUpRight } from "lucide-react";

import type { Language } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";

interface Props {
    language: Language;
}

export function HeroSection({ language }: Props) {
    const t = copy[language];

    return (
        <section className="relative overflow-hidden border-b border-[var(--border)]">
            <div className="absolute inset-0 grid-pattern opacity-70" />
            <div className="hero-orb -right-24 -top-20" />
            <div className="hero-orb -left-32 bottom-0" />

            <div className="relative mx-auto grid max-w-6xl gap-14 px-5 pb-24 pt-20 md:grid-cols-[1.2fr_.8fr] md:items-center md:pt-28">
                <div>
                    <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-xs font-bold">
                        <span className="h-2 w-2 rounded-full bg-emerald-500" />
                        {t.availability}
                    </div>

                    <p className="mb-4 text-sm font-bold uppercase tracking-[.18em] text-[var(--primary)]">
                        {t.role}
                    </p>

                    <h1 className="max-w-4xl text-5xl font-black leading-[1.02] tracking-[-.045em] md:text-7xl">
                        {t.heroTitle}
                    </h1>

                    <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--muted)]">
                        {t.heroText}
                    </p>

                    <div className="mt-9 flex flex-wrap gap-3">
                        <a
                            href="#projects"
                            className="inline-flex items-center gap-2 rounded-2xl bg-blue-500 px-5 py-3 font-bold text-white"
                        >
                            {t.viewProjects}
                            <ArrowDownRight size={18} />
                        </a>

                        <a
                            href="#contact"
                            className="inline-flex items-center gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-3 font-bold"
                        >
                            {t.contactMe}
                            <ArrowUpRight size={18} />
                        </a>
                    </div>
                </div>

                <div className="surface relative overflow-hidden rounded-[2rem] p-7 md:p-8">
                    <div className="absolute right-0 top-0 h-28 w-28 rounded-full bg-[var(--primary)] opacity-10 blur-2xl" />

                    <p className="text-xs font-bold uppercase tracking-[.16em] text-[var(--muted)]">
                        01 / 03
                    </p>

                    <div className="mt-16">
                        <p className="text-4xl font-black">Full-stack</p>
                        <p className="mt-2 text-[var(--muted)]">
                            Architecture · APIs · Security · Accessibility
                        </p>
                    </div>

                    <div className="mt-12 grid grid-cols-2 gap-3 text-sm">
                        {[
                            "Next.js",
                            "NestJS",
                            "Java",
                            "Spring Boot",
                            "Angular",
                            "PostgreSQL",
                            "Docker",
                            "CI/CD",
                        ].map((item) => (
                            <span
                                key={item}
                                className="rounded-xl bg-[var(--surface-soft)] px-3 py-3 font-semibold"
                            >
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}