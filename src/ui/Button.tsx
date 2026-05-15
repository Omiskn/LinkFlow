type ButtonProps = {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  ...props
}: ButtonProps) {
  const base = "rounded-full font-medium transition";

  const variants = {
    primary: "bg-[var(--color-primary-500)] text-white shadow-(--shadow-sm)",
    secondary:
      "text-(--color-primary-50) text-sm px-12 py-2 bg-transparent border-2 border-(--color-primary-50) rounded-full uppercase",
  };

  const sizes = {
    sm: "px-3 py-1 text-sm",
    md: "px-5 py-2",
    lg: "px-6 py-3 text-base",
  };

  return (
    <button
      {...props}
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
    />
  );
}
