import { cn } from "@/lib/utils";

interface StatusPillProps extends React.ComponentProps<"div"> {
  /** 2:18 live indicator with blur, or 2:24 plain glass chip. */
  variant?: "live" | "plain";
}

/** Header status chip: 2:18 (STREAM READY) and 2:24 (Q2 COHORT). */
export function StatusPill({
  variant = "plain",
  className,
  children,
  ...rest
}: StatusPillProps) {
  return (
    <div
      className={cn(
        "flex shrink-0 items-center gap-2 rounded-full px-[13px] py-[7px]",
        variant === "live"
          ? "border border-hairline bg-glass-strong backdrop-blur-[12px]"
          : "gap-[5.99px] border border-hairline-faint bg-glass-button",
        className,
      )}
      {...rest}
    >
      {variant === "live" && (
        <span
          aria-hidden="true"
          className="relative flex size-2 shrink-0 items-center justify-center"
        >
          <span className="absolute inset-0 rounded-full bg-accent-teal opacity-75" />
          <span className="relative size-2 rounded-full bg-accent-teal" />
        </span>
      )}
      {children}
    </div>
  );
}