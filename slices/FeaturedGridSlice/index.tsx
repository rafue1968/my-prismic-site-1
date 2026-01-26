import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicLink, PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import { RichText } from "@/app/components/RichText";

/**
 * Props for `FeaturedGridSlice`.
 */
export type FeaturedGridSliceProps =
  SliceComponentProps<Content.FeaturedGridSliceSlice>;

/**
 * Component for "FeaturedGridSlice" Slices.
 */
const FeaturedGridSlice: FC<FeaturedGridSliceProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 max-w-2xl">
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({children}) => (
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
                  {children}
                </h2>
              )
            }}
          />

          <PrismicRichText
            field={slice.primary.description}
            components={{
              paragraph: ({children}) => (
                <p className="text-lg text-slate-600">
                  {children}
                </p>
              )
            }}
          />
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {slice.primary.repeater_for_features.map((item, index) => {
              const content = (
                <div key={index} className="group flex h-full flex-col rounded-xl border border-slate-200 bg-white p-6 transition hover:shadow-lg">
                  <PrismicLink
                    field={item.link}
                  >
                    {item.icon && (
                        <PrismicNextImage
                          field={item.icon}
                          className="mb-4 w-full object-cover"
                        />
                      )}

                      <h3 className="text-xl font-semibold text-slate-900 mb-2 group-hover:underline">
                        <RichText
                          field={item.feature_title}
                        />
                      </h3>

                      <p className="text-slate-600 leading-relaxed flex-grow">
                        <RichText
                          field={item.feature_description}
                        />
                      </p>

                      <span className="mt-4 text-sm font-medium text-indigo-600">
                        Learn more →
                      </span>
                    </PrismicLink>
                </div>
                )

                return content;
              })} 
        </div>
      </div>
    </section>
  );
};

export default FeaturedGridSlice;
