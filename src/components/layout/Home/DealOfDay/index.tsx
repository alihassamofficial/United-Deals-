"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useState } from "react";
import HomeButton from "@/components/ui/Buttons/HomeButton";

type Product = {
  imageSrc: string;
  title: string;
  rating?: number;
  ratingCount?: number;
  priceLabel?: string;
  flashStart: number;
  flashEnd: number;
};

const now = Date.now();

const products: Product[] = [
  {
    imageSrc: "/images/product/product-screenbar.png",
    title: "BenQ ScreenBar Halo LED Monitor Light",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
    flashStart: now - 1000 * 60 * 60 * 2, // started 2 hours ago
    flashEnd: now + 1000 * 60 * 60 * 3, // ends in 3 hours
  },
  {
    imageSrc: "/images/product/product-hub.png",
    title: "Honeywell Newly Launched 4-in-1 Ultra Slim USB Hub",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
    flashStart: now - 1000 * 60 * 30, // started 30 min ago
    flashEnd: now + 1000 * 60 * 60 * 1, // ends in 1 hour
  },
  {
    imageSrc: "/images/product/product-stand.png",
    title: "STRIFF Adjustable Laptop Tabletop Stand",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
    flashStart: now - 1000 * 60 * 60 * 1, // started 1 hour ago
    flashEnd: now + 1000 * 60 * 60 * 5, // ends in 5 hours
  },
  {
    imageSrc: "/images/product/product-sleeve.png",
    title: "Dyazo Water Resistant Laptop Sleeve",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
    flashStart: now - 1000 * 60 * 60 * 4, // started 4 hours ago
    flashEnd: now + 1000 * 60 * 2 * 60 * 60, // ends in 2 hours
  },
];

const globalDealsEnd =
  Date.now() + (16 * 24 * 60 * 60 + 21 * 3600 + 57 * 60 + 23) * 1000;

function formatGlobalCountdown(msRemaining: number) {
  if (msRemaining <= 0) return "Deal ended";
  const sec = Math.floor(msRemaining / 1000);
  const days = Math.floor(sec / (3600 * 24));
  const hours = Math.floor((sec % (3600 * 24)) / 3600);
  const minutes = Math.floor((sec % 3600) / 60);
  const seconds = sec % 60;
  return `${days}d : ${hours}h : ${minutes}m : ${seconds}s`;
}

function formatRemainingShort(msRemaining: number) {
  if (msRemaining <= 0) return "Ended";
  const sec = Math.floor(msRemaining / 1000);
  if (sec < 60) return `${sec}s`;
  const min = Math.floor(sec / 60);
  if (min < 60) return `${min}m`;
  const hr = Math.floor(min / 60);
  if (hr < 24) return `${hr}h`;
  const days = Math.floor(hr / 24);
  return `${days}d`;
}

export default function DealOfDay() {
  const [tick, setTick] = useState<number>(Date.now());

  useEffect(function setupTimer() {
    const id = setInterval(function () {
      setTick(Date.now());
    }, 1000);
    return function cleanup() {
      clearInterval(id);
    };
  }, []);

  // memoize computed per-product progress to avoid work on each render beyond necessary
  const productProgress = useMemo(() => {
    return products.map((p) => {
      const total = Math.max(p.flashEnd - p.flashStart, 1);
      const remaining = Math.max(p.flashEnd - tick, 0);
      const percent = Math.max(Math.min((remaining / total) * 100, 100), 0); // 0..100
      return {
        remaining,
        percent,
        total,
      };
    });
  }, [tick]);

  const globalRemaining = Math.max(globalDealsEnd - tick, 0);

  return (
    <section className="max-w-[1363px] px-5 mx-auto  mb-[55px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[39px]">
        <h2 className="text-[20px] md:text-[30px] leading-[95%] font-extrabold text-[#232321] uppercase">
          frequently bought together
        </h2>

        <div className="flex items-center gap-4">
          {/* Global countdown chip */}
          <span className="text-xs font-semibold text-[#111111]">
            Deals ends in
          </span>
          <div className="flex items-center gap-3 px-4 py-2 rounded-md bg-[#FCBD01]">
            <span className="text-sm font-extrabold text-[#111111]">
              {formatGlobalCountdown(globalRemaining)}
            </span>
          </div>

          <HomeButton onClick={() => alert("Clicked VIEW ALL")}>
            VIEW ALL
          </HomeButton>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-[14px] md:justify-between">
        {products.map((product, index) => {
          const progress = productProgress[index];
          const moreThanOneHour = progress.remaining > 1000 * 60 * 60; // > 1 hour

          // colors based on time left
          const flashTextColor = moreThanOneHour ? "#397CFF" : "#FF4853";
          const barActiveColor = moreThanOneHour ? "#397CFF" : "#FF4853";
          const barBgColor = moreThanOneHour ? "#CFDFFF" : "#FFD6D8";

          return (
            <div
              key={index}
              className="flex flex-col items-stretch w-[318px] bg-transparent"
            >
              {/* Card image */}
              <div className="relative bg-[#F7F7F8] border-[6px] border-[#FAFAFA] rounded-[18px] w-full overflow-hidden">
                {/* NEW badge */}
                <div className="absolute left-0 top-0 z-10">
                  <span className="inline-block px-[16px] py-[12px] rounded-tl-[20px] rounded-tr-[0]   rounded-br-[20px] rounded-bl-[0] text-[12px] font-semibold bg-[#FCBD01] text-white">
                    New
                  </span>
                </div>

                {/* Main image container */}
                <div className="w-full rounded-xl flex items-center justify-center h-[305px] p-4 mb-[7px]">
                  <div className="relative w-full h-full">
                    <Image
                      src={product.imageSrc}
                      alt={product.title}
                      fill
                      style={{ objectFit: "contain" }}
                      sizes="(max-width: 640px) 80vw, 289px"
                    />
                  </div>
                </div>
              </div>

              {/* Flash deal bar and label area */}
              <div className="mb-[8px]">
                <div className="flex items-center justify-between gap-2 mb-2">
                  <div
                    className="flex items-center gap-2"
                    style={{ color: flashTextColor }}
                  >
                    <span className="text-[13px] font-semibold ">
                      Flash Deal Ends in
                    </span>
                    <span className="text-[13px] font-medium">
                      {formatRemainingShort(progress.remaining)}
                    </span>
                    !
                  </div>
                </div>

                {/* Progress track */}
                <div
                  className="w-full h-2 rounded-full overflow-hidden"
                  style={{ backgroundColor: barBgColor }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-linear"
                    style={{
                      width: `${progress.percent}%`,
                      backgroundColor: barActiveColor,
                    }}
                  />
                </div>
              </div>

              {/* Text  */}
              <div className="mb-[16px] flex flex-col flex-1">
                <h3
                  className="font-[Lato] font-bold text-[#000000] mb-3"
                  style={{
                    fontSize: "21.85px",
                    lineHeight: "100%",
                    letterSpacing: "0%",
                  }}
                >
                  {product.title}
                </h3>

                <div className="flex-1" />

                {/* CTA Button */}
                <div>
                  <button
                    className="
                      w-full py-3 rounded-md text-white font-medium
                      flex items-center justify-center gap-2
                      bg-[#000000] hover:bg-[#1A1A1A] transition-colors
                    "
                    onClick={() => alert(`Buy ${product.title}`)}
                  >
                    <span>BUY NOW -</span>
                    <span className="font-bold text-[#FFA52F]">
                      {product.priceLabel}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
