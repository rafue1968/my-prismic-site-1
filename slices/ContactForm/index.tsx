"use client";

import { useState } from "react";
import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type ContactFormProps =
  SliceComponentProps<Content.ContactFormSlice>;

export default function ContactForm({ slice }: ContactFormProps) {
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    // TODO: send to API route
    setTimeout(() => {
      setLoading(false);
      alert("Message sent!");
    }, 1000);
  }

  return (
    <section className="max-w-xl">
      <h2 className="text-2xl font-semibold text-slate-900 mb-6">
        {slice.primary.form_title}
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Your name"
          className="w-full rounded-lg border border-gray-300 p-3"
          required
        />

        <input
          type="email"
          placeholder="Your email"
          className="w-full rounded-lg border border-gray-300 p-3"
          required
        />

        <textarea
          placeholder="Your message"
          rows={5}
          className="w-full rounded-lg border border-gray-300 p-3"
          required
        />

        <button
          disabled={loading}
          className="rounded-lg bg-indigo-600 px-6 py-3 text-white font-medium hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {loading ? "Sending..." : slice.primary.submit_label}
        </button>
      </form>
    </section>
  );
}
