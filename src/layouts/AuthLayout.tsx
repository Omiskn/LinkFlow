// src/layouts/AuthLayout.tsx
import React from "react";
import Card from "../ui/Card";

type Props = {
  children: React.ReactNode;
};

export default function AuthLayout({ children }: Props) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-grey-50 dark:bg-grey-900">
      <Card>{children}</Card>
    </div>
  );
}
