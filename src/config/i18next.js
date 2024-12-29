import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import uzbLang from "../i18n/locales/uzb/translate.json"
import rusLang from "../i18n/locales/rus/translate.json"

i18next.use(initReactI18next).init({
    resources: {
        uzb: { translation: uzbLang },
        rus: { translation: rusLang }
    },
    lng: "uzb",
    fallbackLng: "uzb"
})

export default i18next