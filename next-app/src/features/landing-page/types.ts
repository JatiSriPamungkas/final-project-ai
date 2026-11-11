/** Types owned by the landing-page feature. */

/** 2:43 / 2:56 / 2:69 — one metric bento card. */
export interface HighlightCard {
  /** Index label above the heading, e.g. "01 / TRACK" (2:50). */
  index: string;
  /** Card heading (2:53). */
  title: string;
  /** Card body copy (2:55). */
  description: string;
  /** Public path to the card icon. */
  icon: string;
  iconWidth: number;
  iconHeight: number;
}

/** 2:84 / 2:90 — the two orientation actions. */
export interface OrientationAction {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  icon?: string;
  iconWidth?: number;
  iconHeight?: number;
}