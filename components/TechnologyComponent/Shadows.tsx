import React from "react";
import { icons } from "@/assets/icons";
import { images } from "@/assets/images";
import { Link } from "@/navigation";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import { useTranslations } from "next-intl";

const Shadows = ({ data }: { data: any }) => {
  const t = useTranslations("lang");

  return (
    <CustomContainer className="!py-12">
      <div className="w-full py-12 flex flex-col justify-center items-center gap-6">
        <div className="w-full flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col justify-center items-center gap-2">
            <div className="text-center">
              <span className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-medium ">
                {data.titlePart1}{" "}
              </span>
              <span className="text-fuchsia-700 text-2xl sm:text-3xl md:text-4xl font-medium ">
                {data.titlePart2}
              </span>
            </div>
            <div className="w-full px-4 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center">
              <div className="max-w-3xl text-center text-gray-500 lg:text-[.8rem] text-xs font-normal">
                {data.description}{" "}
              </div>
            </div>
          </div>

          <div className="w-full bg-white rounded-2xl shadow-[12px_12px_0px_0px_rgba(70,118,215,1.00)] outline outline-1 outline-offset-[-1px] outline-fuchsia-700 flex flex-col md:flex-row">
            {data.items.map((item: any, index: any) => (
              <div
                key={index}
                className={`flex-1 p-6 flex flex-col justify-start items-start gap-2 ${
                  index !== data.items.length - 1
                    ? `border-b md:border-b-0 ${
                        t("lang") === "ar"
                          ? "md:border-l-[1.5px]"
                          : "md:border-r-[1.5px]"
                      } border-fuchsia-700`
                    : ""
                }`}
              >
                <div className="p-4 rounded-full md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] relative">
                  <Image
                    src={item.icon}
                    alt="feature-icon"
                    className="object-contain"
                    fill
                  />
                </div>

                <h3 className="text-fuchsia-700 text-xl font-semibold leading-9">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-base font-normal leading-tight">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default Shadows;
