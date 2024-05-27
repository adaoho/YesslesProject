import { z } from "zod";

export const userSchema = z.object({
  id: z.string(),
  full_name: z.string(),
  email: z.string(),
  role: z.string(),
  status: z.string(),
  profile_picture: z.string(),
});

export type User = z.infer<typeof userSchema>;
