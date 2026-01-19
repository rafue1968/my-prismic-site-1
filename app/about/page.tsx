import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function AboutPage() {
  const client = createClient();
  const page = await client.getSingle("about_us").catch(() => notFound());

  return (
    <main>
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}
