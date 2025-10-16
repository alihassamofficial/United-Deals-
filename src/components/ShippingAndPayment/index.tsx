"use client";

import NavigationHeader from "../NavigationHeader";
import { useRouter } from "next/navigation";
import React from "react";
import PaymentCard from "./PaymentCard";
import ShippingCard from "./ShippingCard";
import OrderSummary from "../Cart/OrderSummary";
import { useCheckout } from "@/context/CheckoutContext";

const PAYMENT_OPTIONS = [
  {
    id: "paypal",
    title: "PayPal",
    description:
      "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.",
    logo: "/images/paypal.svg",
  },
  {
    id: "mastercard",
    title: "Mastercard",
    description:
      "Pay with your Mastercard for secure and easy payments worldwide.",
    logo: "/images/mastercard.svg",
  },
  {
    id: "bitcoin",
    title: "Bitcoin",
    description:
      "Use your Bitcoin wallet for a decentralized payment experience.",
    logo: "/images/bitcoin.svg",
  },
];

const SHIPPING_OPTIONS = [
  {
    id: "ausff",
    title: "AUSFF",
    delivery: "14–21 days",
    cost: 0,
    insuranceAvailable: false,
    logo: "/images/ausff.svg",
  },
  {
    id: "racecouriers",
    title: "RaceCouriers",
    delivery: "14–21 days",
    cost: 10,
    insuranceAvailable: true,
    logo: "/images/race.svg",
  },
  {
    id: "transcocargo",
    title: "TranscoCargo",
    delivery: "14–21 days",
    cost: 12,
    insuranceAvailable: true,
    logo: "/images/transco.svg",
  },
];

function ShippingPayment() {
  const router = useRouter();
  const { selectedPayment, selectedShipping, selectPayment, selectShipping } =
    useCheckout();

  const handleBack = () => {
    router.back();
  };

  const handleNext = () => {
    if (!selectedPayment || !selectedShipping) {
      alert(
        "Please select both payment and shipping options before continuing."
      );
      return;
    }
    router.push("/product-confirmation");
  };

  return (
    <div className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden">
      {/* Top Navigation Header */}
      <NavigationHeader onBack={handleBack} />

      {/* Page Title */}
      <div className="relative w-full flex flex-col justify-center pt-[14.5px] mb-[35px] md:mb-[65px]">
        <h1 className="text-[32px] sm:text-[44px] md:text-[59.88px] font-extrabold text-black leading-tight">
          Shipping & Payments
        </h1>
        <p className="text-[16px] sm:text-[22px] md:text-[29.94px] text-[#00000099]">
          Choose your payment and delivery preferences
        </p>
      </div>

      <div className="flex flex-col items-start md:flex-row gap-[39px] mb-[55px] md:mb-[228px]">
        <div className="flex flex-wrap flex-col md:flex-row gap-[32px] flex-1 items-stretch">
          {/* Payment Selection */}
          <section className="flex-1">
            <h3 className="text-[20px] font-bold text-[#262626] mb-2">
              Payment
            </h3>
            <p className="text-[14px] text-[#555555] mb-5">
              Please choose a payment method
            </p>

            <div className="space-y-4">
              {PAYMENT_OPTIONS.map((p) => (
                <PaymentCard
                  key={p.id}
                  option={p}
                  selected={selectedPayment?.id === p.id}
                  onSelect={() => selectPayment(p)}
                />
              ))}
            </div>
          </section>

          {/* Shipping Selection */}
          <section className="flex-1">
            <h3 className="text-[20px] font-bold text-[#262626] mb-2">
              Shipping
            </h3>
            <p className="text-[14px] text-[#555555] mb-5">
              Please choose a shipping company based on your region
            </p>
            <div className="space-y-4">
              {SHIPPING_OPTIONS.map((s) => (
                <ShippingCard
                  key={s.id}
                  option={s}
                  selected={selectedShipping?.id === s.id}
                  onSelect={() => selectShipping(s)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <OrderSummary onButtonClick={handleNext} buttonLabel="NEXT" />
      </div>
    </div>
  );
}

export default ShippingPayment;
