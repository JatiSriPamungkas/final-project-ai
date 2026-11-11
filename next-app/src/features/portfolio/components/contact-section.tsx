import { Card } from "@/components/ui/card";
import { contact } from "../data/content";
import { ContactForm } from "./contact-form";

/** 1:601 § 6 — Contact CTA banner plus the direct-message form. */
export function ContactSection() {
  return (
    <section id="contact" className="flex flex-col gap-10 py-16">
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
        {/* Copy column */}
        <div className="flex flex-col gap-6 lg:col-span-6">
          <div className="flex flex-col gap-4">
            <p className="font-mono text-meta font-medium tracking-[0.88px] text-accent-teal uppercase">
              {contact.eyebrow}
            </p>
            <h2 className="font-display text-[28px] leading-tight font-bold tracking-[-0.8px] text-foreground sm:text-[36px]">
              {contact.heading}
            </h2>
            {contact.body.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-body-lg leading-relaxed text-foreground-muted"
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="flex flex-col gap-3 border-t border-rule-soft pt-6">
            <p className="font-mono text-meta tracking-[0.88px] text-foreground-subtle uppercase">
              {contact.emailLabel}
            </p>
            <a
              href={`mailto:${contact.email}`}
              className="w-fit font-display text-headline font-semibold text-foreground underline-offset-4 hover:underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
            >
              {contact.email}
            </a>

            <ul className="flex flex-wrap gap-2 pt-2">
              {contact.socials.map((social) => (
                <li
                  key={social}
                  className="rounded-[4px] border border-rule bg-ghost-fill px-[10px] py-[4px] font-mono text-meta tracking-[0.88px] text-foreground-muted"
                >
                  {social}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form column */}
        <Card className="gap-5 lg:col-span-6">
          <h3 className="font-display text-headline font-semibold text-foreground">
            {contact.formHeading}
          </h3>
          <ContactForm />
        </Card>
      </div>
    </section>
  );
}