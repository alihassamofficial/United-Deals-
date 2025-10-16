"use client";

import Image from "next/image";
import { useCheckout } from "@/context/CheckoutContext";
import { useCart } from "@/context/CartContext";

export default function OrderDetails() {
  const { cart } = useCart();
  const { selectedPayment, selectedShipping, customerInfo } = useCheckout();

  return (
    <div className="w-full bg-[#F5F5F5] p-6">
      <h2 className="text-[14px] leading-[20px] mb-3">Shopping items</h2>
      {/* 🛍️ Cart Items */}
      <div className="space-y-6 border-b pb-5">
        {cart.length === 0 ? (
          <p className="text-sm text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="flex flex-col md:flex-row items-center justify-between text-[14px] leading-[20px]"
            >
              {/* Product Info */}
              <div className="flex flex-1 items-center gap-4 w-full md:w-[292px]">
                <div className="relative h-[72px] w-[60px] rounded-[10.38px] overflow-hidden border border-[#D9D9D9]">
                  <Image
                    src={item.images[0]}
                    alt={item.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-[#262626]">{item.title}</h3>
                  {item.selectedColor && (
                    <p className="text-[#555555] flex items-center gap-1">
                      Color:
                      <span
                        className="inline-block h-3 w-3 rounded-full border"
                        style={{ backgroundColor: item.selectedColor }}
                      ></span>
                    </p>
                  )}
                </div>
              </div>

              {/* Price & Total */}
              <div className="w-full flex flex-1 items-center justify-between mt-3 md:mt-0">
                <div className="w-[65px] text-[#555555]">
                  ₹{item.price.toFixed(2)}
                </div>
                <div className="w-[65px] text-[#555555]">
                  ₹{(item.price * item.quantity).toFixed(2)}
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* 💳 Payment Method */}
      {selectedPayment && (
        <div className="flex-1 py-5 border-b">
          <h2 className="text-[14px] leading-[20px] text-[#555555] mb-1">
            Payment Method
          </h2>
          <div className="flex items-center justify-between">
            <p className="font-bold text-[14px] leading-[20px] text-[#262626]">
              {selectedPayment.title}
            </p>
            <div className="relative w-16 h-6">
              <Image
                src={`/images/${selectedPayment.id}-logo.svg`}
                alt={selectedPayment.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 🚚 Shipping Method */}
      {selectedShipping && (
        <div className="flex-1 py-5 border-b">
          <h2 className="text-[14px] leading-[20px] text-[#555555] mb-1">
            Shipping Company
          </h2>
          <div className="flex items-center justify-between">
            <p className="font-bold text-[14px] leading-[20px] text-[#262626]">
              {selectedShipping.title}
            </p>
            <div className="relative w-16 h-6">
              <Image
                src={`/images/${selectedShipping.id}-logo.svg`}
                alt={selectedShipping.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
        </div>
      )}

      {/* 👤 Customer Info */}
      <div className="flex-1 pb-5 border-b">
        <h2 className="text-[14px] leading-[20px] text-[#555555] mb-1">
          Customer Information
        </h2>

        <div className="flex items-center justify-between">
          <p className="font-bold text-[#555555]">Name</p>
          <p className="text-[#262626]">
            {customerInfo.firstName} {customerInfo.lastName}
          </p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#555555]">Country</p>
          <p className="text-[#262626]">{customerInfo.country}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#555555]">Address</p>
          <p className="text-[#262626]">{customerInfo.address}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="font-bold text-[#555555]">Phone</p>
          <p className="text-[#262626]">{customerInfo.phone}</p>
        </div>
      </div>
    </div>
  );
}
