import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `ValueSection`.
 */
export type ValueSectionProps = SliceComponentProps<Content.ValueSectionSlice>;

/**
 * Component for "ValueSection" Slices.
 */
const ValueSection: FC<ValueSectionProps> = ({ slice }) => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      
    </section>
  );
};

export default ValueSection;
