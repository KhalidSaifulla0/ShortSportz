import { z } from "zod";

export const createBlogSchema = z.object({
  title: z.string().min(3).max(20),
  content: z.string().min(10).max(200),
});

export type CreateBlogSchema = z.infer<typeof createBlogSchema>;

export const updateBlogSchema = z.object({
  id: z.number(),
  title: z.string().min(3).max(20),
  content: z.string().min(10).max(200),
});

export type UpdateBlogSchema = z.infer<typeof updateBlogSchema>;

export const getBlogSchema = z.object({
  id: z.number(),
});

export type GetBlogSchema = z.infer<typeof getBlogSchema>;