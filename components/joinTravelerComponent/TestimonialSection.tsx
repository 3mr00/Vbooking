"use client";
import TestimonialCard from "./TestimonialCard";
import React, { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    id: 1,
    logoSrc: "/images/trustedby.svg",
    quote:
      'My clients were thrilled with the proposals – the stunning visuals, interactive maps, and engaging videos provided all the information they needed and more. It gave them confidence in their decisions and elevated their booking experience with my company."',
    name: "Ali Shahen",
    title: "Owner and Founder, The Karibu Company",
  },
  {
    id: 2,
    logoSrc: "/images/trustedby.svg",
    quote:
      'TuRbo has revolutionized how we manage group travel and events. The itinerary builder and live booking desk have streamlined our operations, allowing us to create tailored packages in minutes. Our clients are happier, and our team is more productive than ever!"',
    name: "Sarah Johnson",
    title: "Managing Director, Global Destinations",
  },
  {
    id: 3,
    logoSrc: "/images/trustedby.svg",
    quote:
      '"As a small travel agency, TuRbo has been a game-changer. The CRM helps us stay connected with clients, and the AI Agent has significantly improved our response times. Our bookings have increased by 35%, and our clients love the personalized service we now provide."',
    name: "Michael Ramirez",
    title: "Owner, Wanderlust Travel",
  },
  {
    id: 4,
    logoSrc: "/images/trustedby.svg",
    quote:
      "Managing corporate travel used to be overwhelming, but TuRbo's management tools and operations app have made it so much easier. We can now handle complex itineraries with speed and precision, giving us a professional edge that clients value.\"",
    name: "Amanda Lee",
    title: "Travel Manager, Elite Corporate Solutions",
  },
];

const TestimonialSection: React.FC = () => {
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
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                logoSrc={testimonial.logoSrc}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}

            {/* Duplicate cards for seamless loop */}
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                logoSrc={testimonial.logoSrc}
                quote={testimonial.quote}
                name={testimonial.name}
                title={testimonial.title}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
