import React from "react";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { useTranslations } from "next-intl";

const TechnologySection = () => {
  const t = useTranslations("WhyUsPage.technologySection");

  return (
    <CustomContainer className="relative">
      <div className="flex flex-col w-full items-stretch justify-center md:py-8 max-md:max-w-full ">
        <img
          src="/images/TechnologySectionImage.png"
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
                    {t("title")}{" "}
                  </span>
                  <br className="hidden md:block" />
                  <span className="text-[#AA10A5] font-medium">
                    {t("titleHighlight")}
                  </span>
                </h2>
              </div>

              {/* Technologies Grid */}
              <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {Array.from({ length: 6 }).map((_, index) => (
                    <div
                      key={index}
                      className="border-t-2 border-[#AA10A5] pt-4"
                    >
                      <h3 className="text-[#AA10A5] text-xl font-bold mb-2">
                        {t(`technologies.${index}.title`)}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {t(`technologies.${index}.description`)}
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
