"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useCart } from "@/context/CartContext";
import type { Product } from "@/types/product";
import Image from "next/image";

function formatINR(amount: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function ProductDetails({ data }: { data: Product }) {
  const [qty, setQty] = useState(1);
  const [color, setColor] = useState(data.colors?.[0]?.hex || "");
  const [mem, setMem] = useState(data.memory?.[0]?.value || "");
  const [storage, setStorage] = useState(data.storage?.[0]?.value || "");
  const [addedToCart, setAddedToCart] = useState(false);
  // Ensure availability is either "In Stock" or "Out of Stock"
  const availability: "In Stock" | "Out of Stock" =
    data.availability === "In Stock" ? "In Stock" : "Out of Stock";

  const router = useRouter();
  const { cart, addToCart } = useCart();

  useEffect(() => {
    const productExists = cart.some((item) => item.id === data.id);
    setAddedToCart(productExists);
  }, [cart, data.id]);

  const handleAddToCart = () => {
    addToCart({
      ...data,
      quantity: qty,
      selectedColor: color,
      selectedMemory: mem,
      selectedStorage: storage,
    });
    setAddedToCart(true);
  };

  return (
    <section>
      {/* Rating */}
      <div className="flex items-center gap-1 mb-2">
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
        <p className="text-[12.75px] text-gray-600">
          <span className="font-semibold">{data.rating.toFixed(1)} Star</span> (
          {data.reviewsCount.toLocaleString()} feedback)
        </p>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-extrabold mb-3">{data.title}</h1>

      {/* Meta */}
      <div className="grid grid-cols-2 gap-2 text-sm text-gray-500 mb-4">
        <div>
          Sku: <span className="text-black">{data.sku}</span>
        </div>
        <div>
          Availability:{" "}
          <span
            className={cn(
              "font-medium",
              availability === "In Stock" ? "text-green-600" : "text-red-600"
            )}
          >
            {availability}
          </span>
        </div>
        <div>
          Brand: <span className="text-black">{data.brand}</span>
        </div>
        <div>
          Category: <span className="text-black">{data.category}</span>
        </div>
      </div>

      {/* Pricing */}
      <div className="flex items-center gap-2 mb-4">
        <div className="text-green-600 font-extrabold text-xl">
          {formatINR(data.price)}
        </div>
        <div className="line-through text-gray-400">{formatINR(data.mrp)}</div>
        <div className="bg-yellow-400 px-2 py-0.5 font-semibold">
          {data.discountPercent}% OFF
        </div>
      </div>

      {/* Options */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        {/* Colors */}
        {data.colors?.length > 0 && (
          <div>
            <div className="font-bold text-sm mb-1">Color</div>
            <div className="flex gap-2">
              {data.colors.map((c) => (
                <button
                  key={c.value}
                  onClick={() => setColor(c.hex)}
                  className={cn(
                    "w-8 h-8 rounded-full border focus:outline-none",
                    color === c.hex && "ring-2 ring-yellow-500" // ✅ fixed comparison
                  )}
                  style={{ backgroundColor: c.hex }}
                  title={c.name}
                />
              ))}
            </div>
          </div>
        )}

        {/* Storage */}
        {data.storage?.length > 0 && (
          <div>
            <div className="font-bold text-sm mb-1">Storage</div>
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
        )}

        {/* Memory */}
        {data.memory?.length > 0 && (
          <div>
            <div className="font-bold text-sm mb-1">Memory</div>
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
        )}
      </div>

      {/* Quantity + Buttons */}
      <div className="flex gap-3 items-center mb-4 flex-wrap">
        <div className="flex items-center border rounded-full text-sm">
          <button
            onClick={() => setQty((q) => Math.max(1, q - 1))}
            className="px-3 py-1"
          >
            –
          </button>
          <div className="px-3">{qty}</div>
          <button onClick={() => setQty((q) => q + 1)} className="px-3 py-1">
            +
          </button>
        </div>

        <Button size="lg" className="rounded-full px-6">
          <div className="relative w-[21px] h-[21px]">
            <Image
              src={`/images/product/Local offer.svg`}
              alt="offer"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
          GET DEAL ({formatINR(data.price)})
        </Button>

        {addedToCart ? (
          <Button
            size="lg"
            variant="default"
            className="rounded-full px-6 bg-transparent hover:bg-[white] hover:white border border-[#1877F2] text-[#1877F2] cursor-pointer text-[14px] font-bold"
            onClick={() => router.push("/cart")}
          >
            <div className="relative w-[21px] h-[21px]">
              <Image
                src={`/images/product/ShoppingCart.svg`}
                alt="cart"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            VIEW CART
          </Button>
        ) : (
          <Button
            size="lg"
            variant="secondary"
            className="rounded-full border border-[#1877F2] text-[14px] font-bold text-[#1877F2] px-6 cursor-pointer"
            onClick={handleAddToCart}
          >
            <div className="relative w-[21px] h-[21px]">
              <Image
                src={`/images/product/ShoppingCart.svg`}
                alt="cart"
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
            ADD
          </Button>
        )}
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
