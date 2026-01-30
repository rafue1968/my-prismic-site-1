import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PostCard } from "@/app/components/PostCard";
import { RichText } from "@/app/components/RichText";
import * as prismic from "@prismicio/client";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("caste_studies_listing").catch(() => notFound());

  return {
    title: page.data.title || "Case Studies",
    description: page.data.description ? prismic.asText(page.data.description) : "All Case Studies",
  };
}

export default async function CaseStudyPage() {
  const client = createClient();

  const page = await client.getSingle("caste_studies_listing").catch(() => notFound());

  const posts = await client.getAllByType("case_study", {
    orderings: [{ field: "my.case_study.publication_date", direction: "desc" }],
  });

  return (
    <div className="flex flex-col gap-12 w-full max-w-4xl mx-auto py-12">
      {/* Page header */}
      <div className="text-center flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-gray-900">{page.data.title}</h1>
        {page.data.description && <RichText field={page.data.description} />}
      </div>

      {/* Blog posts grid */}
      <div className="grid gap-8 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  );
}
