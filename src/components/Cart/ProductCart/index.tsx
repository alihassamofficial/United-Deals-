"use client";

import Image from "next/image";
import { Trash2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ProductCart() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  if (cart.length === 0)
    return <p className="text-gray-500">Your cart is empty</p>;

  return (
    <div className="w-full">
      <h2 className="text-lg font-semibold mb-4">
        Number of Items <span className="text-gray-400">{cart.length}</span>
      </h2>

      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedColor}-${item.selectedMemory}-${item.selectedStorage}`}
            className="flex flex-col md:flex-row items-center justify-between text-[14px] leading-[20px]"
          >
            <div className="flex flex-1 items-center gap-4 w-full md:w-[292px]">
              <div className="relative h-[72px] w-[60px] rounded-[10.38px] overflow-hidden border-[#D9D9D9]">
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

            <div className="w-full flex flex-1 items-center justify-between">
              <div className="w-[65px] text-[#555555]">
                ₹{item.price.toFixed(2)}
              </div>

              {/* Quantity Control */}
              <div className="flex items-center border border-[#C4C4C4] rounded-[4px] px-[11px] py-[5px]">
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() =>
                    updateQuantity(item.id, Math.max(1, item.quantity - 1))
                  }
                >
                  −
                </button>
                <span className="px-3 text-[14px] leading-[21px]">
                  {item.quantity}
                </span>
                <button
                  className="px-2 py-1 text-gray-600 hover:bg-gray-100"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>

              <div className="w-[65px] text-[#555555]">
                ₹{(item.price * item.quantity).toFixed(2)}
              </div>

              <button
                onClick={() => removeFromCart(item.id)}
                className="text-gray-400 hover:text-red-500"
              >
                <Trash2 size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
