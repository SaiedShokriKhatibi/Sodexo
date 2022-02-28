import React, { createContext, useState, useMemo } from "react";

const locales = ["tr", "en"];
const defaultLocale = "tr";
const LanguageContext = createContext([]);

const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState(defaultLocale);
  const languageContextValue = useMemo(() => {
    return [locale, setLocale];
  }, [locale, setLocale]);

  return (
    <LanguageContext.Provider value={languageContextValue}>
      {children}
    </LanguageContext.Provider>
  )
};

export default LanguageProvider;