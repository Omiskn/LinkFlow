"use client";

import { fontThemes, type FontTheme } from "@/types/appearance";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeContextType = {
  theme: FontTheme;
  setTheme: (theme: FontTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeFontProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<FontTheme>(() => {
    const savedTheme = localStorage.getItem("fontTheme") as FontTheme | null;

    return savedTheme || "font-geist";
  });

  console.log(theme);

  useEffect(() => {
    console.log("hello from font effects");
    document.documentElement.classList.remove(...fontThemes);

    document.documentElement.classList.add(theme);
    localStorage.setItem("fontTheme", theme);
  }, [theme]);

  const setTheme = (newTheme: FontTheme) => {
    // localStorage.setItem("fontTheme", newTheme);

    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeFont() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeFont must be used inside ThemeColorProvider");
  }

  return context;
}
