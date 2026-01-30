import { FC } from "react";
import { Content, isFilled } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { RichText } from "@/app/components/RichText";
import { PrismicNextImage } from "@prismicio/next";

export type ValueSectionProps =
  SliceComponentProps<Content.ValueSectionSlice>;

const ValueSection: FC<ValueSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        
        {/* Section title */}
        {isFilled.keyText(slice.primary.section_title) && (
          <h2 className="mb-16 text-center text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            {slice.primary.section_title}
          </h2>
        )}

        {/* Values grid */}
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {slice.primary.values.map((item, index) => (
            <div
              key={index}
              className="group flex flex-col items-start rounded-2xl border border-slate-200 bg-white p-8 transition hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Icon */}
              {isFilled.image(item.icon) && (
                <PrismicNextImage
                  field={item.icon}
                  className="mb-6 object-cover"
                />
              )}

              {/* Value title */}
              <h3 className="mb-3 text-xl font-semibold text-slate-900 group-hover:underline">
                {item.value_title}
              </h3>

              {/* Description */}
              <div className="text-slate-600 leading-relaxed">
                <RichText field={item.value_description} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
