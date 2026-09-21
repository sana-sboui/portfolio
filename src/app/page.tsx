"use client";

import { useState } from "react";

import { useLanguage } from "@/application/hooks/useLanguage";
import type { Project } from "@/domain/models/portfolio";

import { Header } from "@/presentation/components/layout/Header";

import { HeroSection } from "@/presentation/components/sections/HeroSection";
import { AboutSection } from "@/presentation/components/sections/AboutSection";
import { ProjectsSection } from "@/presentation/components/sections/ProjectsSection";
import { ExperienceSection } from "@/presentation/components/sections/ExperienceSection";
import { CertificationsSection } from "@/presentation/components/sections/CertificationsSection";
import { ContactSection } from "@/presentation/components/sections/ContactSection";

import { ProjectModal } from "@/presentation/components/projects/ProjectModal";
import { Footer } from "@/presentation/components/layout/Footer";

export default function Home() {
  const { language, setLanguage } = useLanguage();

  const [selectedProject, setSelectedProject] =
    useState<Project | null>(null);

  return (
    <div id="top" className="min-h-screen overflow-x-hidden">
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>

      <Header
        language={language}
        onLanguageChange={setLanguage}
      />

      <main id="main-content">
        <HeroSection language={language} />

        <AboutSection language={language} />

        <ProjectsSection
          language={language}
          onOpenProject={setSelectedProject}
        />

        <ExperienceSection language={language} />

        <CertificationsSection language={language} />

        <ContactSection language={language} />
      </main>

      <Footer language={language} />

      <ProjectModal
        project={selectedProject}
        language={language}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}