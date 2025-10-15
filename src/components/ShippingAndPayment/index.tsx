"use client";
import NavigationHeader from "../NavigationHeader";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import PaymentCard from "./PaymentCard";
import ShippingCard from "./ShippingCard";
import OrderSummary from "../Cart/OrderSummary";
import data from "@/data/cart.json";

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
      "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.",
    logo: "/images/mastercard.svg",
  },
  {
    id: "bitcoin",
    title: "Bitcoin",
    description:
      "PayPal is a trusted online payment platform that allows individuals and businesses to securely send and receive money electronically.",
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
  const handleBack = () => {
    router.back(); // navigates one step back in browser history
  };

  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string | null>(null);
  const [shippingId, setShippingId] = useState<string | null>(null);

  useEffect(() => {
    const saved = localStorage.getItem("checkoutSelection");
    if (saved) {
      const parsed = JSON.parse(saved);
      setPaymentId(parsed.paymentId);
      setShippingId(parsed.shippingId);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "checkoutSelection",
      JSON.stringify({ paymentId, shippingId })
    );
  }, [paymentId, shippingId]);

  // const handleNext = () => {
  //   if (!paymentId || !shippingId) {
  //     alert(
  //       "Please select both payment and shipping options before continuing."
  //     );
  //     return;
  //   }
  //   router.push("/checkout/confirm");
  // };
  return (
    <div className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden">
      {/* Top Navigation Header */}
      <NavigationHeader onBack={handleBack} />

      {/* Pagr Title */}
      <div className="relative w-full flex flex-col justify-center pt-[14.5px] mb-[35px] md:mb-[65px]">
        <h1
          className="
          text-[32px] leading-[42px] font-extrabold text-black
          sm:text-[44px] sm:leading-[60px]
          md:text-[59.88px] md:leading-[91.69px]
        "
        >
          Shipping & Payments
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

      <div className="flex flex-col items-start md:flex-row gap-[39px] mb-[55px] md:mb-[228px] ">
        <div className="flex flex-wrap flex-col md:flex-row gap-[32px] flex-1 items-stretch">
          {/* Payemnt Selection Card */}
          <section className="flex-1 ">
            <h3 className="text-[20px] leading-[20px] text-[#262626] font-bold mb-2">
              Payment
            </h3>
            <p className="text-[14px] leading-[20px] text-[#555555] mb-5">
              Please choose a payment method
            </p>

            <div className="space-y-4">
              {PAYMENT_OPTIONS.map((p) => (
                <PaymentCard
                  key={p.id}
                  option={p}
                  selected={paymentId === p.id}
                  onSelect={() => setPaymentId(p.id)}
                />
              ))}
            </div>
          </section>

          {/* Shipping Selection  */}
          <section className="flex-1 ">
            <h3 className="text-[20px] leading-[20px] text-[#262626] font-bold mb-2">
              Shipping
            </h3>
            <p className="text-[14px] leading-[20px] text-[#555555] mb-5">
              Please choose a shipping company based on your region
            </p>
            <div className="space-y-4">
              {SHIPPING_OPTIONS.map((s) => (
                <ShippingCard
                  key={s.id}
                  option={s}
                  selected={shippingId === s.id}
                  onSelect={() => setShippingId(s.id)}
                />
              ))}
            </div>
          </section>
        </div>

        {/* Order Summary */}
        <OrderSummary summary={data.summary} />
      </div>
    </div>
  );
}

export default ShippingPayment;
