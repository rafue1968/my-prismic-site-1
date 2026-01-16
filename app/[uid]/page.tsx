import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { SliceZone } from "@prismicio/react";
import { components } from "@/slices";


export default async function Page({ params }: {params: { uid: string } }) {
    const client = createClient();

    const page = await client
        .getByUID("page", params.uid)
        .catch(() => notFound());

    return (
        <main>
            <SliceZone slices={page.data.slices} components={components}></SliceZone>
        </main>
    )
}