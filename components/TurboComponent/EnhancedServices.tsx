import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import WhyChooseSection from "./WhyChooseSection";

const ImageMap: Record<string, any> = {
  // IncomingAgencies
  holidayPackagesManagement: images.IncomingAgenciesEnhanced1,
  transfersInventoryManagement: images.IncomingAgenciesEnhanced2,
  charterServicesManagement: images.IncomingAgenciesEnhanced3,
  channelManagerIntegration: images.IncomingAgenciesEnhanced4,
  integratedPaymentGateway: images.IncomingAgenciesEnhanced5,

  // HolidayRental
  streamlinedOperations: images.HolidayRentalEnhanced1,
  increasedRevenue: images.HolidayRentalEnhanced2,
  enhancedGuestSatisfaction: images.HolidayRentalEnhanced3,
  improvedPropertyMaintenance: images.HolidayRentalEnhanced4,
  dataDrivenDecisions: images.HolidayRentalEnhanced5,
  customizableBranding: images.HolidayRentalEnhanced6,
  secureFinancialManagement: images.HolidayRentalEnhanced7,

  // OnlineTravel
  turbochargedEfficiency: images.OnlineTravel1,
  enhancedUserExperience: images.OnlineTravel2,
  globalMarketReach: images.OnlineTravel3,
  costSavingsRevenueGrowth: images.OnlineTravel4,
  scalabilityFlexibility: images.OnlineTravel5,
  reliableSupportPartnership: images.OnlineTravel6,
  rapidTimeToMarket: images.OnlineTravel7,

  // WholesaleTour
  increasedEfficiency: images.WholesaleTour1,
  enhancedFlexibility: images.WholesaleTour2,
  globalReach: images.WholesaleTour3,
  improvedCustomerSatisfaction: images.WholesaleTour4,

  // Fallback images if needed
  // default1: images.Enhanced1,
  // default2: images.Enhanced2,
  // default3: images.Enhanced3,
  // default4: images.Enhanced4,
  // default5: images.Enhanced5,
};

export default function EnhancedServices({ turboId }: { turboId: string }) {
  const t = useTranslations(`turbo.EnhancedSec.${turboId}.EnhancedServices`);

  // Get all sections for the current turboId
  const sections = t.raw("sections") as Array<{
    id: string;
    title: string;
    features: Array<{
      title: string;
      description: string;
    }>;
  }>;

  return (
    <>
      <CustomContainer className="">
        {/* Header Section */}
        <div className="mx-auto px-4 pb-12 text-center">
          <h1 className="text-[#2d63cf] md:text-[30px] text-[22px] font-medium">
            {t("Title")}{" "}
            <span className="text-[#9c25a0] md:text-[30px] text-[22px] font-medium">
              {t("Subtitle")}
            </span>
          </h1>
        </div>

        {/* Services Grid - First Row */}
        <div className="flex flex-wrap gap-6 justify-center mb-6">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-white rounded-xl shadow-sm overflow-hidden w-full sm:w-[48%] lg:w-[30%]"
            >
              <div className="h-[150px] relative">
                <Image
                  src={ImageMap[section.id] || images.IncomingAgenciesEnhanced1}
                  alt={section.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {section.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {section.features[0]?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </CustomContainer>

      {/* Why Choose Section */}
      <WhyChooseSection turboId={turboId} />
    </>
  );
}
