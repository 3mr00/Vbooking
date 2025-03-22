"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
// Define the type for the card options
type CardOption = {
  id: string | number; // Unique identifier for each card
  content: React.ReactNode | ((item: CardOption) => React.ReactNode); // Dynamic card content
};

// Define the props for the ScrollableCards component
type ScrollableCardsProps = {
  options: CardOption[];
  slideBy?: number; // Dynamic class for the Swiper container
  swiperClassName?: string; // Dynamic class for the Swiper container
};
const InfiniteSlide = ({
  options,
  slideBy,
  swiperClassName,
}: ScrollableCardsProps) => {
  return (
    <Swiper
      className={`infinite-slide-swiper text-white  ${swiperClassName || ""}`} // Use dynamic class or fallback to default
      modules={[Autoplay]}
      centeredSlides={true} // Keep slides centered
      spaceBetween={1} // Adjust spacing between slides
      slidesPerView={slideBy}
      loop={true}
      autoplay={{
        delay: 1,
        disableOnInteraction: false,
        pauseOnMouseEnter: false,
      }}
      speed={3000}
    >
      {options.map((item) => (
        <SwiperSlide key={item.id}>
          {typeof item.content === "function"
            ? item.content(item)
            : item.content}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default InfiniteSlide;
