import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div className="bg-white relative min-w-1/4 flex-1 shrink basis-[0%] rounded-2xl max-sm:mb-4 flex flex-col items-center gap-8 p-[37px_11px_19px] self-stretch">
      <div className="z-0 w-full text-center flex-1 max-md:px-5">
        <div className="flex w-full flex-col">
          <h3 className="text-[#9c25a0] text-center font-poppins text-lg font-semibold">
            {title}
          </h3>
          <p className="text-[#647087] text-center font-poppins text-sm font-normal leading-[18px] mt-2 overflow-hidden text-ellipsis">
            {description}
          </p>
        </div>
      </div>
      <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 w-14 h-14 border border-[#eaecf0] rounded-lg shadow-[0px_2px_4px_0px_rgba(27,28,29,0.04)]">
        <div className="flex justify-center items-center bg-white w-full h-full rounded-lg p-2">
          <img
            src="/images/FeatureIcon.svg"
            alt="Feature Icon"
            className="w-7 h-7 object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
