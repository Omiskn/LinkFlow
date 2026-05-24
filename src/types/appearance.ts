export interface SettingDTO {
  theme_mode?: string;
  primary_color?: string;
  font_style?: string;
  button_style?: string;
  background?: string;
  language?: string;
}

export type ColorTheme =
  | "theme-blue"
  | "theme-red"
  | "theme-green"
  | "theme-purple"
  | "theme-orange"
  | "theme-cyan"
  | "theme-black";
export type ModeTheme = "dark" | "light" | "system";
export type FontTheme = "font-geist" | "font-manrope" | "font-jakarta";
export type BorderTheme = "border-soft" | "border-sharp";

export const fontThemes: FontTheme[] = [
  "font-geist",
  "font-manrope",
  "font-jakarta",
];
export const colorthemes: ColorTheme[] = [
  "theme-green",
  "theme-blue",
  "theme-red",
  "theme-purple",
  "theme-orange",
  "theme-cyan",
  "theme-black",
];
export const modeThemes: ModeTheme[] = ["system", "dark", "light"];
export const borderThemes: BorderTheme[] = ["border-soft", "border-sharp"];
