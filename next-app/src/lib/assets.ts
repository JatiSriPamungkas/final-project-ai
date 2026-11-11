/**
 * Central registry for artwork that needs more than a path: `next/image`
 * requires intrinsic dimensions, and duplicating them at each call site is
 * how they drift out of sync with the asset.
 *
 * Every entry below was measured from the file in `public/figma/`.
 */

export interface StaticAsset {
  src: string;
  width: number;
  height: number;
}

export const assets = {
  /** 1:723 — about portrait. Export is 512x279. */
  portrait: {
    src: "/figma/about-portrait.jpg",
    width: 512,
    height: 279,
  },
  /** 1:818 — Frontend category glyph, intrinsic 21.6667x17.3333. */
  skillFrontend: {
    src: "/figma/skill-frontend.svg",
    width: 20,
    height: 16,
  },
  /** 1:853 — Backend & DB category glyph, intrinsic 19.5x19.5. */
  skillBackend: {
    src: "/figma/skill-backend.svg",
    width: 20,
    height: 20,
  },
  /** 1:887 — UI/UX category glyph, intrinsic 21.6667x21.6667. */
  skillDesign: {
    src: "/figma/skill-design.svg",
    width: 22,
    height: 22,
  },
  /** 1:920 — Tools & DevOps category glyph, intrinsic 21.6667x17.3333. */
  skillTools: {
    src: "/figma/skill-tools.svg",
    width: 20,
    height: 16,
  },
} as const satisfies Record<string, StaticAsset>;

export type AssetKey = keyof typeof assets;