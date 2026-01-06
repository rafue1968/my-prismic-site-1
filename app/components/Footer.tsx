import { createClient } from "@/prismicio"
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer(){
    const client = createClient();

    const settings = await client.getSingle("settings");

    const year = new Date().getFullYear();

    return (
        <footer>
            <Link href="/">{settings.data.title}</Link>
            
            <p>©{year.valueOf()} Prismo</p>

            {settings.data.navigation.map(({label, link}) => (
                <li key={label}>
                    <PrismicNextLink field={link}>{label}</PrismicNextLink>
                </li>
            ))}
        </footer>
    )
}