import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './locales/en/translation.json';
import translationAR from './locales/ar/translation.json';

const resources = {
  en: {
    translation: translationEN,
  },
  ar: {
    translation: translationAR,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next);

i18n.on('languageChanged', (lng) => {
  if (typeof document !== 'undefined') {
    const baseLang = lng.split('-')[0];
    document.documentElement.lang = baseLang;
    document.documentElement.dir = i18n.dir(lng);
  }
});

i18n.init({
  resources,
  fallbackLng: 'en',
  debug: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;