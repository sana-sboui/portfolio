"use client";

import type { Language } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { site } from "@/infrastructure/content/site";

interface Props {
    language: Language;
}

export function Footer({ language }: Props) {
    const t = copy[language];

    return (
        <footer className="border-t border-[var(--border)] bg-[var(--surface-soft)]">
            <div className="mx-auto max-w-7xl px-5 py-12 md:py-14">
                <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                    <div>
                        <p className="text-lg font-black tracking-tight">
                            {site.name}
                        </p>

                        <p className="mt-1 text-sm text-[var(--muted)]">
                            {t.footerRole}
                        </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-6 text-sm font-semibold">
                        <a
                            href={site.linkedin}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-[var(--primary)]"
                        >
                            LinkedIn
                        </a>

                        <a
                            href={site.github}
                            target="_blank"
                            rel="noreferrer"
                            className="transition-colors hover:text-[var(--primary)]"
                        >
                            GitHub
                        </a>

                        <a
                            href="#top"
                            className="transition-colors hover:text-[var(--primary)]"
                        >
                            {t.backToTop}
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-[var(--border)] pt-6 text-center text-xs text-[var(--muted)]">
                    <p>
                        © {new Date().getFullYear()} {site.name}.{" "}
                        {t.rightsReserved}
                    </p>
                </div>
            </div>
        </footer>
    );
}