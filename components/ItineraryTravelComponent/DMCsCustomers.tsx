import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
function DMCsCustomers() {
  const t = useTranslations("Traveler");

  return (
    <div>
      <div className="bg-[#d7eff1]">
        <div className="py-12 md:py-18 border-[#d1e9ef]">
          <div className="container mx-auto px-4">
            <h2 className="text-[18px] md:text-4xl font-bold text-center mb-4 md:mb-8 md:mb-12">
              <span className="text-[#2d63cf] uppercase px-4">
                {t("customers.title.part1")}
              </span>
              <span className="text-[#C41BCD]">
                {t("customers.title.part2")}
              </span>
            </h2>

            <div className="flex justify-center items-center gap-8">
              <Image
                src="/images/Placeholder logo (1).png"
                alt={t("customers.logo2.alt")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DMCsCustomers;
