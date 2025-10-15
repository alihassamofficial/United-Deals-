"use client";

type OrderSummaryProps = {
  summary: {
    price: number;
    shipping: number;
    tax: number;
    discount: number;
    giftBox: number;
    total: number;
  };
};

export default function OrderSummary({ summary }: OrderSummaryProps) {
  return (
    <div className="w-full md:w-[309px] bg-[#FBFBFB] shadow-[0px_4px_7.7px_0px_#00000026] rounded-[8px] py-[20px] px-[40px]">
      <h3 className="text-[16px] leading-[25px]  font-bold mb-3">
        Order Summary
      </h3>

      <div className="space-y-4 text-[14px] leading-[20px] text-[#262626]">
        <div className="flex justify-between">
          <span className="text-[#555555]">Price</span>
          <span>₹{summary.price.toFixed(2)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555555]">Shipping</span>
          <span>₹{summary.shipping}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555555]">Tax</span>
          <span>₹{summary.tax}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-[#555555]">Discount price</span>
          <span className="text-green-600">₹{summary.discount.toFixed(2)}</span>
        </div>

        <div className="flex items-center justify-between  ">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="gift"
              defaultChecked
              className="accent-[bg-[#1877F2]] w-[20px] h-[20px]"
            />
            <label htmlFor="gift" className="text-[#555555]">
              Pack in a Gift Box
            </label>
          </div>
          <span>₹{summary.giftBox.toFixed(2)}</span>
        </div>

        <div className="flex justify-between text-base font-semibold pt-3 border-t">
          <span>Total Price</span>
          <span>₹{summary.total.toFixed(2)}</span>
        </div>
      </div>

      <button className="mt-[28px] text-[16px] leading-[20px] font-medium  w-full bg-[#1877F2] text-white py-[16px] rounded-lg hover:bg-blue-700 transition">
        SHOP NOW
      </button>
    </div>
  );
}
