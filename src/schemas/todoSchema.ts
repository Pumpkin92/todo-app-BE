import { z } from "zod";

export const todoSchema = z.object({
  id: z.number().int().optional(),
  title: z.string(),
  description: z.string(),
});
