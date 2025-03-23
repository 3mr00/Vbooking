import React from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

const CallToAction = () => {
  const t = useTranslations("WhyUsPage.callToAction");

  return (
    <div className="bg-[#d7eff1] py-8 md:py-12">
      <div className="max-w-[879px] min-h-[202px] mx-auto bg-[#9c25a0] rounded-xl flex items-center p-4 md:p-8">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
            {t("title")}
          </h2>
          <p className="text-white text-base md:text-lg mb-6 md:mb-8">
            {t("description")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-[#2d63cf] hover:bg-[#2456b8] text-white rounded-[100px] px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)]">
              {t("button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
