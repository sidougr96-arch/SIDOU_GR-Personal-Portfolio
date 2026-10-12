export type Language = 'en' | 'fr';

export interface LocalizedString {
  en: string;
  fr: string;
}

export interface AcademicDetails {
  degree: LocalizedString;
  field: LocalizedString;
  speciality: LocalizedString;
  option: LocalizedString;
}

export interface PersonalInfo {
  displayName: string;
  githubUrl: string;
  email: string;
  academic: AcademicDetails;
}

export interface Project {
  id: string;
  title: LocalizedString;
  description: LocalizedString;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageUrl?: string;
}
