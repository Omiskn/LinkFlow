// src/ui/Card.tsx
import React from "react";

type CardProps = {
  children: React.ReactNode;
};

export default function Card({ children }: CardProps) {
  return (
    <div
      className={`bg-(--color-grey-100) dark:bg-grey-900 shadow-md rounded-lg p-6 flex `}
    >
      {children}
    </div>
  );
}
