"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useCurrentUser } from "@/context/UserContext";

const categories = [
  "Groceries",
  "Premium Fruits",
  "Home & Kitchen",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home Improvement",
  "Sports, Toys & Luggage",
];

const Header: React.FC = () => {
  const { user } = useCurrentUser();
  return (
    <header className="w-full">
      {/* Top announcement bar */}
      <div className="bg-[#0F0F0F] text-[#D9D9D9] text-sm ">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex items-center justify-between h-[42px]">
            <div className="font-bold ">Welcome to worldwide Megamart!</div>
            <div className="flex items-center gap-6 leading-[18px]">
              <button className="hover:underline">
                Deliver to <span className="font-bold">423651</span>
              </button>
              <button className="hover:underline">Track your order</button>
              <button className="hover:underline">All Offers</button>
            </div>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="border-b border-[#EDEDED]">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex items-center justify-between gap-6 py-4">
            {/* left: hamburger & logo */}
            <div className="flex items-center gap-4">
              <button aria-label="open menu">
                {/* Hamburger icon */}
                <Image
                  src="/images/header/menu-icon.svg"
                  width={48}
                  height={48}
                  alt="menu icon"
                />
              </button>

              <div className="flex items-center gap-3">
                <Link href="/">
                  <div className="relative flex items-center">
                    <span className="font-extrabold text-[30px]  leading-[34px]">
                      UNITED DEALS
                    </span>
                  </div>
                </Link>
                <div className="hidden sm:inline-block">
                  <Image
                    src="/images/header/flash-sale.png"
                    width={94}
                    height={48}
                    alt="flash-sale icon"
                  />
                </div>
              </div>
            </div>

            {/* center: search */}
            <div className="flex-1 max-w-[356px]">
              <div className="relative">
                <Image
                  src="/images/header/search-icon.svg"
                  width={18}
                  height={18}
                  alt="search icon"
                  className="absolute left-[16px] top-1/2 -translate-y-1/2"
                />

                <input
                  type="search"
                  placeholder="Search essentials, groceries and more..."
                  className="w-full rounded-[10px]  bg-[#F3F9FB] py-3 pl-[44px] pr-4 text-[#666666] text-sm leading-[18px] focus:outline-none focus:ring-1 focus:ring-orange-300"
                  aria-label="Search products"
                />
                {/* <button
                  aria-label="Search"
                  className="absolute right-1 top-1/2 -translate-y-1/2 px-4 py-2 rounded-full text-sm font-semibold bg-orange-500 text-white hover:opacity-95"
                >
                  Search
                </button> */}
              </div>
            </div>

            {/* right: actions */}
            <div className="flex items-center gap-4">
              <div
                className="hidden sm:flex items-center gap-[6px] text-[16px] leading-[18px] font-bold text-[#FC7901]"
                aria-label="My Deals"
              >
                {/* My Deals icon */}
                <Image
                  src="/images/header/deal-icon.svg"
                  width={24}
                  height={24}
                  alt="dealicon"
                />
                <span className="hidden md:inline">My Deals</span>
              </div>

              <div
                className="hidden sm:flex items-center gap-[6px] text-[16px] leading-[18px] font-bold text-[#666666s]"
                aria-label="My Deals"
              >
                {/* user icon */}
                <Image
                  src="/images/header/user-icon.svg"
                  width={24}
                  height={24}
                  alt="usericon"
                />
                {user ? (
                  <span className="hidden md:inline hover:underline">
                    {user.firstName} {user.lastName}
                  </span>
                ) : (
                  <span className="hidden md:inline ">
                    <Link href="/signup" className="hover:underline">
                      Sign Up
                    </Link>
                    /
                    <Link href="/login" className="hover:underline">
                      Sign In
                    </Link>
                  </span>
                )}
              </div>

              <Link href="/cart">
                <div
                  className="hidden sm:flex items-center gap-[6px] text-[16px] leading-[18px] font-bold text-[#666666s]"
                  aria-label="Cart"
                >
                  <Image
                    src="/images/header/cart-icon.svg"
                    width={24}
                    height={24}
                    alt="carticon"
                  />
                  <span className="hidden sm:inline hover:underline">Cart</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-[#EDEDED]">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex items-center gap-4 overflow-x-auto py-4">
            {/* <button className="flex-shrink-0 rounded-full px-[14px] py-[9px] bg-[#161616] text-white text-sm leading-[18px] font-medium">
              Groceries
            </button> */}

            {categories.map((c) => (
              <div key={c} className="flex-shrink-0 ">
                <button className="cursor-pointer rounded-full px-[14px] py-[9px] hover:bg-[#161616] bg-[#F3F9FB] hover:text-white text-[#222222] text-sm leading-[18px] font-medium">
                  {c}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
