import Image from "next/image";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ComponentProps<"a"> {
  /** 2:84 solid indigo fill; 2:90 glass with hairline border. */
  variant?: "primary" | "secondary";
  trailingIcon?: string;
  leadingIcon?: string;
  leadingIconWidth?: number;
  leadingIconHeight?: number;
}

/**
 * Action link styled as a button. Rendered as an anchor because both
 * instances in the design (2:84, 2:90) navigate.
 */
export function Button({
  variant = "primary",
  trailingIcon,
  leadingIcon,
  leadingIconWidth = 14,
  leadingIconHeight = 14,
  className,
  children,
  ...rest
}: ButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <a
      className={cn(
        "inline-flex shrink-0 items-center justify-center rounded-[12px] text-body font-semibold",
        "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal",
        "transition-colors",
        isPrimary
          ? "gap-3 bg-accent px-8 py-4 text-accent-ink shadow-[0_10px_25px_-5px_rgba(128,131,255,0.3)] inset-shadow-[0_1px_0_0_rgba(255,255,255,0.2)] hover:bg-accent-soft"
          : "gap-2.5 border border-hairline bg-glass-button px-[25px] py-[17px] font-medium text-foreground hover:bg-glass-panel",
        className,
      )}
      {...rest}
    >
      {leadingIcon && (
        <Image
          src={leadingIcon}
          alt=""
          aria-hidden="true"
          width={leadingIconWidth}
          height={leadingIconHeight}
          className="shrink-0"
        />
      )}
      <span>{children}</span>
      {isPrimary && trailingIcon && (
        <Image
          src={trailingIcon}
          alt=""
          aria-hidden="true"
          width={12}
          height={12}
          className="size-3 shrink-0"
        />
      )}
    </a>
  );
}