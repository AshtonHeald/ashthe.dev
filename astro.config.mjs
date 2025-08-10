// @ts-check
import { defineConfig } from "astro/config";
import { remarkReadingTime } from "./remark-reading-time.mjs";

import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://ashthe.dev",
  base: "/",
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
