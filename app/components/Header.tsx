import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header(){
    const client = createClient();

    const settings = await client.getSingle("settings");

    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
                <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
                    {settings.data.title}
                </Link>

                <nav>
                    <ul className="flex items-center gap-8">
                        {settings.data.navigation.map(({link, label}) => (
                            <li key={label}>
                                <PrismicNextLink field={link} className="text-sm font-medium text-gray-600 transition-colors hover:text-gray-900">{label}</PrismicNextLink>
                            </li>
                        ))}
                    </ul>
                </nav>    
            </div>
        </header>
    )
}