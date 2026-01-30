"use client";

import { useState } from "react";
import { PrismicNextLink } from "@prismicio/next";
import { Content, isFilled } from "@prismicio/client";

type MobileMenuProps = {
    navigation: Content.NavigationDocument;
};

export function MobileMenu({navigation}: MobileMenuProps ) {
    const [open, setOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                className="md:hidden text-gray-700"
            >
                ☰
            </button>

            {open && (  
                <div className="fixed inset-0 z-50 bg-white p-6">
                    <button
                        onClick={() => setOpen(false)}
                        className="mb-8 text-lg"
                    >
                        ✕
                    </button>

                    <ul className="flex flex-col gap-6">
                        {isFilled.group(navigation.data.menu_items) &&
                            navigation.data.menu_items.map((item) => (
                                <li key={item.label}>
                                    <PrismicNextLink
                                        field={item.link}
                                        className="text-2xl font-semibold"
                                        onClick={() => setOpen(false)}
                                    >
                                        {item.label}
                                    </PrismicNextLink>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            )}
        </>
    )
}