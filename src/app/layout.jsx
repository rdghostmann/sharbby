import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

import NavigationMenu from "@/components/NavMenu";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  manifest: "/manifest.json",
  title: "Sharbby",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="manifest" href="manifest.json" />
      </Head>
      <body className={`${inter.className} bg-gray-100`}>
        <main className="min-h-screen">{children}</main>

        {/* Navigation Menu */}
       <NavigationMenu />
      </body >
    </html >
  );
}


