import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import { Link } from "@/navigation";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import React from "react";

const WhyChooseSection = () => {
  const t = useTranslations("turbo.WhyChooseSection");

  return (
    <div>
      <div className="bg-gradient-to-b from-[#DDF1F3] via-[#F9DBE8] to-[#D7EFF1]">
        <CustomContainer className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 relative">
            <Image
              src={images.vsymbolsmall}
              alt="Turbo Booking Engine Platform Interface"
              width={600}
              height={500}
              className={`w-[14rem] h-[14rem] lg:mx-[-120px] absolute`}
            />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-primary">{t("Title1")} </span>
                <span className="text-secondary">{t("Title2")}</span>
                <br />
                <span className="text-secondary">{t("Title3")}</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-600 mb-4 text-sm">{t("Description1")}</p>
              <p className="text-gray-600">{t("Description2")}</p>
            </div>
          </div>
        </CustomContainer>
      </div>

      {/* CTA Section */}
      <div className="lg:w-[879px] mx-auto px-4 py-12">
        <div className="bg-primary rounded-xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            {t("CTATitle")}
          </h2>
          <p className="text-white mb-8 lg:max-w-3xl text-sm mx-auto">
            {t("CTADescription")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="#"
              className="bg-gradient-to-b from-[#224A9A] to-[#1C3D80] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
            >
              {t("CTAButton1")}
            </Link>
            <Link
              href="#"
              className="bg-white text-secondary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
            >
              {t("CTAButton2")}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseSection;
