import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps, PrismicLink, PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `CaseStudiesSlice`.
 */
export type CaseStudiesSliceProps =
  SliceComponentProps<Content.CaseStudiesSliceSlice>;

/**
 * Component for "CaseStudiesSlice" Slices.
 */
const CaseStudiesSlice: FC<CaseStudiesSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-6 md:px-16"
    >
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
          {slice.primary.repeater.map((item, index) => (
            <PrismicLink
              key={index}
              field={item.link}
              className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white transition hover:shadow-lg"
            >
              {item.image && (
                <PrismicNextImage 
                  field={item.image}
                  className="h-48 w-full object-cover"
                />
              )}

              <div className="flex flex-col gap-3 p-6">
                <h3 className="text-xl font-semibold text-slate-900 group-hover:underline">
                  <PrismicRichText field={item.title} />
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">
                  <PrismicRichText field={item.summary} />
                </p>

                <span className="mt-2 text-sm font-medium text-indigo-600">
                  Read case study →
                </span>
              </div>
            </PrismicLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSlice;
