import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Button from "../common/Button";
import { Link } from "@/navigation";

const data = [
  {
    title: "our_technology.ai_machine_learning",
    description: "our_technology.ai_description",
    url: "/technology/AlAndMachineLearning ",
  },
  {
    title: "our_technology.advanced_metaverse_technology",
    description: "our_technology.metaverse_description",
    url: "/technology/Metaverse",
  },
  {
    title: "our_technology.htmx",
    description: "our_technology.htmx_description",
    url: "/technology/HTMX",
  },
  {
    title: "our_technology.data_operations_automation",
    description: "our_technology.data_operations_description",
    url: "/technology/Automation",
  },
  {
    title: "our_technology.decentralized_servers",
    description: "our_technology.decentralized_servers_description",
    url: "/technology/DecentraliseServers",
  },
];

function OurTechnology() {
  return (
    <div className=" bg-[#D7EFF1]">
      <CustomContainer className="pt-[44px]">
        <div className="bg-[url(../../assets/images/image/OurTechnologyBg.jpg)] bg-cover bg-center relative rounded-[26px] overflow-hidden px-4 py-6 sm:p-[48px] min-[1920px]:px-[173px] 2xl:py-[50px]">
          <div className="inset-0 absolute bg-[#224A9A] opacity-[.8]"></div>
          <div className="relative z-10">
            <div className="text-center">
              <Title
                TransPage="home"
                title="our_technology.explore_technology"
                titleColor="text-white"
                className="text-clamp-[22px,3.6vw,36px] font-medium"
              />
              <Description
                TransPage="home"
                Description="our_technology.read_more_technologies"
                DescriptionColor="text-white"
                className="md:text-[.8rem] text-[.5rem]"
              />
            </div>
            {/* Responsive Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-6">
              {data.map((item, index) => (
                <Box
                  key={index}
                  title={item.title}
                  description={item.description}
                  url={item.url}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}

export default OurTechnology;

interface BoxProps {
  title: string;
  description: string;
  index: number;
  url: string;
}

const Box = ({ title, description, index, url }: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1 lg:col-start-3",
    "lg:col-span-2 lg:row-span-1 lg:col-start-5",
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-2",
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2",
  ];

  return (
    <div
      className={`p-4 rounded-[16px] bg-[#EFF9FA] ${gridClasses[index]} sm:col-span-1 md:col-span-1 animations-box flex flex-col justify-between`}
    >
      <Title
        TransPage="home"
        title={title}
        titleColor="text-primary"
        className="text-[16px] block font-bold mb-6"
      />
      <Description
        TransPage="home"
        Description={description}
        DescriptionColor="text-grayText"
        className="md:text-[.8rem] text-[.7rem]"
      />
      <Link href={url}>
        <Button
          text="common.learn_more"
          className="mt-4 text-darkText border-[#D0D5DD] bg-white border px-4 py-2"
        />
      </Link>
    </div>
  );
};
