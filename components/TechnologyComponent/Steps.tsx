import React from "react";
import { icons } from "@/assets/icons";
import { images } from "@/assets/images";
import { Link } from "@/navigation";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Steps = ({ data }: { data: any }) => {
  const t = useTranslations("lang");

  return (
    <CustomContainer className="!py-12">
      <div className="w-full py-12 flex flex-col justify-center items-center gap-6">
        <div className="text-center">
          <span className="text-blue-900 text-4xl font-medium">
            {data.titlePart1}{" "}
          </span>
          <span className="text-fuchsia-700 text-4xl font-medium">
            {data.titlePart2}
          </span>
        </div>
        <div className="w-full md:w-[744px] text-center text-gray-500 text-base font-normal">
          {data.description}
        </div>

        <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
          {data.items.map((item: any, index: any) => (
            <div
              key={index}
              className="flex-1 flex flex-col justify-center items-center gap-12 relative"
            >
              <div className="w-14 h-14 bg-blue-700 rounded-full flex justify-center items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] border-2 border-neutral-800 text-white font-semibold text-lg">
                {index + 1}
              </div>
              <div className="z-0 w-[2.40px] h-24 absolute top-[59px] opacity-20 border-dashed border-l-[2.40px] border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]"></div>
              <div className="z-10 w-[22rem] h-[12em] p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-start gap-4">
                <div className="text-fuchsia-700 text-lg font-semibold leading-snug">
                  {item.title}
                </div>
                <div className="text-gray-500 text-[.8rem] font-normal leading-tight">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </CustomContainer>
  );
};

export default Steps;
