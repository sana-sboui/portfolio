"use client";

import { Menu, Moon, Sun, X } from "lucide-react";
import { useState } from "react";
import type { Language } from "@/domain/models/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { useTheme } from "../theme/ThemeProvider";
import { site } from "@/infrastructure/content/site";
import Image from "next/image";

interface Props {
  language: Language;
  onLanguageChange: (language: Language) => void;
}

const NAV_ITEMS = [
  { href: "#about", key: "navAbout" },
  { href: "#projects", key: "navProjects" },
  { href: "#experience", key: "navExperience" },
  { href: "#certifications", key: "navCertifications" },
  { href: "#contact", key: "navContact" },
] as const;

export function Header({ language, onLanguageChange }: Props) {
  const t = copy[language];
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[color:var(--background)]/90 backdrop-blur-xl">
      <div className="mx-auto grid h-20 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-5">
        <div className="flex items-center">
          <a
            href="#top"
            className="group flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-90"
            aria-label={site.name}
          >
            <Image
              src={theme === "light" ? "/logo-light.png" : "/logo-dark.png"}
              alt="Sana Sboui logo"
              width={48}
              height={48}
              className="h-12 w-12 object-contain"
            />
            <span
              className="
                hidden
                bg-[var(--primary)]
                bg-clip-text
                font-serif
                text-xl
                font-bold
                italic
                tracking-[-0.03em]
                text-transparent
                drop-shadow-[0_1px_2px_rgba(36,69,216,0.15)]
                sm:inline
              "
            >
              {site.name}
            </span>
          </a>
        </div>

        <nav
          aria-label="Primary navigation"
          className="hidden h-full items-center justify-center md:flex"
        >
          <div className="flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className="nav-link flex h-20 items-center text-sm font-semibold">
                {t[item.key]}
              </a>
            ))}
          </div>
        </nav>

        <div className="flex items-center justify-end gap-2">
          <button
            type="button"
            onClick={() => onLanguageChange(language === "en" ? "fr" : "en")}
            className="flex h-11 min-w-11 items-center justify-center rounded-full border border-[var(--border)] px-3 text-xs font-bold transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            aria-label={t.language}
          >
            {language.toUpperCase()}
          </button>

          <button
            type="button"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)]"
            aria-label={t.theme}
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>

          <button
            type="button"
            onClick={() => setMobileOpen((open) => !open)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border)] transition-all duration-200 hover:border-[var(--primary)] hover:text-[var(--primary)] md:hidden"
            aria-label={mobileOpen ? t.closeMenu : t.menu}
            aria-expanded={mobileOpen}
            aria-controls="mobile-nav"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          id="mobile-nav"
          aria-label="Mobile navigation"
          className="border-t border-[var(--border)] bg-[var(--background)] md:hidden"
        >
          <div className="flex flex-col px-5 py-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="border-b border-[var(--border)] py-4 text-base font-semibold last:border-none"
              >
                {t[item.key]}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}