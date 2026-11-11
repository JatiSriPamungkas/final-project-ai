import Image from "next/image";
import { cn } from "@/lib/utils";

interface BadgeProps extends React.ComponentProps<"span"> {
  /** 2:31 hero badge glass, 2:49 recessed label chip. */
  variant?: "glass" | "recessed";
  /** Optional leading dot; 2:32 uses a glowing teal dot. */
  dot?: "teal" | "indigo" | "none";
  /** Optional leading icon, sized to the asset's intrinsic dimensions. */
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
}

/** Small tracked label used for indices, statuses and the hero batch chip. */
export function Badge({
  variant = "recessed",
  dot = "none",
  icon,
  iconWidth = 12,
  iconHeight = 12,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex shrink-0 items-center gap-2 whitespace-nowrap",
        variant === "glass"
          ? "rounded-full border border-hairline bg-glass-panel px-[17px] py-[7px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] backdrop-blur-[12px]"
          : "rounded-[4px] border border-hairline-faint bg-surface-raised px-[9px] py-[3px]",
        className,
      )}
      {...rest}
    >
      {dot === "teal" && (
        <span
          aria-hidden="true"
          className="size-1.5 shrink-0 rounded-full bg-accent-teal shadow-[0_0_8px_0_rgba(79,219,200,0.8)]"
        />
      )}
      {dot === "indigo" && (
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-accent-soft"
        />
      )}
      {icon && (
        <Image
          src={icon}
          alt=""
          aria-hidden="true"
          width={iconWidth}
          height={iconHeight}
          className="shrink-0"
        />
      )}
      {children}
    </span>
  );
}