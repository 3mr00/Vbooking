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
    <div className=" bg-[#D7EFF1]">
      <CustomContainer>
        <div className="relative z-10">
          <div className="text-center">
            <Title
              title="common.our"
              titleColor="text-secondary"
              className="md:text-[32px] text-[22px] font-medium"
            />{" "}
            <Title
              title="home.our_partners.partners"
              titleColor="text-primary"
              className="md:text-[32px] text-[22px] font-medium"
            />
            <Description
              Description="home.our_partners.partners_description"
              DescriptionColor="text-grayText"
              className="md:text-[.8rem] text-[.7rem]"
            />
            <Description
              Description="home.our_partners.inclusive_ecosystem"
              DescriptionColor="text-grayText"
              className="md:block hidden md:text-[.8rem] text-[.5rem]"
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
    </div>
  );
}

export default OurPartners;
