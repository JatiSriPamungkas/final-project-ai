import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* This repo uses .github/copilot-instructions.md only — the generator
     must not emit a competing AGENTS.md. */
  agentRules: false,
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
