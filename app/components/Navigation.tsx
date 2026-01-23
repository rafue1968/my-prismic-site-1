import { Client, Content, isFilled } from "@prismicio/client";
import { PrismicLink } from "@prismicio/react";

export const Navigation = async ({
  client,
}: {
  client: Client<Content.AllDocumentTypes>;
}) => {
  const navigation = await client.getSingle("navigation");

  return (
    <nav className="font-bold text-xl self-center">
      <ul className="flex gap-6">
        {navigation.data.menu_items.map((item) => (
          <li key={`${item.label}`}>
            {isFilled.link(item.link) ? (
              <PrismicLink field={item.link}>
                {item.label}
              </PrismicLink>
            ) : (
              <span className="opacity-50 cursor-not-allowed">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
