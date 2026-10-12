import { useState, useEffect } from 'react';
import { Language } from './types/portfolio';
import { PROJECTS } from './data/portfolio';
import { Navbar } from './components/Navbar';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { Footer } from './components/Footer';

export default function App() {
  const [currentLang, setCurrentLang] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('sidou_gr_portfolio_lang');
      if (saved === 'fr' || saved === 'en') {
        return saved;
      }
    } catch {
      // Ignore localStorage access failures in restricted environments
    }
    return 'en';
  });

  useEffect(() => {
    try {
      localStorage.setItem('sidou_gr_portfolio_lang', currentLang);
    } catch {
      // Ignore
    }
    document.documentElement.lang = currentLang;
  }, [currentLang]);

  return (
    <div className="min-h-screen flex flex-col bg-[#09090b] text-[#f4f4f5]">
      {/* Navigation Bar */}
      <Navbar currentLang={currentLang} onLanguageChange={setCurrentLang} />

      {/* Main Content: Single-page containing strictly the two specified sections */}
      <main className="flex-1">
        <AboutSection lang={currentLang} />
        <ProjectsSection projects={PROJECTS} lang={currentLang} />
      </main>

      {/* Simple Footer */}
      <Footer lang={currentLang} />
    </div>
  );
}
