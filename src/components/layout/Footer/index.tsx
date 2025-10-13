import Image from "next/image";
import Link from "next/link";
import React from "react";

const topCategories = [
  "Computer & Laptop",
  "SmartPhone",
  "Headphone",
  "Accessories",
  "Camera & Photo",
  "TV & Homes",
];

const quickLinks = [
  "Shop Product",
  "Shopping Cart",
  "Wishlist",
  "Compare",
  "Track Order",
  "Customer Help",
  "About Us",
];

const popularTags = [
  "Game",
  "iPhone",
  "TV",
  "Asus Laptops",
  "Macbook",
  "SSD",
  "Graphics Card",
  "Power Bank",
  "Smart TV",
  "Speaker",
  "Tablet",
  "Microwave",
  "Samsung",
];

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#191C1F] font-public-sans">
      <div className="max-w-[1240px] mx-auto px-5 py-12">
        <div className="flex flex-col lg:flex-row gap-10">
          {/* Brand & Contact */}
          <div className="flex-1 min-w-[234px]">
            {/* Logo */}
            <Link href="/">
              <Image
                src="/images/footer/logo.svg"
                width={198}
                height={36}
                alt="logo"
                className="mb-[18px]"
              />
            </Link>

            <div className="text-[10.15px] leading-[15px] text-[#77878F]">
              <div className="mb-[3px]">Customer Supports:</div>
              <div className="text-[13.5px] leading-[18px] font-semibold text-white mb-[9px]">
                (629) 555-0129
              </div>
              <div className="text-[12px] leading-[18px]">
                4517 Washington Ave.
                <br />
                Manchester, Kentucky 39495
              </div>
              <div className="text-[12px] leading-[18px] text-white mt-[9px]">
                info@kinbo.com
              </div>
            </div>
          </div>

          {/* Top Category */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-[12px] leading-[18px] text-white font-medium mb-[13.5px] uppercase">
              TOP CATEGORY
            </h4>
            <ul className="space-y-[9px] text-[10.5px] leading-[15px] font-medium text-[#929FA5]">
              {topCategories.map((c) => (
                <li key={c} className="hover:text-white">
                  <Link href="#">{c}</Link>
                </li>
              ))}
            </ul>
            <div className="mt-[9px] text-[10.5px] leading-[15px] text-[#EBC80C] font-medium flex items-center gap-[4px]">
              <span>Browse All Product</span>
              <Image
                src="/images/footer/arrowright.svg"
                width={15}
                height={15}
                alt="arrow right"
                className="inline-block"
              />
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex-1 min-w-[150px]">
            <h4 className="text-[12px] leading-[18px] text-white font-medium mb-[13.5px] uppercase">
              QUICK LINKS
            </h4>
            <ul className="space-y-[9px] text-[10.5px] leading-[15px] font-medium text-[#929FA5]">
              {quickLinks.map((q) => (
                <li key={q} className="hover:text-white">
                  <Link href="#">{q}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Download App */}
          <div className="min-w-[150px] flex-1">
            <h4 className="text-[12px] leading-[18px] text-white font-medium mb-[13.5px] uppercase">
              DOWNLOAD APP
            </h4>
            <div className="flex flex-col gap-[9px]">
              <Link href="#">
                <div className="max-w-[132px] flex items-center gap-[12px] bg-[#303639] px-[15px] py-[12px] rounded-[2.2px] hover:opacity-90">
                  <div className="w-[24px] h-[24px] relative flex-shrink-0">
                    <Image
                      src="/images/footer/google-play.svg"
                      alt="Google Play"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="text-white">
                    <div className="text-[8.25px] leading-[9.75px] ">
                      Get it now
                    </div>
                    <div className="text-[10.5px] leading-[15px]">
                      Google Play
                    </div>
                  </div>
                </div>
              </Link>

              <Link href="#">
                <div className="max-w-[132px] flex items-center gap-[12px] bg-[#303639] px-[15px] py-[12px] rounded-[2.2px] hover:opacity-90">
                  <div className="w-[24px] h-[24px] relative flex-shrink-0">
                    <Image
                      src="/images/footer/apple-store.svg"
                      alt="App Store"
                      layout="fill"
                      objectFit="contain"
                    />
                  </div>
                  <div className="text-white">
                    <div className="text-[8.25px] leading-[9.75px] ">
                      Get it now
                    </div>
                    <div className="text-[10.5px] leading-[15px]">
                      App Store
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          {/* Popular Tag */}
          <div className="flex-1 min-w-[240px]">
            <h4 className="text-[12px] leading-[18px] text-white font-medium mb-[13.5px] uppercase">
              POPULAR TAG
            </h4>
            <div className="flex flex-wrap gap-[6px]">
              {popularTags.map((t) => (
                <Link key={t} href="#">
                  <div className="text-[10.5px] leading-[15px] font-medium text-white  border-[#303639] hover:border-[#FFFFFF]  border-[0.75px] rounded-[1.5px] px-[9px] py-[4.5px] hover:bg-[#303639]">
                    {t}
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
