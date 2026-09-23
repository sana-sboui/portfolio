"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useRef } from "react";

import type { Language } from "@/domain/models/portfolio";
import { certifications } from "@/infrastructure/content/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { SectionHeading } from "../layout/SectionHeading";

interface Props {
    language: Language;
}

export function CertificationsSection({ language }: Props) {
    const t = copy[language];
    const certificationsRef = useRef<HTMLDivElement>(null);

    return (
        <section
            id="certifications"
            className="border-t border-[var(--border)] py-24 md:py-32"
        >
            <div className="mx-auto max-w-6xl px-5">
                <SectionHeading
                    eyebrow="05"
                    title={t.certificationsTitle}
                />

                <p className="mt-4 max-w-2xl text-base leading-7 text-[var(--muted)]">
                    {t.certificationsIntro}
                </p>

                <div
                    ref={certificationsRef}
                    className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-5 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                    {certifications.map((certification) => (
                        <a
                            key={certification.name}
                            href={certification.credentialUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="group flex w-[calc(100vw-2.5rem)] min-w-[calc(100vw-2.5rem)] snap-start flex-col overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--primary)]/40 hover:shadow-xl sm:w-[420px] sm:min-w-[420px] lg:w-[calc((100%-2.5rem)/3)] lg:min-w-0"
                        >
                            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-[var(--surface-soft)] p-7">
                                <div className="absolute inset-0 opacity-[0.035] [background-image:linear-gradient(var(--foreground)_1px,transparent_1px),linear-gradient(90deg,var(--foreground)_1px,transparent_1px)] [background-size:28px_28px]" />

                                <Image
                                    src={certification.image}
                                    alt={`${certification.name} certification`}
                                    fill
                                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 420px, calc(100vw - 2.5rem)"
                                    className="object-contain p-7 transition-transform duration-500 group-hover:scale-105"
                                />
                            </div>

                            <div className="flex flex-1 flex-col p-6">
                                <div className="flex items-center justify-between gap-3">
                                    <span className="rounded-full bg-[var(--primary)]/10 px-3 py-1 text-xs font-bold uppercase tracking-[.12em] text-[var(--primary)]">
                                        {certification.issuer}
                                    </span>

                                    <span className="text-xs font-medium text-[var(--muted)]">
                                        {certification.date[language]}
                                    </span>
                                </div>

                                <h3 className="mt-5 flex-1 text-lg font-black leading-snug">
                                    {certification.name}
                                </h3>

                                <div className="mt-6 flex items-center justify-between border-t border-[var(--border)] pt-4">
                                    <span className="text-sm font-bold text-[var(--muted)] transition-colors group-hover:text-[var(--primary)]">
                                        {t.verifyCredential}
                                    </span>

                                    <ArrowUpRight
                                        size={18}
                                        className="text-[var(--muted)] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--primary)]"
                                    />
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
