import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { useTranslations } from "next-intl";

const HeaderTurbo = () => {
  const tTurbo = useTranslations("turbo");
  const tLang = useTranslations("lang");

  return (
    <div
      className={`max-w-[1920px] mx-auto ${
        tLang("lang") === "en"
          ? "lg:pl-[120px] px-[1.5rem]"
          : "lg:pr-[120px] px-[1.5rem]"
      }  py-6 `}
    >
      <div className="   grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-[#2d63cf] lg:text-sm text-xs font-medium mb-2">
            {tTurbo("Header.MasterBookings")}
          </h2>
          <h1 className="md:text-[2.5rem] text-[1.6rem] font-medium mb-4">
            <span className="text-[#9c25a0]">{tTurbo("Header.Empower")}</span>
            <br />
            <span className="text-[#2d63cf]">
              {tTurbo("Header.Efficiency")}
            </span>
          </h1>
          <p className="text-[#667085] mb-[6px] md:text-[.8rem] text-[.6rem] font-normal">
            {tTurbo("Header.Description")}
          </p>
        </div>
        <div className="relative">
          <Image
            src={images.turboheader}
            alt="Turbo Booking Engine Platform Interface"
            width={600}
            height={500}
            className=" w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderTurbo;
