"use client";

import type React from "react";

import { useRef, useState } from "react";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from "swiper/types";
import { FreeMode, Navigation, Thumbs } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/free-mode";
import "swiper/css/thumbs";

type ProductImage = {
  src: string;
  alt: string;
};

interface ProductGalleryProps {
  images: ProductImage[];
}

export function ProductGallery({ images }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full">
      {/* Main preview */}
      <div className="rounded-[3.64px] border-[0.91px] border-[#E4E7E9] p-3">
        <Swiper
          modules={[Thumbs]}
          spaceBetween={16}
          slidesPerView={1}
          style={
            {
              "--swiper-navigation-color": "var(--color-foreground)",
              "--swiper-pagination-color": "var(--color-foreground)",
            } as React.CSSProperties
          }
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)} // ✅ Track active index
          thumbs={{
            swiper:
              thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
          }}
          className="h-auto"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-md">
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  className="object-contain"
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  priority={idx === 0}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Thumbnails with navigation */}
      <div className="relative mt-[21px]">
        <button
          ref={prevRef}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-card/90 px-2 py-2 shadow hover:bg-accent focus-visible:outline-none focus-visible:ring"
        >
          <span className="sr-only">Previous</span>
          {/* simple chevron */}
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="fill-none stroke-foreground"
            strokeWidth="2"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          ref={nextRef}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 rounded-full border bg-card/90 px-2 py-2 shadow hover:bg-accent focus-visible:outline-none focus-visible:ring"
        >
          <span className="sr-only">Next</span>
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            className="fill-none stroke-foreground"
            strokeWidth="2"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>

        <div className="">
          <Swiper
            modules={[Navigation, FreeMode, Thumbs]}
            onSwiper={setThumbsSwiper}
            spaceBetween={7.2}
            slidesPerView={4}
            freeMode
            watchSlidesProgress
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={(swiper) => {
              // @ts-expect-error navigation typing init at runtime
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error navigation typing init at runtime
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              640: { slidesPerView: 5 },
              1024: { slidesPerView: 6 },
            }}
            className="py-2"
          >
            {images.map((img, idx) => (
              <SwiperSlide key={idx}>
                <div
                  className={`relative aspect-square w-full overflow-hidden rounded-[1.82px] border border-[#E4E7E9]
                    ${activeIndex === idx ? "border-[#c32424]" : ""}
                  `}
                >
                  <Image
                    src={img.src || "/placeholder.svg"}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover"
                    sizes="96px"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
