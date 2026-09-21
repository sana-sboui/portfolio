"use client";

import type { Language, Project } from "@/domain/models/portfolio";
import { projects } from "@/infrastructure/content/portfolio";
import { copy } from "@/infrastructure/content/i18n";
import { ProjectCard } from "@/presentation/components/projects/ProjectCard";
import { SectionHeading } from "../layout/sectionheading";

interface Props {
    language: Language;
    onOpenProject: (project: Project) => void;
}

export function ProjectsSection({
    language,
    onOpenProject,
}: Props) {
    const t = copy[language];

    return (
        <section id="projects" className="mx-auto max-w-6xl px-5 py-24">
            <SectionHeading eyebrow="03" title={t.projectsTitle} />

            <p className="mt-4 max-w-2xl text-[var(--muted)]">
                {t.projectsIntro}
            </p>

            <div className="mt-12 grid gap-5 md:grid-cols-2">
                {projects.map((project) => (
                    <ProjectCard
                        key={project.name}
                        project={project}
                        language={language}
                        onOpen={onOpenProject}
                    />
                ))}
            </div>
        </section>
    );
}