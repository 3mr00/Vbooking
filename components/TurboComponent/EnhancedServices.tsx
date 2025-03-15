import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import WhyChooseSection from "./WhyChooseSection";

export default function EnhancedServices() {
  const t = useTranslations("turbo.EnhancedServices");

  // Define the services array dynamically
  const services = [
    {
      key: "HolidayPackagesManagement",
      image: images.Enhanced1,
    },
    {
      key: "IntegratedPaymentGateway",
      image: images.Enhanced2,
    },
    {
      key: "CharterServicesManagement",
      image: images.Enhanced3,
    },
    {
      key: "ChannelManagerIntegration",
      image: images.Enhanced4,
    },
    {
      key: "TransfersInventoryManagement",
      image: images.Enhanced5,
    },
  ];

  return (
    <>
      <CustomContainer className="">
        {/* Header Section */}
        <div className="mx-auto px-4 pb-12  text-center">
          <h1 className="text-[#2d63cf] md:text-[30px] text-[22px] font-medium">
            {t("Title")}{" "}
            <span className="text-[#9c25a0] md:text-[30px] text-[22px] font-medium">
              {t("Subtitle")}
            </span>
          </h1>
        </div>

        {/* Services Grid - First Row */}
        <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          {services.slice(0, 3).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-[150px] relative">
                <Image
                  src={service.image}
                  alt={t(`${service.key}.Title`)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {t(`${service.key}.Title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`${service.key}.Description`)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Services Grid - Second Row */}
        <div className="lg:w-[50rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          {services.slice(3).map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm overflow-hidden"
            >
              <div className="h-[150px] relative">
                <Image
                  src={service.image}
                  alt={t(`${service.key}.Title`)}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {t(`${service.key}.Title`)}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t(`${service.key}.Description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>

      {/* Why Choose Section */}
      <WhyChooseSection />
    </>
  );
}
