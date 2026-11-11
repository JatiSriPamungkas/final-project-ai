import { footer } from "../data/content";

/** Portfolio footer: brand, tagline, copyright, anchor links. */
export function SiteFooter() {
  return (
    <footer className="flex flex-col gap-6 border-t border-rule-soft py-10 sm:flex-row sm:items-start sm:justify-between">
      <div className="flex flex-col gap-1.5">
        <p className="font-display text-body font-semibold text-foreground">
          {footer.brand}
        </p>
        <p className="max-w-[420px] text-body-sm text-foreground-muted">
          {footer.tagline}
        </p>
        <p className="pt-2 text-body-sm text-foreground-subtle">
          {footer.copyright}
        </p>
      </div>

      <nav aria-label="Footer">
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {footer.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-meta tracking-[0.88px] text-foreground-muted uppercase transition-colors hover:text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </footer>
  );
}