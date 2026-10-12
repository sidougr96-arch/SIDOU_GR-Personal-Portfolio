import { Language } from '../types/portfolio';

export interface TranslationDictionary {
  nav: {
    about: string;
    projects: string;
    github: string;
    email: string;
    switchLang: string;
    menuOpen: string;
    menuClose: string;
  };
  about: {
    kicker: string;
    title: string;
    introduction: string;
    educationTitle: string;
    degreeLabel: string;
    fieldLabel: string;
    specialityLabel: string;
    optionLabel: string;
    optionFocusBadge: string;
    githubButton: string;
    emailButton: string;
    copyEmail: string;
    emailCopied: string;
  };
  projects: {
    kicker: string;
    title: string;
    subtitle: string;
    emptyTitle: string;
    emptyDescription: string;
    emptyGithubButton: string;
    previewCardButton: string;
    previewModalTitle: string;
    previewNotice: string;
    closePreview: string;
    cardTechnologies: string;
    cardSourceCode: string;
    cardLiveDemo: string;
  };
  footer: {
    rights: string;
    tagline: string;
    backToTop: string;
  };
}

export const TRANSLATIONS: Record<Language, TranslationDictionary> = {
  en: {
    nav: {
      about: 'About Me',
      projects: 'Projects',
      github: 'GitHub Profile',
      email: 'Email',
      switchLang: 'Passer en Français',
      menuOpen: 'Open navigation menu',
      menuClose: 'Close navigation menu',
    },
    about: {
      kicker: 'Academic Profile',
      title: 'SIDOU_GR',
      introduction:
        'Welcome to my personal portfolio. I am currently pursuing my Licence — 3rd Year (L3) in Mathématiques et Informatique, specializing in Informatique with a dedicated academic focus on Systèmes informatiques.',
      educationTitle: 'Education',
      degreeLabel: 'Degree',
      fieldLabel: 'Field',
      specialityLabel: 'Speciality',
      optionLabel: 'Option',
      optionFocusBadge: 'Academic Focus',
      githubButton: 'Explore GitHub Profile',
      emailButton: 'Send an Email',
      copyEmail: 'Copy Email Address',
      emailCopied: 'Email copied to clipboard!',
    },
    projects: {
      kicker: 'Software Showcase',
      title: 'Projects',
      subtitle: 'Academic and software development projects',
      emptyTitle: 'Projects in Preparation',
      emptyDescription:
        'No public projects are listed at this time. Verified academic and software repositories will be showcased here as they are published. You can visit my GitHub profile in the meantime to explore activity.',
      emptyGithubButton: 'View GitHub Repositories',
      previewCardButton: 'Preview Card Layout',
      previewModalTitle: 'Project Card Layout Demonstration',
      previewNotice:
        'This is a visual layout preview showing how cards render once real projects are added to src/data/portfolio.ts.',
      closePreview: 'Close Preview',
      cardTechnologies: 'Technologies',
      cardSourceCode: 'Source Code',
      cardLiveDemo: 'Live Demo',
    },
    footer: {
      rights: 'All rights reserved.',
      tagline: 'Lightweight static portfolio designed for GitHub Pages.',
      backToTop: 'Back to top',
    },
  },
  fr: {
    nav: {
      about: 'À propos de moi',
      projects: 'Projets',
      github: 'Profil GitHub',
      email: 'E-mail',
      switchLang: 'Switch to English',
      menuOpen: 'Ouvrir le menu de navigation',
      menuClose: 'Fermer le menu de navigation',
    },
    about: {
      kicker: 'Profil Académique',
      title: 'SIDOU_GR',
      introduction:
        'Bienvenue sur mon portfolio personnel. Je poursuis actuellement ma Licence — 3ème Année (L3) en Mathématiques et Informatique, spécialité Informatique, avec une option académique approfondie en Systèmes informatiques.',
      educationTitle: 'Formation',
      degreeLabel: 'Diplôme',
      fieldLabel: 'Filière',
      specialityLabel: 'Spécialité',
      optionLabel: 'Option',
      optionFocusBadge: 'Option Académique',
      githubButton: 'Consulter le profil GitHub',
      emailButton: 'Envoyer un e-mail',
      copyEmail: "Copier l'adresse e-mail",
      emailCopied: 'Adresse e-mail copiée !',
    },
    projects: {
      kicker: 'Travaux et Réalisations',
      title: 'Projets',
      subtitle: 'Projets académiques et développement logiciel',
      emptyTitle: 'Projets en cours de préparation',
      emptyDescription:
        "Aucun projet public n'est publié pour le moment. Les dépôts et réalisations techniques vérifiés seront présentés ici au fur et à mesure. Vous pouvez consulter mon profil GitHub pour suivre mes activités.",
      emptyGithubButton: 'Voir les dépôts GitHub',
      previewCardButton: 'Aperçu du format de carte',
      previewModalTitle: 'Démonstration de mise en page de carte',
      previewNotice:
        'Ceci est un aperçu visuel montrant la disposition des cartes une fois les projets réels ajoutés dans src/data/portfolio.ts.',
      closePreview: "Fermer l'aperçu",
      cardTechnologies: 'Technologies',
      cardSourceCode: 'Code source',
      cardLiveDemo: 'Démonstration',
    },
    footer: {
      rights: 'Tous droits réservés.',
      tagline: 'Portfolio statique et léger conçu pour GitHub Pages.',
      backToTop: 'Haut de page',
    },
  },
};
