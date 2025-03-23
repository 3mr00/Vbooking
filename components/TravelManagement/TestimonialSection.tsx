"use client";
import TestimonialCard from "./TestimonialCard";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const TestimonialSection: React.FC = () => {
  const t = useTranslations("TravelManagementPage");

  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    const scrollSpeed = 0.5;
    let lastTimestamp: number;
    let isHovered = false;

    const animate = (timestamp: number) => {
      if (!lastTimestamp) {
        lastTimestamp = timestamp;
      }

      const deltaTime = timestamp - lastTimestamp;
      lastTimestamp = timestamp;

      if (!isHovered && !isDragging) {
        scrollPositionRef.current += (scrollSpeed * deltaTime) / 16;

        if (
          scrollPositionRef.current >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollPositionRef.current = 0;
        }

        scrollContainer.scrollLeft = Math.floor(scrollPositionRef.current);
      }

      animationId = requestAnimationFrame(animate);
    };

    const handleMouseEnter = () => {
      isHovered = true;
      lastTimestamp = 0;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    const handleMouseLeave = () => {
      isHovered = false;
      lastTimestamp = 0;
      scrollPositionRef.current = scrollContainer.scrollLeft;
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter);
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [isDragging]);

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
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    scrollRef.current!.scrollLeft = newScrollLeft;
    scrollPositionRef.current = newScrollLeft;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX - scrollRef.current!.offsetLeft;
    const walk = (x - startX) * 2;
    const newScrollLeft = scrollLeft - walk;
    scrollRef.current!.scrollLeft = newScrollLeft;
    scrollPositionRef.current = newScrollLeft;
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  return (
    <section
      className="w-full"
      style={{ backgroundColor: "rgb(215, 239, 241)" }}
    >
      <div className="">
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-8 overflow-x-hidden w-full cursor-grab active:cursor-grabbing touch-pan-x scroll-smooth"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={stopDragging}
            onMouseLeave={stopDragging}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={stopDragging}
          >
            {/* Original cards */}
            {[1, 2, 3, 4].map((num) => (
              <TestimonialCard
                key={num}
                logoSrc={t(`testimonials.${num}.logoSrc`)}
                quote={t(`testimonials.${num}.quote`)}
                name={t(`testimonials.${num}.name`)}
                title={t(`testimonials.${num}.title`)}
              />
            ))}

            {/* Duplicate cards for seamless loop */}
            {[1, 2, 3, 4].map((num) => (
              <TestimonialCard
                key={num}
                logoSrc={t(`testimonials.${num}.logoSrc`)}
                quote={t(`testimonials.${num}.quote`)}
                name={t(`testimonials.${num}.name`)}
                title={t(`testimonials.${num}.title`)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
