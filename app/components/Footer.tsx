import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();
  const settings = await client.getSingle("settings");
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-white mt-24">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <Link
            href="/"
            className="text-lg font-semibold text-slate-900"
          >
            {settings.data.title}
          </Link>

          <nav>
            <ul className="flex flex-wrap gap-6">
              {settings.data.navigation.map(({ label, link }) => (
                <li key={label}>
                  <PrismicNextLink
                    field={link}
                    className="text-sm text-slate-600 hover:text-indigo-600 transition"
                  >
                    {label}
                  </PrismicNextLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          © {year} {settings.data.title}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
