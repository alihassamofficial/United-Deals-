"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

interface NavigationHeaderProps {
  onBack?: () => void;
  shareLink?: string;
}

export default function NavigationHeader({
  onBack,
  shareLink = "/",
}: NavigationHeaderProps) {
  const router = useRouter();

  const handleBackClick = () => {
    if (onBack) {
      onBack();
    } else {
      router.push("/"); // Default back to home
    }
  };

  return (
    <div
      className="
        flex items-center justify-between 
        pt-3 pb-2 sm:pt-[18px] sm:pb-[7px]
         sm:px-0
      "
    >
      {/* Back Button */}
      <button
        onClick={handleBackClick}
        className="
          inline-flex items-center gap-2 sm:gap-[15px]
          font-poppins text-black 
          text-[16px] sm:text-[21.39px] font-semibold 
          cursor-pointer
        "
      >
        <div
          className="
            rounded-full border-[2px] border-[#C1C1C1] 
            p-[10px] sm:p-[16.28px] flex items-center justify-center
          "
        >
          <Image
            src="/images/auth/angle-small-left.svg"
            alt="Back"
            width={20}
            height={20}
            className="sm:w-[30px] sm:h-[30px]"
          />
        </div>
        <span>Back</span>
      </button>

      {/* Share Icon */}
      <Link href={shareLink} className="flex items-center">
        <Image
          src="/images/auth/share-icon.svg"
          alt="Share"
          width={22}
          height={22}
          className="sm:w-[30px] sm:h-[30px]"
        />
      </Link>
    </div>
  );
}
