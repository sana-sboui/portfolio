import { useEffect, useState } from "react";
import type { Language } from "@/domain/models/portfolio";

export function useLanguage() {
  const [language, setLanguage] = useState<Language>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language") as Language | null;
    if (saved === "en" || saved === "fr") setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language;
    window.localStorage.setItem("portfolio-language", language);
  }, [language]);

  return { language, setLanguage };
}
