import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sharbby",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-100`}>
        <main className="min-h-screen">{children}</main>
        
        {/* Navigation Menu */}
        <nav className="fixed z-10 bottom-0 left-0 w-full bg-white border-t border-gray-200">
          <ul className="flex justify-around items-center py-10">
            <li className="flex flex-col items-center text-gray-600">
              <Link href="/discover" className="text-xs">Discover</Link>
            </li>
            <li className="flex flex-col items-center text-blue-600">
              <Link href="/foryou" className="text-xs">For You</Link>
            </li>
            <li className="flex flex-col items-center text-gray-600">
              <Link href="/myevent" className="text-xs">My Events</Link>
            </li>
            <li className="flex flex-col items-center text-gray-600">
              <Link href="#" className="text-xs">Sell</Link>
            </li>
            <li className="flex flex-col items-center text-gray-600">
              <Link href="#" className="text-xs">My Account</Link>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
