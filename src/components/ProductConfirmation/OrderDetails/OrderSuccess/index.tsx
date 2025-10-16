"use client";

import Image from "next/image";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <section className="max-w-[1240px] mx-auto px-5 w-full overflow-hidden py-4 md:py-0">
      <div className="flex flex-col-reverse md:flex-row items-center justify-center">
        {/* Illustration */}
        <div className="relative w-full md:w-1/2 flex justify-center mb-8 ">
          <div className="relative aspect-square">
            <Image
              src="/images/order-success.svg"
              alt="Order placed illustration"
              width={600}
              height={600}
              className="w-full h-auto object-contain"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="w-full md:w-1/2 text-center ">
          <div className="flex items-center justify-center  mb-[33px]">
            <Image
              src="/images/CheckCircle.svg"
              alt="Order placed illustration"
              width={91}
              height={91}
              priority
            />
          </div>

          <h1 className="text-2xl md:text-[33.3px] leading-[44.41px] font-extrabold text-[#191C1F]  mb-[16px]">
            Your order is successfully placed
          </h1>

          <p className="text-[19.43px] leading-[27px] text-[#5F6C72] mb-[43px] text-sm">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum
            risus. Donec volutpat mollis nulla non facilisis.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center ">
            <Link
              href="/"
              className="cursor-pointer flex items-center justify-center tracking-[1.2%] gap-[11px] w-[298px] h-[67px]  border-[2.7px] border-[#1877F2] text-[#1877F2] font-bold rounded-[2.78px] text-sm md:text-[19.43px] leading-[66.61px] "
            >
              <Image
                src="/images/Stack.svg"
                alt="dashboard"
                width={27}
                height={27}
                priority
              />
              Go to Dashboard
            </Link>

            <Link
              href="/"
              className="cursor-pointer flex items-center justify-center tracking-[1.2%] gap-[11px] w-[231px] h-[67px] bg-[#1877F2] border-[2.7px]  font-bold rounded-[2.78px] text-sm md:text-[19.43px] leading-[66.61px] text-white"
            >
              View Order
              <Image
                src="/images/ArrowRight.svg"
                alt="dashboard"
                width={27}
                height={27}
                priority
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
