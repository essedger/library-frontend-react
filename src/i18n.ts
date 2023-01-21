import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import Backend from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

// const currentLanguage = 'ru';
const options = {
  // fallbackLng: currentLanguage,
  // debug: true,
  // lng: currentLanguage, // default languageÏ
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  react: {
    wait: true,
    useSuspense: true,
  },
  initImmediate: false,
  backend: {
    requestOptions: {
      cache: 'no-store' as RequestCache,
    },
  },
};
i18n
  .use(Backend)
  .use(initReactI18next)
  .use(LanguageDetector)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init(options);

export default i18n;
