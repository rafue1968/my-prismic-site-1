import { createClient } from "@/prismicio";
import { PrismicRichText, SliceZone } from "@prismicio/react";
import { components } from "@/slices";


// interface CaseStudyPageProps {
//     params: { id: string }
// }

export default async function CaseStudy({  params }: {  params: { uid: string } | Promise<{ uid: string }> }) {
  const { uid } = await params;
  
  const client = createClient();
  const doc = await client.getByUID("case_study", uid);

  return (
    <main className="bg-gray-50">
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
            <PrismicRichText 
              field={doc.data.title}
              components={{
                heading1: ({children}) => (
                  <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-slate-800 mb-6">
                    {children}
                  </h1>
                ),
              }}
              />
              <PrismicRichText 
                field={doc.data.summary}
                components={{
                  paragraph: ({children}) => (
                    <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
                      {children}
                    </p>
                  )
                }}
              />
            {components &&
              (<section className="pb-24 px-6">
              <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-sm p-8 md:p-12">
                <SliceZone slices={doc.data.slices} components={components} />
              </div>
            </section>)
            }
          </div>
      </section>
    </main>
  );
}
