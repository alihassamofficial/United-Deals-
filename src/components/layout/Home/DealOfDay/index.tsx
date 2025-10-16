"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import HomeButton from "@/components/ui/Buttons/HomeButton";
import type { Product } from "@/types/product";
import { API_ENDPOINTS } from "@/constants/api";

export default function DealOfDay() {
  const [products, setProducts] = useState<Product[]>([]);
  const [tick, setTick] = useState<number>(Date.now());

  useEffect(() => {
    // Fetch products from JSON Server
    async function fetchProducts() {
      const res = await fetch(API_ENDPOINTS.PRODUCTS);
      if (res.ok) {
        const data: Product[] = await res.json();
        setProducts(data);
      } else {
        console.error("Failed to fetch products");
      }
    }

    fetchProducts();

    // Tick interval for countdown
    const id = setInterval(() => setTick(Date.now()), 1000);
    return () => clearInterval(id);
  }, []);

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

  // function formatRemainingShort(msRemaining: number) {
  //   if (msRemaining <= 0) return "Ended";
  //   const sec = Math.floor(msRemaining / 1000);
  //   if (sec < 60) return `${sec}s`;
  //   const min = Math.floor(sec / 60);
  //   if (min < 60) return `${min}m`;
  //   const hr = Math.floor(min / 60);
  //   if (hr < 24) return `${hr}h`;
  //   const days = Math.floor(hr / 24);
  //   return `${days}d`;
  // }

  const globalRemaining = Math.max(globalDealsEnd - tick, 0);

  if (!products.length) return <div>Loading...</div>;

  return (
    <section className="max-w-[1363px] px-5 mx-auto mb-[55px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[39px] flex-wrap gap-y-2">
        <h2 className="text-[20px] md:text-[30px] leading-[95%] font-extrabold text-[#232321] uppercase">
          Today’s Deals of the day
        </h2>

        <div className="flex items-center gap-4">
          {/* Deals Timer */}
          <div className="md:flex items-center gap-[15px] hidden">
            <span className="text-[15px] font-semibold text-[#111111]">
              Deals ends in
            </span>
            <div className="flex items-center gap-3 px-4 py-2 rounded-md bg-[#FCBD01]">
              <span className="text-sm font-extrabold text-[#111111]">
                {formatGlobalCountdown(globalRemaining)}
              </span>
            </div>
          </div>

          <HomeButton onClick={() => alert("Clicked VIEW ALL")}>
            VIEW ALL
          </HomeButton>
        </div>
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap gap-[14px] md:justify-between">
        {products
          .filter((product) => product.flashDeal.active)
          .slice(0, 4)
          .map((product) => {
            const total = product.flashDeal.endsInHours * 60 * 60 * 1000;
            const remaining = Math.max(total, 0); // Adjust start time logic if needed
            const percent = Math.max(
              Math.min((remaining / total) * 100, 100),
              0
            );

            const moreThanOneHour = remaining > 1000 * 60 * 60;
            const flashTextColor = moreThanOneHour ? "#397CFF" : "#FF4853";
            const barActiveColor = moreThanOneHour ? "#397CFF" : "#FF4853";
            const barBgColor = moreThanOneHour ? "#CFDFFF" : "#FFD6D8";

            return (
              <div
                key={product.id}
                className="flex flex-col items-stretch w-[318px] bg-transparent"
              >
                {/* Product Image */}
                <div className="relative bg-[#F7F7F8] border-[6px] border-[#FAFAFA] rounded-[18px] w-full overflow-hidden">
                  <div className="absolute left-0 top-0 z-10">
                    <span className="inline-block px-[16px] py-[12px] rounded-tl-[20px] rounded-br-[20px] text-[12px] font-semibold bg-[#FCBD01] text-white">
                      New
                    </span>
                  </div>

                  <div className="w-full rounded-xl flex items-center justify-center h-[305px] p-4 mb-[7px]">
                    <div className="relative w-full h-full">
                      <Image
                        src={product.images[0]}
                        alt={product.title}
                        fill
                        style={{ objectFit: "contain" }}
                        sizes="(max-width: 640px) 80vw, 289px"
                      />
                    </div>
                  </div>
                </div>

                {/* Flash Bar */}
                {product.flashDeal.active && (
                  <div className="mb-[8px]">
                    <div
                      className="flex items-center gap-2 mb-2"
                      style={{ color: flashTextColor }}
                    >
                      <span className="text-[13px] font-semibold">
                        {product.flashDeal.label}
                      </span>
                    </div>

                    <div
                      className="w-full h-2 rounded-full overflow-hidden"
                      style={{ backgroundColor: barBgColor }}
                    >
                      <div
                        className="h-full rounded-full transition-all duration-1000 ease-linear"
                        style={{
                          width: `${percent}%`,
                          backgroundColor: barActiveColor,
                        }}
                      />
                    </div>
                  </div>
                )}

                {/* Text and Button */}
                <div className="mb-[16px] flex flex-col flex-1">
                  <h3 className="font-[Lato] font-bold text-[#000000] mb-3 text-[21.85px]">
                    {product.title}
                  </h3>

                  <div className="flex-1" />

                  <Link key={product.id} href={`/product/${product.slug}`}>
                    <button className="cursor-pointer w-full py-3 rounded-md text-white font-medium flex items-center justify-center gap-2 bg-[#000000] hover:bg-[#1A1A1A] transition-colors">
                      <span>BUY NOW -</span>
                      <span className="font-bold text-[#FFA52F]">
                        ₹{product.price}
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            );
          })}
      </div>
    </section>
  );
}
