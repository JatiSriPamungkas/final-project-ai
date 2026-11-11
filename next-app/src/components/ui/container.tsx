import { cn } from "@/lib/utils";

interface ContainerProps extends React.ComponentProps<"div"> {
  /** 2:30 presentation canvas (896) or 2:6 page frame (1280). */
  size?: "page" | "canvas" | "copy";
}

const widthBySize: Record<NonNullable<ContainerProps["size"]>, string> = {
  page: "max-w-[1280px]",
  canvas: "max-w-[896px]",
  copy: "max-w-[672px]",
};

/** Centred, token-width wrapper. Owns horizontal page gutters. */
export function Container({
  size = "page",
  className,
  children,
  ...rest
}: ContainerProps) {
  return (
    <div
      className={cn("mx-auto w-full", widthBySize[size], className)}
      {...rest}
    >
      {children}
    </div>
  );
}