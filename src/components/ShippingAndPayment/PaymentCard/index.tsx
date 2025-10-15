"use client";

import React from "react";
import Image from "next/image";

type PaymentOption = {
  id: string;
  title: string;
  description: string;
  logo: string;
};

interface PaymentCardProps {
  option: PaymentOption;
  selected: boolean;
  onSelect: () => void;
}

export default function PaymentCard({
  option,
  selected,
  onSelect,
}: PaymentCardProps) {
  return (
    <label
      onClick={onSelect}
      className={`block cursor-pointer rounded-[4px] min-h-[132px] border bg-[#F5F5F5] py-[15px] px-[16px] transition-all hover:shadow-sm "}`}
    >
      <div className="flex items-start gap-2">
        <div
          className={`w-5 h-5 rounded-full border flex items-center justify-center mt-1 ${
            selected
              ? "bg-blue-600 border-blue-600"
              : "bg-white border-gray-300"
          }`}
        >
          {selected && (
            <svg className="w-3 h-3 text-white" viewBox="0 0 24 24" fill="none">
              <circle cx="12" cy="12" r="6" fill="currentColor" />
            </svg>
          )}
        </div>

        <div className="flex-1">
          <div className="flex items-center justify-between ">
            <h4 className="font-bold text-[14px] leading-[20px] text-[#262626]">
              {option.title}
            </h4>
            <div className="relative w-16 h-6">
              <Image
                src={option.logo}
                alt={option.title}
                fill
                style={{ objectFit: "contain" }}
              />
            </div>
          </div>
          <p className="text-[12px] leading-[20px] text-[#555555] mt-[14px]">
            {option.description}
          </p>
        </div>
      </div>
    </label>
  );
}
