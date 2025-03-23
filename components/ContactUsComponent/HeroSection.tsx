import React from "react";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { useTranslations, useLocale } from "next-intl";

const HeroSection: React.FC = () => {
  const t = useTranslations("ContactUsPage.HeroSection");
  const locale = useLocale();

  return (
    <div className="bg-[#d7eff1] relative min-h-[260px] w-full">
      <CustomContainer>
        <div
          className={`container mx-auto flex items-center justify-between py-4 md:py-0 md:min-h-[260px] ${
            locale === "ar" ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {locale !== "ar" && (
            <div className="z-0 max-md:hidden sm:hidden md:hidden lg:block xl:block">
              <img
                src="/images/contact-form-right.svg"
                className="w-[500px] absolute right-0 top-[32px]"
                alt="Decorative element"
              />
            </div>
          )}

          <div
            className={`z-10 max-w-2xl ${
              locale === "ar"
                ? "text-right md:text-right text-center"
                : "text-left md:text-left text-center"
            }`}
          >
            <h1
              className="text-[#1E1E1E] text-[24px] font-bold mb-4"
              style={{
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "normal",
              }}
            >
              {t("title")}
            </h1>
            <button className="w-[150px] shadow-sm bg-[#9c25a0] text-base text-white font-medium md:mt-8 px-4 py-3 rounded-full">
              {t("buttonText")}
            </button>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default HeroSection;
