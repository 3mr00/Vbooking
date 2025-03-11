import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";
import { CustomContainer } from "@/Wrapper/CustomContainer";

function OurNewsletter() {
  return (
    <CustomContainer className="py-[44px]">
      <div className="bg-primary w-[90%] lg:w-[879px] mx-auto text-center p-8 rounded-[24px]">
        <Title
          title="home.our_newsletter.join_our_newsletter"
          titleColor="text-white"
          className="text-center text-clamp-[22px,3.6vw,36px]"
        />
        <Description
          Description="home.our_newsletter.newsletter_description"
          DescriptionColor="text-white"
          className="text-center md:text-[.8rem] text-[.7rem]"
        />
        <div className="mt-8 mb-[8px] flex flex-wrap items-center justify-center gap-4">
          <input
            type="text"
            className="w-full lg:w-[432px] h-[44px] rounded-[25px] bg-white outline-none ps-2"
          />
          <Button
            text="home.our_newsletter.subscribe"
            className="bg-white text-primary px-4 py-2"
          />
        </div>
        <Description
          Description="home.our_newsletter.privacy_policy_care"
          DescriptionColor="text-white"
          className=" md:text-[.8rem] text-[.7rem]text-[.9rem]"
        />
      </div>
    </CustomContainer>
  );
}

export default OurNewsletter;
