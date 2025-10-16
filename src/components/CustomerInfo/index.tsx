"use client";
import React, { useRef } from "react";
// import { toast } from "sonner";
import NavigationHeader from "../NavigationHeader";
import { useRouter } from "next/navigation";
import OrderSummary from "../Cart/OrderSummary";

import CheckoutForm from "./CheckOutForm";

function CustomerInfo() {
  const router = useRouter();
  const formRef = useRef<{ validateForm: () => boolean }>(null);

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (formRef.current && formRef.current.validateForm()) {
      router.push("/shipping-payment");
    } else {
      // toast.error("All fields are required!");
      console.log("All fields Required");
    }
  };
  return (
    <div className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden">
      {/* Top Navigation Header */}
      <NavigationHeader onBack={handleBack} />

      {/* Page Title */}
      <div className="relative w-full flex flex-col justify-center pt-[14.5px] mb-[35px] md:mb-[65px]">
        <h1
          className="
          text-[32px] leading-[42px] font-extrabold text-black
          sm:text-[44px] sm:leading-[60px]
          md:text-[59.88px] md:leading-[91.69px]
        "
        >
          Customer Information
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

      <div className="flex items-start flex-col md:flex-row gap-[39px] mb-[55px] md:mb-[182px]">
        {/* Left Side - Cart */}
        <div className="flex-1">
          <CheckoutForm ref={formRef} />
        </div>

        {/* Right Side - Order Summary */}
        <OrderSummary onButtonClick={handleNext} buttonLabel="NEXT" />
      </div>
    </div>
  );
}

export default CustomerInfo;
