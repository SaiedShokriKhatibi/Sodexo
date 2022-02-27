import { createContext, useState } from "react"

export const defaultLocale = "tr"
export const locales = ["tr", "en"]
export const LanguageContext = createContext([])

export const LanguageProvider: React.FC = ({ children }) => {
  const [locale, setLocale] = useState("tr")

  return (
    <LanguageContext.Provider value={[locale, setLocale]}>
      {children}
    </LanguageContext.Provider>
  )
}