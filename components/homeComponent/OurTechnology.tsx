import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";

const data = [
  {
    title: "home.our_technology.ai_machine_learning",
    description: "home.our_technology.ai_description",
  },
  {
    title: "home.our_technology.advanced_metaverse_technology",
    description: "home.our_technology.metaverse_description",
  },
  {
    title: "home.our_technology.htmx",
    description: "home.our_technology.htmx_description",
  },
  {
    title: "home.our_technology.data_operations_automation",
    description: "home.our_technology.data_operations_description",
  },
  {
    title: "home.our_technology.decentralized_servers",
    description: "home.our_technology.decentralized_servers_description",
  },
];

function OurTechnology() {
  return (
    <CustomContainer className="pt-[44px]">
      <div className="bg-[url(../../assets/images/OurTechnologyBg.jpg)] bg-cover bg-center relative rounded-[26px] overflow-hidden px-4 py-6 sm:p-[48px] min-[1920px]:px-[173px] 2xl:py-[50px]">
        <div className="inset-0 absolute bg-[#224A9A] opacity-[.8]"></div>
        <div className="relative z-10">
          <div className="text-center">
            <Title
              title="home.our_technology.explore_technology"
              titleColor="text-white"
              className="text-clamp-[22px,3.6vw,36px] font-medium"
            />
            <Description
              Description="home.our_technology.read_more_technologies"
              DescriptionColor="text-white"
              className="text-[12px]"
            />
          </div>
          {/* Responsive Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-24">
            {data.map((item, index) => (
              <Box
                key={index}
                title={item.title}
                description={item.description}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
}

export default OurTechnology;

interface BoxProps {
  title: string;
  description: string;
  index: number;
}

const Box = ({ title, description, index }: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1 lg:col-start-3",
    "lg:col-span-2 lg:row-span-1 lg:col-start-5",
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-2",
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2",
  ];

  return (
    <div
      className={`p-4 rounded-[16px] bg-[#EFF9FA] ${gridClasses[index]} sm:col-span-1 md:col-span-1 animations-box`}
    >
      <Title
        title={title}
        titleColor="text-primary"
        className="text-[16px] block font-bold mb-6"
      />
      <Description
        Description={description}
        DescriptionColor="text-grayText"
        className="text-[12px]"
      />
      <Button
        text="common.learn_more"
        className="mt-4 text-darkText border-[#D0D5DD] bg-white border"
      />
    </div>
  );
};
