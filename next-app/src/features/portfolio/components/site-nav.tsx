import { nav } from "../data/content";

/** Portfolio top navigation: logo mark, wordmark, anchor links, CTA. */
export function SiteNav() {
  return (
    <header className="relative z-20 flex w-full items-center justify-between px-6 py-4">
      <a
        href="#top"
        className="flex items-center gap-3 rounded-[8px] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
      >
        <span
          aria-hidden="true"
          className="flex size-9 items-center justify-center rounded-[8px] border border-rule bg-surface-icon font-display text-[13px] font-bold text-foreground"
        >
          {nav.logo}
        </span>
        <span className="font-display text-base font-semibold text-foreground">
          {nav.wordmark}
        </span>
      </a>

      <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
        {nav.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="font-mono text-meta font-medium tracking-[0.88px] text-foreground-muted uppercase transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href={nav.cta.href}
        className="hidden rounded-[8px] border border-rule bg-ghost-fill px-[18px] py-[10px] font-mono text-meta font-semibold tracking-[0.88px] text-foreground uppercase backdrop-blur-[8px] transition-colors hover:bg-glass-panel focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal sm:block"
      >
        {nav.cta.label}
      </a>
    </header>
  );
}