import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';
import { initReactI18next } from 'react-i18next';
import themeConfig from '../theme.config';
i18n.use(Backend)
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        fallbackLng: themeConfig.locale || 'en',
        debug: false,
        load: 'languageOnly',
    });
export default i18n;
