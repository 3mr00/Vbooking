// import WhyUs from '@/components/WhyUsComponent/WhyUs';
import { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TestimonialSection from "@/components/TravelManagement/TestimonialSection";
import HeroSection from "@/components/TravelManagement/HeroSection";
import WhatToExpect from "@/components/TravelManagement/WhatToExpect";
interface Card {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Why Choose Us | VBooking",
  description:
    "Discover why VBooking is your best choice for booking solutions.",
};

export default function WhyUsPage() {
  const t = useTranslations("TravelManagementPage");

  return (
    <>
      {/* Hero Section */}
      <HeroSection />
      {/* What to expect */}

      <WhatToExpect />
      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Supercharge Section */}
      <div className="bg-[#d7eff1] py-8 md:py-12">
        <div className="max-w-[879px] min-h-[202px] mx-auto bg-[#9c25a0] rounded-xl flex items-center p-4 md:p-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Transform Your Business Today
            </h2>
            <p className="text-white text-base md:text-lg mb-6 md:mb-8">
              Experience the difference that vbooking’s innovative features can
              make for your tourism business. Contact us to schedule a demo and
              see our tools in action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#2d63cf] hover:bg-[#2456b8] text-white rounded-full px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto">
                Request a Demo
              </button>
              <button className="bg-white text-[#9c25a0] hover:bg-gray-100 rounded-full px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
