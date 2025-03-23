import React from "react";

interface TestimonialCardProps {
  quote: string;
  clientName: string;
  iconSrc: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  clientName,
  iconSrc,
}) => {
  return (
    <div className="items-stretch bg-white flex min-w-25 flex-col flex-1 shrink basis-[0%] p-6 rounded-2xl max-md:max-w-full max-md:px-5">
      <img
        src={iconSrc}
        alt="Testimonial Icon"
        className="aspect-[1.08] object-contain w-[42px] self-center"
      />
      <p
        className="text-ellipsis font-normal mt-6 text-center"
        style={{
          overflow: "hidden",
          color: "var(--G2, #647087)",
          textOverflow: "ellipsis",
          fontFamily: "Poppins",
          fontSize: "15px",
          fontStyle: "normal",
          fontWeight: 400,
          lineHeight: "21px",
        }}
      >
        {quote}
      </p>
      <div
        className="w-full font-medium mt-2 text-[#667085] text-[12px] 
      "
      >
        {clientName}
      </div>
    </div>
  );
};

export default TestimonialCard;
