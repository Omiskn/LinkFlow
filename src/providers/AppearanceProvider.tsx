"use client";

import {
  borderThemes,
  colorthemes,
  fontThemes,
  type BorderTheme,
  type ColorTheme,
  type FontTheme,
  type ModeTheme,
} from "@/types/appearance";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { useSetting } from "@/features/appearance/hooks/useSetting";

type AppearanceState = {
  colorTheme: ColorTheme;
  borderTheme: BorderTheme;
  fontTheme: FontTheme;
  modeTheme?: ModeTheme;
};

type AppearanceContextType = {
  settings: AppearanceState;

  isLoading: boolean;

  setSetting: <K extends keyof AppearanceState>(
    key: K,
    value: AppearanceState[K],
  ) => void;
};

const DEFAULT_SETTINGS: AppearanceState = {
  colorTheme: colorthemes[0] as ColorTheme,
  borderTheme: borderThemes[0] as BorderTheme,
  fontTheme: fontThemes[0] as FontTheme,
  modeTheme: "light",
};

const AppearanceContext = createContext<AppearanceContextType | null>(null);

export default function AppearanceProvider({
  children,
}: {
  children: ReactNode;
}) {
  // =========================
  // API
  // =========================
  const { setting, isLoading } = useSetting();
  const didInitFromApi = useRef(false);

  // =========================
  // Initial State
  // =========================
  const [settings, setSettings] = useState<AppearanceState>(() => {
    if (typeof window === "undefined") {
      return DEFAULT_SETTINGS;
    }

    return {
      colorTheme:
        (localStorage.getItem("colorTheme") as ColorTheme) ??
        DEFAULT_SETTINGS.colorTheme,

      borderTheme:
        (localStorage.getItem("borderTheme") as BorderTheme) ??
        DEFAULT_SETTINGS.borderTheme,

      fontTheme:
        (localStorage.getItem("fontTheme") as FontTheme) ??
        DEFAULT_SETTINGS.fontTheme,

      modeTheme:
        (localStorage.getItem("themeMode") as ModeTheme) ??
        DEFAULT_SETTINGS.modeTheme,
    };
  });

  // =========================
  // Sync API -> State
  // =========================
  useEffect(() => {
    if (!setting) return;

    if (didInitFromApi.current) return;

    didInitFromApi.current = true;

    setSettings((prev) => ({
      ...prev,
      colorTheme: setting.primary_color as ColorTheme,
      borderTheme: setting.button_style as BorderTheme,
      fontTheme: setting.font_style as FontTheme,
    }));
  }, [setting]);

  // =========================
  // Apply Themes To DOM
  // =========================
  useEffect(() => {
    const root = document.documentElement;

    // remove old classes
    root.classList.remove(
      ...colorthemes,
      ...borderThemes,
      ...fontThemes,
      "light",
      "dark",
    );

    // add themes
    root.classList.add(
      settings.colorTheme,
      settings.borderTheme,
      settings.fontTheme,
    );

    // mode
    if (settings.modeTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)")
        .matches
        ? "dark"
        : "light";

      root.classList.add(systemTheme);
    } else {
      root.classList.add(settings.modeTheme!);
    }

    // save localStorage
    localStorage.setItem("colorTheme", settings.colorTheme);

    localStorage.setItem("borderTheme", settings.borderTheme);

    localStorage.setItem("fontTheme", settings.fontTheme);

    localStorage.setItem("themeMode", settings.modeTheme!);
  }, [settings]);

  // =========================
  // Unified Setter
  // =========================
  const setSetting = <K extends keyof AppearanceState>(
    key: K,
    value: AppearanceState[K],
  ) => {
    setSettings((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  return (
    <AppearanceContext.Provider
      value={{
        settings,
        isLoading,
        setSetting,
      }}
    >
      {children}
    </AppearanceContext.Provider>
  );
}

// =========================
// Hook
// =========================
export function useAppearance() {
  const context = useContext(AppearanceContext);

  if (!context) {
    throw new Error("useAppearance must be used inside AppearanceProvider");
  }

  return context;
}
