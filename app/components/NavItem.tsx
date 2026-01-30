"use client";

import { PrismicNextLink } from "@prismicio/next";
import { usePathname } from "next/navigation";


export function NavItem({field, label, isCTA}: any){
    const pathname = usePathname();
    const isActive = field?.url === pathname;

    return (
        <PrismicNextLink
            field={field}
            className={
                isCTA
                    ? "rounded-full bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
                    : isActive
                    ? "text-sm font-medium text-gray-900 underline underline-offset-4"
                    : "text-sm font-medium text-gray-600 hover:text-gray-900"
            }
        >
            {label}
        </PrismicNextLink>
    );
}