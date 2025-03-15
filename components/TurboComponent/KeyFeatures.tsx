import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { icons } from "@/assets/icons";
import HeaderTurbo from "@/components/TurboComponent/HeaderTurbo";
import { CustomContainer } from "@/Wrapper/CustomContainer";

type FeatureContent = {
  Title: string;
  Description: string;
};

// Define the features array dynamically
const features = [
  {
    key: "ComprehensiveInventoryManagement",
    icon: icons.ComprehensiveInv,
  },
  {
    key: "AdvancedBookingCapabilities",
    icon: icons.booking,
  },
  {
    key: "FullControlCustomization",
    icon: icons.FullControl,
  },
  {
    key: "ComprehensiveFunctionalities",
    icon: icons.ComprehensiveFun,
  },
  {
    key: "OperationalManagement",
    icon: icons.Operational,
  },
];

const KeyFeatures = () => {
  const t = useTranslations("turbo.KeyFeatures");

  return (
    <CustomContainer className="!py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
        <span className="text-[#2d63cf] md:text-[36px] text-[22px] font-medium">
          {t("Title")}
        </span>{" "}
        <span className="text-[#9c25a0] md:text-[36px] text-[22px] font-medium">
          {t("Subtitle")}
        </span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`bg-white p-6 rounded-xl shadow-md ${
              index === 4 && "md:col-span-2 max-w-2xl mx-auto"
            }`}
          >
            <div className="flex justify-start mb-6">
              <div className=" p-4 rounded-full md:w-[5rem] md:h-[5rem]  w-[3rem] h-[3rem] relative">
                <Image
                  src={feature.icon}
                  alt={`${t(`${feature.key}.Title`)} Icon`}
                  className="object-contain"
                  fill
                />
              </div>
            </div>
            <h3 className="text-[#9c25a0] md:text-xl  text:text-lg font-bold text-start mb-4">
              {t(`${feature.key}.Title`)}
            </h3>
            <div className="space-y-4">
              {Object.entries(t.raw(feature.key)).map(([subKey, value]) => {
                // Skip the "Title" key since it's already rendered above
                if (subKey === "Title") return null;

                // Explicitly type the value as FeatureContent
                const featureContent = value as FeatureContent;

                return (
                  <div key={subKey} className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    <div>
                      <p className="font-semibold md:text-base text-sm">
                        {featureContent.Title}
                      </p>
                      <p className="text-[#667085] md:text-base text-sm">
                        {featureContent.Description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </CustomContainer>
  );
};

export default KeyFeatures;
