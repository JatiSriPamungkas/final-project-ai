"use client";

import { useState } from "react";
import { contact } from "../data/content";

type Status = "idle" | "submitted";

/**
 * Direct-message form. Client Component because it owns input state.
 * There is no backend in this slice, so submit only reports a local
 * acknowledgement — it does not claim the message was delivered.
 */
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitted");
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      {contact.fields.map((field) => {
        const id = `contact-${field.type}-${field.label
          .toLowerCase()
          .replace(/[^a-z]+/g, "-")}`;

        const sharedClass =
          "w-full rounded-[8px] border border-rule bg-slate-header px-3 py-2.5 font-sans text-body text-foreground placeholder:text-foreground-disabled focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal";

        return (
          <div key={field.label} className="flex flex-col gap-1.5">
            <label
              htmlFor={id}
              className="font-mono text-meta tracking-[0.88px] text-foreground-subtle uppercase"
            >
              {field.label}
            </label>

            {field.type === "textarea" ? (
              <textarea
                id={id}
                name={id}
                rows={4}
                required
                placeholder={field.placeholder}
                className={`${sharedClass} resize-y`}
              />
            ) : (
              <input
                id={id}
                name={id}
                type={field.type}
                required
                placeholder={field.placeholder}
                className={sharedClass}
              />
            )}
          </div>
        );
      })}

      <button
        type="submit"
        className="mt-1 rounded-[8px] bg-accent-soft px-5 py-3 font-mono text-pill font-semibold tracking-[0.6px] text-accent-deep uppercase transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-teal"
      >
        {contact.submitLabel}
      </button>

      <p aria-live="polite" className="min-h-5 text-body-sm text-accent-teal">
        {status === "submitted"
          ? "Formulir tervalidasi. Penghubung pengiriman belum dipasang pada tahap slicing ini."
          : ""}
      </p>
    </form>
  );
}