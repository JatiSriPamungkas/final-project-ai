import Image from "next/image";
import { Card } from "@/components/ui/card";
import { about } from "../data/content";

/** 1:601 § 3 — About Me: profile card, narrative, values, career timeline. */
export function AboutSection() {
  return (
    <section id="about" className="flex flex-col gap-10 py-16">
      <div className="flex flex-col gap-4">
        <p className="font-mono text-meta font-medium tracking-[0.88px] text-accent-teal uppercase">
          {about.eyebrow}
        </p>
        <h2 className="font-display text-[28px] leading-tight font-bold tracking-[-0.8px] text-foreground sm:text-[36px]">
          {about.heading}
        </h2>
        <p className="max-w-[672px] text-body-lg text-foreground-muted">
          {about.intro}
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Profile card — 1:722 Left: Stylized Avatar / Bio Card */}
        <Card className="gap-6 overflow-clip p-[33px] lg:col-span-5">
          {/* 1:723 Background+Border portrait frame */}
          <div className="relative w-full overflow-hidden rounded-[12px] border border-[rgba(70,69,84,0.4)] bg-surface-icon">
            <div className="relative aspect-[512/279] w-full">
              <Image
                src={about.portrait}
                alt={`Potret ${about.name}, ${about.role}`}
                fill
                sizes="(max-width: 1024px) 100vw, 360px"
                className="object-cover object-top"
              />
            </div>

            {/* 1:725 Gradient scrim */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-header via-transparent to-transparent opacity-80"
            />

            {/* 1:726 caption */}
            <div className="absolute inset-x-4 bottom-4">
              <p className="font-display text-headline font-bold text-foreground">
                {about.name}
              </p>
              <p className="font-mono text-meta font-medium tracking-[0.88px] text-accent-teal">
                {about.role}
              </p>
            </div>
          </div>

          <dl className="flex flex-col gap-3 border-t border-rule-soft pt-5">
            {about.facts.map((fact) => (
              <div key={fact.label} className="flex flex-col gap-0.5">
                <dt className="font-mono text-meta tracking-[0.88px] text-foreground-subtle uppercase">
                  {fact.label}
                </dt>
                <dd className="text-body text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>

          <a
            href="#cv"
            className="inline-flex items-center justify-center rounded-[8px] border border-rule bg-ghost-fill px-5 py-3 font-mono text-pill font-semibold tracking-[0.6px] text-foreground uppercase transition-colors hover:bg-glass-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            {about.cta}
          </a>
        </Card>

        {/* Narrative + values */}
        <div className="flex flex-col gap-6 lg:col-span-7">
          <div className="flex flex-col gap-4">
            {about.narrative.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-body-sm leading-relaxed text-foreground-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
            {about.values.map((value) => (
              <div
                key={value.title}
                className="flex flex-col gap-2 rounded-[8px] border border-rule-soft bg-glass-soft p-4"
              >
                <h4 className="font-display text-body font-semibold text-foreground">
                  {value.title}
                </h4>
                <p className="text-body-sm text-foreground-muted">
                  {value.description}
                </p>
              </div>
            ))}
          </div>

          {/* Career timeline */}
          <div className="flex flex-col gap-4 border-t border-rule-soft pt-6">
            <h3 className="font-display text-headline font-semibold text-foreground">
              {about.careerHeading}
            </h3>
            <ol className="flex flex-col gap-4">
              {about.career.map((entry) => (
                <li
                  key={entry.period}
                  className="flex flex-col gap-1 border-l border-rule pl-4"
                >
                  <span className="font-mono text-meta tracking-[0.88px] text-accent-teal">
                    {entry.period}
                  </span>
                  <span className="font-display text-body font-semibold text-foreground">
                    {entry.role}
                  </span>
                  <p className="text-body-sm text-foreground-muted">
                    {entry.description}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}