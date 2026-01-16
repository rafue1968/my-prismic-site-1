import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <Link
            href="/"
            className="text-lg font-semibold tracking-tight text-gray-900"
          >
            {settings.data.title}
          </Link>

          <nav>
            <ul className="flex flex-wrap items-center gap-6">
              {settings.data.navigation.map(({ label, link }) => (
                <li key={label}>
                  <PrismicNextLink
                    field={link}
                    className="text-sm text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-6 border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500">
            © {year} {settings.data.title}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
