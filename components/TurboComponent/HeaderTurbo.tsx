import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { useTranslations } from "next-intl";

const HeaderTurbo = () => {
  const t = useTranslations("");

  return (
    <div
      className={`max-w-[1920px] mx-auto ${
        t("lang.lang") === "en"
          ? "lg:pl-[120px] px-[1.5rem]"
          : "lg:pr-[120px] px-[1.5rem]"
      }  py-6 `}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h2 className="text-[#2d63cf] lg:text-sm text-xs font-medium mb-2">
            {t("turbo.Header.MasterBookings")}
          </h2>
          <h1 className="md:text-[2.3rem] text-[1.5rem] font-medium mb-4">
            <span className="text-[#9c25a0]">{t("turbo.Header.Empower")}</span>
            <br />
            <span className="text-[#2d63cf]">
              {t("turbo.Header.Efficiency")}
            </span>
          </h1>
          <p className="text-[#667085] mb-[6px] md:text-[.8rem] text-[.5rem] font-normal">
            {t("turbo.Header.Description")}
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
