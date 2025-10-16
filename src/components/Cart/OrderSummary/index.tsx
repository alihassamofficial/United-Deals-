"use client";

import { useCart } from "@/context/CartContext";

interface OrderSummaryProps {
  onButtonClick?: () => void;
  buttonLabel?: string;
}

export default function OrderSummary({
  onButtonClick,
  buttonLabel = "SHOP NOW",
}: OrderSummaryProps) {
  const { cart, totalPrice } = useCart();

  // Example calculations:
  const shipping = cart.length > 0 ? 50 : 0; // Flat shipping
  const tax = +(totalPrice * 0.05).toFixed(2); // 5% GST
  const discount = +(totalPrice * 0.1).toFixed(2); // 10% discount
  const giftBox = cart.length > 0 ? 20 : 0; // Flat gift box fee

  const total = totalPrice + shipping + tax + giftBox - discount;

  return (
    <div className="w-full md:w-[309px] bg-[#FBFBFB] shadow-[0px_4px_7.7px_0px_#00000026] rounded-[8px] py-[20px] px-[40px]">
      <h3 className="text-[16px] leading-[25px] font-bold mb-3">
        Order Summary
      </h3>

      <div className="space-y-4 text-[14px] leading-[20px] text-[#262626]">
        <div className="flex justify-between">
          <span className="text-[#555555]">Price</span>
          <span>₹{totalPrice.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555555]">Shipping</span>
          <span>₹{shipping.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555555]">Tax</span>
          <span>₹{tax.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555555]">Discount price</span>
          <span className="text-green-600">₹{discount.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="gift"
              defaultChecked
              className="accent-[#1877F2] w-[20px] h-[20px]"
            />
            <label htmlFor="gift" className="text-[#555555]">
              Pack in a Gift Box
            </label>
          </div>
          <span>₹{giftBox.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-base font-semibold pt-3 border-t">
          <span>Total Price</span>
          <span>₹{total.toFixed(2)}</span>
        </div>
      </div>

      <button
        onClick={onButtonClick}
        className="uppercase cursor-pointer mt-[28px] text-[16px] leading-[20px] font-medium w-full bg-[#1877F2] text-white py-[16px] rounded-lg hover:bg-blue-700 transition"
      >
        {buttonLabel}
      </button>
    </div>
  );
}
