import React from "react";
import FeatureCard from "../ui/FeatureCard";

const Advantages = () => {
  const features = [
    {
      title: "Seamless Automation & AI-Powered Tools",
      description:
        "Save time with intelligent booking solutions and real-time customer engagement.",
    },
    {
      title: "All-in-One Travel Technology",
      description:
        "From reservations and CRM to Metaverse virtual tours, everything you need in one powerful platform.",
    },
    {
      title: "Global Reach, Local Expertise",
      description:
        "Multi-language, multi-currency, and a network of 16,500+ travel agencies worldwide.",
    },
    {
      title: "Scalable & Customizable Solutions",
      description:
        "Grow your business with flexible tools that adapt to your needs.",
    },
  ];

  return (
    <div
      className="flex w-full flex-col overflow-hidden items-stretch py-10"
      style={{
        background: "linear-gradient(180deg, #F6FCFC 0%, #D1F0F2 100%)",
      }}
    >
      <div className="flex w-full flex-col text-4xl text-[#1e4187] font-medium text-center">
        <h2 className="bg-clip-text bg-[linear-gradient(180deg,#2249a_0%,#1c3d80_100%)]">
          The VBooking <span className="text-[#9c25a0]">Advantage</span>
        </h2>
      </div>

      <div className="flex w-full items-stretch gap-6 flex-wrap mt-10">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>

      <button
        className="self-center shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] bg-[#9c25a0] text-lg text-white font-medium tracking-[0.1px] leading-none rounded-[100px] mt-10 px-5 py-3"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "12px",
        }}
      >
        Get Started Today
      </button>
    </div>
  );
};

export default Advantages;
