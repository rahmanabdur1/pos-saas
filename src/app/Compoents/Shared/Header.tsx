"use client";

import Link from "next/link";
// import HeaderMenuRight from "@/layouts/header-menu-right";

import Sidebar from "./Sidebar";
import HamburgerButton from "@/app/layout/hamburger-button";
import StickyHeader from "@/app/layout/sticky-header";

export default function Header() {
  return (
    <StickyHeader className="z-[990] 2xl:py-5 3xl:px-8  4xl:px-10">
      <div className="flex w-full max-w-2xl items-center">
        <HamburgerButton view={<Sidebar className="static w-full 2xl:w-full" />} />
        <Link
          href={"/"}
          aria-label="Site Logo"
          className="me-4 w-9 shrink-0 text-gray-800 hover:text-gray-900 lg:me-5 xl:hidden"
        >
         <>LOGO</>
        </Link>
      </div>

      {/* <HeaderMenuRight /> */}
    </StickyHeader>
  );
}
