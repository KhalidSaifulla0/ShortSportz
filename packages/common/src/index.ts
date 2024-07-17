import z from "zod";

export const signupSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
  name: z.string().min(3).optional(),
});

export type SignupSchema = z.infer<typeof signupSchema>;

export const signinSchema = z.object({
  username: z.string().email(),
  password: z.string().min(6),
});

export type SigninSchema = z.infer<typeof signinSchema>;
