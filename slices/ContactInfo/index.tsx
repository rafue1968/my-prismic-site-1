import { SliceComponentProps } from "@prismicio/react";
import { Content } from "@prismicio/client";

export type ContactInfoProps = SliceComponentProps<Content.ContactInfoSlice>;

export default function ContactInfo({ slice }: ContactInfoProps) {
  return (
    <section className="grid gap-6 md:grid-cols-3">
      <div>
        <h3 className="font-semibold text-slate-900">Email</h3>
        <p className="text-slate-600">{slice.primary.email}</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">Phone</h3>
        <p className="text-slate-600">{slice.primary.phone}</p>
      </div>

      <div>
        <h3 className="font-semibold text-slate-900">Address</h3>
        <p className="text-slate-600">{slice.primary.address}</p>
      </div>
    </section>
  );
}
