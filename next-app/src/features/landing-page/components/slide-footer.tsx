import Image from "next/image";
import { slidePagination, stageLabel } from "../data/content";

/** 2:95 Slide Deck Navigation / Contextual Controls Footer. */
export function SlideFooter() {
  return (
    <footer className="flex w-full flex-col gap-4 border-t border-[rgba(70,69,84,0.2)] px-6 pt-[25px] pb-6 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <span
          aria-hidden="true"
          className="size-2 shrink-0 rounded-full bg-accent-soft"
        />
        <p className="font-mono text-meta font-medium tracking-[0.88px] text-foreground-muted">
          {stageLabel}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* 2:101 Slide Index Pagination Capsule */}
        <div className="flex items-center gap-2 rounded-[8px] border border-hairline bg-surface px-[13px] py-[7px]">
          <span className="font-mono text-pill font-semibold tracking-[0.72px] text-accent-soft">
            {slidePagination.current}
          </span>
          <span className="font-mono text-pill font-medium tracking-[0.72px] text-foreground-subtle">
            /
          </span>
          <span className="font-mono text-pill font-medium tracking-[0.72px] text-foreground-disabled">
            {slidePagination.total}
          </span>
        </div>

        {/* 2:109 / 2:112 — slide controls */}
        <div className="flex items-center gap-1">
          <button
            type="button"
            aria-label="Previous slide"
            disabled
            className="flex size-8 items-center justify-center rounded-[8px] border border-hairline-faint bg-glass-soft p-px opacity-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            <Image
              src="/figma/prev-arrow.svg"
              alt=""
              aria-hidden="true"
              width={5}
              height={8}
            />
          </button>

          <button
            type="button"
            aria-label="Next slide"
            className="flex size-8 items-center justify-center rounded-[8px] border border-hairline-faint bg-glass-soft p-px transition-colors hover:bg-glass-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            <Image
              src="/figma/next-arrow.svg"
              alt=""
              aria-hidden="true"
              width={5}
              height={8}
            />
          </button>
        </div>
      </div>
    </footer>
  );
}