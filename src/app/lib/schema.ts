import { z } from "zod";

export const schema = z.object({
  name: z.string().trim().min(1, { message: "Invalid name" }),
  email: z.string().trim().email({ message: "Invalid email address" }),
  message: z.string().trim().min(1, { message: "Invalid message" }),
});
