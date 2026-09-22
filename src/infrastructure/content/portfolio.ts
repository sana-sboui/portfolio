import type { Experience, Project, Certification } from "@/domain/models/portfolio";

export const experiences: Experience[] = [
  {
    company: "Persista Technology",
    role: { en: "Software Engineering Intern", fr: "Stagiaire en ingénierie logicielle" },
    period: { en: "Feb 2026 — Jun 2026", fr: "Fév. 2026 — Juin 2026" },
    project: {
      en: "Sabilouna — Accessible administrative services platform",
      fr: "Sabilouna — Plateforme de services administratifs accessibles",
    },
    description: {
      en: "Built a full-stack platform connecting people with disabilities, ministries and associations, with accessible multilingual interfaces, secure authentication and dedicated AI services.",
      fr: "Développement d'une plateforme full-stack reliant les personnes en situation de handicap, les ministères et les associations, avec interfaces multilingues accessibles, authentification sécurisée et services IA dédiés."
    },
    technologies: ["Next.js", "NestJS", "GraphQL", "PostgreSQL", "FastAPI", "Docker"],
    highlights: {
      en: [
        "Designed a layered backend inspired by Clean Architecture and validated performance at up to 367 requests/second with 500 concurrent users.",
        "Implemented secure authentication and role-based access with JWT, refresh-token rotation, HTTP-only cookies and OTP.",
        "Integrated independent FastAPI services for OCR, speech-to-text and RAG assistance.",
        "Developed an accessible multilingual frontend in Arabic, French and English with RTL support."
      ],
      fr: [
        "Conçu une architecture backend en couches inspirée de la Clean Architecture et validé les performances jusqu'à 367 requêtes/seconde avec 500 utilisateurs simultanés.",
        "Implémenté une authentification sécurisée et un contrôle d'accès par rôles avec JWT, rotation des refresh tokens, cookies HTTP-only et OTP.",
        "Intégré des services FastAPI indépendants pour l'OCR, la transcription speech-to-text et l'assistance RAG.",
        "Développé un frontend accessible et multilingue en arabe, français et anglais avec support RTL."
      ]
    },
    recent: true,
    featured: true
  },
  {
    company: "PlaySoft",
    role: { en: "Software Engineering Intern", fr: "Stagiaire en ingénierie logicielle" },
    period: { en: "Jun 2025 — Aug 2025", fr: "Juin 2025 — Août 2025" },
    project: {
      en: "InstaLab — Educational learning platform",
      fr: "InstaLab — Plateforme éducative d'apprentissage",
    },
    description: {
      en: "Developed quiz creation workflows, reusable Next.js components, trainer onboarding and transactional email features for an educational platform.",
      fr: "Développement de workflows de création de quiz, de composants Next.js réutilisables, du parcours Devenir formateur et de fonctionnalités d'e-mails transactionnels."
    },
    technologies: ["Next.js", "NestJS", "GraphQL", "PostgreSQL"],
    highlights: {
      en: [
        "Built a reusable quiz creation workflow with question reuse and Markdown support.",
        "Implemented the instructor application approval workflow with automated notifications.",
        "Developed reusable Next.js components and transactional email tooling."
      ],
      fr: [
        "Développé un workflow réutilisable de création de quiz avec réutilisation des questions et support Markdown.",
        "Implémenté le workflow de candidature des formateurs avec notifications automatiques.",
        "Développé des composants Next.js réutilisables et un système d'e-mails transactionnels."
      ]
    },
    recent: true,
    featured: true
  },
  {
    company: "Deepshift",
    role: { en: "Frontend Development Intern", fr: "Stagiaire en développement frontend" },
    period: { en: "Jun 2025 — Aug 2025", fr: "Juin 2025 — Août 2025" },
    project: {
      en: "Medical platform — Frontend interfaces",
      fr: "Plateforme médicale — Interfaces frontend",
    },
    description: {
      en: "Developed responsive Next.js interfaces from design specifications and worked with the product team to improve UI consistency and usability.",
      fr: "Développement d'interfaces responsives en Next.js à partir des spécifications de design et collaboration avec l'équipe produit sur l'ergonomie et la cohérence de l'interface."
    },
    technologies: ["Next.js"],
    highlights: {
      en: ["Developed responsive Next.js interfaces from design specifications and worked with the product team to improve UI consistency and usability."],
      fr: ["Développement d'interfaces responsives en Next.js à partir des spécifications de design et collaboration avec l'équipe produit sur l'ergonomie et la cohérence de l'interface."]
    },
    recent: true,
    featured: true
  },
  {
    company: "IT Grow",
    role: { en: "Artificial Intelligence Intern", fr: "Stagiaire en intelligence artificielle" },
    period: { en: "Jun 2024 — Sep 2024", fr: "Juin 2024 — Sept. 2024" },
    project: {
      en: "Arif — AI-assisted educational question generation",
      fr: "Arif — Génération de questions pédagogiques assistée par IA",
    },
    description: {
      en: "Engineered a pipeline transforming curriculum content into standardized assessment JSON using the Gemini API, with confidence-based validation before persistence.",
      fr: "Développé un pipeline transformant le contenu pédagogique en données d'évaluation JSON standardisées avec l'API Gemini, avec validation basée sur des scores de confiance avant persistance."
    },
    technologies: ["Python", "Gemini API", "MongoDB", "PyMongo"],
    highlights: {
      en: [
        "Engineered a pipeline transforming curriculum content into standardized assessment JSON.",
        "Added confidence-based validation to reduce manual review."
      ],
      fr: [
        "Développé un pipeline transformant le contenu pédagogique en données d'évaluation JSON standardisées.",
        "Mis en place une validation basée sur des scores de confiance afin de réduire la révision manuelle."
      ]
    }
  },
  {
    company: "Premiere Consulting",
    role: { en: "AI Intern", fr: "Stagiaire en intelligence artificielle" },
    period: { en: "Jul 2023 — Aug 2023", fr: "Juil. 2023 — Août 2023" },
    project: {
      en: "Work accident prediction — Machine learning",
      fr: "Prédiction des accidents du travail — Machine learning",
    },
    description: {
      en: "Developed a machine learning model using historical workplace accident data, including data preprocessing, feature analysis and model evaluation.",
      fr: "Développement d'un modèle de machine learning à partir de données historiques d'accidents du travail, avec prétraitement, analyse des facteurs de risque et évaluation du modèle."
    },
    technologies: ["Python", "Machine Learning"],
    highlights: {
      en: ["Developed a machine learning model using historical workplace accident data, including data preprocessing, feature analysis and model evaluation."],
      fr: ["Développement d'un modèle de machine learning à partir de données historiques d'accidents du travail, avec prétraitement, analyse des facteurs de risque et évaluation du modèle."]
    }
  },
  {
    company: "CNI",
    role: { en: "Software Engineering Intern", fr: "Stagiaire en ingénierie logicielle" },
    period: { en: "Jul 2022 — Aug 2022", fr: "Juil. 2022 — Août 2022" },
    project: {
      en: "Web CRUD application",
      fr: "Application web CRUD",
    },
    description: {
      en: "Developed a web CRUD application in native PHP for managing data within the National Computer Center.",
      fr: "Développement d'une application web CRUD en PHP natif pour la gestion de données au sein du Centre National Informatique."
    },
    technologies: ["PHP"],
    highlights: {
      en: ["Developed a web CRUD application in native PHP for managing data within the National Computer Center."],
      fr: ["Développement d'une application web CRUD en PHP natif pour la gestion de données au sein du Centre National Informatique."]
    }
  }
];

export const projects: Project[] = [
  {
    name: "Sabilouna",
    category: {
      en: "Accessible administrative services",
      fr: "Services administratifs accessibles",
    },
    description: {
      en: "An accessible platform designed to simplify administrative journeys for people with disabilities, with AI-assisted document and voice services.",
      fr: "Une plateforme accessible conçue pour simplifier les démarches administratives des personnes en situation de handicap, avec des services IA pour les documents et la voix.",
    },
    technologies: [
      "Next.js",
      "NestJS",
      "GraphQL",
      "PostgreSQL",
      "FastAPI",
      "OCR",
      "Whisper",
      "RAG",
      "Docker",
    ],
    featured: true,
    coverImage: "/projects/sabilouna/cover.png",
    videoUrl: "/projects/sabilouna/demo.mp4",
    demoUrl: "",
    resources: [
      { label: { en: "PFE presentation", fr: "Présentation du PFE" }, url: "" },
      { label: { en: "PFE report", fr: "Rapport de PFE" }, url: "" },
    ],
  },
  {
    name: "InstaLab",
    category: {
      en: "Educational learning platform",
      fr: "Plateforme éducative d'apprentissage",
    },
    description: {
      en: "An educational platform with structured quiz creation, reusable question workflows, trainer application approval and automated transactional emails.",
      fr: "Une plateforme éducative avec un workflow structuré de création de quiz, la réutilisation des questions, l'approbation des candidatures de formateurs et l'automatisation des e-mails transactionnels.",
    },
    technologies: ["Next.js", "NestJS", "GraphQL", "PostgreSQL", "TypeORM", "Redis"],
    featured: true,
    coverImage: "/projects/instalab/cover.png",
    videoUrl: "/projects/instalab/demo.mp4",
    demoUrl: "",
    note: {
      en: "Due to company confidentiality policies, only selected interfaces of this project can be publicly showcased. The displayed screens represent a limited portion of the work completed during the internship.",
      fr: "En raison des politiques de confidentialité de l'entreprise, seules certaines interfaces de ce projet peuvent être présentées publiquement. Les écrans affichés représentent une partie limitée du travail réalisé durant mon stage.",
    },
  },
  {
    name: "JobNest",
    category: { en: "Freelance marketplace", fr: "Marketplace freelance" },
    description: {
      en: "A full-stack marketplace connecting freelancers and clients through project discovery, applications, role-based workflows, messaging and feedback.",
      fr: "Une marketplace full-stack reliant freelances et clients via découverte de projets, candidatures, workflows par rôles, messagerie et évaluations.",
    },
    technologies: ["React", "NestJS", "GraphQL", "Git", "GitHub"],
    featured: true,
    coverImage: "/projects/jobnest/cover.png",
    videoUrl: "/projects/jobnest/demo.mp4",
    demoUrl: "",
    sourceUrl: "https://github.com/DaadouchaSalma/Plateforme_Freelance.git",
  },
  {
    name: "UnityHR",
    category: { en: "Human resources management", fr: "Gestion des ressources humaines" },
    description: {
      en: "A full-stack HR platform centralizing employee management, leave, payroll, recruitment, training and certifications.",
      fr: "Une plateforme RH full-stack centralisant la gestion des employés, congés, paie, recrutement, formations et certifications.",
    },
    technologies: ["Java", "Spring Boot", "REST APIs", "React", "MySQL"],
    featured: true,
    coverImage: "/projects/unityhr/cover.png",
    videoUrl: "/projects/unityhr/demo.mp4",
    demoUrl: "",
    sourceUrl: "https://github.com/DaadouchaSalma/RHSystem.git",
  },
  {
    name: "EduSmart",
    category: { en: "Educational management", fr: "Gestion éducative" },
    description: {
      en: "Centralized educational platform for students, teachers, groups, courses, quizzes and communication, including real-time group chat and Swagger API documentation.",
      fr: "Plateforme éducative centralisée pour les étudiants, enseignants, groupes, cours, quiz et communication, avec chat temps réel et documentation API Swagger.",
    },
    technologies: ["Django", "Angular", "Ionic", "PostgreSQL", "Redis", "Docker", "Kubernetes"],
    featured: false,
    coverImage: "/projects/edusmart/cover.png",
    videoUrl: "/projects/edusmart/demo.mp4",
    demoUrl: "",
    sourceUrl: "https://github.com/sana-sboui/eduSmart.git",
  },
  {
    name: "SmartCare",
    category: { en: "Hospital operations", fr: "Gestion hospitalière" },
    description: {
      en: "A multi-module hospital management system covering patient records, appointments, pharmacy stock, real-time internal messaging, online payments with Stripe, and an integrated chatbot.",
      fr: "Un système de gestion hospitalière multi-modules couvrant les dossiers patients, les rendez-vous, le stock de la pharmacie, la messagerie interne en temps réel, les paiements en ligne avec Stripe et un chatbot intégré.",
    },
    technologies: [".NET", "Angular", "Stripe API", "Gemini API"],
    featured: false,
    coverImage: "/projects/hms/cover.png",
    videoUrl: "/projects/hms/demo.mp4",
    sourceUrl: "https://github.com/DaadouchaSalma/HMS.git",
  },
];

export const certifications: Certification[] = [
  {
    name: "Oracle Certified Professional: Java SE 17 Developer",
    issuer: "Oracle",
    date: { en: "April 2026", fr: "Avril 2026" },
    credentialUrl:
      "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F1688A43D618B8472F94E0E1F6AE588A9090967017FFA5E34296EE26E98A23FC",
    image: "/certifications/oracle.jpg",
  },
  {
    name: "Spring Certified Professional 2024 [v2]",
    issuer: "Broadcom",
    date: { en: "May 2025", fr: "Mai 2025" },
    credentialUrl: "https://www.credly.com/badges/e89f8827-f491-4cb8-8c2d-d7ddd8779eba",
    image: "/certifications/spring.webp",
  },
  {
    name: "PCAP — Certified Associate in Python Programming",
    issuer: "Python Institute",
    date: { en: "October 2024", fr: "Octobre 2024" },
    credentialUrl: "https://www.credly.com/badges/1885a858-33db-486b-8b04-da57931cf8a7",
    image: "/certifications/pcap.png",
  },
];