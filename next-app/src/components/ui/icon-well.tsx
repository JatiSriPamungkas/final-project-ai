import { cn } from "@/lib/utils";

interface IconWellProps extends React.ComponentProps<"span"> {
  /** 2:8 is 32px; 2:46 is 40px. */
  size?: "sm" | "md";
}

/** 2:8 / 2:46 — the recessed rounded square that frames an icon. */
export function IconWell({
  size = "md",
  className,
  children,
  ...rest
}: IconWellProps) {
  return (
    <span
      className={cn(
        "flex shrink-0 items-center justify-center rounded-[8px] border border-hairline-faint bg-surface-icon p-px",
        size === "sm" ? "size-8" : "size-10",
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  );
}