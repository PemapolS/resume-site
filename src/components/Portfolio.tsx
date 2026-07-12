import { useCallback, useEffect, useState } from 'react';
import '../lib/fontawesome';
import { AppContext } from './AppContext';
import type { AppContextValue } from './AppContext';
import { EMAIL } from '../data/resume';
import Header from './Header';
import Hero from './Hero';
import Experience from './Experience';
import Education from './Education';
import Projects from './Projects';
import Certifications from './Certifications';
import TestScores from './TestScores';
import Skills from './Skills';
import Languages from './Languages';
import Contact from './Contact';
import Footer from './Footer';
import EmailModal from './EmailModal';

type Lang = 'en' | 'th';

/**
 * Interactive root of the portfolio. Owns language, theme and email-modal
 * state; language + theme are persisted to localStorage, mirroring the
 * behaviour of the original design component.
 */
export default function Portfolio() {
  const [lang, setLang] = useState<Lang>('en');
  const [isDark, setIsDark] = useState(false);
  const [emailOpen, setEmailOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync from the environment after hydration (the inline <head> script has
  // already applied the persisted theme class to <html>).
  useEffect(() => {
    try {
      const stored = localStorage.getItem('pf-lang');
      if (stored === 'th' || stored === 'en') setLang(stored);
    } catch {
      /* localStorage unavailable */
    }
    setIsDark(document.documentElement.classList.contains('dark'));
  }, []);

  const toggleLang = useCallback(() => {
    setLang((prev) => {
      const next: Lang = prev === 'en' ? 'th' : 'en';
      try {
        localStorage.setItem('pf-lang', next);
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const toggleTheme = useCallback(() => {
    setIsDark((prev) => {
      const next = !prev;
      try {
        document.documentElement.classList.toggle('dark', next);
        localStorage.setItem('pf-theme', next ? 'dark' : 'light');
      } catch {
        /* ignore */
      }
      return next;
    });
  }, []);

  const openEmail = useCallback(() => {
    setEmailOpen(true);
    setCopied(false);
  }, []);
  const closeEmail = useCallback(() => setEmailOpen(false), []);
  const copyEmail = useCallback(() => {
    try {
      navigator.clipboard.writeText(EMAIL);
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true);
  }, []);

  const en = lang === 'en';
  const ctx: AppContextValue = { en, openEmail };

  return (
    <AppContext.Provider value={ctx}>
      <Header en={en} isDark={isDark} onToggleLang={toggleLang} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <Experience />
        <Education />
        <Projects />
        <Certifications />
        <Languages />
        <TestScores />
        <Skills />
        <Contact />
        {emailOpen && (
          <EmailModal email={EMAIL} copied={copied} onClose={closeEmail} onCopy={copyEmail} />
        )}
      </main>
      <Footer />
    </AppContext.Provider>
  );
}
