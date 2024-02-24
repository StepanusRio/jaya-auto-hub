import { UserRole } from "@prisma/client";
import * as z from "zod";

// Login Schema
export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is Required !" }),
  password: z.string().min(1, { message: "Password is Required !" }),
  code: z.optional(z.string())
})
// Register Schema
export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is Required !" }),
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
  name: z.string().min(1, { message: "Name is required" })
})
// ResetPassword Schema
export const ResetSchema = z.object({
  email: z.string().email({ message: "Email is Required !" }),
})
export const NewPasswordSchema = z.object({
  password: z.string().min(6, { message: "Minimum 6 characters required" }),
})

// Setting Schema
export const SettingSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6))
}).refine((data) => {
  if (data.password && !data.newPassword) {
    return false
  }
  if (data.newPassword && !data.password) {
    return false
  }
  return true
}, { message: "New password is required!", path: ["newPassword"] })

// Dashboard Schema
export const CategoriesSchema = z.object({
  label: z.string().min(4, { message: "Label is required" })
})
export const CustomerSchema = z.object({
  name: z.optional(z.string()),
  isTwoFactorEnabled: z.optional(z.boolean()),
  role: z.enum([UserRole.ADMIN, UserRole.USER]),
  email: z.optional(z.string().email()),
  password: z.optional(z.string().min(6)),
  newPassword: z.optional(z.string().min(6))
})