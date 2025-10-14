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
    <section className="max-w-[1360px] px-5 mx-auto pb-[28px]">
      {/* Title */}
      <h2 className="text-[34px] leading-[95%] font-extrabold text-[#232321] mb-[28px]">
        SHOP BY BRANDS
      </h2>

      {/* Brands Cards */}
      <div className="flex flex-wrap justify-center md:justify-between gap-[62px]">
        {brands.map((brand) => (
          <div
            key={brand.name}
            className="flex items-center justify-center bg-[#F4F4F4] rounded-[16px] cursor-pointer w-[168px] h-[168px]"
          >
            <Image
              src={brand.src}
              alt={brand.name}
              width={109}
              height={46}
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
