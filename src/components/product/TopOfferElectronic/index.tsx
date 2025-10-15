"use client";

import React from "react";
import Image from "next/image";

import HomeButton from "@/components/ui/Buttons/HomeButton";

export type PromoCard = {
  id: string;
  brand: string;
  iconSrc: string;
  productSrc: string;
  offerText: string;
};

const sampleData: PromoCard[] = [
  {
    id: "iphone",
    brand: "iPhone",
    iconSrc: "/images/home/top-electronics/iphone-logo.svg",
    productSrc: "/images/home/top-electronics/iphone.png",
    offerText: "UP to 80% OFF",
  },
  {
    id: "realme",
    brand: "realme",
    iconSrc: "/images/home/top-electronics/realme-logo.svg",
    productSrc: "/images/home/top-electronics/realme.png",
    offerText: "UP to 80% OFF",
  },
  {
    id: "xiaomi",
    brand: "XIAOMI",
    iconSrc: "/images/home/top-electronics/mi-logo.svg",
    productSrc: "/images/home/top-electronics/mi.png",
    offerText: "UP to 80% OFF",
  },
];

const TopOfferElectronics: React.FC = () => {
  return (
    <section className="mx-auto max-w-[1242px] px-5 mb-[61px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[42px]">
        <h2 className="text-[20px] md:text-[30px] leading-[95%] font-extrabold text-[#232321] uppercase">
          TOP Offers in Electronics
        </h2>
        <HomeButton onClick={() => alert("Button clicked!")}>
          VIEW ALL
        </HomeButton>
      </div>

      {/* Cards wrapper */}
      <div className="flex gap-5 md:gap-[17px]">
        {sampleData.map((card) => (
          <div
            key={card.id}
            className={`max-w-[425px] relative flex items-center justify-between rounded-[17.51px] p-[21.8px] bg-[#313131] text-white flex-1  overflow-hidden`}
          >
            {/* Decorative circle image */}
            <div className="absolute -top-6 -right-6 w-32 h-32 md:w-[247px] md:h-[247px] pointer-events-none ">
              <Image
                src="/images/home/top-electronics/grey-circle-vector.svg"
                alt="decor"
                fill
                className="object-contain"
              />
            </div>

            {/* Left section */}
            <div className="z-10 flex flex-col ">
              {/* brand name */}
              <div className="w-[109px] rounded-[8.75px] py-[9.85px] px-[21.88px] bg-[#494949] text-[15.32px]  uppercase text-center mb-[22.49px]">
                {card.brand}
              </div>

              {/* brand icon */}
              <div className="relative w-[67px] h-[67px] mb-[21.89px]">
                <Image
                  src={card.iconSrc}
                  alt={`${card.brand} icon`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-[26.26px] leading-[32.83px] font-medium">
                {card.offerText}
              </div>
            </div>

            {/* Right section */}
            <div className="z-10 flex items-center justify-end sm:w-1/2 mt-4 sm:mt-0">
              <div className="relative md:w-full md:h-[200px] ">
                <Image
                  src={card.productSrc}
                  alt={`${card.brand} product`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TopOfferElectronics;
