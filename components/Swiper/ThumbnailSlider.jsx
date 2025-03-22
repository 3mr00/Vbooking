"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Thumbs } from "swiper/modules";
import Image from "next/image";
import "swiper/css"; // Basic Swiper styles
import "swiper/css/pagination"; // Pagination styles
import "swiper/css/navigation"; // Navigation styles
import ProductCard from "../Price/Price";
import { useTranslations } from "next-intl";

const ThumbnailSlider = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const t = useTranslations();

  const images = [
    "https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400121361359(3402x3402).webp&w=640&q=75",
    "https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400131987868(3402x3402).webp&w=640&q=75",
    "https://teebalhoor.com/_next/image?url=https%3A%2F%2Fapi.alhoorllc.com%2Fstorage%2Fattachments%2F17324400131716599(3402x3402).webp&w=640&q=75",
    // Add more images as needed
  ];

  const thumbsParams = {
    modules: [Thumbs],
    onSwiper: setThumbsSwiper,
    slideToClickedSlide: true,
    slidesPerView: 6,
    centeredSlides: false,
    spaceBetween: 10,
  };

  return (
    <div className="bg-white">
      <p className="text-xl font-bold p-5 ">{t("HomePage.productName")}</p>
      <Swiper modules={[Thumbs]} thumbs={{ swiper: thumbsSwiper }}>
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="w-full flex justify-center">
              <Image
                src={image}
                alt={`Slide ${index}`}
                width={500}
                height={500}
                className="w-full"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper {...thumbsParams} className=" mt-5 ">
        {images.map((image, index) => (
          <SwiperSlide key={`slide_${index}`} className=" swiper-slide-auto">
            <div className=" relative w-full rounded-md divthumb">
              <Image
                src={image}
                alt={`Thumbnail ${index}`}
                width={90}
                height={90}
                className="rounded-md "
              />

              <div className="activethumb absolute inset-0 flex items-center justify-center bg-black/30 text-white transition-opacity duration-200 opacity-1 rounded-md">
                <svg
                  className="h-5 w-5"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 448 512"
                  fill="currentColor"
                >
                  <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"></path>
                </svg>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThumbnailSlider;
