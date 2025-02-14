import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import vi from '../locales/vietnamese.json'
import en from '../locales/english.json'

// Cấu hình ngôn ngữ
i18n.use(initReactI18next).init({
  resources: {
    en: { translation: en },
    vi: { translation: vi },
  },
  lng: 'vi', // Ngôn ngữ mặc định
  fallbackLng: 'en', // Nếu không có ngôn ngữ phù hợp, dùng tiếng Anh
  interpolation: {
    escapeValue: false,
  },
})

export default i18n
