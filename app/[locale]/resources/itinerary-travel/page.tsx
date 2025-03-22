import { useTranslations } from "next-intl";
import AutoScrollFeatures from "@/components/ItineraryTravelComponent/AutoScrollFeatures";
import PowerOfTuRbo from "@/components/ItineraryTravelComponent/PowerOfTuRbo";
import FeaturesSection from "@/components/ItineraryTravelComponent/FeaturesSection";
import HeroSection from "@/components/ItineraryTravelComponent/HeroSection";
import ProductivityChanges from "@/components/ItineraryTravelComponent/ProductivityChanges";
import CallToAction from "@/components/ItineraryTravelComponent/CallToAction";
import WhyTuRbo from "@/components/ItineraryTravelComponent/WhyTuRbo";
import DMCsCustomers from "@/components/ItineraryTravelComponent/DMCsCustomers";
import SuperchargeSection from "@/components/ItineraryTravelComponent/SuperchargeSection";
import { CustomContainer } from "@/Wrapper/CustomContainer";
export default function JinTravelerPage() {
  const t = useTranslations("Traveler");

  return (
    <>
      <CustomContainer className="bg-[#f7fcfc] p-0 my-0 relative overflow-hidden">
        {/* Hero Section */}
        <HeroSection />
      </CustomContainer>

      <CustomContainer className="bg-[#daf0f2] py-0">
        {/* Power of TuRbo Section */}
        <PowerOfTuRbo />
        {/* Features Section */}
        <FeaturesSection />
      </CustomContainer>

      {/* Auto-scrolling Features Section */}
      <AutoScrollFeatures />

      <CustomContainer className="bg-[#daf0f2] py-0">
        {/* Productivity Changes Section */}
        <ProductivityChanges />
        {/* Call to Action Section */}
        <CallToAction />

        {/* Why TuRbo Section */}

        <WhyTuRbo />

        {/* DMCs Customers Section */}
        <DMCsCustomers />

        {/* Supercharge Section */}
        <SuperchargeSection />
      </CustomContainer>
    </>
  );
}
