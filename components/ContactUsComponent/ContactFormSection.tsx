import React from "react";
import ContactForm from "../ui/ContactForm";
import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import Image from "next/image";

const socialIcons = [
  {
    name: "Facebook",
    iconSrc: images.FacebookCu,
  },
  {
    name: "X",
    iconSrc: images.XCu,
  },
  {
    name: "Instagram",
    iconSrc: images.InstagramCu,
  },
];

const ContactFormSection: React.FC = () => {
  const t = useTranslations("ContactUsPage.ContactFormSection");

  return (
    <section className="bg-[#fff]  md:bg-[#f7fcfc] flex w-full items-center overflow-hidden py-6">
      <div className="w-full">
        <div className="bg-white md:rounded-2xl md:border-2 md:border-[#ecececec] overflow-hidden">
          <div className="flex flex-col md:flex-row gap-5">
            <div className="w-full md:w-6/12 order-2 md:order-1">
              <div className="bg-[#d7eff1] min-h-[600px] md:min-h-[750px]  md:p-12 rounded-2xl md:rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none  md:rounded-br-none">
                <div className="max-w-[416px] mx-auto p-4">
                  <div>
                    <h2 className="text-[#1e1e1e] text-3xl md:text-4xl font-semibold leading-tight font-poppins">
                      {t("title")}
                    </h2>
                    <p className="text-[#647087] text-base md:text-lg font-normal mt-4 font-poppins">
                      {t("description")}
                    </p>
                  </div>

                  <div className="mt-8 md:mt-10">
                    <h3 className="text-[#1e1e1e] text-xl md:text-2xl font-semibold">
                      {t("officeHours.title")}
                    </h3>
                    <p className="text-[#667085] text-base md:text-lg mt-2 font-poppins">
                      {t("officeHours.subtitle")}
                    </p>
                    <div className="mt-2 text-base">
                      <div className="text-[#9c25a0] font-semibold">
                        {t("officeHours.weekdays")}:{" "}
                        <span className="font-normal text-[#667085]">
                          {t("officeHours.weekdaysHours")}
                        </span>
                      </div>
                      <div className="text-[#9c25a0] font-semibold mt-2">
                        {t("officeHours.weekend")}:{" "}
                        <span className="font-normal text-[#667085]">
                          {t("officeHours.weekendHours")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-10 md:mt-[78px]">
                    <div className="flex items-center gap-3 justify-center md:justify-start">
                      <img
                        src="/social/Line 2.svg"
                        className="w-[34px]"
                        alt="Connect icon"
                      />
                      <div className="text-lg font-medium">
                        {t("social.connectText")}
                      </div>
                    </div>
                    <div className="flex items-center gap-4 justify-center md:justify-start mt-4">
                      {socialIcons.map((social, index) => (
                        <div
                          key={index}
                          className="hover:opacity-80 transition-opacity"
                        >
                          <Image
                            src={social.iconSrc}
                            alt={social.name}
                            className="w-8 h-8 md:w-[34px] md:h-[34px]"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-6/12 md:pr-[75px] order-1 md:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactFormSection;
