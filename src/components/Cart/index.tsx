"use client";

import React from "react";

import { useRouter } from "next/navigation";
import NavigationHeader from "@/components/NavigationHeader";

import ProductCart from "./ProductCart";
import OrderSummary from "./OrderSummary";

export const Cart = () => {
  const router = useRouter();

  return (
    <div className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden">
      {/* Top Navigation Header */}
      <NavigationHeader />

      {/* Pagr Title */}
      <div className="relative w-full flex flex-col justify-center pt-[14.5px] mb-[35px] md:mb-[65px]">
        <h1
          className="
      text-[32px] leading-[42px] font-extrabold text-black
      sm:text-[44px] sm:leading-[60px]
      md:text-[59.88px] md:leading-[91.69px]
    "
        >
          My Cart
        </h1>

        <p
          className="
      text-[16px] leading-tight tracking-[-1%] text-[#00000099]
      sm:text-[22px]
      md:text-[29.94px] md:tracking-[-2%]
    "
        >
          Let’s create your account
        </p>
      </div>

      {/*  */}
      <div className="flex flex-col md:flex-row gap-[39px] mb-[55px]">
        {/* Left Side - Cart */}
        <div className="flex-1">
          <ProductCart />
        </div>

        {/* Right Side - Order Summary */}
        <OrderSummary
          onButtonClick={() => router.push("/customer-info")}
          buttonLabel="Shop Now"
        />
      </div>
    </div>
  );
};
