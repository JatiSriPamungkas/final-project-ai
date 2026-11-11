import type { HighlightCard, OrientationAction } from "../types";

/** 2:31 — hero batch badge copy. */
export const batchLabel =
  "Berijalan • Batch 19 • Intensif Full Stack & AI Engineering";

/** 2:38 — headline, split so the gradient applies to the second line only. */
export const headline = {
  lead: "Welcome Aboard",
  accent: "Bootcamp Batch 19",
} as const;

/** 2:40 — subhead copy. */
export const subheadline =
  "Perjalanan transformatif Anda menjadi engineer profesional berkelas dunia dimulai dari sini. Siapkan diri, bangun kolaborasi, dan ciptakan karya berdampak.";

/** 2:42 — the three orientation highlights, verbatim from the design. */
export const highlights: HighlightCard[] = [
  {
    index: "01 / TRACK",
    title: "16 Minggu Intensif",
    description:
      "Kurikulum komprehensif dari fundamental hingga deployment siap industri.",
    icon: "/figma/track-icon.svg",
    iconWidth: 17,
    iconHeight: 18,
  },
  {
    index: "02 / CRAFT",
    title: "Real-World Projects",
    description:
      "Bangun portfolio produk digital nyata yang teruji skala produksi.",
    icon: "/figma/craft-icon.svg",
    iconWidth: 15,
    iconHeight: 16,
  },
  {
    index: "03 / GUILD",
    title: "Mentorship 1-on-1",
    description:
      "Didampingi langsung oleh senior engineers dan tech leads.",
    icon: "/figma/guild-icon.svg",
    iconWidth: 17,
    iconHeight: 17,
  },
];

/** 2:83 — action cluster. */
export const orientationActions: OrientationAction[] = [
  {
    label: "Mulai Sesi Orientasi",
    href: "#orientasi",
    variant: "primary",
    icon: "/figma/cta-arrow.svg",
    iconWidth: 12,
    iconHeight: 12,
  },
  {
    label: "Akses Portal Belajar",
    href: "#portal",
    variant: "secondary",
    icon: "/figma/portal-icon.svg",
    iconWidth: 14,
    iconHeight: 15,
  },
];

/** 2:18 / 2:24 — header status chips. */
export const headerStatus = {
  live: "Stream Ready",
  cohort: {
    label: "Q2 Cohort",
    icon: "/figma/cohort-icon.svg",
    iconWidth: 11,
    iconHeight: 12,
  },
} as const;

/** 2:99 — footer stage label. */
export const stageLabel = "ORIENTATION KEYNOTE • STAGE ACTIVE";

/** 2:101 — slide pagination. */
export const slidePagination = { current: "Slide 01", total: "01" } as const;