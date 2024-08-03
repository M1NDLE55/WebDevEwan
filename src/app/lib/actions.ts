"use server";
import { schema } from "./schema";
import { Resend } from "resend";
import EmailTemplate from "../components/contact/EmailTemplate";

type ClientData = {
  name: string;
  email: string;
  message: string;
};

export async function sendMessage(clientData: ClientData) {
  const result = schema.safeParse(clientData);

  if (!result.success) {
    return { error: "Invalid information" };
  }

  const resend = new Resend(process.env.RESEND_API_KEY);

  try {
    const { data } = await resend.emails.send({
      from: "WebDevEwan <mailer@webdevewan.com>",
      to: result.data.email,
      bcc: "ewantrollip@webdevewan.com",
      subject: "Thank You for Getting in Touch!",
      react: EmailTemplate(result.data.name, result.data.message),
    });

    if (!data?.id) {
      return { error: "An error occured" };
    }
  } catch {
    return { error: "An error occured" };
  }
}
