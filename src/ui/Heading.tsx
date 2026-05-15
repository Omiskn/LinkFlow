import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  color?: string;
};

function Heading({
  children,
  color = "var(--color-primary-200)",
}: HeadingProps) {
  return (
    <h2 className="text-3xl capitalize font-bold mb-2" style={{ color }}>
      {children}
    </h2>
  );
}

export default Heading;
