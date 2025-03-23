import React from "react";

const WhoWeEmpower = () => {
  const empowerItems = [
    {
      title: "Wholesale Tour Operators (B2B)",
      description:
        "Automate bookings, manage inventories, and maximize efficiency.",
    },
    {
      title: "Destination Management Companies (DMCs)",
      description:
        "Simplify itineraries, supplier coordination, and real-time pricing updates.",
    },
    {
      title: "Online Travel Agencies (OTAs)",
      description:
        "Deliver fast, AI-powered searches and recommendations to boost conversions.",
    },
    {
      title: "Holiday Home Managers",
      description:
        "Optimize pricing, streamline bookings, and enhance guest communication.",
    },
  ];

  return (
    <div className="items-stretch bg-[#d7efef] flex w-full flex-col overflow-hidden text-base justify-center py-10 max-md:max-w-full">
      <div className="w-full max-md:max-w-full max-md:px-5">
        <div className="items-center bg-white flex w-full gap-8  rounded-2xl max-md:max-w-full max-md:px-5">
          <div className="self-stretch flex min-w-60 w-full items-center gap-8 flex-wrap flex-1 shrink basis-[0%] my-auto p-10 max-md:max-w-full max-md:px-5">
            <img
              src="/images/WhoWeEmpower.png"
              alt="Who We Empower"
              className="aspect-[1.48] object-contain w-full  min-w-60 flex-1 shrink basis-[0%] my-auto rounded-lg max-md:max-w-full"
            />
            <div className="flex min-w-60 flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h2 className="text-[34px] font-bold bg-clip-text text-[#1e4187] bg-[linear-gradient(180deg,#2249a_0%,#1c3d80_100%)] max-md:max-w-full">
                  <span className="font-medium text-[36px] leading-[54px]">
                    Who We{" "}
                  </span>
                  <span className="font-medium text-[36px] leading-[54px] text-[#9c25a0]">
                    Empower
                  </span>
                </h2>
                <p className="text-[#667085] font-normal mt-1 max-md:max-w-full text-[12px]">
                  VBooking is designed for every segment of the travel industry
                </p>
                <div className="w-full text-[#2d63cf] font-semibold mt-4 max-md:max-w-full">
                  {empowerItems.map((item, index) => (
                    <div
                      key={index}
                      className="flex w-full gap-2 flex-wrap mt-1 max-md:max-w-full text-[12px]"
                    >
                      <img
                        src="/images/CheckIcon.svg"
                        alt="Check Icon"
                        className="aspect-[1] object-contain w-6 shrink-0"
                      />
                      <div className="flex-1 shrink basis-[0%] max-md:max-w-full">
                        {item.title}:{" "}
                        <span className="font-normal text-[#667085]">
                          {item.description}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhoWeEmpower;
