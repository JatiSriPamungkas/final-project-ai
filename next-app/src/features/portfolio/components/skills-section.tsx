import Image from "next/image";
import { skills } from "../data/content";

const toneClass: Record<string, string> = {
  teal: "bg-accent-teal",
  indigo: "bg-accent-soft",
  sky: "bg-accent-sky",
  muted: "bg-foreground-subtle",
};

/**
 * 1:807 § 4 — Keahlian & Teknologi.
 * Four category cards (1:815 Frontend, 1:850 Backend & DB,
 * 1:884 UI/UX & Design Systems, 1:917 Tools & DevOps), each with a
 * 48px icon well, heading, description, skill chips and a footer label.
 */
export function SkillsSection() {
  return (
    <section
      id="skills"
      className="flex flex-col gap-12 border-t border-rule-soft py-16"
    >
      {/* 1:808 Container */}
      <div className="flex max-w-[768px] flex-col gap-1.5">
        <p className="font-mono text-pill font-semibold tracking-[0.6px] text-accent-teal uppercase">
          {skills.eyebrow}
        </p>

        {/* 1:810 Heading 2 */}
        <h2 className="font-display text-[28px] leading-tight font-bold tracking-[-0.63px] text-foreground sm:text-[36px] sm:leading-[44px] sm:tracking-[-0.9px]">
          {skills.heading}
        </h2>

        <p className="pt-0.5 text-base leading-7 text-foreground-muted sm:text-body-lg">
          {skills.intro}
        </p>
      </div>

      {/* 1:814 Container — four cards, wrap on smaller frames */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.groups.map((group) => (
          <article
            key={group.title}
            className="flex flex-col justify-between gap-9 rounded-[16px] border border-hairline-soft bg-slate-panel p-[25px] backdrop-blur-[12px]"
          >
            <div className="flex flex-col gap-4">
              {/* Category glyph well */}
              <span className="flex size-12 shrink-0 items-center justify-center rounded-[12px] bg-surface-raised">
                <Image
                  src={group.icon}
                  alt=""
                  aria-hidden="true"
                  width={group.iconWidth}
                  height={group.iconHeight}
                  className="shrink-0"
                />
              </span>

              <div className="flex flex-col gap-1">
                <h3 className="font-display text-headline font-bold text-foreground">
                  {group.title}
                </h3>
                <p className="text-body-sm leading-5 text-foreground-subtle">
                  {group.description}
                </p>
              </div>

              {/* Skill chips */}
              <ul className="flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <li
                    key={item.label}
                    className="flex items-center gap-1.5 rounded-[6px] border border-rule bg-[rgba(38,42,53,0.8)] px-[13px] py-[7px]"
                  >
                    <span
                      aria-hidden="true"
                      className={`size-1.5 rounded-full ${toneClass[item.tone]}`}
                    />
                    <span className="font-mono text-meta font-medium tracking-[0.88px] whitespace-nowrap text-foreground">
                      {item.label}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 1:845 HorizontalBorder footer */}
            <div className="flex items-center gap-1 border-t border-rule-soft pt-[17px]">
              <Image
                src="/figma/cta-arrow.svg"
                alt=""
                aria-hidden="true"
                width={12}
                height={12}
                className="size-3 shrink-0 opacity-60"
              />
              <span className="font-mono text-pill text-foreground-subtle">
                {group.discipline}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}