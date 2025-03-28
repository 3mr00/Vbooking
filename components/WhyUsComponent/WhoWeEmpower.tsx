import React from "react";
import { useTranslations } from "next-intl";

const WhoWeEmpower = () => {
  const t = useTranslations("WhyUsPage");
  const empowerItems = t.raw("empowerItems");

  return (
    <div className="items-stretch bg-[#d7efef] flex w-full flex-col overflow-hidden text-base justify-center md:py-10 max-md:max-w-full">
      <div className="w-full max-md:max-w-full ">
        <div className="items-center bg-white flex w-full md:gap-8  rounded-2xl max-md:max-w-full p-4 md:px-5">
          <div className="self-stretch flex min-w-60 w-full items-center gap-8 flex-wrap flex-1 shrink basis-[0%] my-auto md:py-8 max-md:max-w-full ">
            <img
              src="/images/WhoWeEmpower.png"
              alt={t("whoWeEmpower.title")}
              className="aspect-[1.48] object-contain w-full  min-w-60 flex-1 shrink basis-[0%] my-auto rounded-lg max-md:max-w-full"
            />
            <div className="flex w-full flex-col items-stretch justify-center flex-1 shrink basis-[0%] max-md:max-w-full">
              <div className="w-full max-md:max-w-full">
                <h2 className="text-[18px] md:text-[30px] font-bold bg-clip-text text-[#1e4187] bg-[linear-gradient(180deg,#2249a_0%,#1c3d80_100%)] max-md:max-w-full">
                  <span className="font-medium leading-[54px]">
                    {t("whoWeEmpower.title")}{" "}
                  </span>
                  <span className="font-medium leading-[54px] text-[#9c25a0]">
                    {t("whoWeEmpower.titleHighlight")}
                  </span>
                </h2>
                <p className="text-[#667085] font-normal mt-1 max-md:max-w-full text-[12px]">
                  {t("whoWeEmpower.description")}
                </p>
                <div className="w-full text-[#2d63cf] font-semibold mt-4 max-md:max-w-full">
                  {empowerItems.map(
                    (
                      item: { title: string; description: string },
                      index: number
                    ) => (
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
                    )
                  )}
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
