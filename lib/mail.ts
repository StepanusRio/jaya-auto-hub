import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const domain = process.env.NEXT_PUBLIC_APP_URL

export const sendVerificationEmail = async (email: string, token: string) => {
  const confirmLink = `${domain}/new-verification?token=${token}`
  await resend.emails.send({
    from: "Jaya Auto Hub Mail <mail@stepanusriodefa.my.id>",
    to: email,
    subject: "Verify you email",
    html: `
      <p>Click here <a href="${confirmLink}">to confirm email</a></p>
    `
  })
}

export const sendResetPasswordEmail = async (email: string, token: string) => {
  const resetLink = `${domain}/new-password?token=${token}`;
  await resend.emails.send({
    from: "Jaya Auto Hub Mail <mail@stepanusriodefa.my.id>",
    to: email,
    subject: "Reset Password",
    html: `
      <p>Click here <a href="${resetLink}">to Reset your password</a></p>
    `
  })
}

export const sendTwoFactorEmail = async (email: string, token: string) => {
  await resend.emails.send({
    from: "Jaya Auto Hub Mail <mail@stepanusriodefa.my.id>",
    to: email,
    subject: "2 Factor Authenticate Code",
    html: `
     <p>Your 2FA Code: ${token}</p>
    `
  })
}