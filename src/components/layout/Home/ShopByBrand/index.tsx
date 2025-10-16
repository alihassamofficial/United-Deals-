"use client";

import Image from "next/image";
import zara from "@/public/images/home/brands/Zara.svg";
import dg from "@/public/images/home/brands/DG.svg";
import hm from "@/public/images/home/brands/HM.svg";
import chanel from "@/public/images/home/brands/chanel.svg";
import prada from "@/public/images/home/brands/prada.svg";
import biba from "@/public/images/home/brands/biba.svg";

const brands = [
  { name: "ZARA", src: zara },
  { name: "D&G", src: dg },
  { name: "H&M", src: hm },
  { name: "CHANEL", src: chanel },
  { name: "PRADA", src: prada },
  { name: "BIBA", src: biba },
];

export default function ShopByBrands() {
  return (
    <section className="max-w-[1360px] px-5 mx-auto pb-10">
      {/* Title */}
      <h2 className="text-[26px] md:text-[34px] leading-[95%] font-extrabold text-[#232321] mb-6 text-center md:text-left">
        SHOP BY BRANDS
      </h2>

      {/* Brand */}
      <div
        className="
          flex md:grid 
          md:grid-cols-6 
          gap-4 md:gap-6 
          overflow-x-auto md:overflow-visible 
          snap-x snap-mandatory 
          scrollbar-hide 
          pb-3
        "
      >
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="
              flex-shrink-0 md:flex-shrink 
              w-[140px] sm:w-[160px] md:w-auto 
              flex items-center justify-center 
              bg-[#F4F4F4] rounded-[16px] 
              aspect-square 
              cursor-pointer 
              snap-center 
              transition-transform duration-200 hover:scale-105
            "
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={109}
              height={46}
              className="object-contain w-[70%] h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
