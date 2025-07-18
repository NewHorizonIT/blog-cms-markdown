import { z } from "zod";

export const signInSchema = z.object({
  email: z.string().email({ message: "Email không hợp lệ" }),
  password: z.string().min(6, { message: "Mật khẩu phải có ít nhất 6 ký tự" }),
});

export const signUpSchema = signInSchema
  .extend({
    confirmPassword: z
      .string()
      .min(6, { message: "Mật khẩu xác nhận phải có ít nhất 6 ký tự" }),
    name: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Mật khẩu xác nhận không khớp với mật khẩu",
    path: ["confirmPassword"],
  });

export type SignInData = z.infer<typeof signInSchema>;
export type SignUpData = z.infer<typeof signUpSchema>;
