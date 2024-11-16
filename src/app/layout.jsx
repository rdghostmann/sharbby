import { Inter } from "next/font/google";
import "./globals.css";

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
              <span className="text-xs">Discover</span>
            </li>
            <li className="flex flex-col items-center text-blue-600">
              <span className="text-xs">For You</span>
            </li>
            <li className="flex flex-col items-center text-gray-600">
              <span className="text-xs">My Events</span>
            </li>
            <li className="flex flex-col items-center text-gray-600">
              <span className="text-xs">Sell</span>
            </li>
            <li className="flex flex-col items-center text-gray-600">
              <span className="text-xs">My Account</span>
            </li>
          </ul>
        </nav>
      </body>
    </html>
  );
}
