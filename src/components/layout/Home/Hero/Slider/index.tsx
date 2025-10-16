"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

type Slide = {
  id: number;
  subHeading: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

const slides: Slide[] = [
  {
    id: 1,
    subHeading: "Best Deal Online on smart watches",
    title: "LATEST NIKE SHOES",
    subtitle: "UP TO 80% OFF",
    imageSrc: "/images/home/slider-1.png",
  },
  {
    id: 2,
    subHeading: "Trending this week",
    title: "RUN FASTER, LOOK SHARPER",
    subtitle: "NEW COLORWAYS",
    imageSrc: "/images/home/slider-1.png",
  },
];

const Slider = () => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const swiperRef = useRef<any>(null);

  // Attach navigation refs after mount
  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="relative bg-[#0C59B6] text-[#FFFFFF] rounded-[17.49px] ">
      {/* Vector */}
      <Image
        src="/images/home/yellow-circle.png"
        alt="vector_image"
        width={556}
        height={345}
        className="object-contain absolute right-0"
      />

      {/* Next button */}
      <button
        ref={nextRef}
        className="absolute right-2 sm:right-4 lg:right-0 translate-x-1/2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <div className="flex items-center justify-center w-[54px] h-[54px] md:w-[74px] md:h-[74px] lg:w-[94px] lg:h-[94px] rounded-full bg-[#F3F8FA] border-[4px] md:border-[6px] lg:border-[8.75px] border-white">
          <Image
            src="/images/home/arrow-right.svg"
            alt="Next"
            width={7.65}
            height={15}
            className="text-black"
          />
        </div>
      </button>

      {/* Prev button */}
      <button
        ref={prevRef}
        className="absolute left-2 sm:left-4 lg:left-0 -translate-x-1/2 top-1/2 -translate-y-1/2 z-10 cursor-pointer"
      >
        <div className="flex items-center justify-center w-[54px] h-[54px] md:w-[74px] md:h-[74px] lg:w-[94px] lg:h-[94px] rounded-full bg-[#F3F8FA] border-[4px] md:border-[6px] lg:border-[8.75px] border-white">
          <Image
            src="/images/home/arrow-left.svg"
            alt="Next"
            width={7.65}
            height={15}
            className="text-black"
          />
        </div>
      </button>

      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        loop
      >
        {slides.map((s) => (
          <SwiperSlide key={s.id}>
            <div className="relative">
              <div className="flex flex-col md:flex-row items-center justify-between pl-10 lg:pl-[98px] ">
                {/* Left text area */}
                <div className="max-w-[627px] w-full  py-6 md:py-[42px] text-center md:text-left">
                  <p className="text-xl md:text-2xl lg:text-[32.8px] leading-tight font-medium mb-3 md:mb-[21px]">
                    {s.subHeading}
                  </p>
                  <h2 className="text-3xl md:text-5xl lg:text-[60px] leading-tight md:leading-[68.87px] font-bold mb-3 md:mb-[21px]">
                    {s.title}
                  </h2>
                  <p className="text-xl md:text-2xl lg:text-[32.8px] leading-tight font-medium">
                    {s.subtitle}
                  </p>
                </div>

                {/* Right image area */}
                <div className="max-w-[580px] w-full relative flex justify-center items-center mt-6 md:mt-0">
                  <Image
                    src={s.imageSrc}
                    alt="image"
                    width={590}
                    height={332}
                    className="object-contain w-full h-auto drop-shadow-xl"
                    priority
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider;
