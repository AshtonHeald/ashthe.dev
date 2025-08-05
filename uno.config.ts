import presetWind4 from "@unocss/preset-wind4";
import { createLocalFontProcessor } from "@unocss/preset-web-fonts/local";
import {
  presetIcons,
  presetTypography,
  presetWebFonts,
  transformerDirectives,
} from "unocss";
import { defineConfig } from "unocss";

export default defineConfig({
  presets: [
    presetIcons({
      extraProperties: {
        'display': 'inline-block',
        'height': '1.2em',
        'width': '1.2em',
        'vertical-align': 'text-bottom',
      },
    }),
    presetWind4({
      preflights: {
        reset: true,
      },
    }),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: 'fontsource',
      fonts: {
        sans: 'Inter',
        serif: 'Playfair Display',
        mono: 'Roboto Mono',
        cursive: 'Sacramento',
      },
      processors: createLocalFontProcessor(),
    }),
  ],
  transformers: [transformerDirectives()],
});
  