/** Types owned by the portfolio feature. */

/** 1:625–1:641 — one core-stack chip in the hero. */
export interface TechChip {
  label: string;
  /** Dot colour token name from globals.css. */
  tone: "teal" | "indigo" | "sky";
}

/** 1:642 — one line inside the terminal preview. */
export interface TerminalLine {
  prompt: string;
  text: string;
  tone: "muted" | "key" | "string" | "accent";
}

/** About-section statistic (3+ Tahun / 25+ Proyek / 99%). */
export interface Stat {
  value: string;
  label: string;
}

/** About-section value card. */
export interface ValueCard {
  title: string;
  description: string;
}

/** Career timeline entry. */
export interface CareerEntry {
  period: string;
  role: string;
  description: string;
}

/** Skills-group card (1:815, 1:850, 1:884, 1:917). */
export interface SkillItem {
  label: string;
  /** Dot colour token: teal #4fdbc8, indigo #c0c1ff, sky #7bd0ff, muted #908fa0. */
  tone: "teal" | "indigo" | "sky" | "muted";
}

/** Skills-group card. */
export interface SkillGroup {
  title: string;
  description: string;
  /** Category glyph shown in the 48px well (1:817 etc.). */
  icon: string;
  iconWidth: number;
  iconHeight: number;
  /** 1:849 — footer label inside the card. */
  discipline: string;
  items: readonly SkillItem[];
}

/** Featured project card. */
export interface Project {
  category: string;
  title: string;
  description: string;
  stack: readonly string[];
}

/** Filter pill above the project grid. */
export interface ProjectFilter {
  label: string;
  active?: boolean;
}

/** Footer navigation link. */
export interface FooterLink {
  label: string;
  href: string;
}