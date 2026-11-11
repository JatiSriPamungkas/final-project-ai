import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { IconWell } from "@/components/ui/icon-well";
import type { HighlightCard as HighlightCardData } from "../types";

interface HighlightCardProps {
  data: HighlightCardData;
}

/**
 * 2:43 / 2:56 / 2:69 — one metric bento card: icon well plus index badge
 * on one row, then heading and body copy.
 */
export function HighlightCard({ data }: HighlightCardProps) {
  const { index, title, description, icon, iconWidth, iconHeight } = data;

  return (
    <Card className="justify-between gap-5">
      <div className="flex w-full items-center justify-between pb-4">
        <IconWell>
          <Image
            src={icon}
            alt=""
            aria-hidden="true"
            width={iconWidth}
            height={iconHeight}
            className="shrink-0"
          />
        </IconWell>

        <Badge className="font-mono text-meta font-medium tracking-[0.88px] text-foreground-subtle">
          {index}
        </Badge>
      </div>

      <div className="flex flex-col gap-[7px]">
        {/* 2:52 / 2:65 / 2:78 are Figma "Heading 2" layers, so h2. */}
        <h2 className="font-display text-headline font-semibold text-foreground">
          {title}
        </h2>
        <p className="text-body-sm text-foreground-muted">{description}</p>
      </div>
    </Card>
  );
}