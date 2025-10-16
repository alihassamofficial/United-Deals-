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
      <div className="bg-[#0F0F0F] text-[#D9D9D9] text-sm">
        <div className="max-w-[1240px] mx-auto px-5">
          <div className="flex items-center justify-between h-[42px]">
            <div className="font-bold">Welcome to worldwide Megamart!</div>
            <div className="hidden sm:flex items-center gap-6 leading-[18px]">
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
        <div className="max-w-[1240px] mx-auto px-5 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 flex-wrap">
          {/* Left: hamburger + logo */}
          <div className="flex items-center justify-between sm:justify-start gap-3 w-full sm:w-auto">
            {/* Hamburger */}
            <button aria-label="open menu" className="sm:hidden">
              <Image
                src="/images/header/menu-icon.svg"
                width={28}
                height={28}
                alt="menu icon"
              />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <span className="font-extrabold text-[22px] sm:text-[30px] leading-[30px]">
                UNITED DEALS
              </span>
              <Image
                src="/images/header/flash-sale.png"
                width={70}
                height={35}
                alt="flash-sale icon"
                className="hidden sm:block"
              />
            </Link>
          </div>

          {/* Center: search box (full width on mobile) */}
          <div className="w-full sm:max-w-[356px] order-3 sm:order-none">
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
                className="w-full rounded-[10px] bg-[#F3F9FB] py-3 pl-[44px] pr-4 text-[#666666] text-sm leading-[18px] focus:outline-none focus:ring-1 focus:ring-orange-300"
                aria-label="Search products"
              />
            </div>
          </div>

          {/* Right: actions (stacked on mobile) */}
          <div className="flex items-center justify-between sm:justify-end gap-4 w-full sm:w-auto order-2 sm:order-none">
            {/* My Deals */}
            <div className="hidden sm:flex items-center gap-[6px] text-[16px] leading-[18px] font-bold text-[#FC7901]">
              <Image
                src="/images/header/deal-icon.svg"
                width={24}
                height={24}
                alt="dealicon"
              />
              <span>My Deals</span>
            </div>

            {/* User section */}
            <div className="flex items-center gap-[6px] text-[14px] sm:text-[16px] font-bold text-[#666666]">
              <Image
                src="/images/header/user-icon.svg"
                width={22}
                height={22}
                alt="usericon"
              />
              {user ? (
                <span className="hover:underline">
                  {user.firstName} {user.lastName}
                </span>
              ) : (
                <span className="hover:underline">
                  <Link href="/signup">Sign Up</Link> /{" "}
                  <Link href="/login">Sign In</Link>
                </span>
              )}
            </div>

            {/* Cart */}
            <Link
              href="/cart"
              className="flex items-center gap-[6px] text-[14px] sm:text-[16px] font-bold text-[#666666]"
            >
              <Image
                src="/images/header/cart-icon.svg"
                width={22}
                height={22}
                alt="carticon"
              />
              <span className="hover:underline  sm:inline">Cart</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Categories */}
      <div className="border-b border-[#EDEDED] overflow-x-auto">
        <div className="max-w-[1240px] mx-auto px-5 py-3 flex items-center gap-4">
          {categories.map((c) => (
            <button
              key={c}
              className="flex-shrink-0 rounded-full px-[14px] py-[9px] bg-[#F3F9FB] hover:bg-[#161616] hover:text-white text-[#222222] text-sm font-medium"
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
