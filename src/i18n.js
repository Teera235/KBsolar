import React, { createContext, useContext, useEffect, useState } from 'react';

/**
 * Site language (th | en). Text lives next to the component that shows it:
 *   const { t } = useLang();
 *   t('ติดต่อเรา', 'Contact us')          // two strings
 *   t({ th: 'บ้าน', en: 'Home' })         // or a { th, en } object from a data array
 * The choice is remembered in localStorage and mirrored on <html lang>.
 */
const LangContext = createContext({ lang: 'th', setLang: () => {}, t: (th) => th });

const KEY = 'kb-lang';

const initial = () => {
  try {
    const saved = localStorage.getItem(KEY);
    if (saved === 'th' || saved === 'en') return saved;
  } catch (e) {}
  return 'th';
};

export function LangProvider({ children }) {
  const [lang, setLang] = useState(initial);

  useEffect(() => {
    document.documentElement.lang = lang;
    try { localStorage.setItem(KEY, lang); } catch (e) {}
  }, [lang]);

  const t = (th, en) =>
    th && typeof th === 'object' ? th[lang] ?? th.th : lang === 'en' ? en : th;

  return React.createElement(LangContext.Provider, { value: { lang, setLang, t } }, children);
}

export const useLang = () => useContext(LangContext);
