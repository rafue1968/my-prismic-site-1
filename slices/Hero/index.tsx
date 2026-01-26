import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  return (
     <section
      className="py-24 px-6 bg-gray-50"
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="mx-auto max-w-6xl flex flex-col items-center text-center gap-8">
        <PrismicRichText field={slice.primary.heading} components={{
          heading1: ({children}) => (
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800">{children}</h1>
          )
        }} />
        <PrismicRichText field={slice.primary.subheading} components={{
          paragraph: ({children}) => (<p className="text-lg md:text-xl text-slate-600 max-w-2xl">
                                        {children}
                                    </p> )
        }} />
        <PrismicNextLink field={slice.primary.button_link} className="inline-block bg-cyan-700 hover:bg-cyan-800 transition-color duration-200 ease-in-out py-3 px-10 rounded-full text-white font-semibold tracking-wide">
          {slice.primary.button_text}
        </PrismicNextLink>
        <PrismicNextImage field={slice.primary.image} className="mt-12 w-full max-w-4xl drop-shadow-xl rounded-xl" />
      </div>
    </section>
  );
};

export default Hero;
