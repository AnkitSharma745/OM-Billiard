import type { ButtonHTMLAttributes, ReactNode } from "react";
import { Link } from "../../lib/navigation";

type ButtonVariant = "primary" | "secondary" | "quiet" | "inverse";
type ButtonSize = "sm" | "md" | "lg";

const variants: Record<ButtonVariant, string> = {
  primary: "bg-ink text-surface hover:bg-editorial-mid focus-visible:outline-gold-dark",
  secondary: "border border-line bg-surface text-ink hover:border-sage-dark hover:bg-surface-2 focus-visible:outline-gold-dark",
  quiet: "bg-transparent text-ink hover:bg-surface-2 focus-visible:outline-gold-dark",
  inverse: "border border-editorial-muted/70 bg-transparent !text-editorial-text hover:border-editorial-text hover:bg-editorial-text hover:!text-editorial-dark focus-visible:outline-editorial-text",
};

const sizes: Record<ButtonSize, string> = {
  sm: "min-h-11 px-4 text-sm",
  md: "min-h-12 px-5 text-sm sm:text-base",
  lg: "min-h-14 px-7 text-base",
};

export function buttonStyles({
  variant = "primary",
  size = "md",
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return `inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-fast ease-standard focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:bg-state-disabled disabled:text-muted ${variants[variant]} ${sizes[size]} ${className}`;
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
};

export function Button({ variant = "primary", size = "md", className = "", children, ...props }: ButtonProps) {
  return <button className={buttonStyles({ variant, size, className })} {...props}>{children}</button>;
}

export function ButtonLink({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
}: {
  href: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
  children: ReactNode;
}) {
  return <Link to={href} className={buttonStyles({ variant, size, className })}>{children}</Link>;
}
