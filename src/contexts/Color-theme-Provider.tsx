"use client";

import { colorthemes, type ColorTheme } from "@/types/appearance";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

type ThemeContextType = {
  theme: ColorTheme;
  setTheme: (theme: ColorTheme) => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

export function ThemeColorProvider({ children }: { children: ReactNode }) {
  const [theme, setThemeState] = useState<ColorTheme>(() => {
    const savedTheme = localStorage.getItem("colorTheme") as ColorTheme | null;

    return savedTheme || "theme-green";
  });

  useEffect(() => {
    document.documentElement.classList.remove(...colorthemes);

    document.documentElement.classList.add(theme);
    localStorage.setItem("colorTheme", theme);
  }, [theme]);

  const setTheme = (newTheme: ColorTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeColor() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error("useThemeColor must be used inside ThemeColorProvider");
  }

  return context;
}
