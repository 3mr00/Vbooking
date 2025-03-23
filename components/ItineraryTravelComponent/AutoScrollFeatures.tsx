"use client";

import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="min-w-[300px] md:min-w-[400px] rounded-[16px] border-[2px] border-[var(--fonts,#BA00AB)] border-[var(--fonts,color(display-p3_0.6118_0.1451_0.6275))] bg-[var(--white,#FFF)] bg-[var(--white,color(display-p3_1_1_1))] shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] shadow-[8px_9px_0px_0px_color(display-p3_0_0_0_/_0.10)] p-6 select-none transition-all">
      <h3 className="pb-4 text-[22px] font-semibold leading-[22px] font-poppins text-[var(--fonts,#AA10A5)] text-[color(display-p3_0.6118_0.1451_0.6275)]">
        {title}
      </h3>
      <p className="text-[16px] font-normal leading-[21px] font-poppins text-[var(--G2,#647087)] text-[color(display-p3_0.4_0.4392_0.5216)]">
        {description}
      </p>
    </div>
  );
};

const AutoScrollFeatures = () => {
  const t = useTranslations("Traveler.autoScroll");
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const scrollPositionRef = useRef(0);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let startTime: number | null = null;
    const scrollSpeed = 1;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      if (isDragging) return;

      scrollPositionRef.current += scrollSpeed;

      if (
        scrollPositionRef.current >=
        scrollContainer.scrollWidth - scrollContainer.clientWidth
      ) {
        scrollPositionRef.current = 0;
      }

      scrollContainer.scrollLeft = scrollPositionRef.current;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId);
    };

    const handleMouseLeave = () => {
      if (!isDragging) {
        startTime = null;
        scrollPositionRef.current = scrollContainer.scrollLeft;
        animationId = requestAnimationFrame(animate);
      }
    };

    scrollContainer.addEventListener("mouseenter", handleMouseEnter);
    scrollContainer.addEventListener("mouseleave", handleMouseLeave);

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

  const features = [
    {
      title: t("features.1.title"),
      description: t("features.1.description"),
    },
    {
      title: t("features.2.title"),
      description: t("features.2.description"),
    },
    {
      title: t("features.3.title"),
      description: t("features.3.description"),
    },
    {
      title: t("features.4.title"),
      description: t("features.4.description"),
    },
  ];

  return (
    <section className=" w-full bg-[#e6f4f7] overflow-hidden">
      <div className="relative">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-hidden w-full cursor-grab active:cursor-grabbing touch-pan-x"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={stopDragging}
          onMouseLeave={stopDragging}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={stopDragging}
        >
          {/* Original cards */}
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}

          {/* Duplicate cards for seamless loop */}
          {features.map((feature, index) => (
            <FeatureCard
              key={`duplicate-${index}`}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AutoScrollFeatures;
