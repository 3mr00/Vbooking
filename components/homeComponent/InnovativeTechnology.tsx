"use client";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import React, { useEffect, useState } from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { images } from "@/assets/images";
import Image, { StaticImageData } from "next/image";

const items = [
  {
    title: "InnovativeTechnology.html_to_htmx",
    description: "InnovativeTechnology.html_to_htmx_description",
    image: images.InnovativeTechnology1,
  },
  {
    title: "InnovativeTechnology.cold_calls_to_ai_automation",
    description: "InnovativeTechnology.ai_customer_support",
    image: images.InnovativeTechnology2,
  },
  {
    title: "InnovativeTechnology.2d_media_to_metaverse",
    description: "InnovativeTechnology.metaverse_transition",
    image: images.InnovativeTechnology3,
  },
  {
    title: "InnovativeTechnology.big_data_to_dataops",
    description: "InnovativeTechnology.dataops_approach",
    image: images.InnovativeTechnology4,
  },
  {
    title: "InnovativeTechnology.traditional_search_to_nlp",
    description: "InnovativeTechnology.nlp_search",
    image: images.InnovativeTechnology5,
  },
  {
    title: "InnovativeTechnology.centralized_to_decentralized_servers",
    description: "InnovativeTechnology.decentralized_servers",
    image: images.InnovativeTechnology6,
  },
];
function InnovativeTechnology() {
  return (
    <div className=" bg-[#D7EFF1]">
      <CustomContainer>
        <div className="text-center">
          <Title
            TransPage="home"
            title="common.our"
            titleColor="text-secondary"
            className="text-clamp-[22px,3.6vw,36px]"
          />{" "}
          <Title
            TransPage="home"
            title="InnovativeTechnology.innovative_technology"
            titleColor="text-primary"
            className="text-clamp-[22px,3.6vw,36px]"
          />
          <Description
            TransPage="home"
            Description="InnovativeTechnology.transformation_to_advanced_technology"
            DescriptionColor="text-grayText"
            className="md:text-[.8rem] text-[.7rem]"
          />
        </div>
        <div className="hidden sm:grid grid-cols-1 gap-4 lg:grid-cols-2 mt-6">
          {items.map((item, index) => (
            <Box key={index} {...item} />
          ))}
        </div>

        <div className="sm:hidden mt-6">
          <AccordionBox items={items} />
        </div>
      </CustomContainer>
    </div>
  );
}

export default InnovativeTechnology;

interface BoxProps {
  title: string;
  image: StaticImageData;
  description: string;
}
const Box = ({ title, image, description }: BoxProps) => {
  return (
    <div className="bg-white p-[16px] flex  gap-[16px] rounded-lg">
      <div className="w-[8rem] h-auto relative overflow-hidden rounded-xl">
        <Image src={image} alt={title} fill className="   object-cover" />
      </div>
      <div className="w-[222px] min-[450px]:w-full">
        <Title
          TransPage="home"
          title={title}
          titleColor="text-secondary"
          className="text-[19px] font-semibold text-wrap"
        />
        <Description
          TransPage="home"
          Description={description}
          DescriptionColor="text-grayText"
          className="text-[10px] font-normal text-wrap"
        />
      </div>
    </div>
  );
};

const AccordionBox = ({ items }: any) => {
  const [openIndex, setOpenIndex] = useState(0);

  // Automatically cycle through items every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setOpenIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, 4000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [items.length]);

  // Manual toggle functionality
  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <div className="w-full">
      {items.map((item: BoxProps, index: number) => (
        <div key={index} className="mb-3 h-auto">
          {/* Header - Clickable to toggle manually */}
          <div
            className={`cursor-pointer bg-white px-6 py-4 rounded-[16px]  ${
              openIndex === index ? "hidden" : ""
            }`}
            onClick={() => handleToggle(index)}
          >
            <Title
              TransPage="home"
              title={item.title}
              titleColor="text-secondary"
            />
          </div>

          {/* Content - Visible if openIndex matches the current index */}
          <div
            className={`accordion-content rounded-[16px] transition delay-150 duration-300 ease-in-out ${
              openIndex === index ? "open" : "hidden"
            }`}
          >
            <Box {...item} />
          </div>
        </div>
      ))}
    </div>
  );
};
