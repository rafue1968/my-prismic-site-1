import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `TextSection`.
 */
export type TextSectionProps =
  SliceComponentProps<Content.TextSectionSlice>;

/**
 * Component for "TextSection" Slices.
 */
const TextSection: FC<TextSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 bg-white"
    >
      <div className="mx-auto max-w-3xl px-6">
        <PrismicRichText
          field={slice.primary.content}
          components={{
            heading2: ({ children }) => (
              <h2 className="mb-6 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
                {children}
              </h2>
            ),
            heading3: ({ children }) => (
              <h3 className="mb-4 mt-10 text-2xl font-semibold text-slate-900">
                {children}
              </h3>
            ),
            paragraph: ({ children }) => (
              <p className="mb-6 text-lg leading-relaxed text-slate-600">
                {children}
              </p>
            ),
            listItem: ({ children }) => (
              <li className="ml-6 list-disc text-lg text-slate-600">
                {children}
              </li>
            ),
            oListItem: ({ children }) => (
              <li className="ml-6 list-decimal text-lg text-slate-600">
                {children}
              </li>
            ),
            hyperlink: ({ children, node }) => (
              <a
                href={node.data.url}
                className="font-medium text-indigo-600 underline-offset-4 hover:underline"
              >
                {children}
              </a>
            ),
          }}
        />
      </div>
    </section>
  );
};

export default TextSection;
