import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicNextLink } from "@prismicio/next";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}) => {
  const navigation = await client.getSingle("navigation");

  return (
    <nav className="w-full">
      <ul className="flex items-center gap-8">
        {isFilled.group(navigation.data.menu_items) &&
          navigation.data.menu_items.map((item) => {
            const isHighlighted = item.highlight === true;

            // If no link is set, render text only (editor mistake-proofing)
            if (!isFilled.link(item.link)) {
              return (
                <li key={item.label}>
                  <span className="text-sm text-gray-400">
                    {item.label}
                  </span>
                </li>
              );
            }

            return (
              <li key={item.label}>
                <PrismicNextLink
                  field={item.link}
                  className={
                    isHighlighted
                      ? "rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                      : "relative text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                  }
                >
                  {item.label}
                </PrismicNextLink>
              </li>
            );
          })}
      </ul>
    </nav>
  );
};
