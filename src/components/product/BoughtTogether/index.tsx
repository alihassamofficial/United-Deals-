"use client";

import Image from "next/image";
import React from "react";
import HomeButton from "@/components/ui/Buttons/HomeButton";

type Product = {
  imageSrc: string;
  title: string;
  rating?: number;
  ratingCount?: number;
  priceLabel?: string;
};

// Product data
const products: Product[] = [
  {
    imageSrc: "/images/product/product-screenbar.png",
    title: "BenQ ScreenBar Halo LED Monitor Light",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
  },
  {
    imageSrc: "/images/product/product-hub.png",
    title: "Honeywell Newly Launched 4-in-1 Ultra Slim USB Hub",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
  },
  {
    imageSrc: "/images/product/product-stand.png",
    title: "STRIFF Adjustable Laptop Tabletop Stand",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
  },
  {
    imageSrc: "/images/product/product-sleeve.png",
    title: "Dyazo Water Resistant Laptop Sleeve",
    rating: 4.7,
    ratingCount: 21671,
    priceLabel: "₹125",
  },
];

export default function BoughtTogether() {
  return (
    <section className="mx-auto max-w-[1242px] px-4 sm:px-6 mb-[61px]">
      {/* Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-[32px]">
        <h2 className="text-[20px] sm:text-[30px] leading-[95%] font-extrabold text-[#232321] uppercase">
          frequently bought together
        </h2>
        <HomeButton onClick={() => alert("Button clicked!")}>
          VIEW ALL
        </HomeButton>
      </div>

      {/* Product Grid */}
      <div
        className="
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6 sm:gap-[14px]
          justify-items-center
        "
      >
        {products.map((product, index) => (
          <div
            key={index}
            className="
              flex flex-col items-stretch
              w-full max-w-[289px]
              sm:w-[260px] lg:w-[289px]
            "
          >
            {/* Product Image */}
            <div className="bg-[#F7F7F8] border-[6px] border-[#FAFAFA] rounded-[18px] w-full">
              <div className="w-full bg-[#F7F7F8] rounded-xl flex items-center justify-center h-[220px] sm:h-[280px] md:h-[305px]">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src={product.imageSrc}
                    alt={product.title}
                    fill
                    style={{ objectFit: "contain" }}
                    sizes="(max-width: 640px) 100vw, 289px"
                  />
                </div>
              </div>
            </div>

            {/* Text + Rating */}
            <div className="mt-4 sm:mt-5 flex flex-col flex-1">
              <h3
                className="font-[Lato] font-bold text-[#000000] mb-2 sm:mb-3"
                style={{
                  fontSize: "18px",
                  lineHeight: "110%",
                  letterSpacing: "0%",
                }}
              >
                {product.title}
              </h3>

              {/* Rating Row */}
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <div className="flex items-center gap-[2px]">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="16"
                      height="16"
                      fill="#FFA52F"
                    >
                      <path d="M12 .587l3.668 7.431 8.2 1.193-5.934 5.79 1.402 8.173L12 18.896l-7.336 3.878 1.402-8.173L.132 9.211l8.2-1.193z" />
                    </svg>
                  ))}
                </div>
                <p className="text-[#333333] font-medium">
                  {product.rating?.toFixed(1)}
                </p>
                <p className="text-[#6B6B6B]">
                  ({product.ratingCount?.toLocaleString()} Ratings)
                </p>
              </div>

              <div className="flex-1" />

              {/* CTA Button */}
              <div className="mt-4 sm:mt-5">
                <button
                  className="
                    w-full py-2 sm:py-3 rounded-md text-white font-medium
                    flex items-center justify-center gap-2
                    bg-[#000000] hover:bg-[#1A1A1A] transition-colors text-sm sm:text-base
                  "
                >
                  <span>BUY NOW -</span>
                  <span className="font-bold text-[#FFA52F]">
                    {product.priceLabel}
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
