import Image from "next/image";

export default function Features() {
  return (
    <section className="max-w-[1360px] px-5 mx-auto pb-10">
      <div
        className="
          border border-[#E4E7E9] rounded-[8px]
          flex flex-col md:flex-row
          items-stretch md:items-center
          justify-between
          overflow-hidden
        "
      >
        {/* Feature 1 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            w-full md:w-1/4
            text-center md:text-left
            p-5 md:p-6
            hover:bg-[#F9FAFB]
            transition-colors duration-200
          "
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Image
              src="/images/home/features/package.svg"
              alt="FASTEST DELIVERY"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              <h4 className="font-public-sans text-[14px] md:text-[15px] font-semibold text-[#191C1F] uppercase">
                FASTEST DELIVERY
              </h4>
              <p className="font-public-sans text-[13px] md:text-[14px] text-[#5F6C72]">
                Delivery in 24/H
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="block md:hidden w-full h-[1px] bg-[#E4E7E9] mt-4 " />
        <div className="hidden md:block h-[60px] ml-7 w-[1px] bg-[#E4E7E9]" />
        {/* Feature 2 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            w-full md:w-1/4
            text-center md:text-left
            p-5 md:p-6
            hover:bg-[#F9FAFB]
            transition-colors duration-200
          "
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Image
              src="/images/home/features/trophy.svg"
              alt="24 HOURS RETURN"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              <h4 className="font-public-sans text-[14px] md:text-[15px] font-semibold text-[#191C1F] uppercase">
                24 HOURS RETURN
              </h4>
              <p className="font-public-sans text-[13px] md:text-[14px] text-[#5F6C72]">
                100% money-back guarantee
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="block md:hidden w-full h-[1px] bg-[#E4E7E9] mt-4 " />
        <div className="hidden md:block h-[60px] ml-7 w-[1px] bg-[#E4E7E9]" />
        {/* Feature 3 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            w-full md:w-1/4
            text-center md:text-left
            p-5 md:p-6
            hover:bg-[#F9FAFB]
            transition-colors duration-200
          "
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Image
              src="/images/home/features/creditCard.svg"
              alt="SECURE PAYMENT"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              <h4 className="font-public-sans text-[14px] md:text-[15px] font-semibold text-[#191C1F] uppercase">
                SECURE PAYMENT
              </h4>
              <p className="font-public-sans text-[13px] md:text-[14px] text-[#5F6C72]">
                Your money is safe
              </p>
            </div>
          </div>
        </div>
        {/* Divider */}
        <div className="block md:hidden w-full h-[1px] bg-[#E4E7E9] mt-4 " />
        <div className="hidden md:block h-[60px] ml-7 w-[1px] bg-[#E4E7E9]" />
        {/* Feature 4 */}
        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            w-full md:w-1/4
            text-center md:text-left
            p-5 md:p-6
            hover:bg-[#F9FAFB]
            transition-colors duration-200
          "
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
            <Image
              src="/images/home/features/headphones.svg"
              alt="SUPPORT 24/7"
              width={40}
              height={40}
              className="w-10 h-10 md:w-12 md:h-12"
            />
            <div>
              <h4 className="font-public-sans text-[14px] md:text-[15px] font-semibold text-[#191C1F] uppercase">
                SUPPORT 24/7
              </h4>
              <p className="font-public-sans text-[13px] md:text-[14px] text-[#5F6C72]">
                Live contact/message
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
