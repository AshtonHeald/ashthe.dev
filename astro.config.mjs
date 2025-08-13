// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://ashthe.dev",
  base: "/",
  experimental: {
    fonts: [
      {
        provider: fontProviders.fontsource(),
        name: "Inter",
        cssVariable: "--font-inter",
        subsets: ["latin"],
        styles: ["normal", "italic"],
        weights: ["400", "500", "600", "700", "800", "900"],
        fallbacks: ["sans-serif"],
        display: "swap",
      },

      {
        provider: fontProviders.fontsource(),
        name: "Playfair Display",
        cssVariable: "--font-playfair-display",
        subsets: ["latin"],
        fallbacks: ["serif"],
        weights: ["400", "500", "600", "700", "800", "900"],
        display: "swap",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Roboto Mono",
        cssVariable: "--font-roboto-mono",
        subsets: ["latin"],
        fallbacks: ["monospace"],
        weights: ["400", "600", "700"],
        display: "swap",
      },
      {
        provider: fontProviders.fontsource(),
        name: "Sacramento",
        cssVariable: "--font-sacramento",
        subsets: ["latin"],
        fallbacks: ["cursive"],
        display: "swap",
      },
    ],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },
  integrations: [
    UnoCSS({
      injectReset: true,
    }),
    vue(),
    partytown(),
    mdx(),
  ],
});
