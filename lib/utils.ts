import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { db } from "./db"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getUserByEmail = async (email?: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email
      }
    });
    return user
  } catch (error) {
    return null
  }
}

export const getUserById = async (id?: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        id
      }
    });
    return user
  } catch (error) {
    return null
  }
}

export const getVerificationTokenByEmail = async (email: string) => {
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: {
        email
      }
    })
    return verificationToken
  } catch (error) {
    return null
  }
}

export const getVerificationTokenByToken = async (token: string) => {
  try {
    const verificationToken = await db.verificationToken.findUnique({
      where: {
        token
      }
    })
    return verificationToken
  } catch (error) {
    return null
  }
}

export const getPasswordResetTokenByToken = async (token: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findUnique({
      where: {
        token
      }
    })
    return passwordResetToken
  } catch (error) {
    return null;
  }
}

export const getPasswordResetTokenByEmail = async (email: string) => {
  try {
    const passwordResetToken = await db.passwordResetToken.findFirst({
      where: {
        email
      }
    })
    return passwordResetToken
  } catch (error) {
    return null;
  }
}

export const getTwoFactorByToken = async (token: string) => {
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: {
        token
      }
    })
    return twoFactorToken
  } catch (error) {
    return null;
  }
}

export const getTwoFactorByEmail = async (email: string) => {
  try {
    const twoFactorEmail = await db.twoFactorToken.findFirst({
      where: {
        email
      }
    })
    return twoFactorEmail
  } catch (error) {
    return null;
  }
}

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: {
        userId
      }
    })
    return twoFactorConfirmation
  } catch (error) {
    return null;
  }
}

export const getAccountByUserId = async (userId: string) => {
  try {
    const account = await db.account.findFirst({
      where: {
        userId
      }
    })
    return account
  } catch (error) {
    return null;
  }
}