"use client"; // Mark this as a Client Component

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/swiper-bundle.css"; // Swiper styles

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

const SlideByOne = ({
  options,
  swiperClassName,
  slideBy,
}: ScrollableCardsProps) => {
  return (
    <Swiper
      spaceBetween={30}
      slidesPerView={slideBy}
      loop={true}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        // pauseOnMouseEnter: true,
      }}
      // pagination={{
      //   clickable: true,
      // }}
      // navigation={true}
      modules={[Autoplay]}
      className={swiperClassName || "mySwiper"} // Use dynamic class or fallback to default
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

export default SlideByOne;
