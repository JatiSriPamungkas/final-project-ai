import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/container";
import { HighlightCard } from "./highlight-card";
import {
  batchLabel,
  headline,
  highlights,
  orientationActions,
  subheadline,
} from "../data/content";

/**
 * 2:30 Container inside 2:29 Main Slide Presentation Canvas:
 * batch badge, headline, subheadline, metric cards, action cluster.
 */
export function HeroSection() {
  return (
    <section className="flex w-full flex-col items-center">
      {/* 2:31 Top Batch Badge */}
      <Badge
        variant="glass"
        dot="teal"
        className="font-mono text-pill font-medium tracking-[1.2px] text-accent-teal uppercase"
      >
        {batchLabel}
      </Badge>

      {/* 2:36 Main Presentation Headline */}
      <div className="flex w-full flex-col items-center gap-3 pt-8">
        {/* 2:38 Heading 1 — 2:37 centres this block, so the wrapper must
            centre its children rather than align them to the start. */}
        <h1 className="w-full text-center font-display text-[32px] leading-[1.15] font-extrabold tracking-[-0.8px] text-foreground sm:text-[42px] sm:tracking-[-1px] lg:text-display">
          {headline.lead}
          <br />
          <span className="text-gradient-bootcamp">{headline.accent}</span>
        </h1>

        {/* 2:39 Inspiring Subheadline */}
        <Container size="copy">
          <p className="pt-2 text-center text-base leading-relaxed text-foreground-muted sm:text-body-lg">
            {subheadline}
          </p>
        </Container>
      </div>

      {/* 2:42 3 Key Orientation Highlights */}
      <div className="flex w-full flex-col gap-6 pt-12 md:flex-row">
        {highlights.map((card) => (
          <HighlightCard key={card.index} data={card} />
        ))}
      </div>

      {/* 2:83 Action Cluster */}
      <div className="flex flex-col items-stretch gap-4 pt-8 sm:flex-row sm:items-center">
        {orientationActions.map((action) =>
          action.variant === "primary" ? (
            <Button
              key={action.label}
              href={action.href}
              variant="primary"
              trailingIcon={action.icon}
            >
              {action.label}
            </Button>
          ) : (
            <Button
              key={action.label}
              href={action.href}
              variant="secondary"
              leadingIcon={action.icon}
              leadingIconWidth={action.iconWidth}
              leadingIconHeight={action.iconHeight}
            >
              {action.label}
            </Button>
          ),
        )}
      </div>
    </section>
  );
}