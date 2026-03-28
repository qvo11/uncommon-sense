import type { ReactNode } from "react";

type ButtonVariant = "solid" | "outline";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: ButtonVariant;
  className?: string;
};

export default function Button({
  children,
  href,
  variant = "solid",
  className = "",
}: ButtonProps) {
  const base =
    "inline-block px-8 py-3 text-sm tracking-widest uppercase font-medium transition-colors duration-200";
  const variants: Record<ButtonVariant, string> = {
    solid: "bg-neutral-950 text-white hover:bg-neutral-900",
    outline:
      "border border-neutral-950 text-neutral-950 bg-transparent hover:bg-neutral-950 hover:text-white",
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
