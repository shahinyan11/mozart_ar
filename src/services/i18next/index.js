import i18n from "i18next"
import { initReactI18next } from "react-i18next"

import en from './en'
import ge from './ge'

i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en
        },
        ge: {
            translation: ge
        }
    },
    lng: "ge",
    fallbackLng: "ge",

    interpolation: {
        escapeValue: false
    }
});

export default i18n