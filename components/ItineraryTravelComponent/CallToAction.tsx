import React from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useTranslations } from "next-intl";
function CallToAction() {
  const t = useTranslations("Traveler");

  return (
    <div>
      {" "}
      <div className="bg-[#d7eff1]">
        <div className="py-8 md:py-8">
          <div className="">
            <div className="text-center">
              <p
                className="text-[#647087] text-center font-['Poppins'] text-[18px] font-normal leading-[27px] max-w-4xl mx-auto mb-6 md:mb-8"
                style={{ color: "color(display-p3 0.4 0.4392 0.5216)" }}
              >
                {t("cta.description")}
              </p>
              <Button className="bg-[#BA00AB] hover:bg-[#8a1f8e] text-white rounded-[100px] px-6 py-8 text-lg shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)]">
                {t("cta.button")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CallToAction;
