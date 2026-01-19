import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";

/**
 * Props for `SolutionSection`.
 */
export type SolutionSectionProps =
  SliceComponentProps<Content.SolutionSectionSlice>;

/**
 * Component for "SolutionSection" Slices.
 */
const SolutionSection: FC<SolutionSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-6 md:px-16"
    >

      <div className="mx-auto max-w-6xl">
        {/* Title */}
        {slice.variation === "problemAndSolution" ? (
          <PrismicRichText
            field={slice.primary.title}
            components={{
              heading2: ({children}) => (
                <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                  {children}
                </h2>
              ),
            }}
          />
        ) :
        (
          <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
            {slice.primary.title}
          </h2>
        )
        }
        {/* Problem & Solution */}
        {slice.variation === "problemAndSolution" && (
          <div className="grid md:grid-cols-2 gap-10 mb-12">
            {/* Problem */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-red-600 mb-4">
                The Problem
              </h3>
              <PrismicRichText 
                field={slice.primary.problem}
                components={{
                  paragraph: ({children}) => (
                    <p className="text-slate-600 leading-relaxed">
                      {children}
                    </p>
                  ),
                }}
              />
            </div>

            {/* The Solution */}
            <div className="bg-slate-50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold text-emerald-600 mb-4">
                The Solution
              </h3>
              <PrismicRichText
                field={slice.primary.solution}
                components={{
                  paragraph: ({children}) => (
                    <p className="text-slate-600 leading-relaxed">
                      {children}
                    </p>
                  )
                }}
              />
            </div>

            {/* Image */}
            {slice.primary.image && (
              <div className="mt-8">
                <PrismicNextImage
                  field={slice.primary.image}
                  className="rounded-xl shadow-lg w-full"
                />
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SolutionSection;
