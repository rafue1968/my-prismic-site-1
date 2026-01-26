import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { createClient } from "@/prismicio";
import Header from "./components/Header";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export async function generateMetadata(): Promise<Metadata> {
  
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: settings.data.title,
    description: settings.data.meta_description || "Prismo is the first time I am ever ever looking into!",
    openGraph: {
      images: [settings.data.og_image.url || ""],
    }
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          rel="icon"
          type="image/png"
          sizes="any"
          href="https://prismic.io/favicon.ico"
        />
      </head>

      <body
        className = "bg-stone-50"
      >
        <Header />
          <div className="mx-auto max-w-7xl bg-white border-x border-gray-200 p-12 min-h-screen">
            {children}
          </div>
        <Footer />
      </body>
    </html>
  );
}
