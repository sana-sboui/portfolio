"use client";

import { useMemo, useState } from "react";

import type { Language, Project } from "@/domain/models/portfolio";
import { projects } from "@/infrastructure/content/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { ProjectCard } from "@/presentation/components/projects/ProjectCard";
import { SectionHeading } from "@/presentation/components/layout/SectionHeading";
import { TechFilter } from "@/presentation/components/projects/TechFilter";

interface Props {
    language: Language;
    onOpenProject: (project: Project) => void;
}

export function ProjectsSection({
    language,
    onOpenProject,
}: Props) {
    const t = copy[language];
    const [selectedTechs, setSelectedTechs] = useState<string[]>([]);

    const allTechnologies = useMemo(
        () => Array.from(new Set(projects.flatMap((project) => project.technologies))).sort(),
        []
    );

    const filteredProjects = useMemo(
        () =>
            selectedTechs.length === 0
                ? projects
                : projects.filter((project) =>
                    project.technologies.some((tech) => selectedTechs.includes(tech))
                ),
        [selectedTechs]
    );

    function toggleTech(technology: string) {
        setSelectedTechs((current) =>
            current.includes(technology)
                ? current.filter((tech) => tech !== technology)
                : [...current, technology]
        );
    }

    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading eyebrow="03" title={t.projectsTitle} />

            <p className="mt-4 max-w-2xl text-[var(--muted)]">
                {t.projectsIntro}
            </p>

            <TechFilter
                technologies={allTechnologies}
                selected={selectedTechs}
                onToggle={toggleTech}
                onClearAll={() => setSelectedTechs([])}
                triggerLabel={t.filterByTechnology}
                searchPlaceholder={t.searchTechnologyPlaceholder}
                noMatchLabel={t.noTechnologyMatch}
                clearLabel={t.clearFilter}
                clearAllLabel={t.clearAllFilters}
            />

            {filteredProjects.length > 0 ? (
                <div className="mt-8 grid gap-5 md:grid-cols-2">
                    {filteredProjects.map((project) => (
                        <ProjectCard
                            key={project.name}
                            project={project}
                            language={language}
                            onOpen={onOpenProject}
                        />
                    ))}
                </div>
            ) : (
                <p className="mt-12 text-sm text-[var(--muted)]">{t.noProjectsFound}</p>
            )}
        </section>
    );
}