import { createI18n } from "vue-i18n";

const messages = {
  en: {
    ceasar: "Ceasar Cipher",
    shift: "shift",
    switch: "Switch Cipher",
    switchKey: "Switch Key",
    yourMessage: "Your message",
    chooseCipher: "Choose the Cipher",
    typeHere: "Type here",
    encrypt: "Encrypt",
    yourResults: "Your results",
    home: "Home",
    ciphers: "Ciphers",
  },
  pl: {
    ceasar: "Szyfr Cezara",
    shift: "przesunięcie",
    switch: "Zamiana",
    switchKey: "klucz zamiany",
    yourMessage: "Twoja wiadomość",
    chooseCipher: "Wybierz Szyfr",
    typeHere: "Pisz tutaj",
    encrypt: "Szyfruj",
    yourResults: "Twój wynik",
    home: "Strona Główna",
    ciphers: "Szyfry",
  },
};

export const i18n = createI18n({
  legacy: false,
  locale: "pl",
  fallbackLocale: "en",
  messages,
});
