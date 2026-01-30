"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/prismicio";
import { Navigation } from "./navigation/Navigation.server";

export default function StickyHeader(){
    const [hidden, setHidden] = useState(false);
    const [lastScroll, setLastScroll] = useState(0);

    useEffect(() => {
        const onScroll = () => {
            const current = window.scrollY;
            setHidden(current > lastScroll && current > 80);
            setLastScroll(current);
        };

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [lastScroll])

    return (
        <header
            className={`sticky top-0 z-50 w-full transition-all duration-300 ${
                hidden ? "-translate-y-full" : "translate-y-0"
            } bg-white border-b border-gray-200`}
        >
            <div className="mx-auto max-w-7xl px-6 py-4 flex justify-between items-center">
                <Navigation client={createClient()} />
            </div>
        </header>
    )
}