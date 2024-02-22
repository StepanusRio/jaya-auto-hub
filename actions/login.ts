"use server"

import { signIn } from "@/auth";
import { db } from "@/lib/db";
import { sendTwoFactorEmail, sendVerificationEmail } from "@/lib/mail";
import { generateTwoFactorToken, generateVerificationToken } from "@/lib/token";
import { getTwoFactorByEmail, getTwoFactorConfirmationByUserId, getUserByEmail } from "@/lib/utils";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import { AuthError } from "next-auth";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>, callbackUrl?: string | null) => {
  const validatedField = LoginSchema.safeParse(values);

  if (!validatedField.success) {
    return {
      error: "Invalid Field"
    }
  }
  const { email, password, code } = validatedField.data;
  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser.email || !existingUser.password) {
    return {
      error: "Invalid Credentials"
    }
  }

  if (!existingUser.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email
    );
    await sendVerificationEmail(verificationToken.email, verificationToken.token)
    return {
      success: "Confirmation email sent"
    }
  }

  if (existingUser.isTwoFactorEnabled && existingUser.email) {
    if (code) {
      // TODO: Verify code
      const twoFactorToken = await getTwoFactorByEmail(existingUser.email);
      if (!twoFactorToken) {
        return {
          error: "Invalid Code!"
        }
      }
      if (twoFactorToken.token !== code) {
        return {
          error: "Invalid Code!"
        }
      }
      const hasExpired = new Date(twoFactorToken.expires) < new Date();
      if (hasExpired) {
        return {
          error: "Code Expired"
        }
      }
      await db.twoFactorToken.delete({
        where: {
          id: twoFactorToken.id
        }
      })
      const existingConfirmation = await getTwoFactorConfirmationByUserId(existingUser.id)
      if (existingConfirmation) {
        await db.twoFactorConfirmation.delete({
          where: {
            id: existingConfirmation.id
          }
        })
      }
      await db.twoFactorConfirmation.create({
        data: {
          userId: existingUser.id
        }
      })
    } else {
      const twoFactorToken = await generateTwoFactorToken(existingUser.email)
      await sendTwoFactorEmail(twoFactorToken.email, twoFactorToken.token)
      return { twoFactor: true }
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: callbackUrl || DEFAULT_LOGIN_REDIRECT
    })
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid Credentials" }
        default:
          return { error: "Something went wrong!!" }
      }
    }
    throw error
  }
}