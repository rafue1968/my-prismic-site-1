"use client";

import { PrismicNextLink } from "@prismicio/next";
import { isFilled, Content } from "@prismicio/client";
import { MobileMenu } from "../MobileMenu";

export function NavigationClient({
  navigation,
}: {
  navigation: Content.NavigationDocument;
}) {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo */}
        <PrismicNextLink
          href="/"
          className="text-xl font-semibold tracking-tight text-gray-900"
        >
          Prismo
        </PrismicNextLink>

        {/* Desktop menu */}
        <ul className="hidden md:flex items-center gap-8">
          {isFilled.group(navigation.data.menu_items) &&
            navigation.data.menu_items.map((item) => {
              const isHighlighted = item.highlight === true;

              if (!isFilled.link(item.link)) return null;

              return (
                <li key={item.label}>
                  <PrismicNextLink
                    field={item.link}
                    className={
                      isHighlighted
                        ? "rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
                        : "text-sm font-medium text-gray-600 hover:text-gray-900 transition"
                    }
                  >
                    {item.label}
                  </PrismicNextLink>
                </li>
              );
            })}
        </ul>

        {/* Mobile menu */}
        <MobileMenu navigation={navigation} />
      </div>
    </nav>
  );
}
