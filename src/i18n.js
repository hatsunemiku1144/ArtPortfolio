import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

import translationEN from './public/locales/en/translation.json';
import translationJA from './public/locales/ja/translation.json';
import translationZH from './public/locales/zh/translation.json';
const resources = {
  en: {
    translation: translationEN
  },
  ja: {
    translation: translationJA
  },
  zh:{
    translation: translationZH
  }
};

// ...


i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng:'zh',
    fallbackLng: 'en',
    debug: true,
    react: { 
        useSuspense: false //  
      },
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    }
  });


export default i18n;