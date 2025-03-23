import React from "react";
import { CustomContainer } from "@/Wrapper/CustomContainer";

const TechnologySection = () => {
  const technologies = [
    {
      title: "Turbo Booking Engine",
      description:
        "Real-time availability, dynamic pricing, and seamless API integration.",
    },
    {
      title: "AI Travel Assistant",
      description:
        "Engage customers with personalized recommendations and instant support.",
    },
    {
      title: "Advanced Travel CRM",
      description:
        "Manage leads, automate follow-ups, and track performance effortlessly.",
    },
    {
      title: "Metaverse Virtual Tours",
      description: "Immerse customers in interactive 3D destination previews.",
    },
    {
      title: "Live Booking Desk & Dynamic Quotations",
      description: "Convert leads into bookings faster with real-time offers.",
    },
    {
      title: "Integrated Business Intelligence",
      description:
        "Data-driven insights to optimize pricing and customer engagement.",
    },
  ];

  return (
    <CustomContainer className="relative">
      <div className="flex flex-col w-full items-stretch justify-center md:py-8 max-md:max-w-full ">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/8db68aff16c541a7b1ccc14db1396f19/87f4a12c345df5ba88e1cc8e130240cd69a4f595?placeholderIfAbsent=true"
          alt="Background"
          className="absolute h-full w-full object-cover inset-0"
        />

        <div className="flex flex-col py-4 md:py-20 bg-[#fff] relative z-10 rounded-2xl">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-12 md:gap-8">
              {/* Title Section */}
              <div className="lg:col-span-4 flex flex-col items-center justify-center md:gap-4">
                <h2 className=" text-[14px] md:text-[30px] font-bold md:mb-4">
                    <span className="text-[#1E3A8A] font-medium leading-[54px]">
                    Technology That {" "}
                    </span>
                    <br className="hidden md:block" />
                  <span className="text-[#AA10A5] font-medium">
                    Drives Success
                  </span>
                </h2>
              </div>

              {/* Technologies Grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {technologies.map((tech, index) => (
                    <div
                      key={index}
                      className="border-t-2 border-[#AA10A5] pt-4"
                    >
                      <h3 className="text-[#AA10A5] text-xl font-bold mb-2">
                        {tech.title}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {tech.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default TechnologySection;
