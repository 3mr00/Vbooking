import React from "react";
import Hero from "@/components/WhyUsComponent/Hero";
import Advantages from "@/components/WhyUsComponent/Advantages";
import WhoWeEmpower from "@/components/WhyUsComponent/WhoWeEmpower";
import TechnologySection from "@/components/WhyUsComponent/TechnologySection";
import Testimonials from "@/components/WhyUsComponent/Testimonials";
import CallToAction from "@/components/WhyUsComponent/CallToAction";
import { CustomContainer } from "@/Wrapper/CustomContainer";

const page = () => {
  return (
    <>
      <CustomContainer className="bg-[rgba(247,252,252,1)] p-0 max-md:p-0">
        <Hero />
      </CustomContainer>
        <Advantages />
      <CustomContainer className="bg-[#d7efef]">
        <WhoWeEmpower />
      </CustomContainer>
      <TechnologySection />
      <Testimonials />
      <CustomContainer className="bg-[#d7efef]">
        <CallToAction />
      </CustomContainer>
    </>
  );
};

export default page;
