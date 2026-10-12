import { PersonalInfo, Project } from '../types/portfolio';

/**
 * ============================================================================
 * VERIFIED PERSONAL INFORMATION FOR SIDOU_GR
 * ============================================================================
 * Edit this file to update your personal details or add your real projects.
 * Only verified academic information and links are included here.
 */
export const PERSONAL_INFO: PersonalInfo = {
  displayName: 'SIDOU_GR',
  githubUrl: 'https://github.com/sidougr96-arch',
  email: 'sidougr96@gmail.com',
  academic: {
    degree: {
      en: 'Licence — 3rd Year (L3)',
      fr: 'Licence — 3ème Année (L3)',
    },
    field: {
      en: 'Mathématiques et Informatique',
      fr: 'Mathématiques et Informatique',
    },
    speciality: {
      en: 'Informatique',
      fr: 'Informatique',
    },
    option: {
      en: 'Systèmes informatiques',
      fr: 'Systèmes informatiques',
    },
  },
};

/**
 * ============================================================================
 * PROJECTS LIST
 * ============================================================================
 * Currently initialized to an empty array ([]) because no verified projects
 * have been published yet. The website renders a clean, professional empty state.
 *
 * HOW TO ADD A NEW PROJECT:
 * Add an object to the `PROJECTS` array below following this schema:
 *
 * {
 *   id: 'my-project-id',
 *   title: {
 *     en: 'Project Title in English',
 *     fr: 'Titre du projet en Français',
 *   },
 *   description: {
 *     en: 'Short description of what the project does.',
 *     fr: 'Brève description des fonctionnalités du projet.',
 *   },
 *   technologies: ['C', 'Linux', 'Python', 'Git'], // Array of technology names
 *   githubUrl: 'https://github.com/sidougr96-arch/your-repo', // Optional
 *   liveUrl: 'https://demo-link.example.com', // Optional
 *   imageUrl: '/images/project-preview.png', // Optional screenshot
 * },
 */
export const PROJECTS: Project[] = [];

/**
 * Layout demonstration template used exclusively for the optional UI preview modal
 * to demonstrate how the reusable project card renders with real data.
 */
export const DEMO_PROJECT_SAMPLE: Project = {
  id: 'demo-sample',
  title: {
    en: 'Example Project Layout',
    fr: 'Exemple de mise en page de projet',
  },
  description: {
    en: 'This sample illustrates the card layout with technologies, repository link, and live demo link.',
    fr: 'Cet exemple illustre la disposition de la carte avec les technologies, le lien de dépôt et la démo.',
  },
  technologies: ['C', 'Bash', 'Linux', 'Git'],
  githubUrl: 'https://github.com/sidougr96-arch',
  liveUrl: 'https://github.com/sidougr96-arch',
};
