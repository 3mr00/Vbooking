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

export default function JinTravelerPage() {
  const t = useTranslations("Traveler");

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <HeroSection />

      {/* Power of TuRbo Section */}
      <PowerOfTuRbo />

      {/* Features Section */}
      <FeaturesSection />

      {/* Auto-scrolling Features Section */}
      <div className="bg-[#d7eff1] w-full">
        <AutoScrollFeatures />
      </div>

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
    </div>
  );
}
