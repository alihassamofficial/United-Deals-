"use client";

import Image from "next/image";

const brands = [
  { name: "ZARA", src: "/images/home/brands/zara.svg" },
  { name: "D&G", src: "/images/home/brands/dg.svg" },
  { name: "H&M", src: "/images/home/brands/hm.svg" },
  { name: "CHANEL", src: "/images/home/brands/chanel.svg" },
  { name: "PRADA", src: "/images/home/brands/prada.svg" },
  { name: "BIBA", src: "/images/home/brands/biba.svg" },
];

export default function ShopByBrands() {
  return (
    <section className="max-w-[1360px] px-5 mx-auto pb-10">
      {/* Title */}
      <h2 className="text-[26px] md:text-[34px] leading-[95%] font-extrabold text-[#232321] mb-6 text-center md:text-left">
        SHOP BY BRANDS
      </h2>

      {/* Brand Scroller (mobile) + Grid (desktop) */}
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
