import React from "react";
import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { FaCircleCheck } from "react-icons/fa6";

const ComprehensiveFunctionalities = () => {
  const t = useTranslations(
    "turbo.EnhancedSec.WholesaleTour.ComprehensiveFunctionalities"
  );

  return (
    <CustomContainer className="bg-gradient-to-b from-[#E2F4F5] via-[#F9DBE8] to-[#E1F3F4]">
      <div className="w-full py-10  flex flex-col justify-start items-center gap-2.5">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col justify-start items-start">
            <div className="w-full text-center justify-start">
              <span className="text-blue-900 text-2xl font-medium md:text-3xl lg:text-4xl">
                {t("title.part1")}{" "}
              </span>
              <span className="text-fuchsia-700 text-2xl font-medium md:text-3xl lg:text-4xl">
                {t("title.part2")}
              </span>
            </div>
          </div>
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <h3 className="w-full text-center md:text-start text-fuchsia-700 text-lg md:text-xl font-semibold">
                    {t("websiteBuilder.title")}
                  </h3>
                  <p className="w-full text-secondary text-sm md:text-base font-medium">
                    {t("websiteBuilder.description")}
                  </p>
                  <div className="w-full flex flex-col justify-start items-start gap-4">
                    <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
                      <div className="flex-1 flex justify-start items-start gap-2">
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                        <div className="flex-1">
                          <p className="text-blue-700 text-sm md:text-base font-semibold">
                            {t("websiteBuilder.features.0.title")}{" "}
                            <span className="text-gray-500 font-normal">
                              {t("websiteBuilder.features.0.description")}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 flex justify-start items-start gap-2">
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                        <div className="flex-1">
                          <p className="text-blue-700 text-sm md:text-base font-semibold">
                            {t("websiteBuilder.features.1.title")}{" "}
                            <span className="text-gray-500 font-normal">
                              {t("websiteBuilder.features.1.description")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full flex flex-col lg:flex-row justify-start items-start gap-6">
                      <div className="flex-1 flex justify-start items-start gap-2">
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                        <div className="flex-1">
                          <p className="text-blue-700 text-sm md:text-base font-semibold">
                            {t("websiteBuilder.features.2.title")}{" "}
                            <span className="text-gray-500 font-normal">
                              {t("websiteBuilder.features.2.description")}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 flex justify-start items-start gap-2">
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                        <div className="flex-1">
                          <p className="text-blue-700 text-sm md:text-base font-semibold">
                            {t("websiteBuilder.features.3.title")}{" "}
                            <span className="text-gray-500 font-normal">
                              {t("websiteBuilder.features.3.description")}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-start gap-6">
              <div className="w-full flex flex-col md:flex-row justify-start items-start gap-6">
                <div className="flex-1 p-6 h-[20rem] bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                      <h3 className="w-full text-center md:text-left text-fuchsia-700 text-lg md:text-xl font-semibold">
                        {t("liveBookingDesk.title")}
                      </h3>
                      <p className="w-full text-secondary text-sm md:text-base font-medium">
                        {t("liveBookingDesk.description")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 h-[20rem] bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                      <h3 className="w-full text-center md:text-left text-fuchsia-700 text-lg md:text-xl font-semibold">
                        {t("hrManagement.title")}
                      </h3>
                      <p className="w-full text-secondary text-sm md:text-base font-medium">
                        {t("hrManagement.description")}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 p-6 h-[20rem] bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full flex flex-col justify-start items-start gap-2">
                      <h3 className="w-full text-center md:text-left text-fuchsia-700 text-lg md:text-xl font-semibold">
                        {t("communityAccess.title")}
                      </h3>
                      <p className="w-full text-secondary text-sm md:text-base font-medium">
                        {t("communityAccess.description")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default ComprehensiveFunctionalities;
