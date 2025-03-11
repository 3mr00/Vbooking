import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Image, { StaticImageData } from "next/image";
import Button from "../common/Button";
import { images } from "@/assets";
import ScrollableCards from "../common/ScrollableCards";

const items = [
  {
    title: "home.booking_suite.wholesale_tour_operators_b2b_b2c",
    image: images.laptop,
    description: "home.booking_suite.automate_operations_manage_inventories",
  },
  {
    title: "home.booking_suite.incoming_agencies_dmcs",
    image: images.laptop,
    description:
      "home.booking_suite.improve_customer_satisfaction_with_fast_searches",
  },
  {
    title: "home.booking_suite.online_travel_agencies_otas",
    image: images.laptop,
    description:
      "home.booking_suite.improve_customer_satisfaction_with_fast_searches",
  },
  {
    title: "home.booking_suite.holiday_rental_managers",
    image: images.laptop,
    description:
      "home.booking_suite.streamline_bookings_pricing_guest_communication",
  },
];

function TurboBookingSuite() {
  return (
    <CustomContainer className="pt-[44px]">
      <div className="text-center">
        <Title
          title="common.turbo"
          titleColor="text-secondary"
          className="text-clamp-[22px,3.6vw,36px]"
        />{" "}
        <Title
          title="home.booking_suite.booking_suite"
          titleColor="text-primary"
          className="text-clamp-[22px,3.6vw,36px]"
        />
        <Description
          Description="home.booking_suite.improve_client_experiences"
          DescriptionColor="text-grayText"
          className="md:text-[.8rem] text-[.7rem]"
        />
        <Description
          Description="home.booking_suite.empower_business"
          DescriptionColor="text-grayText"
          className="md:text-[.8rem] text-[.7rem]"
        />
      </div>
      <div className="hidden sm:grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 mt-6">
        {items.map((item, index) => (
          <Box key={index} {...item} />
        ))}
      </div>

      <div className="block sm:hidden mt-6">
        <ScrollableCards
          options={items}
          renderCard={(option) => (
            <Box className="w-[338px] h-[450px]" {...option} />
          )}
        />
      </div>
    </CustomContainer>
  );
}

export default TurboBookingSuite;

interface BoxProps {
  title: string;
  image: StaticImageData;
  description: string;
  className?: string;
}

const Box = ({ title, image, description, className }: BoxProps) => {
  return (
    <div
      className={`bg-white p-[16px] flex items-center justify-between flex-col rounded-[16px] ${className}`}
    >
      <Image src={image} alt={title} className="mb-4" />

      <Title
        title={title}
        titleColor="text-secondary"
        className="text-wrap text-center font-semibold text-clamp-[16px,3vw,19px]"
      />
      <Description
        Description={description}
        DescriptionColor="text-grayText"
        className="text-wrap text-center md:text-[.8rem] text-[.7rem]"
      />
      <div className="mt-6 flex gap-3">
        <Button
          text="common.learn_more"
          className="px-4 py-2 border text-clamp-[16px,3vw,16px] border-[#D0D5DD] text-black bg-white"
        />
        <Button
          text="common.book_demo"
          className="text-white bg-primary px-4 py-2"
        />
      </div>
    </div>
  );
};
