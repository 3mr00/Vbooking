import ContactFormSection from "@/components/ContactUsComponent/ContactFormSection";
import HeroSection from "@/components/ContactUsComponent/HeroSection";
import { CustomContainer } from "@/Wrapper/CustomContainer";

export default function ContactFormPage() {
  return (
    <>
      <HeroSection />
      <CustomContainer className="bg-[#fff]  md:bg-[#f7fcfc] ">
        <ContactFormSection />
      </CustomContainer>
    </>
  );
}
