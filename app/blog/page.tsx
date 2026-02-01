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
    description: page.data.description
      ? prismic.asText(page.data.description)
      : "All blog posts",
  };
}

export default async function BlogPage() {
  const client = createClient();

  const page = await client.getSingle("blog_listing").catch(() => notFound());

  const posts = await client.getAllByType("blog_post", {
    orderings: [{ field: "my.blog_post.publication_date", direction: "desc" }],
  });

  return (
    <div className="flex flex-col gap-16 w-full max-w-5xl mx-auto">
      {/* Header */}
      <header className="text-center space-y-4">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900">
          {page.data.title}
        </h1>

        <div className="text-lg text-slate-600 max-w-2xl mx-auto">
          <RichText field={page.data.description} />
        </div>
      </header>

      {/* Posts */}
      <section className="grid gap-12 sm:grid-cols-2">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}
