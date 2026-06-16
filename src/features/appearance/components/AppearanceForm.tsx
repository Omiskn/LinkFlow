// type AppearanceFormProps = {};

import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Field, FieldGroup } from "@/components/ui/field";
import { Separator } from "@/components/ui/separator";

import {
  borderThemes,
  fontThemes,
  type BorderTheme,
  type ColorTheme,
  type FontTheme,
  type ModeTheme,
} from "@/types/appearance";
import AppearancePageSkeleton from "@/features/appearance/components/AppearancePageSkeleton";
import { Button } from "@/components/ui/button";

import {
  Palette,
  Square,
  Type,
  Languages,
  Sun,
  Moon,
  Check,
  Save,
  // Divide,
} from "lucide-react";

import { useAppearance } from "@/providers/AppearanceProvider";
import { useEffect } from "react";
import { useUpdateSetting } from "@/features/appearance/hooks/useUpdateSetting";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import SettingRow from "@/features/appearance/components/SettingRow";
import { Spinner } from "@/components/ui/Spinner";

const colors = [
  { color: "#3db19c", themeKey: "theme-green" },
  { color: "#ef4444", themeKey: "theme-red" },
  { color: "#6366f1", themeKey: "theme-blue" },
  { color: "#a855f7", themeKey: "theme-purple" },
  { color: "#f97316", themeKey: "theme-orange" },
  { color: "#06b6d4", themeKey: "theme-cyan" },
  { color: "#52525b", themeKey: "theme-black" },
];

const langs = ["en", "ar"];

const modes = [
  { mode: "light", icon: Sun },
  { mode: "dark", icon: Moon },
];

const formSchema = z.object({
  theme_mode: z.string().min(1),
  primary_color: z.string().min(1),
  button_style: z.string().min(1),
  font_style: z.string().min(1),
  language: z.string(),
});

function AppearanceForm() {
  const { settings, setSetting, isLoading } = useAppearance();
  const { updateSetting, isLoading: isUpdating } = useUpdateSetting();
  const { handleSubmit, control, reset } = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      theme_mode: "",
      primary_color: "",
      button_style: "",
      font_style: "",
      language: "",
    },
  });

  useEffect(() => {
    if (!settings) return;

    reset({
      theme_mode: settings.modeTheme,
      primary_color: settings.colorTheme,
      button_style: settings.borderTheme,
      font_style: settings.fontTheme,
      language: "",
    });
  }, [settings, reset]);

  function onSubmit(data: z.infer<typeof formSchema>) {
    console.log(data);
    updateSetting(data);
  }

  if (isLoading) return <AppearancePageSkeleton />;

  return (
    <form onSubmit={handleSubmit(onSubmit)} id="g">
      <FieldGroup>
        <SettingRow
          title="Theme Color"
          description="Choose your primary theme color."
          icon={Palette}
        >
          <Controller
            name="primary_color"
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                className=" gap-2.5"
                onValueChange={(value) => {
                  if (!value) return;
                  field.onChange(value);

                  setSetting("colorTheme", value as ColorTheme);
                }}
                disabled={isUpdating}
              >
                {colors.map(({ color, themeKey }) => (
                  <ToggleGroupItem
                    value={themeKey}
                    key={themeKey}
                    className={`
                            relative flex h-10 w-10 items-center justify-center
                            rounded-full transition hover:scale-105
                            ${field.value === themeKey ? "ring-4 ring-(--color-primary-200)" : ""}
                          `}
                    style={{ backgroundColor: color }}
                  >
                    {field.value === themeKey && (
                      <Check className="h-5 w-5 text-white" />
                    )}
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </SettingRow>
        <Separator />
        <SettingRow
          title="Border Radius"
          description="Choose the border style for elements."
          icon={Square}
        >
          <Controller
            name="button_style"
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                className=" gap-2.5"
                onValueChange={(value) => {
                  if (!value) return;
                  field.onChange(value);
                  setSetting("borderTheme", value as BorderTheme);
                }}
                disabled={isUpdating}
              >
                {borderThemes.map((border) => (
                  <ToggleGroupItem
                    value={border}
                    key={border}
                    className={`flex justify-center items-center py-6 px-13 border gap-2 ${border === field.value ? "border-(--color-primary-500) bg-(--color-primary-50)! text-(--color-primary-500)" : ""}`}
                  >
                    <Square />
                    <span className="capitalize">
                      {border.split("-").at(1)}
                    </span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </SettingRow>
        <Separator />
        <SettingRow
          title="Font Family"
          description="Select the font family for your dashboard."
          icon={Type}
        >
          <Controller
            name="font_style"
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                className="gap-0 border overflow-hidden"
                onValueChange={(value) => {
                  if (!value) return;
                  field.onChange(value);
                  setSetting("fontTheme", value as FontTheme);
                }}
                disabled={isUpdating}
              >
                {fontThemes.map((font) => (
                  <ToggleGroupItem
                    value={font}
                    key={font}
                    className={`flex justify-center items-center sm:py-6 sm:px-9 py-6 px-7 gap-2 rounded-none border-0 ${font === field.value ? "bg-(--color-primary-50)! text-(--color-primary-500)" : ""}`}
                  >
                    <span className="capitalize">{font.split("-").at(1)}</span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </SettingRow>
        <Separator />
        <SettingRow
          title="Language"
          description="Choose your preferred Language."
          icon={Languages}
        >
          <Controller
            name="language"
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                className="gap-2.5"
                disabled={true}
                onValueChange={(value) => {
                  if (!value) return;
                  field.onChange(value);
                }}
              >
                {langs.map((lang) => (
                  <ToggleGroupItem
                    value={lang}
                    key={lang}
                    className={`flex justify-center items-center py-6 px-13 border gap-2 ${lang === field.value ? "border-(--color-primary-500) bg-(--color-primary-50)! text-(--color-primary-500)" : ""}`}
                  >
                    <span className="capitalize">{lang}</span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </SettingRow>
        <Separator />
        <SettingRow
          title="mode"
          description="Choose between light and dark mode."
          icon={Sun}
        >
          <Controller
            name="theme_mode"
            control={control}
            render={({ field }) => (
              <ToggleGroup
                type="single"
                value={field.value}
                className="gap-2.5"
                onValueChange={(value) => {
                  if (!value) return;
                  field.onChange(value);
                  setSetting("modeTheme", value as ModeTheme);
                }}
                disabled={isUpdating}
              >
                {modes.map(({ mode, icon: Icon }) => (
                  <ToggleGroupItem
                    value={mode}
                    key={mode}
                    className={`flex justify-center items-center py-6 px-13 border gap-2 ${mode === field.value ? "border-(--color-primary-500) bg-(--color-primary-50)! text-(--color-primary-500)" : ""}`}
                  >
                    <Icon />
                    <span className="capitalize">{mode}</span>
                  </ToggleGroupItem>
                ))}
              </ToggleGroup>
            )}
          />
        </SettingRow>
        <Separator />

        <Field className=" self-end w-fit ">
          <Button
            type="submit"
            size="lg"
            className="flex items-center justify-center "
            form="g"
            disabled={isUpdating}
          >
            {isUpdating ? <Spinner /> : <Save />} <span>Save</span>
          </Button>
        </Field>
      </FieldGroup>
    </form>
  );
}

export default AppearanceForm;
