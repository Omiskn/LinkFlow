// src/ui/Input.tsx
import React from "react";

type InputProps = {
  icon?: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function Input({ icon: Icon, ...props }: InputProps) {
  return (
    <div
      className="w-full px-3 py-2 bg-(--color-primary-50)/40 rounded-md
      flex items-center gap-2
      focus-within:ring-2 focus-within:ring-(--color-primary-600)"
    >
      {Icon && <Icon className="text-(--color-primary-800)" />}
      <input {...props} className="w-full bg-transparent outline-none" />
    </div>
  );
}
