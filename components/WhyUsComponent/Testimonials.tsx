"use client";
import React, { useEffect, useRef, useState } from "react";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "VBooking revolutionized how we manage bookings—efficiency and customer experience have never been better!.",
      clientName: "Client Name",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/9010481c87e11ac8a0033680aa5037cbbc44a386?placeholderIfAbsent=true",
    },
    {
      quote:
        "From AI-driven automation to seamless integrations, VBooking is the ultimate game-changer for travel businesses.",
      clientName: "Client Name",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/65bcad8786a8a979b191ea713c44f298bac82193?placeholderIfAbsent=true",
    },
    {
      quote:
        "The Metaverse virtual tours took our travel offerings to a whole new level. Our customers love it!",
      clientName: "Client Name",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/5938a8f39612f39f5020192d6cc29078d97d5224?placeholderIfAbsent=true",
    },
    {
      quote:
        "The Metaverse virtual tours took our travel offerings to a whole new level. Our customers love it!",
      clientName: "Client Name",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/5938a8f39612f39f5020192d6cc29078d97d5224?placeholderIfAbsent=true",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const scrollPositionRef = useRef(0);
  const animationRef = useRef<number>();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const SCROLL_SPEED = 1.2;
    const RESET_THRESHOLD = scrollContainer.scrollWidth / 2;
    let lastTimestamp = 0;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) lastTimestamp = timestamp;
      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered && !isDragging) {
        const movement = (SCROLL_SPEED * deltaTime) / 16;
        scrollPositionRef.current += movement;

        if (scrollPositionRef.current >= RESET_THRESHOLD) {
          scrollPositionRef.current = 0;
          lastTimestamp = timestamp;
        }

        scrollContainer.scrollTo({
          left: scrollPositionRef.current,
          behavior: "instant",
        });
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [isDragging, isHovered]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - scrollRef.current!.offsetLeft);
    setScrollLeft(scrollRef.current!.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2.5;
    const newScrollLeft = scrollLeft - walk;
    scrollRef.current!.scrollTo({
      left: newScrollLeft,
      behavior: "instant",
    });
    scrollPositionRef.current = newScrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2.5;
    const newScrollLeft = scrollLeft - walk;
    scrollRef.current!.scrollTo({
      left: newScrollLeft,
      behavior: "instant",
    });
    scrollPositionRef.current = newScrollLeft;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    stopDragging();
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  return (
    <div className="w-full bg-[#d7efef] md:py-8 py-4">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-[16px] md:text-4xl font-medium">
            <span className="text-[#1e4187]">Trusted by</span>{" "}
            <span className="text-[#9c25a0]">Industry Leaders</span>
            </h2>
        </div>
        <div className="relative overflow-hidden">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-hidden cursor-grab active:cursor-grabbing touch-pan-x"
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDragging}
          >
            {/* Original testimonials */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`original-${index}`}
                className="flex-shrink-0"
                style={{ width: "300px" }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  clientName={testimonial.clientName}
                  iconSrc={testimonial.iconSrc}
                />
              </div>
            ))}

            {/* Duplicate testimonials for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <div
                key={`duplicate-${index}`}
                className="flex-shrink-0"
                style={{ width: "300px" }}
              >
                <TestimonialCard
                  quote={testimonial.quote}
                  clientName={testimonial.clientName}
                  iconSrc={testimonial.iconSrc}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
