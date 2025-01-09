import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    socialImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    socialImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    description: z.string().optional(),
    socialImage: z.string().optional(),
    draft: z.boolean().optional(),
  }),
});

export const collections = { blog, projects, talks };
