import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";
import { RichText } from "../components/RichText";

export default async function ContactPage() {
  const client = createClient();
  const page = await client.getSingle("contact_page");

  return (
    <main className="space-y-20">
      {/* Hero */}
      <section className="max-w-2xl">
        <h1 className="text-5xl font-bold text-slate-900 mb-4">
          <RichText field={page.data.title} />
        </h1>
        <p className="text-lg text-slate-600">
          <RichText field={page.data.description} />
        </p>
      </section>

      {/* Slices */}
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
