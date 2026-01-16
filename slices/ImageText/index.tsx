import { FC } from "react";
import { Content } from "@prismicio/client";
import { PrismicImage, PrismicRichText, SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ImageText`.
 */
export type ImageTextProps = SliceComponentProps<Content.ImageTextSlice>;

/**
 * Component for "ImageText" Slices.
 */
const ImageText: FC<ImageTextProps> = ({ slice }) => {

  // const reverse = slice.primary.

  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="py-20 px-6 md:px-16 bg-gray-50"
    >
      <div className={`max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center`}>
          <PrismicImage field={slice.primary.image} width={600} height={400} className="rounded-xl" />
          <h3 className="text-3xl font-bold mb-4">
            <PrismicRichText field={slice.primary.content} />
          </h3>
      </div>
    </section>
  );
};

export default ImageText;
