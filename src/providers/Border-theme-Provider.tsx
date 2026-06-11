"use client";

import { borderThemes, type BorderTheme } from "@/types/appearance";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeContextType = {
  theme: BorderTheme;
  setTheme: (theme: BorderTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeBorderProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<BorderTheme>(() => {
    const savedTheme = localStorage.getItem(
      "borderTheme",
    ) as BorderTheme | null;

    return savedTheme || "border-soft";
  });

  useEffect(() => {
    document.documentElement.classList.remove(...borderThemes);

    document.documentElement.classList.add(theme);
  }, [theme]);

  const setTheme = (newTheme: BorderTheme) => {
    localStorage.setItem("borderTheme", newTheme);

    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeBorder() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeBorder must be used inside ThemeColorProvider");
  }

  return context;
}
