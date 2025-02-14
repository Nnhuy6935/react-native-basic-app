import React, { createContext, useContext, useState } from 'react'
import i18n from './i18n'

// Tạo Context
const LanguageContext = createContext({
  language: 'vi',
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  changeLanguage: (lang: 'en' | 'vi') => {},
})

//tạo provider
export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<string>(i18n.language)
  const changeLanguage = (lang: 'vi' | 'en') => {
    i18n.changeLanguage(lang)
    setLanguage(lang)
  }

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => useContext(LanguageContext)
