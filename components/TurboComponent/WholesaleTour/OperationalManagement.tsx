import React from "react";
import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { FaCircleCheck } from "react-icons/fa6";

const OperationalManagement = () => {
  const t = useTranslations(
    "turbo.EnhancedSec.WholesaleTour.OperationalManagement"
  );

  return (
    <CustomContainer className="bg-gradient-to-b from-[#ECF8F8] via-[#F9DBE8] to-[#E5F5F6]">
      <div className="w-full py-10  flex flex-col justify-start items-center gap-2.5 overflow-hidden ">
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
          <div className="w-full flex flex-col justify-start items-start gap-6 lg:flex-row">
            <div className="w-full flex flex-col justify-center items-start gap-6 lg:w-2/3">
              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full justify-center text-fuchsia-700 text-lg font-semibold md:text-xl">
                      {t("operatorApp.title")}
                    </div>
                    <div className="w-full justify-start text-secondary text-base font-medium">
                      {t("operatorApp.subtitle")}
                    </div>
                    <div className="w-full flex justify-start items-start gap-2">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                      <div className="flex-1 justify-center">
                        <span className="text-blue-700 text-base font-semibold">
                          {t("operatorApp.features.0.title")}{" "}
                        </span>
                        <span className="text-gray-500 text-base font-normal">
                          {t("operatorApp.features.0.description")}
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-start gap-2">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                      <div className="flex-1 justify-center">
                        <span className="text-blue-700 text-base font-semibold">
                          {t("operatorApp.features.1.title")}{" "}
                        </span>
                        <span className="text-gray-500 text-base font-normal">
                          {t("operatorApp.features.1.description")}
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-start gap-2">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                      <div className="flex-1 justify-center">
                        <span className="text-blue-700 text-base font-semibold">
                          {t("operatorApp.features.2.title")}{" "}
                        </span>
                        <span className="text-gray-500 text-base font-normal">
                          {t("operatorApp.features.2.description")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full flex flex-col justify-start items-start gap-2">
                    <div className="w-full justify-center text-fuchsia-700 text-lg font-semibold md:text-xl">
                      {t("quotation.title")}
                    </div>
                    <div className="w-full justify-start text-secondary text-base font-medium">
                      {t("quotation.subtitle")}
                    </div>
                    <div className="w-full flex justify-start items-start gap-2">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                      <div className="flex-1 justify-center">
                        <span className="text-blue-700 text-base font-semibold">
                          {t("quotation.features.0.title")}{" "}
                        </span>
                        <span className="text-gray-500 text-base font-normal">
                          {t("quotation.features.0.description")}
                        </span>
                      </div>
                    </div>
                    <div className="w-full flex justify-start items-start gap-2">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                      <div className="flex-1 justify-center">
                        <span className="text-blue-700 text-base font-semibold">
                          {t("quotation.features.1.title")}{" "}
                        </span>
                        <span className="text-gray-500 text-base font-normal">
                          {t("quotation.features.1.description")}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3 lg:w-[41%]">
              <div className="w-full flex flex-col justify-start items-start gap-2">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full justify-center text-fuchsia-700 text-lg font-semibold md:text-xl">
                    {t("aiAgent.title")}
                  </div>
                  <div className="w-full justify-start text-secondary text-base font-medium">
                    {t("aiAgent.subtitle")}
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                    <div className="flex-1 justify-center">
                      <span className="text-blue-700 text-base font-semibold">
                        {t("aiAgent.features.0.title")}{" "}
                      </span>
                      <span className="text-gray-500 text-base font-normal">
                        {t("aiAgent.features.0.description")}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                    <div className="flex-1 justify-center">
                      <span className="text-blue-700 text-base font-semibold">
                        {t("aiAgent.features.1.title")}{" "}
                      </span>
                      <span className="text-gray-500 text-base font-normal">
                        {t("aiAgent.features.1.description")}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                    <div className="flex-1 justify-center">
                      <span className="text-blue-700 text-base font-semibold">
                        {t("aiAgent.features.2.title")}{" "}
                      </span>
                      <span className="text-gray-500 text-base font-normal">
                        {t("aiAgent.features.2.description")}
                      </span>
                    </div>
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-0.5" />

                    <div className="flex-1 justify-center">
                      <span className="text-blue-700 text-base font-semibold">
                        {t("aiAgent.features.3.title")}{" "}
                      </span>
                      <span className="text-gray-500 text-base font-normal">
                        {t("aiAgent.features.3.description")}
                      </span>
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

export default OperationalManagement;
