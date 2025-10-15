import Image from "next/image";

const features = [
  {
    iconSrc: "/images/home/features/package.svg",
    title: "FASTEST DELIVERY",
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
    <section className="max-w-[1360px] px-5 mx-auto pb-10">
      {/* Wrapper */}
      <div
        className="
          border border-[#E4E7E9] rounded-[8px]
          flex flex-col md:flex-row
          items-stretch md:items-center
          justify-between
          overflow-hidden
        "
      >
        {features.map((item, i) => (
          <div
            key={i}
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
            {/* Icon + Text */}
            <div className="flex flex-col md:flex-row items-center md:items-start gap-3">
              <Image
                src={item.iconSrc}
                alt={item.title}
                width={40}
                height={40}
                className="w-10 h-10 md:w-12 md:h-12"
              />
              <div>
                <h4 className="font-public-sans text-[14px] md:text-[15px] font-semibold text-[#191C1F] uppercase">
                  {item.title}
                </h4>
                <p className="font-public-sans text-[13px] md:text-[14px] text-[#5F6C72]">
                  {item.desc}
                </p>
              </div>
            </div>

            {/* Divider */}
            {i !== features.length - 1 && (
              <>
                {/* horizontal divider (mobile) */}
                <div className="block md:hidden w-full h-[1px] bg-[#E4E7E9] mt-4" />
                {/* vertical divider (desktop) */}
                <div className="hidden md:block h-[60px] w-[1px] bg-[#E4E7E9]" />
              </>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
