// import WhyUs from '@/components/WhyUsComponent/WhyUs';
import { Metadata } from "next";
import TestimonialSection from "@/components/TravelManagement/TestimonialSection";
import HeroSection from "@/components/TravelManagement/HeroSection";
import WhatToExpect from "@/components/TravelManagement/WhatToExpect";
import SuperchargeSection from "@/components/TravelManagement/SuperchargeSection";
import { CustomContainer } from "@/Wrapper/CustomContainer";

export const metadata: Metadata = {
  title: "Why Choose Us | VBooking",
  description:
    "Discover why VBooking is your best choice for booking solutions.",
};

export default function WhyUsPage() {
  return (
    <>
      <CustomContainer className="bg-[#f7fcfc] p-0 my-0 relative overflow-hidden">
        {/* Hero Section */}
        <HeroSection />
      </CustomContainer>

      <CustomContainer className="bg-[#daf0f2] py-0">
        {/* What to expect */}
        <WhatToExpect />
        {/* Testimonials Section */}
      </CustomContainer>

      <TestimonialSection />
      <CustomContainer className="bg-[#daf0f2] py-0">
        {/* Supercharge Section */}
        <SuperchargeSection />
      </CustomContainer>
    </>
  );
}
