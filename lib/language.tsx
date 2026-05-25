'use client';

import { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import en from '@/locales/en.json';
import bn from '@/locales/bn.json';

type Lang = 'en' | 'bn';
type Translations = typeof en;

const translations: Record<Lang, Translations> = { en, bn };

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: 'en',
  setLang: () => {},
  t: en,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const stored = localStorage.getItem('site_lang') as Lang | null;
    if (stored === 'en' || stored === 'bn') setLangState(stored);
  }, []);

  function setLang(l: Lang) {
    setLangState(l);
    localStorage.setItem('site_lang', l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: translations[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
