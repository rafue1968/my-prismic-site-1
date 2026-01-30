// import { FC } from "react";
// import { Content } from "@prismicio/client";
// import { SliceComponentProps, PrismicNextImage, PrismicLink, PrismicText } from "@prismicio/react";

// export type BlogGridSliceProps = SliceComponentProps<Content.BlogGridSliceSlice>;

// const BlogGridSlice: FC<BlogGridSliceProps> = ({ slice }) => {
//   return (
//     <section className="py-24 bg-stone-50">
// //       <div className="mx-auto max-w-6xl px-6">
// //         {slice.primary?.title && (
// //           <h2 className="mb-12 text-4xl font-bold text-slate-900 text-center">
// //             <PrismicText field={slice.primary.title} />
// //           </h2>
// //         )}

// //         <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
// //           {slice.items.map((item, index) => (
// //             <PrismicLink
// //               key={index}
// //               field={item.post}
// //               className="group flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm hover:shadow-lg transition"
// //             >
// //               {item.post.data.featured_image && (
// //                 <PrismicNextImage
// //                   field={item.post.data.featured_image}
// //                   className="h-56 w-full object-cover"
// //                   sizes="100vw"
// //                 />
// //               )}

// //               <div className="p-6 flex flex-col gap-3">
// //                 <h3 className="text-xl font-semibold text-slate-900 group-hover:underline">
// //                   <PrismicText field={item.post.data.title} />
// //                 </h3>

// //                 {item.post.data.description && (
// //                   <p className="text-slate-600 text-sm leading-relaxed">
// //                     <PrismicText field={item.post.data.description} />
// //                   </p>
// //                 )}

// //                 <span className="mt-2 text-indigo-600 font-medium text-sm">
// //                   Read post →
// //                 </span>
// //               </div>
// //             </PrismicLink>
// //           ))}
// //         </div>
// //       </div>
//     </section>
//   );
// };

// export default BlogGridSlice;
