import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

// Import your icons (adjust paths as needed)
import { icons } from "@/assets/icons";

interface FeaturePoint {
  id: string;
  highlight: string;
  description: string;
}

interface FeatureItem {
  id: string;
  title: string;
  points: FeaturePoint[];
}

// Icon mapping configuration
const iconMap: Record<string, any> = {
  "full-control": icons.WholesaleTour1,
  "advanced-booking": icons.WholesaleTour2,
  "suppliers-portal": icons.WholesaleTour3,
  "inventory-management": icons.WholesaleTour4,
};

const CoreFeatures = () => {
  const t = useTranslations("turbo.EnhancedSec.WholesaleTour.CoreFeatures");

  const features = t.raw("features") as {
    firstRow: FeatureItem[];
    secondRow: FeatureItem[];
  };

  return (
    <CustomContainer className="!py-12">
      <div className="text-center h-14 mb-12">
        <h2 className="text-4xl font-medium">
          <span className="text-blue-900">{t("title.part1")}</span>{" "}
          <span className="text-fuchsia-700">{t("title.part2")}</span>
        </h2>
      </div>

      {/* First Row */}
      <div className="flex flex-col lg:flex-row justify-start items-stretch gap-6">
        <div className="w-full lg:w-[680px] p-6 bg-white rounded-2xl">
          <FeatureCardContent feature={features.firstRow[0]} />
        </div>
        <div className="flex-1 p-6 bg-white rounded-2xl">
          <FeatureCardContent feature={features.firstRow[1]} />
        </div>
      </div>

      {/* Second Row */}
      <div className="flex flex-col lg:flex-row justify-start items-stretch gap-6 mt-6">
        <div className="flex-1 p-6 bg-white rounded-2xl">
          <FeatureCardContent feature={features.secondRow[0]} />
        </div>
        <div className="w-full lg:w-[680px] p-6 bg-white rounded-2xl">
          <FeatureCardContent feature={features.secondRow[1]} />
        </div>
      </div>
    </CustomContainer>
  );
};

const FeatureCardContent = ({ feature }: { feature: FeatureItem }) => {
  return (
    <div className="flex flex-col gap-6 h-full">
      <div className="flex flex-col gap-2">
        <div className="p-4 rounded-full md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] relative bg-gray-100">
          {iconMap[feature.id] && (
            <Image
              src={iconMap[feature.id]}
              alt={`${feature.title} Icon`}
              className="object-contain"
              fill
            />
          )}
        </div>
        <h3 className="text-fuchsia-700 text-xl font-semibold">
          {feature.title}
        </h3>
        <div className="flex flex-col gap-2">
          {feature.points.map((point) => (
            <div key={point.id} className="flex items-start gap-2">
              <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />
              <div>
                <span className="text-blue-700 text-base font-semibold">
                  {point.highlight}{" "}
                </span>
                <span className="text-gray-500 text-base font-normal">
                  {point.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CoreFeatures;
