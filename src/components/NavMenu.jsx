"use client";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";

import discoverIcon from "/public/icons/discover-1.png";
import forYouIcon from "/public/icons/for-you-1.png";
import eventsIcon from "/public/icons/events-1.png";
import sellIcon from "/public/icons/sell-1.png";
import accountIcon from "/public/icons/account-1.png";

import discoverIcon2 from "/public/icons/discover-2.png";
import forYouIcon2 from "/public/icons/for-you-2.png";
import eventsIcon2 from "/public/icons/events-2.png";
import sellIcon2 from "/public/icons/sell-2.png";
import accountIcon2 from "/public/icons/account-2.png";

export default function NavigationMenu() {
  const pathname = usePathname();

  return (
    <nav className="fixed z-10 bottom-0 left-0 w-full bg-white border-t border-gray-200">
      <ul className="flex justify-around items-center py-10">
        {/* Discover Link */}
        <Link href="/discover"
          className={clsx(
            "text-xs",
            pathname === "/discover" ? "text-[#145aee]" : "text-gray-400"
          )}
        >
          <li className="flex flex-col justify-center items-center">
            <Image src={pathname === "/discover" ? discoverIcon2 : discoverIcon}
              alt="Discover"
            />
            <span>Discover</span>
          </li>
        </Link>

        {/* For You Link */}
        <Link href="/foryou"
          className={clsx(
            "text-xs",
            pathname === "/foryou" ? "text-[#145aee]" : "text-gray-400"
          )}
        >
          <li className="flex flex-col justify-center items-center">
            <Image src={pathname === "/foryou" ? forYouIcon : forYouIcon2}
              alt="For You"
            />
            <span>For You</span>
          </li>
        </Link>

        {/* My Events Link */}
        <Link href="/myevents"
          className={clsx(
            "text-xs",
            pathname === "/myevents" ? "text-[#145aee]" : "text-gray-400"
          )}
        >
          <li className="flex flex-col justify-center items-center">
            <Image src={pathname === "/myevents" ? eventsIcon2 : eventsIcon}
              alt="My Events"
            />
            <span>My Events</span>
          </li>
        </Link>

        {/* Sell Link */}
        <Link href="/sell"
          className={clsx(
            "text-xs",
            pathname === "/sell" ? "text-[#145aee]" : "text-gray-400"
          )}
        >
          <li className="flex flex-col justify-center items-center">
            <Image src={pathname === "/sell" ? sellIcon2 : sellIcon}
              alt="Sell"
            />
            <span>Sell</span>
          </li>
        </Link>

        {/* My Account Link */}
        <Link href="/myaccount"
          className={clsx(
            "text-xs",
            pathname === "/myaccount" ? "text-[#145aee]" : "text-gray-400"
          )}
        >
          <li className="flex flex-col justify-center items-center">
            <Image src={pathname === "/myaccount" ? accountIcon2 : accountIcon}
              alt="My Account"
            />
            <span>My Account</span>
          </li>
        </Link>
      </ul>
    </nav>
  );
}
