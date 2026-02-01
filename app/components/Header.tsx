import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();
  const settings = await client.getSingle("settings");

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight text-slate-900 hover:text-indigo-600 transition"
        >
          {settings.data.title}
        </Link>

        <nav>
          <ul className="flex items-center gap-8">
            {settings.data.navigation.map(({ label, link }) => (
              <li key={label}>
                <PrismicNextLink
                  field={link}
                  className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition"
                >
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
