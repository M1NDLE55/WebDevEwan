"use client";

import { sendMessage } from "@/app/lib/actions";
import { schema } from "@/app/lib/schema";
import toast from "react-hot-toast";
import React, { useState } from "react";

export default function ContactForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [prevMessage, setPrevMessage] = useState("");

  async function handleAction(formData: FormData) {
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

  async function handleSubmit(event: React.BaseSyntheticEvent) {
    event.preventDefault();
    await handleAction(new FormData(event.target));
  }

  const inputCSS =
    "rounded-md border-2 border-amber-700/60 bg-amber-100/90 p-3 text-stone-900 placeholder:text-stone-600 shadow-inner focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-amber-50";

  return (
    <form
      className="flex flex-col gap-4 text-neutral-50 md:text-lg"
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
        disabled={isLoading}
        type="submit"
        className="group relative disabled:cursor-not-allowed disabled:opacity-60"
      >
        <div className="relative overflow-hidden rounded-lg border-4 border-amber-400 bg-gradient-to-r from-amber-800 via-amber-600 to-amber-800 px-8 py-2 shadow-lg transition-transform duration-200 group-hover:scale-[1.01]">
          <span className="text-xl font-bold text-amber-100">
            Send
          </span>
          <div
            aria-hidden
            className="pointer-events-none absolute left-[-30%] top-0 h-full w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-[left,opacity] duration-700 group-hover:left-[130%] group-hover:opacity-100"
          />
        </div>
      </button>
    </form>
  );
}
