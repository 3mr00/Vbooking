import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
function WhyTuRbo() {
  const t = useTranslations("Traveler");

  return (
    <div>
      {" "}
      <div className="bg-[#d7eff1]">
        <div className="py-12 md:py-15">
          <h2 className="text-[14ppx] md:text-4xl font-bold text-center mb-4 md:mb-8">
            <span className="text-[#2d63cf]">{t("whyTurbo.title.part1")}</span>
            <span className="text-[#9c25a0]">{t("whyTurbo.title.part2")}</span>
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {t.raw("whyTurboData").map((key: any) => (
              <div
                key={key}
                className="bg-white rounded-xl p-2 md:p-6 shadow-sm flex flex-col"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1"></div>
                  <h3 className="text-[#9c25a0] text-xl font-semibold">
                    {t(`whyTurbo.${key}.title`)}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                    <span className="rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center">
                      <Image
                        src="/images/Group.svg"
                        alt="Checkmark"
                        width={24}
                        height={24}
                        className="object-contain"
                      />
                    </span>
                    {t(`whyTurbo.${key}.description`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyTuRbo;
