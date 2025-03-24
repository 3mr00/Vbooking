"use client";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import React, { useEffect, useState } from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { images } from "@/assets/images";
import Image, { StaticImageData } from "next/image";
import SlideByOne from "../Swiper/SlideByOne";

const items = [
  {
    id: 1,
    title: "InnovativeTechnology.html_to_htmx",
    description: "InnovativeTechnology.html_to_htmx_description",
    image: images.InnovativeTechnology1,
  },
  {
    id: 2,

    title: "InnovativeTechnology.cold_calls_to_ai_automation",
    description: "InnovativeTechnology.ai_customer_support",
    image: images.InnovativeTechnology2,
  },
  {
    id: 3,

    title: "InnovativeTechnology.2d_media_to_metaverse",
    description: "InnovativeTechnology.metaverse_transition",
    image: images.InnovativeTechnology3,
  },
  {
    id: 4,

    title: "InnovativeTechnology.big_data_to_dataops",
    description: "InnovativeTechnology.dataops_approach",
    image: images.InnovativeTechnology4,
  },
  {
    id: 5,

    title: "InnovativeTechnology.traditional_search_to_nlp",
    description: "InnovativeTechnology.nlp_search",
    image: images.InnovativeTechnology5,
  },
  {
    id: 6,

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
          <SlideByOne
            options={items.map((item, index) => ({
              id: item.id,
              content: <BoxMob key={index} {...item} />,
            }))}
            slideBy={1}
          />
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

const BoxMob = ({ title, image, description }: BoxProps) => {
  return (
    <div className="bg-white p-[16px] flex gap-[16px] rounded-lg">
      {/* الصورة للشاشات الكبيرة */}
      <div className="md:block hidden w-[8rem] h-auto relative overflow-hidden rounded-xl flex-shrink-0">
        <Image src={image} alt={title} fill className="object-cover" />
      </div>

      {/* المحتوى */}
      <div className="flex flex-col gap-3 flex-grow">
        {/* الصورة للشاشات الصغيرة */}
        <div className="md:hidden w-full h-[12rem] relative overflow-hidden rounded-xl">
          <Image src={image} alt={title} fill className="object-cover" />
        </div>

        <div className=" w-full h-[6rem] ">
          {/* العنوان */}
          <Title
            TransPage="home"
            title={title}
            titleColor="text-secondary"
            className="text-[15px] font-semibold text-wrap mb-4"
          />

          {/* الوصف */}
          <Description
            TransPage="home"
            Description={description}
            DescriptionColor="text-grayText"
            className="text-[10px] font-normal text-wrap"
          />
        </div>
      </div>
    </div>
  );
};

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
