"use client";

import { sendMessage } from "@/app/lib/actions";
import { schema } from "@/app/lib/schema";
import toast from "react-hot-toast";
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

  const inputCSS =
    "rounded-md border border-neutral-700 bg-neutral-950 p-2 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50";

  return (
    <form
      className="mt-8 flex flex-col gap-4 text-lg text-neutral-50"
      onSubmit={handleSubmit}
    >
      <input
        name="name"
        type="text"
        placeholder="Name*"
        required
        className={inputCSS}
      />
      <input
        name="email"
        type="email"
        placeholder="Email*"
        required
        className={inputCSS}
      />
      <textarea
        name="message"
        rows={3}
        placeholder="Message*"
        required
        className={inputCSS}
      />
      <button
        type="submit"
        className="mt-6 inline-flex h-12 items-center justify-center rounded-md border border-neutral-50 px-6 font-medium text-neutral-50 transition-colors hover:border-violet-500 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:ring-offset-2 focus:ring-offset-violet-50"
      >
        Send
      </button>
    </form>
  );
}