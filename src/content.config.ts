import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const pages = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/pages",
  }),
  schema: () =>
    z.object({
      title: z.string(),
    }),
});

const posts = defineCollection({
  loader: glob({
    pattern: "**/*.{md,mdx}",
    base: "./src/content/posts",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      pubDate: z.coerce.date(),
      tags: z.array(z.string()).optional(),
    }),
});

const projects = defineCollection({
  loader: glob({
    base: "./src/content/projects",
    pattern: "**/*.{md,mdx}",
  }),
  schema: () =>
    z.object({
      title: z.string(),
      description: z.string(),
      featured: z.boolean().default(false),
      year: z.union([z.string(), z.number()]),
    }),
});

export const collections = { pages, posts, projects };

/*
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      cover: z.object({
        url: image(),
        alt: z.string(),
      }),
      description: z.string(),
      techstack: z.array(z.string()),
      status: z.string(),
      featured: z.boolean().default(false),
      year: z.union([z.string(), z.number()]),
    }),

*/
