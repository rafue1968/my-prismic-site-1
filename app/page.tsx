import { type Metadata } from "next";
import { notFound } from "next/navigation";
import * as prismic from "@prismicio/client";
import { SliceZone } from "@prismicio/react";
import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PostCard } from "./components/PostCard";
import { Navigation } from "./components/navigation/Navigation.server";

export default async function Page() {
  const client = createClient();
  const page = await client
    .getSingle("homepage")
    .catch(() => notFound());

  return (
    <main className="flex flex-col">
      <SliceZone slices={page.data.slices} components={components} />
    </main>
  );
}

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();
  const home = await client
    .getSingle("homepage")
    .catch(() => notFound());


  return {
    title: home.data.meta_title ?? "My Prismo Site",
    description: home.data.meta_description ?? "",
    openGraph: {
      images: [
        {
           url: home.data.meta_image?.url ?? "",
        }
      ],
    },
  };
}