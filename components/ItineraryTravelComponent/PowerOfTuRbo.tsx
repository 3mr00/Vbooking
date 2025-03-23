import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const PowerOfTuRbo = () => {
  const t = useTranslations("Traveler");
  return (
    <div>
      {" "}
      <div className="bg-[#d7eff1]">
        <div className="py-10 md:py-20 relative overflow-hidden">
          <div className="container mx-auto text-center relative z-10">
            <h2 className="text-[16px] md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-[#2d63cf]">
                {t("powerOfTurbo.title.part1")}{" "}
              </span>
              <span className="text-[#9c25a0]">
                {t("powerOfTurbo.title.part2")}
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <span className="text-[16px] text-[#647087] ">
                {t("powerOfTurbo.subtitle")}
              </span>

              <p
                className="text-center font-['Poppins'] text-base font-normal leading-6 text-[#647087]  text-[13px] mdtext-[16px]"
                style={{ color: "color(display-p3 0.4 0.4392 0.5216)" }}
              >
                {t("powerOfTurbo.description")}
              </p>
            </div>
          </div>

          {/* Background Decorative Elements */}
          {/* hidden lg:block */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block">
            <Image
              src="/images/Artboard 1 copy 3.svg"
              alt={t("decorative.left.alt")}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block">
            <Image
              src="/images/Artboard 1 copy 3.svg"
              alt={t("decorative.right.alt")}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PowerOfTuRbo;
