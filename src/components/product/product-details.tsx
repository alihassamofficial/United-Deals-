"use client";

import Image from "next/image";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";

import { cn } from "@/lib/utils";

type Option = { label: string; value: string };
type ColorOption = { name: string; value: string; hex: string };

export interface ProductDetailsData {
  title: string;
  sku: string;
  availability: "In Stock" | "Out of Stock";
  brand: string;
  category: string;
  rating: number;
  reviewsCount: number;
  price: number;
  mrp: number;
  discountPercent: number;
  colors: ColorOption[];
  sizes: Option[];
  memory: Option[];
  storage: Option[];
}

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ProductDetails({ data }: { data: ProductDetailsData }) {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(data.colors[0]?.value);
  const [size, setSize] = useState(data.sizes[0]?.value);
  const [mem, setMem] = useState(data.memory[0]?.value);
  const [storage, setStorage] = useState(data.storage[0]?.value);

  const youSave = data.mrp - data.price;

  return (
    <section>
      {/* Rating */}
      <div className="flex items-center gap-[5.46px] mb-[7px]">
        {/* stars */}
        <div className="flex items-center">
          {Array.from({ length: 5 }).map((_, i) => {
            const filled = i < Math.round(data.rating);
            return (
              <svg
                key={i}
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className={cn(
                  "mr-0.5",
                  filled
                    ? "fill-foreground"
                    : "fill-transparent stroke-foreground/40"
                )}
                strokeWidth="1.5"
                aria-hidden="true"
              >
                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
              </svg>
            );
          })}
        </div>
        {/* rating & reviews */}
        <p className="text-[12.75px] font-public-sans  leading-[18.21px] text-[#191C1F]">
          <span className="font-semibold">
            {data.rating.toFixed(1)} Star Rating
          </span>{" "}
          <span className=" text-[#5F6C72]">
            ({data.reviewsCount.toLocaleString()} user feedback)
          </span>
        </p>
      </div>

      {/* Title */}
      <h1
        id="product-title"
        className="text-[#191C1F] text-[23px] leading-none font-extrabold mb-[14.5px]"
      >
        {data.title}
      </h1>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-[7px] text-[12.75px] leading-[18.21px] font-public-sans mb-[16.8px] ">
        {/* sku */}
        <div className="text-[#5F6C72]">
          Sku: <span className="text-[#191C1F]">{data.sku}</span>
        </div>
        {/* Available */}
        <div className="text-[#5F6C72]">
          Availability:{" "}
          <span
            className={cn(
              "font-medium text-[#191C1F]",
              data.availability === "In Stock"
                ? "text-foreground"
                : "text-[#5F6C72]"
            )}
          >
            {data.availability}
          </span>
        </div>
        {/* brand */}
        <div className="text-[#5F6C72]">
          Brand: <span className="text-[#191C1F]">{data.brand}</span>
        </div>
        {/* category */}
        <div className="text-[#5F6C72]">
          Category: <span className="text-[#191C1F]">{data.category}</span>
        </div>
      </div>

      {/* Pricing  */}
      <div className="flex items-center gap-[3px]">
        {/* discounted price */}
        <div className="text-[21.85px] leading-[29.14px] text-[#2EB100] font-extrabold">
          {formatINR(data.price)}
        </div>
        {/* old price */}
        <div className="text-[#77878F] text-[16.39px] leading-[21.85px] font-public-sans line-through">
          {formatINR(data.mrp)}
        </div>
        {/* discounted badge */}
        <div className="ml-[10px] bg-[#EFD33D] text-[#191C1F] text-[12.75px] leading-[18.21px] font-semibold py-[4.5px] px-[9px] font-public-sans">
          {data.discountPercent}% OFF
        </div>
      </div>
      <p className="text-[#77878F] text-[15.64px] leading-[19.55px] my-[6px]">
        or
      </p>
      <div className=" text-[15px] leading-[19px] font-extrabold mb-[22px]">
        Get it for{" "}
        <span className="text-[#2EB100]">
          {formatINR(data.price - youSave)}
        </span>
      </div>

      {/* divider */}
      <div className="w-full h-[1px] bg-[#E4E7E9]" />

      {/* Options */}
      <div className="space-y-4 mt-[11px] mb-[32.8px]">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {/* Colors */}
          <div className="space-y-[7px]">
            <div className="text-sm font-bold">Color</div>
            <div className="flex flex-wrap gap-3">
              {data.colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.value)}
                  className={cn(
                    "relative h-8 w-8 rounded-full border ring-offset-background focus-visible:outline-none focus-visible:ring",
                    color === c.value && "ring-2 ring-[#FCBD01]"
                  )}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>

          {/* Size */}
          <div className="space-y-[7px]">
            <div className="text-sm font-bold">Size</div>
            <Select value={size} onValueChange={setSize}>
              <SelectTrigger className="w-full rounded-none">
                <SelectValue placeholder="Choose size" />
              </SelectTrigger>
              <SelectContent>
                {data.sizes.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Storage */}
          <div className="space-y-[7px]">
            <div className="text-sm font-bold">Storage</div>
            <Select value={storage} onValueChange={setStorage}>
              <SelectTrigger className="w-full rounded-none">
                <SelectValue placeholder="Choose storage" />
              </SelectTrigger>
              <SelectContent>
                {data.storage.map((s) => (
                  <SelectItem key={s.value} value={s.value}>
                    {s.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Memory */}
          <div className="space-y-[7px]">
            <div className="text-sm font-bold">Memory</div>
            <Select value={mem} onValueChange={setMem}>
              <SelectTrigger className="w-full rounded-none">
                <SelectValue placeholder="Choose memory" />
              </SelectTrigger>
              <SelectContent>
                {data.memory.map((m) => (
                  <SelectItem key={m.value} value={m.value}>
                    {m.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>

      {/* Quantity + CTAs */}
      <div className="flex flex-wrap items-center gap-3 mb-[22px]">
        <div className="flex items-center rounded-[50px] text-[#475156] text-[14px] leading-[18px] font-semibold  border">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-2  cursor-pointer"
            aria-label="Decrease quantity"
          >
            –
          </button>
          <div className="min-w-10 text-center">{qty}</div>
          <button
            onClick={() => setQty((q) => q + 1)}
            className="px-3 py-2 cursor-pointer"
            aria-label="Increase quantity"
          >
            +
          </button>
        </div>

        <Button size="lg" className="rounded-full px-6">
          GET DEAL ({formatINR(90000)})
        </Button>
        <Button size="lg" variant="secondary" className="rounded-full px-6">
          ADD
        </Button>
      </div>

      {/* Utilities */}
      <div className="flex flex-wrap justify-between items-center gap-6 mb-[29px]">
        <div>
          <button className="inline-flex items-center gap-[2px] text-[#475156] text-[12.75px] leading-[18.21px]  hover:text-foreground cursor-pointer mr-[22px]">
            <Image
              src="/images/product/Heart.svg"
              alt="wishlit"
              width={21}
              height={21}
            />
            <span>Add to Wishlist</span>
          </button>
          <button className="inline-flex items-center gap-[2px] text-[#475156] text-[12.75px] leading-[18.21px]  hover:text-foreground cursor-pointer">
            <Image
              src="/images/product/ArrowsClockwise.svg"
              alt="wishlit"
              width={21}
              height={21}
            />
            <span>Add to Compare</span>
          </button>
        </div>
        <div className="flex items-center gap-2">
          <span>Share Product:</span>
          <span className="inline-flex items-center gap-[10px]">
            {" "}
            <Image
              src="/images/product/Copy.svg"
              alt="wishlit"
              width={21}
              height={21}
            />
            <Image
              src="/images/product/Facebook.svg"
              alt="wishlit"
              width={21}
              height={21}
            />
            <Image
              src="/images/product/Twitter.svg"
              alt="wishlit"
              width={21}
              height={21}
            />
            <Image
              src="/images/product/Pinterest.svg"
              alt="wishlit"
              width={21}
              height={21}
            />
          </span>
        </div>
      </div>

      {/* Safe checkout */}
      <div className="border boredr-[#E4E7E9] p-[18px]">
        <div className="text-[#191C1F] text-[12px] leading-[18px] font-public-sans mb-[10px]">
          100% Guarantee Safe Checkout
        </div>
        <Image
          src="/images/product/PaymentMethod.svg"
          alt="wishlit"
          width={284}
          height={16}
        />
      </div>
    </section>
  );
}
