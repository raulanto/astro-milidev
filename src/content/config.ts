import { defineCollection, z } from "astro:content";

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    shortDescription: z.string(),
    demoUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

const talks = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    lastUpdateDate: z.coerce.date().optional(),
    draft: z.boolean().optional(),
    slidesUrl: z.string().optional(),
    repoUrl: z.string().optional(),
  }),
});

export const collections = { blog, projects, talks };
