import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";

export default async function SolutionPage({  params, }: {  params: { uid: string } | Promise<{uid: string}> }) {
  
    const { uid } = await params
  
    const client = createClient();

  const doc = await client
    .getByUID("solution", uid)
    .catch(() => notFound());

  return (
    <main>
      <section className="py-20 px-6 md:px-16 max-w-7xl mx-auto">
        <PrismicRichText
          field={doc.data.title}
          components={{
            heading1: ({ children }) => (
              <h1 className="text-5xl font-bold mb-6 text-slate-800">
                {children}
              </h1>
            ),
          }}
        />

        <div className="prose prose-lg max-w-3xl mb-16 text-slate-600">
          <PrismicRichText field={doc.data.summary} />
        </div>

        <SliceZone slices={doc.data.slices} components={components} />
      </section>
    </main>
  );
}
