"use client";

import { sendMessage } from "@/app/lib/actions";
import toast from "react-hot-toast";
import { schema } from "@/app/lib/schema";
import { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [prevMessage, setPrevMessage] = useState("");

  async function handleAction(formData) {
    setIsLoading(true);

    const rawData = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    const result = schema.safeParse(rawData);

    if (!result.success) {
      result.error.issues.forEach((issue) => toast.error(issue.message));
      setIsLoading(false);
      return;
    }

    if (result.data.message === prevMessage) {
      toast.error("Message already sent");
      setIsLoading(false);
      return;
    }

    const loadingToastID = toast.loading("Sending message");

    const response = await sendMessage(result.data);

    if (response?.error) {
      toast.dismiss(loadingToastID);
      toast.error(response.error);
      setIsLoading(false);
      return;
    }

    toast.dismiss(loadingToastID);
    setPrevMessage(result.data.message);
    toast.success("Message sent");
    setIsLoading(false);
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await handleAction(new FormData(event.target));
  }

  return (
    <div id="contact" className="center-div pb-16 pt-28">
      <div className="w-full max-w-3xl px-4">
        <h2 className="text-center text-3xl sm:text-5xl">Get In Touch</h2>
        <form className="mt-8 flex flex-col gap-4" onSubmit={handleSubmit}>
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
            className="mt-4 rounded-md bg-red-500 p-2 text-center text-xl text-white shadow-lg transition-colors hover:bg-red-600 disabled:opacity-70 sm:h-full sm:text-2xl"
            disabled={isLoading}
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
}
