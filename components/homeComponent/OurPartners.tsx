import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { images } from "@/assets";
import Image from "next/image";

const data = [
  images.OurPartners1,
  images.OurPartners2,
  images.OurPartners3,
  images.OurPartners4,
];
function OurPartners() {
  return (
    <CustomContainer className="py-32">
      <div className="relative z-10">
        <div className="text-center">
          <Title
            title="common.our"
            titleColor="text-secondary"
            className="text-clamp-[22px,3.6vw,36px]"
          />{" "}
          <Title
            title="home.our_partners.partners"
            titleColor="text-primary"
            className="text-clamp-[22px,3.6vw,36px]"
          />
          <Description
            Description="home.our_partners.partners_description"
            DescriptionColor="text-grayText"
            className="md:text-[.8rem] text-[.7rem]"
          />
          <Description
            Description="home.our_partners.inclusive_ecosystem"
            DescriptionColor="text-grayText"
            className="md:text-[.8rem] text-[.7rem]"
          />
        </div>
        <div className="grid grid-cols-2 gap-[0.5rem] mt-4 xl:grid-cols-4">
          {data.map((item, index) => (
            <div key={index}>
              <Image src={item} alt="Our Partners" priority />
            </div>
          ))}
        </div>
      </div>
    </CustomContainer>
  );
}

export default OurPartners;
