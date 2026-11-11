import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  availability,
  heroActions,
  heroHeadline,
  heroStats,
  heroSubtext,
  techChips,
  terminalCommit,
  terminalLines,
  terminalTitle,
} from "../data/content";

const toneClass: Record<string, string> = {
  teal: "bg-accent-teal",
  indigo: "bg-accent-soft",
  sky: "bg-accent-sky",
};

const lineTone: Record<string, string> = {
  muted: "text-foreground-subtle",
  key: "text-accent-soft",
  string: "text-accent-teal",
  accent: "text-foreground-muted",
};

/** 1:642 Right Column: Interactive Terminal Preview. */
function TerminalPreview() {
  return (
    <div className="flex flex-col overflow-clip rounded-[12px] border border-hairline-soft bg-slate-panel shadow-[0_25px_50px_-12px_rgba(0,0,0,0.25)] backdrop-blur-[12px]">
      {/* 1:643 Terminal Header */}
      <div className="border-b border-rule bg-slate-header px-4 pt-3 pb-[13px]">
        <div className="flex items-center justify-between">
          <div aria-hidden="true" className="flex items-center gap-2">
            <span className="size-3 rounded-full bg-foreground-disabled" />
            <span className="size-3 rounded-full bg-rule" />
            <span className="size-3 rounded-full bg-[rgba(70,69,84,0.4)]" />
          </div>
          <span className="font-mono text-body-sm text-foreground-subtle">
            {terminalTitle}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col gap-1.5 p-4 font-mono text-meta leading-5">
        {terminalLines.map((line, i) => (
          <p key={`${line.prompt}-${i}`} className={lineTone[line.tone]}>
            {line.prompt} {line.text}
          </p>
        ))}

        <p className="mt-2 text-accent-teal">{terminalCommit}</p>
      </div>
    </div>
  );
}

/** 1:603 Container — two-column hero: copy left, terminal right. */
export function HeroSection() {
  return (
    <section
      id="top"
      className="flex flex-col gap-12 py-16 lg:grid lg:grid-cols-12 lg:items-center lg:gap-12"
    >
      {/* 1:604 Left Column: Copy & Narrative */}
      <div className="flex flex-col items-start gap-6 lg:col-span-7">
        {/* 1:605 Availability Badge */}
        <Badge
          variant="glass"
          dot="teal"
          className="border-rule bg-surface-icon font-mono text-meta font-medium tracking-[0.88px] text-foreground"
        >
          {availability}
        </Badge>

        {/* 1:609 Heading 1 */}
        <h1 className="font-display text-[32px] leading-[1.15] font-extrabold tracking-[-0.96px] text-foreground sm:text-[42px] sm:tracking-[-1.26px] lg:text-[56px] lg:leading-[64px] lg:tracking-[-1.68px]">
          {heroHeadline.line1} {heroHeadline.line2}{" "}
          <span className="text-gradient-hero">{heroHeadline.gradle}</span>
          {heroHeadline.tail} {heroHeadline.line4}
        </h1>

        {/* 1:611 Subtext */}
        <p className="max-w-[672px] text-base leading-relaxed text-foreground-muted sm:text-body-lg">
          {heroSubtext}
        </p>

        {/* 1:612 Action Buttons */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href={heroActions[0].href}
            className="inline-flex items-center gap-2 rounded-[8px] bg-accent-soft px-6 py-[14px] font-mono text-pill font-semibold tracking-[0.6px] text-accent-deep uppercase shadow-[0_0_20px_-3px_rgba(99,102,241,0.5)] transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            {heroActions[0].label}
            <Image
              src="/figma/cta-arrow.svg"
              alt=""
              aria-hidden="true"
              width={12}
              height={12}
              className="size-3 shrink-0 brightness-0"
            />
          </a>

          <a
            href={heroActions[1].href}
            className="inline-flex items-center gap-2 rounded-[8px] border border-rule-faint bg-ghost-fill px-[25px] py-[15px] font-mono text-pill font-medium tracking-[0.6px] text-foreground uppercase backdrop-blur-[8px] transition-colors hover:bg-glass-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            {heroActions[1].label}
            <Image
              src="/figma/cta-arrow.svg"
              alt=""
              aria-hidden="true"
              width={12}
              height={12}
              className="size-3 shrink-0 rotate-90"
            />
          </a>
        </div>

        {/* 1:624 Tech Stack Badges Strip */}
        <div className="flex w-full flex-wrap items-center gap-2.5 border-t border-rule-soft pt-[25px]">
          <span className="pr-2 font-mono text-meta font-medium tracking-[0.88px] text-foreground-subtle uppercase">
            CORE STACK:
          </span>
          {techChips.map((chip) => (
            <span
              key={chip.label}
              className="flex items-center gap-1.5 rounded-[4px] border border-rule bg-glass-panel px-[13px] py-[5px]"
            >
              <span
                aria-hidden="true"
                className={`size-1.5 rounded-full ${toneClass[chip.tone]}`}
              />
              <span className="font-mono text-meta font-medium tracking-[0.88px] text-foreground">
                {chip.label}
              </span>
            </span>
          ))}
        </div>
      </div>

      {/* 1:642 Right Column */}
      <div className="lg:col-span-5">
        <TerminalPreview />
      </div>

      {/* Hero stats */}
      <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3 lg:col-span-12">
        {heroStats.map((stat) => (
          <Card key={stat.value} className="gap-1 p-5">
            <dt className="font-display text-[24px] leading-8 font-bold text-foreground">
              {stat.value}
            </dt>
            <dd className="text-body-sm text-foreground-muted">{stat.label}</dd>
          </Card>
        ))}
      </dl>
    </section>
  );
}