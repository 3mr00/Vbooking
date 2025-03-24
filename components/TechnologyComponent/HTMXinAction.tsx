import { CustomContainer } from "@/Wrapper/CustomContainer";
import { useTranslations } from "next-intl";
import { FaCircleCheck } from "react-icons/fa6";

export default function HTMXinAction() {
  const t = useTranslations("technology.HTMXSection");

  return (
    <CustomContainer>
      {/* First Section */}
      <div className="w-full  py-10  inline-flex flex-col justify-start items-center gap-2.5 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <div className="inline-flex justify-start items-start gap-4">
              <div className="w-full md:w-[1366px] text-center justify-start">
                <span className="text-blue-900 text-2xl md:text-4xl font-medium ">
                  {t("title1")}
                </span>
                <span className="text-fuchsia-700 text-2xl md:text-4xl font-medium ">
                  {t("title2")}
                </span>
              </div>
            </div>
            <div className="w-full md:w-[1044px] text-center justify-start text-gray-500 text-base font-normal ">
              {t("description1")}
            </div>
          </div>
          <div className="self-stretch inline-flex flex-col md:flex-row justify-start items-center gap-6">
            <div className="flex-1 self-stretch p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-center text-fuchsia-700 text-xl font-normal ">
                  {t("feature1Title")}
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                  <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />

                  <div className="flex-1 justify-center text-gray-500 text-base font-normal ">
                    {t("feature1Description")}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1 self-stretch p-6 bg-white rounded-2xl inline-flex flex-col justify-start items-start gap-3">
              <div className="self-stretch flex flex-col justify-start items-start gap-2">
                <div className="self-stretch justify-center text-fuchsia-700 text-xl font-normal ">
                  {t("feature2Title")}
                </div>
                <div className="self-stretch inline-flex justify-start items-start gap-2">
                  <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />

                  <div className="flex-1 justify-center text-gray-500 text-base font-normal ">
                    {t("feature2Description")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second Section */}
      <div className="w-full py-10  inline-flex flex-col justify-center items-center gap-2.5 overflow-hidden">
        <div className="self-stretch flex flex-col justify-start items-start gap-6">
          <div className="self-stretch flex flex-col justify-start items-center gap-2">
            <div className="inline-flex justify-start items-start gap-4">
              <div className="w-full md:w-[1366px] text-center justify-start">
                <span className="text-blue-900 text-2xl md:text-4xl font-medium ">
                  {t("title3")}
                </span>
                <span className="text-fuchsia-700 text-2xl md:text-4xl font-medium ">
                  {t("title4")}
                </span>
              </div>
            </div>
            <div className="w-full md:w-[1044px] text-center justify-start text-gray-500 text-base font-normal ">
              {t("description2")}
            </div>
          </div>

          <div className="self-stretch inline-flex flex-col md:flex-row justify-center items-start gap-6">
            <div className="flex-1 self-stretch p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 inline-flex flex-col justify-start items-center gap-4">
              <div className="self-stretch pb-[0.60px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-fuchsia-700 text-xl font-semibold  leading-snug">
                  {t("integration1Title")}
                </div>
              </div>
              <div className="self-stretch justify-center text-gray-500 text-base font-normal  leading-tight">
                {t("integration1Description")}
              </div>
            </div>
            <div className="flex-1 self-stretch p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 inline-flex flex-col justify-start items-center gap-4">
              <div className="self-stretch pb-[0.60px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-fuchsia-700 text-xl font-semibold  leading-snug">
                  {t("integration2Title")}
                </div>
              </div>
              <div className="self-stretch justify-center text-gray-500 text-base font-normal  leading-tight">
                {t("integration2Description")}
              </div>
            </div>
            <div className="flex-1 self-stretch p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 inline-flex flex-col justify-start items-start gap-4">
              <div className="self-stretch pb-[0.60px] flex flex-col justify-start items-start">
                <div className="self-stretch justify-center text-fuchsia-700 text-xl font-semibold  leading-snug">
                  {t("integration3Title")}
                </div>
              </div>
              <div className="self-stretch justify-center text-gray-500 text-base font-normal  leading-tight">
                {t("integration3Description")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}
