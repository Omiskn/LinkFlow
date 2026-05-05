import type { ReactNode } from "react";

type HeadingProps = {
  children: ReactNode;
  color?: string;
};

function Heading({ children, color = "--color-primary-500" }: HeadingProps) {
  return (
    <h2 className={`text-(${color}) text-3xl capitalize font-bold mb-2`}>
      {children}
    </h2>
  );
}

export default Heading;
