import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { useTranslations } from "next-intl";

const HeaderTurbo = ({ turboId }: { turboId: string }) => {
  const t = useTranslations("turbo.Header");
  const tLang = useTranslations("lang");

  // Image mapping
  const imageMapping = {
    IncomingAgencies: images.incomingAgencies, // Replace with actual image import
    HolidayRental: images.holidayRental, // Replace with actual image import
    OnlineTravel: images.onlineTravel, // Replace with actual image import
    WholesaleTour: images.wholesaleTour, // Replace with actual image import
  };

  // Fetch translations dynamically based on turboId
  const masterBookings = t(`${turboId}.MasterBookings`);
  const empower = t(`${turboId}.Empower`);
  const efficiency = t(`${turboId}.Efficiency`);
  const description = t(`${turboId}.Description`);
  // Get the image based on turboId
  const imageSrc = imageMapping[turboId as keyof typeof imageMapping];

  return (
    <div
      className={`max-w-[1920px] mx-auto ${
        tLang("lang") === "en"
          ? "lg:pl-[120px] px-[1.5rem]"
          : "lg:pr-[120px] px-[1.5rem]"
      }  py-6 `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-[#2d63cf] lg:text-sm text-xs font-medium mb-2">
            {masterBookings}
          </h2>

          <h1 className="flex flex-wrap gap-2  md:text-4xl text-[1.6rem] font-medium mb-4">
            <div className="text-[#9c25a0] ">{empower}</div>
            <div className="text-[#2d63cf]">{efficiency}</div>
          </h1>
          <p className="text-[#667085] mb-[6px] md:text-[.8rem] text-[.6rem] font-normal">
            {description}
          </p>
        </div>
        <div className="relative">
          {/* Dynamic Image */}
          <Image
            src={imageSrc}
            alt={`${turboId} Image`}
            width={600}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTurbo;
