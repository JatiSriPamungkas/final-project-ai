import { cn } from "@/lib/utils";

interface CardProps extends React.ComponentProps<"article"> {
  /** 2:43 metric bento card padding is 25px. */
  padding?: "none" | "md";
}

/** 2:43 / 2:56 / 2:69 — glass panel with hairline border and 12px radius. */
export function Card({
  padding = "md",
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <article
      className={cn(
        "flex min-w-0 flex-1 flex-col rounded-[12px] border border-hairline-soft bg-glass backdrop-blur-[12px]",
        padding === "md" && "p-[25px]",
        className,
      )}
      {...rest}
    >
      {children}
    </article>
  );
}