"use client";
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';

import discoverIcon from '/public/icons/discover-1.png';
import forYouIcon from '/public/icons/for-you.png';
import eventsIcon from '/public/icons/events-1.png';
import sellIcon from '/public/icons/sell-1.png';
import accountIcon from '/public/icons/account-1.png';



export default function NavigationMenu() {
  const pathname = usePathname();

  // Function to apply the active color to the SVG
  const getFillColor = (path) => {
    return pathname === path ? "#086EE0" : "#FBFCFC"; // Active color vs default color
  };

  return (
    <nav className="fixed z-10 bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <ul className="flex justify-around items-center py-10">
        {/* Discover Link */}
        <Link
          href="/discover"
          className={clsx("text-xs", pathname === "/discover" ? "text-blue-600" : "text-gray-400")}
        >
          <li className="flex flex-col justify-center items-center">
            <Image
              src={discoverIcon}
              alt="Discover"
              style={{ fill: getFillColor('/discover') }}
            />
            <span>Discover</span>
          </li>
        </Link>

        {/* For You Link */}
        <Link
          href="/foryou"
          className={clsx("text-xs", pathname === "/foryou" ? "text-blue-600" : "text-gray-400")}
        >
          <li className="flex flex-col justify-center items-center">
            <Image
              src={forYouIcon}
              alt="For You"
              style={{ fill: getFillColor('/foryou') }}
            />
            <span>For You</span>
          </li>
        </Link>

        {/* My Events Link */}
        <Link
          href="/myevents"
          className={clsx("text-xs", pathname === "/myevents" ? "text-blue-600" : "text-gray-400")}
        >
          <li className="flex flex-col justify-center items-center">
            <Image
              src={eventsIcon}
              alt="My Events"
              style={{ fill: getFillColor('/myevents') }}
            />
            <span>My Events</span>
          </li>
        </Link>

        {/* Sell Link */}
        <Link
          href="/sell"
          className={clsx("text-xs", pathname === "/sell" ? "text-blue-600" : "text-gray-400")}
        >
          <li className="flex flex-col justify-center items-center">
            <Image
              src={sellIcon}
              alt="Sell"
              style={{ fill: getFillColor('/sell') }}
            />
            <span>Sell</span>
          </li>
        </Link>

        {/* My Account Link */}
        <Link
          href="/myaccount"
          className={clsx("text-xs", pathname === "/myaccount" ? "text-blue-600" : "text-gray-400")}
        >
          <li className="flex flex-col justify-center items-center">
            <Image
              src={accountIcon}
              alt="My Account"
              style={{ fill: getFillColor('/myaccount') }}
            />
            <span>My Account</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
