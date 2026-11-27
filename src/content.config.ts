import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

export const DOMAINS = [
  "AI/ML",
  "Computer Vision",
  "Fintech",
  "HealthTech",
  "Web3",
  "Backend",
  "Mobile",
  "Learning",
] as const;

export const STATUSES = ["active", "shipped", "prototype", "learning"] as const;

const projects = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    domain: z.enum(DOMAINS),
    stack: z.array(z.string()).min(1),
    status: z.enum(STATUSES),
    year: z.number().int(),
    featured: z.boolean().default(false),
    order: z.number().int(),
    repo: z.string().url(),
    live: z.string().url().optional(),
    download: z.string().url().optional(),
    video: z.string().url().optional(),
    // Optional screenshot in public/, e.g. "/covers/budget-tracker.png"; a generated cover is used otherwise.
    cover: z.string().optional(),
  }),
});

export const collections = { projects };
