"use server"

import { db } from "@/lib/db";
import { sendVerificationEmail } from "@/lib/mail";
import { generateVerificationToken } from "@/lib/token";
import { getUserByEmail } from "@/lib/utils";
import { RegisterSchema } from "@/schemas";
import { hash } from "bcryptjs";
import * as z from "zod";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  const validatedField = RegisterSchema.safeParse(values);

  if (!validatedField.success) {
    return {
      error: "Invalid Field"
    }
  }
  const { email, password, name } = validatedField.data;

  // HashedPassword
  const hashedPassword = await hash(password, 10);

  // Check Existing User
  const existingUser = await getUserByEmail(email)

  if (existingUser) {
    return {
      error: "Email already used!"
    }
  }
  // No existing user
  await db.user.create({
    data: {
      name,
      email,
      password: hashedPassword
    }
  });

  const verificationToken = await generateVerificationToken(email);
  await sendVerificationEmail(verificationToken.email, verificationToken.token)
  return {
    success: "Confirmation Email Sent"
  }
}