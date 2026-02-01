import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicNextImage } from "@prismicio/next";
import { PostCard } from "@/app/components/PostCard";
import { RichText } from "@/app/components/RichText";

export async function generateMetadata({
  params,
}: {
  params: { uid: string } | Promise<{ uid: string }>;
}) {
  const { uid } = await params;

  const client = createClient();
  const page = await client
    .getByUID("blog_post", uid)
    .catch(() => notFound());

  return {
    title: page.data.title
      ? prismic.asText(page.data.title)
      : undefined,
    description: page.data.meta_description ?? "",
    openGraph: {
      title: page.data.meta_title || undefined,
      images: [
        {
          url: page.data.meta_image?.url ?? "",
        },
      ],
    },
  };
}

export default async function Page({
  params,
}: {
  params: { uid: string } | Promise<{ uid: string }>;
}) {
  const client = createClient();
  const { uid } = await params;

  const page = await client
    .getByUID("blog_post", uid)
    .catch(() => notFound());

  const posts = await client.getAllByType("blog_post", {
    predicates: [prismic.filter.not("my.blog_post.uid", uid)],
    orderings: [
      { field: "my.blog_post.publication_date", direction: "desc" },
    ],
    limit: 3,
  });

  const { slices, title, publication_date, description, featured_image } =
    page.data;

  return (
    <div className="flex flex-col gap-16 w-full max-w-3xl mx-auto">
      <section className="flex flex-col gap-12">
        <div className="flex flex-col items-center gap-3 w-full">
          <div className="flex flex-col gap-6 items-center">
            {/* Date */}
            <p className="text-sm uppercase tracking-wide text-amber-500">
              {new Date(publication_date || "").toLocaleDateString()}
            </p>

            {/* Title */}
            <div className="prose prose-slate prose-lg max-w-none">
              <RichText field={title} />
            </div>
          </div>

          {/* Description */}
          <div className="text-center text-slate-600">
            <RichText field={description} />
          </div>
        </div>

        {/* Featured image */}
        <PrismicNextImage
          field={featured_image}
          sizes="100vw"
          className="w-full max-w-3xl max-h-96 rounded-xl object-cover"
        />
      </section>

      {/* Content */}
      <div className="prose prose-slate prose-lg max-w-none">
        <SliceZone slices={slices} components={components} />
      </div>

      {/* Recommended posts */}
      <h2 className="font-bold text-3xl text-slate-900">
        Recommended Posts
      </h2>

      <section className="grid grid-cols-1 gap-8 max-w-3xl w-full">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </section>
    </div>
  );
}

export async function generateStaticParams() {
  const client = createClient();

  const pages = await client.getAllByType("blog_post");

  return pages.map((page) => ({
    uid: page.uid,
  }));
}
