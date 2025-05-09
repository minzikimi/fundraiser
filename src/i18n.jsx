import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/english/translation.json';
import sv from './locales/svenska/translation.json';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      sv: { translation: sv }
    },
    lng: 'sv', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
