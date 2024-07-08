"use client";

import { sendMessage } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { schema } from "@/app/lib/schema";

export default function ContactForm() {
  async function handleAction(formData) {
    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const result = schema.safeParse(rawData);

    if (!result.success) {
      result.error.issues.forEach((issue) => toast.error(issue.message));
      return;
    }

    const response = await sendMessage(result.data);
    if (response?.error) {
      toast.error(response.error);
      return;
    }

    //todo: display loading state
    toast.success("Message sent");
  }

  return (
    <div className="center-div my-16">
      <div className="w-full max-w-3xl px-4">
        <h2 className="text-center text-3xl sm:text-5xl">Get In Touch</h2>
        <form className="mt-8 flex flex-col gap-4" action={handleAction}>
          <input
            name="name"
            type="text"
            placeholder="Name*"
            required
            className="rounded-md border p-2 text-lg shadow"
          />
          <input
            name="email"
            type="email"
            placeholder="Email*"
            required
            className="rounded-md border p-2 text-lg shadow"
          />
          <textarea
            name="message"
            rows={3}
            placeholder="Message*"
            required
            className="rounded-md border p-2 text-lg shadow"
          />
          <button
            type="submit"
            className="mt-4 rounded-md bg-red-500 p-2 text-center text-xl text-white shadow-lg transition-colors hover:bg-red-600 sm:h-full sm:text-2xl"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
