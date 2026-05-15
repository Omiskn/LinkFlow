import type { FieldError } from "react-hook-form";
import Input from "./Input";
import React from "react";

type FormFieldProps = {
  error?: FieldError;
  icon?: React.ElementType;
} & React.InputHTMLAttributes<HTMLInputElement>;

export default function FormField({ error, icon, ...props }: FormFieldProps) {
  return (
    <div className="w-full">
      <Input icon={icon} {...props} />

      {error && <p className="text-red-500 text-sm mt-1">{error.message}</p>}
    </div>
  );
}
