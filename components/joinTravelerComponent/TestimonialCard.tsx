import React from "react";
import { Card } from "@/components/ui/card";

interface TestimonialCardProps {
  logoSrc: string;
  quote: string;
  name: string;
  title: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  logoSrc,
  quote,
  name,
  title,
}) => {
  return (
    <Card className="flex-shrink-0 w-[300px] sm:w-[350px] md:w-[400px] lg:w-[450px] py-3 sm:py-4 md:py-5 px-4 sm:px-5 md:px-6 flex flex-col items-center gap-4 sm:gap-5 md:gap-6 bg-white rounded-2xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 mx-4">
      <img
        src={logoSrc}
        alt="Company logo"
        className="aspect-[1.08] object-contain w-[25px] sm:w-[28px] md:w-[30px]"
      />
      <blockquote className="text-[#667085] font-normal leading-[1.6] sm:leading-[1.7] md:leading-[1.8] text-center text-[12px] sm:text-[13px] md:text-[14px]">
        {quote}
      </blockquote>
      <footer className="flex flex-col items-center justify-center">
        <cite className="text-[11px] sm:text-[12px] md:text-[13px] font-medium text-[#667085] not-italic">
          {name}
        </cite>
        <div className="text-[11px] sm:text-[12px] md:text-[13px] font-normal text-[#667085] mt-1 text-center">
          {title}
        </div>
      </footer>
    </Card>
  );
};

export default TestimonialCard;
