import React from "react";

interface FeatureCardProps {
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description }) => {
  return (
    <div
      className="bg-white relative min-w-1/4 flex-1 shrink basis-[0%] rounded-2xl max-sm:mb-4"
      style={{
      display: "flex",
      padding: "37px 11px 19px;",
      flexDirection: "column",
      alignItems: "center",
      gap: "32px",
      flex: "1 0 0",
      alignSelf: "stretch",
      }}
    >
      <div className="z-0 w-full text-center flex-1 max-md:px-5">
        <div className="flex w-full flex-col">
          <h3
            className="text-[#9c25a0] text-2xl font-semibold"
            style={{
              color: "var(--fonts, color(display-p3 0.6118 0.1451 0.6275))",
              textAlign: "center",
              fontFamily: "Poppins",
              fontSize: "18px",
              fontStyle: "normal",
              fontWeight: 600,
              lineHeight: "normal",
            }}
          >
            {title}
          </h3>
          <p
            className="text-[#667085] text-ellipsis text-lg font-normal leading-[27px] mt-2"
            style={{
              overflow: "hidden",
              color: "var(--G2, #647087)",
              textAlign: "center",
              textOverflow: "ellipsis",
              fontFamily: "Poppins",
              fontSize: "14px",
              fontStyle: "normal",
              fontWeight: 400,
              lineHeight: "18px",
            }}
          >
            {description}
          </p>
        </div>
      </div>
      <div className="items-center border-[#eaecf0] shadow-[0px_2px_4px_0px_rgba(27,28,29,0.04)] absolute w-[56px] h-[56px] -translate-x-2/4 -translate-y-2/4 rounded-lg border-[1px] border-solid left-[50%] top-[0%]">
        <div className="justify-center items-center bg-white self-stretch flex min-h-14 w-14 h-14 my-auto px-2 rounded-lg">
          <img
            src="/images/FeatureIcon.svg"
            alt="Feature Icon"
            className="aspect-[1] object-contain w-7 self-stretch my-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default FeatureCard;
