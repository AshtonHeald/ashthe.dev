// @ts-check
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";
import partytown from "@astrojs/partytown";

import mdx from "@astrojs/mdx";

import UnoCSS from "unocss/astro";

// https://astro.build/config
export default defineConfig({
  site: "https://ashthe.dev",
  base: "/",
  integrations: [
    UnoCSS({
      injectReset: true
    }),
    vue(), 
    partytown(), 
    mdx(), 
  ],
});
