import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import enJSON from './locales/en.json';
import viJSON from './locales/vi.json';
import jaJSON from './locales/ja.json';

const resources = {
  en: {
    translation: enJSON
  },
  vi: {
    translation: viJSON
  },
  ja: {
    translation: jaJSON
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: localStorage.getItem('language') || 'vi',
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
