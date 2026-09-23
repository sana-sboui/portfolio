"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Check, ChevronDown, Search, SlidersHorizontal, X } from "lucide-react";

interface Props {
    technologies: string[];
    selected: string[];
    onToggle: (technology: string) => void;
    onClearAll: () => void;
    triggerLabel: string;
    searchPlaceholder: string;
    noMatchLabel: string;
    clearLabel: string;
    clearAllLabel: string;
}

export function TechFilter({
    technologies,
    selected,
    onToggle,
    onClearAll,
    triggerLabel,
    searchPlaceholder,
    noMatchLabel,
    clearLabel,
    clearAllLabel,
}: Props) {
    const [open, setOpen] = useState(false);
    const [query, setQuery] = useState("");
    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    const closeFilter = useCallback(() => {
        setOpen(false);
        setQuery("");
    }, []);

    const filtered = useMemo(
        () =>
            technologies.filter((tech) =>
                tech.toLowerCase().includes(query.trim().toLowerCase())
            ),
        [technologies, query]
    );

    useEffect(() => {
        if (!open) return;

        function handleClickOutside(event: MouseEvent) {
            if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
                closeFilter();
            }
        }
        function handleEscape(event: KeyboardEvent) {
            if (event.key === "Escape") closeFilter();
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("keydown", handleEscape);
        inputRef.current?.focus();

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("keydown", handleEscape);
        };
    }, [closeFilter, open]);

    return (
        <div className="mt-8">
            <div ref={containerRef} className="relative inline-flex">
                <button
                    type="button"
                    onClick={() => {
                        if (open) {
                            closeFilter();
                            return;
                        }

                        setOpen(true);
                    }}
                    aria-haspopup="listbox"
                    aria-expanded={open}
                    className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold transition-colors ${selected.length > 0
                        ? "border-[var(--primary)] text-[var(--primary)]"
                        : "border-[var(--border)] text-[var(--muted)] hover:border-[var(--primary)] hover:text-[var(--primary)]"
                        }`}
                >
                    <SlidersHorizontal size={14} />
                    {triggerLabel}
                    {selected.length > 0 && (
                        <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-[var(--primary)] px-1 text-[10px] font-bold text-white">
                            {selected.length}
                        </span>
                    )}
                    <ChevronDown size={14} className={`transition-transform ${open ? "rotate-180" : ""}`} />
                </button>

                {open && (
                    <div
                        role="listbox"
                        aria-multiselectable="true"
                        aria-label={triggerLabel}
                        className="absolute left-0 top-full z-20 mt-2 w-64 overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-xl"
                    >
                        <div className="flex items-center gap-2 border-b border-[var(--border)] px-3 py-2.5">
                            <Search size={15} className="text-[var(--muted)]" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(event) => setQuery(event.target.value)}
                                placeholder={searchPlaceholder}
                                className="w-full bg-transparent text-sm outline-none placeholder:text-[var(--muted)]"
                            />
                        </div>

                        <div className="max-h-64 overflow-y-auto p-1.5">
                            {filtered.length > 0 ? (
                                filtered.map((technology) => {
                                    const checked = selected.includes(technology);
                                    return (
                                        <button
                                            key={technology}
                                            type="button"
                                            role="option"
                                            aria-selected={checked}
                                            onClick={() => onToggle(technology)}
                                            className="flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-sm font-medium hover:bg-[var(--surface-soft)]"
                                        >
                                            <span
                                                className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border ${checked
                                                    ? "border-[var(--primary)] bg-[var(--primary)]"
                                                    : "border-[var(--border)]"
                                                    }`}
                                                aria-hidden="true"
                                            >
                                                {checked && <Check size={11} className="text-white" />}
                                            </span>
                                            {technology}
                                        </button>
                                    );
                                })
                            ) : (
                                <p className="px-3 py-2 text-sm text-[var(--muted)]">{noMatchLabel}</p>
                            )}
                        </div>

                        {selected.length > 0 && (
                            <div className="border-t border-[var(--border)] p-1.5">
                                <button
                                    type="button"
                                    onClick={onClearAll}
                                    className="w-full rounded-xl px-3 py-2 text-left text-sm font-semibold text-[var(--primary)] hover:bg-[var(--surface-soft)]"
                                >
                                    {clearAllLabel} ({selected.length})
                                </button>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {selected.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2">
                    {selected.map((technology) => (
                        <span
                            key={technology}
                            className="inline-flex items-center gap-1.5 rounded-full border border-[var(--primary)] bg-[var(--primary)]/10 px-3 py-1 text-xs font-semibold text-[var(--primary)]"
                        >
                            {technology}
                            <button
                                type="button"
                                onClick={() => onToggle(technology)}
                                aria-label={`${clearLabel}: ${technology}`}
                                className="rounded-full p-0.5 hover:bg-[var(--primary)]/20"
                            >
                                <X size={12} />
                            </button>
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
