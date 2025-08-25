import presetWind4 from "@unocss/preset-wind4";
import { presetIcons, transformerDirectives } from "unocss";
import { defineConfig } from "unocss";

export default defineConfig({
    theme: {
        colors: {
            background: "var(--background)",
            foreground: "var(--foreground)",
            primary: {
                DEFAULT: "var(--primary)",
                foreground: "var(--primary-foreground)",
            },
            secondary: {
                DEFAULT: "var(--secondary)",
                foreground: "var(--secondary-foreground)",
            },
            muted: {
                DEFAULT: "var(--muted)",
                foreground: "var(--muted-foreground)",
            },
            accent: {
                DEFAULT: "var(--accent)",
                foreground: "var(--accent-foreground)",
            },
            border: "var(--border)",
            input: "var(--input)",
            ring: "var(--ring)",
        },
    },
    presets: [
        presetIcons({
            extraProperties: {
                display: "inline-block",
                height: "1.2em",
                width: "1.2em",
                "vertical-align": "text-bottom",
            },
        }),
        presetWind4({
            preflights: {
                reset: true,
            },
        }),
        presetIcons(),
    ],
    transformers: [transformerDirectives()],
});
