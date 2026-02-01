import { PrismicNextImage } from "@prismicio/next";
import { PrismicLink, PrismicText } from "@prismicio/react";
import { Content } from "@prismicio/client";

export const PostCard = ({
    post,
}: {
    post: Content.BlogPostDocument
}) => {
    const { data } = post;

    
    return (
        <PrismicLink
        document={post}
        className="group grid grid-cols-1 md:grid-cols-5 gap-6"
        >
            <PrismicNextImage
                field={data.featured_image}
                sizes="100vw"
                className="md:col-span-2 aspect-[4/3] rounded-xl object-cover transition group-hover:scale-[1.02]"
            />

            <div className="md:col-span-3 flex flex-col justify-center gap-3">
                <p className="text-sm font-medium text-amber-500">
                {new Date(data.publication_date || "").toLocaleDateString()}
                </p>

                <h2 className="text-2xl font-bold leading-tight text-slate-900 group-hover:text-indigo-600 transition">
                <PrismicText field={data.title} />
                </h2>

                <p className="text-slate-600 line-clamp-3">
                <PrismicText field={data.description} />
                </p>
            </div>
        </PrismicLink>
    )
}