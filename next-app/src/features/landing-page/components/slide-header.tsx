import Image from "next/image";
import { IconWell } from "@/components/ui/icon-well";
import { StatusPill } from "@/components/ui/status-pill";
import { headerStatus } from "../data/content";

/** 2:7 Brand / Event Identification. */
function BrandMark() {
  return (
    <div className="flex items-center gap-3">
      <IconWell size="sm">
        <Image
          src="/figma/brand-mark.svg"
          alt=""
          aria-hidden="true"
          width={15}
          height={12}
          className="h-3 w-[15px]"
        />
      </IconWell>

      <span className="font-display text-[20px] leading-7 font-bold tracking-[-0.5px] text-foreground">
        Berijalan
      </span>

      <span
        aria-hidden="true"
        className="font-sans text-base leading-6 text-foreground-disabled"
      >
        /
      </span>

      <span className="font-mono text-meta font-medium tracking-[0.55px] text-foreground-muted uppercase">
        Academy Division
      </span>
    </div>
  );
}

/** 2:17 Live Status Meta Indicator. */
function StatusMeta() {
  return (
    <div className="flex shrink-0 items-center gap-3">
      <StatusPill variant="live">
        <span className="font-mono text-meta font-medium whitespace-nowrap text-foreground-muted">
          {headerStatus.live}
        </span>
      </StatusPill>

      <StatusPill variant="plain" className="hidden sm:flex">
        <Image
          src={headerStatus.cohort.icon}
          alt=""
          aria-hidden="true"
          width={headerStatus.cohort.iconWidth}
          height={headerStatus.cohort.iconHeight}
          className="shrink-0"
        />
        <span className="font-mono text-meta font-medium whitespace-nowrap text-foreground-muted">
          {headerStatus.cohort.label}
        </span>
      </StatusPill>
    </div>
  );
}

/** 2:6 Header Slide Anchor / Status Bar — 80px tall, brand left, meta right. */
export function SlideHeader() {
  return (
    <header className="flex h-20 w-full shrink-0 items-center justify-between px-6">
      <BrandMark />
      <StatusMeta />
    </header>
  );
}