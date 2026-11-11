import { Card } from "@/components/ui/card";
import { projects } from "../data/content";

/** 1:601 § 5 — Featured project cards with filter pills. */
export function ProjectsSection() {
  return (
    <section id="projects" className="flex flex-col gap-10 py-16">
      <div className="flex flex-col gap-4">
        <p className="font-mono text-meta font-medium tracking-[0.88px] text-accent-teal uppercase">
          {projects.eyebrow}
        </p>
        <h2 className="font-display text-[28px] leading-tight font-bold tracking-[-0.8px] text-foreground sm:text-[36px]">
          {projects.heading}
        </h2>
        <p className="max-w-[672px] text-body-lg text-foreground-muted">
          {projects.intro}
        </p>
      </div>

      {/*
        Filter pills. Selection is not wired yet, so these render as
        non-interactive labels rather than buttons that do nothing.
      */}
      <ul className="flex flex-wrap items-center gap-2">
        {projects.filters.map((filter) => (
          <li
            key={filter.label}
            className={
              filter.active
                ? "rounded-full border border-accent-soft bg-accent-soft px-[14px] py-[6px] font-mono text-meta font-semibold tracking-[0.88px] text-accent-deep uppercase"
                : "rounded-full border border-rule bg-ghost-fill px-[14px] py-[6px] font-mono text-meta font-medium tracking-[0.88px] text-foreground-muted uppercase"
            }
          >
            {filter.label}
          </li>
        ))}
      </ul>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {projects.items.map((project) => (
          <Card key={project.title} className="gap-4">
            <p className="font-mono text-meta font-medium tracking-[0.88px] text-foreground-subtle uppercase">
              {project.category}
            </p>

            <h3 className="font-display text-[24px] leading-tight font-bold tracking-[-0.5px] text-foreground">
              {project.title}
            </h3>

            <p className="text-body-sm leading-relaxed text-foreground-muted">
              {project.description}
            </p>

            <ul className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <li
                  key={tech}
                  className="rounded-[4px] border border-rule bg-glass-panel px-[10px] py-[4px] font-mono text-meta font-medium tracking-[0.88px] text-foreground-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>

            <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-rule-soft pt-4">
              <a
                href="#demo"
                className="rounded-[8px] bg-accent-soft px-4 py-2 font-mono text-pill font-semibold tracking-[0.6px] text-accent-deep uppercase transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
              >
                {projects.demoLabel}
              </a>
              <a
                href="#source"
                className="rounded-[8px] border border-rule px-4 py-2 font-mono text-pill font-medium tracking-[0.6px] text-foreground uppercase transition-colors hover:bg-glass-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
              >
                {projects.sourceLabel}
              </a>
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
}