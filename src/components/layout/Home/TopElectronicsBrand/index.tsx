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
    <section className="mx-auto max-w-[1352px] px-4 sm:px-5 mb-[61px]">
      {/* Header */}{" "}
      <div className="flex items-center justify-between mb-[42px]">
        {" "}
        <h2 className="text-[20px] md:text-[30px] leading-[95%] font-extrabold text-[#232321] uppercase">
          {" "}
          TOP Offers in Electronics{" "}
        </h2>{" "}
        <HomeButton onClick={() => alert("Button clicked!")}>
          {" "}
          VIEW ALL{" "}
        </HomeButton>{" "}
      </div>
      {/* Cards wrapper */}
      <div
        className="
          flex flex-wrap justify-center md:justify-between
          gap-5 md:gap-[17px]
        "
      >
        {sampleData.map((card) => (
          <div
            key={card.id}
            className="
              relative flex items-center justify-between
              rounded-[17.51px] p-[21.8px]
              bg-[#313131] text-white overflow-hidden
              w-full sm:w-[48%] lg:w-[32%] 
              min-h-[200px]
            "
          >
            {/* Decorative circle image */}
            <div className="absolute -top-6 -right-6 w-24 h-24 md:w-[247px] md:h-[247px] pointer-events-none">
              <Image
                src="/images/home/top-electronics/grey-circle-vector.svg"
                alt="decor"
                fill
                className="object-contain"
              />
            </div>

            {/* Left section */}
            <div className="z-10 flex flex-col">
              <div className="w-[100px] rounded-[8.75px] py-[8px] px-[18px] bg-[#494949] text-[14px] uppercase text-center mb-[16px]">
                {card.brand}
              </div>

              <div className="relative w-[55px] h-[55px] mb-[16px]">
                <Image
                  src={card.iconSrc}
                  alt={`${card.brand} icon`}
                  fill
                  className="object-contain"
                />
              </div>

              <div className="text-[22px] sm:text-[26px] leading-[30px] font-medium">
                {card.offerText}
              </div>
            </div>

            {/* Right section */}
            <div className="z-10 flex items-center justify-end w-[40%] sm:w-[45%] mt-2 sm:mt-0">
              <div className="relative w-full h-[140px] sm:h-[200px]">
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
