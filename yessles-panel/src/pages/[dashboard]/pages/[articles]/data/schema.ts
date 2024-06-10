import { z } from "zod";

const userSchema = z.object({
  email: z.string().email(),
  full_name: z.string(),
  status: z.string(),
});

export const titleSchema = z.object({
  id: z.number(),
  title: z.string(),
  body: z.string(),
  description: z.string(),
  status: z.string(),
  thumbnail: z.string(),
  User: userSchema,
});

export type Article = z.infer<typeof titleSchema>;

export const articleFormSchema = z.object({
  title: z.string({ required_error: "Please fill the title" }),
  description: z.string({ required_error: "Please fill the description" }),
  // body: z.string().nonempty("Content is required"),
  // thumbnail: z.any().optional(),
});

export type ArticleFormValue = z.infer<typeof articleFormSchema>;
