import { useEffect, useSyncExternalStore } from "react";
import type { Language } from "@/domain/models/portfolio";

const LANGUAGE_STORAGE_KEY = "portfolio-language";
const LANGUAGE_CHANGE_EVENT = "portfolio-language-change";

function isLanguage(value: string | null): value is Language {
  return value === "en" || value === "fr";
}

function getStoredLanguage(): Language {
  const saved = window.localStorage.getItem(LANGUAGE_STORAGE_KEY);
  return isLanguage(saved) ? saved : "en";
}

function subscribeToLanguageChanges(onStoreChange: () => void) {
  window.addEventListener("storage", onStoreChange);
  window.addEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);

  return () => {
    window.removeEventListener("storage", onStoreChange);
    window.removeEventListener(LANGUAGE_CHANGE_EVENT, onStoreChange);
  };
}

export function useLanguage() {
  const language = useSyncExternalStore(
    subscribeToLanguageChanges,
    getStoredLanguage,
    () => "en",
  );

  const setLanguage = (nextLanguage: Language) => {
    window.localStorage.setItem(LANGUAGE_STORAGE_KEY, nextLanguage);
    window.dispatchEvent(new Event(LANGUAGE_CHANGE_EVENT));
  };

  useEffect(() => {
    document.documentElement.lang = language;
  }, [language]);

  return { language, setLanguage };
}
