"use server";
import { schema } from "./schema";
import { Resend } from "resend";
import EmailTemplate from "../components/home/email-template";

export async function sendMessage(clientData) {
  const result = schema.safeParse(clientData);

  if (!result.success) {
    return { error: "Invalid information" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  const { data } = await resend.emails.send({
    from: "WebDevEwan <mailer@webdevewan.com>",
    to: result.data.email,
    subject: "Thank You for Reaching Out",
    react: EmailTemplate(result.data.name, result.data.message),
  });

  if (!data?.id) {
    return { error: "An error occured when sending the message" };
  }
}
