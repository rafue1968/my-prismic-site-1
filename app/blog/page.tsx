import { Metadata } from "next";
import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PostCard } from "@/app/components/PostCard";
import { RichText } from "@/app/components/RichText";
import * as prismic from "@prismicio/client";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const page = await client.getSingle("blog_listing").catch(() => notFound());

  return {
    title: page.data.title || "Blog",
    description: page.data.description ? prismic.asText(page.data.description) : "All blog posts",
  };
}

export default async function BlogPage() {
  const client = createClient();

  const page = await client.getSingle("blog_listing").catch(() => notFound());

  const posts = await client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.publication_date", direction: "desc" }],
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
