"use client";
import { toast } from "sonner";
import React from "react";
import NavigationHeader from "../NavigationHeader";
import { useRouter } from "next/navigation";
import OrderSummary from "../Cart/OrderSummary";
import OrderDetails from "./OrderDetails";
import { useCart } from "@/context/CartContext";
import { useCheckout } from "@/context/CheckoutContext";
import { API_ENDPOINTS } from "@/constants/api";

function ProductConfirmation() {
  const router = useRouter();
  const { cart, clearCart, totalPrice } = useCart();
  const { customerInfo, selectedShipping, selectedPayment, clearCheckout } =
    useCheckout();

  const handleBack = () => {
    router.back();
  };

  // const handleConfirmOrder = () => {
  //   toast.success("Order placed successfully!");

  //   setTimeout(() => {
  //     clearCart();
  //     clearCheckout();
  //     router.push("/order-success");
  //   }, 800);
  // };

  const handleConfirmOrder = async () => {
    if (cart.length === 0) {
      toast.error("Your cart is empty!");
      return;
    }

    const orderData = {
      id: Date.now(),
      date: new Date().toISOString(),
      customerInfo,
      shipping: selectedShipping,
      payment: selectedPayment,
      items: cart,
      total: totalPrice,
      status: "Pending",
    };

    try {
      console.log("Posting order:", orderData);
      const res = await fetch(API_ENDPOINTS.ORDERS, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(orderData),
      });

      if (!res.ok) throw new Error("Failed to save order");

      toast.success("Order placed successfully!");

      // Small delay for better UX
      setTimeout(() => {
        clearCart();
        clearCheckout();
        router.push("/order-success");
      }, 800);
    } catch (error) {
      console.error("Order save failed:", error);
      toast.error("Failed to save order. Please try again.");
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
          Product Confirmation
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

      {/* Left + Right Sections */}
      <div className="flex items-start flex-col md:flex-row gap-[39px] mb-[55px]">
        {/* Left Side - Order Details */}
        <div className="flex-1 w-full">
          <OrderDetails />
        </div>

        {/* Right Side - Order Summary */}
        <OrderSummary
          onButtonClick={handleConfirmOrder}
          buttonLabel="CONFIRM"
        />
      </div>
    </div>
  );
}

export default ProductConfirmation;
