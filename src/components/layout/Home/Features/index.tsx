import Image from "next/image";

const features = [
  {
    iconSrc: "/images/home/features/package.svg",
    title: "FASTED DELIVERY",
    desc: "Delivery in 24/H",
  },
  {
    iconSrc: "/images/home/features/trophy.svg",
    title: "24 HOURS RETURN",
    desc: "100% money-back guarantee",
  },
  {
    iconSrc: "/images/home/features/creditCard.svg",
    title: "SECURE PAYMENT",
    desc: "Your money is safe",
  },
  {
    iconSrc: "/images/home/features/headphones.svg",
    title: "SUPPORT 24/7",
    desc: "Live contact/message",
  },
];

export default function Features() {
  return (
    <section className="max-w-[1360px] px-5 mx-auto pb-[36px]">
      {/* feature cards - wrapper */}
      <div className="border border-[#E4E7E9] rounded-[6px] flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:p-6">
        {features.map((item, i) => (
          <div
            key={i}
            className="flex flex-col md:flex-row items-center w-full md:w-auto"
          >
            {/* feature card */}
            <div className="flex items-center p-4 w-full md:w-[280px]">
              <Image src={item.iconSrc} alt="icon" width={40} height={40} />
              <div className="ml-[16px]">
                <h4 className="font-public-sans text-[14px] font-medium leading-[20px] text-[#191C1F] uppercase">
                  {item.title}
                </h4>
                <p className="font-public-sans text-[14px] leading-[20px] text-[#5F6C72]">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* responsive divider */}
            {i !== features.length - 1 && (
              <>
                {/* horizontal on mobile */}
                <div className="block md:hidden h-[1px] w-full bg-[#E4E7E9]" />
                {/* vertical on desktop */}
                <div className="hidden md:block h-[56px] w-[1px] bg-[#E4E7E9]" />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
