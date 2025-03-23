import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
const HeroSection = () => {
  const t = useTranslations("TravelManagementPage");

  return (
    <div>
      <section className="bg-[#f7fcfc] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 ">
          <div className="absolute top-0 right-[350px] w-[500px] h-[500px] z-0 hidden lg:block">
            <Image
              src="/images/snake.svg"
              alt="Decorative snake"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[-320px] left-[-10px] w-[450px] h-[450px] z-0 hidden lg:block">
            <Image
              src="/images/snakedown.svg"
              alt="Decorative snake"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#9C25A0] text-[32px] md:text-[56px] font-medium leading-[40px] md:leading-[64px]">
                  {t("HeroSection.titlePurple")}
                </span>{" "}
                -{" "}
                <span className="text-[#224A9A] text-[32px] md:text-[56px] font-medium leading-[40px] md:leading-[64px]">
                  {t("HeroSection.titleBlue")}
                </span>
              </h2>
              <p className="text-[#647087] text-[14px] md:text-[12px] font-normal leading-[20px] md:leading-[18px]">
                {t("HeroSection.description")}
              </p>
              <div className="space-y-4 w-full flex flex-col items-start">
                <div>
                  <label className="block text-gray-700 mb-2">
                    {t("HeroSection.emailLabel")}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder={t("HeroSection.emailPlaceholder")}
                    className="w-full px-4 py-2 border rounded-full w-[370px] border-[#D0D5DD] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="flex h-[56px] px-8 py-4 justify-center items-center gap-3 rounded-[100px] bg-[#BA00AB] text-white shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)] hover:bg-[#BA00AB]/90 transition-colors">
                  {t("HeroSection.buttonText")}
                </button>
                <p className="text-gray-600 text-sm">
                  {t("HeroSection.footerText")}
                </p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/turbo-travel-suit.svg"
                alt={
                  t("HeroSection.imageAlt") || "Travel Management Illustration"
                }
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
