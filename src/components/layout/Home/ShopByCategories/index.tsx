"use client";

import Image from "next/image";
import HomeButton from "@/components/ui/Buttons/HomeButton";

interface Category {
  name: string;
  icon: string;
}

const categories: Category[] = [
  { name: "Mobile", icon: "/images/home/categories/mobile.png" },
  { name: "Cosmetics", icon: "/images/home/categories/cosmetics.png" },
  { name: "Electronics", icon: "/images/home/categories/electronics.png" },
  { name: "Furniture", icon: "/images/home/categories/furniture.png" },
  { name: "Watches", icon: "/images/home/categories/watches.png" },
  { name: "Decor", icon: "/images/home/categories/decor.png" },
  { name: "Accessories", icon: "/images/home/categories/accessories.png" },
];

export default function ShopByCategories() {
  return (
    <section className="max-w-[1352px] mx-auto px-5 pb-[45px]">
      {/* Header */}
      <div className="flex items-center justify-between mb-[26px] pb-[27px] border-b border-[#D9D9D9]">
        <h2 className="text-[20px] md:text-[34px] leading-[95%] font-extrabold text-[#232321]">
          SHOP FROM <span className="text-[#FCBD01]">TOP CATEGORIES</span>
        </h2>
        <HomeButton onClick={() => alert("Button clicked!")}>
          VIEW ALL
        </HomeButton>
      </div>

      {/* Categories Wrapper */}
      <div
        className="
          flex md:flex-wrap justify-between
          overflow-x-auto md:overflow-visible
          gap-5 md:gap-[40px]
          no-scrollbar
          scroll-smooth
          pb-3
        "
      >
        {/* Categories */}
        {categories.map((category, i) => (
          <div
            key={i}
            className="
              flex-shrink-0 md:flex-shrink
              flex flex-col items-center justify-center
              min-w-[100px] md:min-w-[145px]
              cursor-pointer group
            "
          >
            {/* Icon Circle */}
            <div
              className="
                relative w-[90px] h-[90px] md:w-[145px] md:h-[145px]
                rounded-full bg-[#F5F5F5]
                flex items-center justify-center
                border border-transparent
                group-hover:border-[#008ECC]
                transition
              "
            >
              <Image
                src={category.icon}
                alt={category.name}
                width={70}
                height={70}
                className="object-contain"
              />
            </div>

            {/* Label */}
            <p className="mt-[14px] md:mt-[22px] text-[15px] md:text-[17.6px] leading-[22px] text-[#222222] font-bold text-center">
              {category.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
