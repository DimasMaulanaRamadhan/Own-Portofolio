import { useEffect, useState } from "react";

import LanguageContext from "./LanguageContext";
import en from "./en";
import id from "./id";

const dictionaries = { en, id };

const STORAGE_KEY = "portfolio-lang";

function getInitialLang() {
  if (typeof window === "undefined") return "en";

  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === "en" || stored === "id") return stored;

  return "en";
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLang((current) => (current === "en" ? "id" : "en"));
  };

  // t("hero.tagline") -> ambil string sesuai bahasa aktif.
  // Jika key tidak ditemukan, kembalikan key-nya supaya mudah terlihat saat dev.
  const t = (key) => {
    const dict = dictionaries[lang] || dictionaries.en;
    const value = dict[key];
    return value === undefined ? key : value;
  };

  // pick(field) -> ambil nilai teks data sesuai bahasa aktif.
  // - string biasa  -> dikembalikan apa adanya (field yang tidak diterjemahkan)
  // - { en, id }    -> ambil sesuai lang
  // - array         -> dipetakan rekursif (mis. daftar objectives/points)
  const pick = (field) => {
    if (Array.isArray(field)) return field.map(pick);
    if (field && typeof field === "object") {
      return field[lang] ?? field.en ?? "";
    }
    return field;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t, pick }}>
      {children}
    </LanguageContext.Provider>
  );
}
