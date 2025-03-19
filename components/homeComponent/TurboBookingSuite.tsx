import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import Image, { StaticImageData } from "next/image";
import Button from "../common/Button";
import { images } from "@/assets/images";
import ScrollableCards from "../common/ScrollableCards";
import ButtonShadcn from "../common/Shadcn/ButtonShadcn";
import { Link } from "@/navigation";

const items = [
  {
    title: "booking_suite.wholesale_tour_operators_b2b_b2c",
    image: images.laptop,
    description: "booking_suite.automate_operations_manage_inventories",
    url: "/turbo/1",
  },
  {
    title: "booking_suite.incoming_agencies_dmcs",
    image: images.laptop,
    description:
      "booking_suite.improve_customer_satisfaction_with_fast_searches",
    url: "/turbo/2",
  },
  {
    title: "booking_suite.online_travel_agencies_otas",
    image: images.laptop,
    description:
      "booking_suite.improve_customer_satisfaction_with_fast_searches",
    url: "/turbo/3",
  },
  {
    title: "booking_suite.holiday_rental_managers",
    image: images.laptop,
    description:
      "booking_suite.streamline_bookings_pricing_guest_communication",
    url: "/turbo/4",
  },
];

function TurboBookingSuite() {
  return (
    <section className="bg-radial ">
      <CustomContainer className="pt-[44px]">
        <div className="text-center">
          <Title
            TransPage="home"
            title="common.turbo"
            titleColor="text-secondary"
            className="md:text-[36px] text-[22px] font-medium"
          />{" "}
          <Title
            TransPage="home"
            title="booking_suite.booking_suite"
            titleColor="text-primary"
            className="md:text-[36px] text-[22px] font-medium"
          />
          <Description
            TransPage="home"
            Description="booking_suite.improve_client_experiences"
            DescriptionColor="text-grayText"
            className="text-[12px] "
          />
          <Description
            TransPage="home"
            Description="booking_suite.empower_business"
            DescriptionColor="text-grayText"
            className="md:block hidden md:text-[.8rem] text-[.7rem]"
          />
        </div>
        <div className="hidden sm:grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 mt-6">
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
    </section>
  );
}

export default TurboBookingSuite;

interface BoxProps {
  title: string;
  image: StaticImageData;
  description: string;
  className?: string;
  url: string;
}

const Box = ({ title, image, description, className, url }: BoxProps) => {
  return (
    <div
      className={`bg-white p-[16px] flex items-center justify-between flex-col rounded-[16px] ${className}`}
    >
      <Image src={image} alt={title} className="mb-4" />

      <Title
        TransPage="home"
        title={title}
        titleColor="text-secondary"
        className="text-wrap text-center font-semibold text-clamp-[16px,3vw,19px]"
      />
      <Description
        TransPage="home"
        Description={description}
        DescriptionColor="text-grayText"
        className="text-wrap text-center md:text-[.8rem] text-[.7rem]"
      />
      <div className="mt-6 flex gap-3">
        <Link href={url}>
          <ButtonShadcn
            TransPage="home"
            style="outline"
            text="common.learn_more"
            className="px-4 py-2 border text-clamp-[16px,3vw,16px] border-[#D0D5DD] text-black bg-white"
          />
        </Link>
        <Link href={url}>
          <ButtonShadcn
            TransPage="home"
            text="common.book_demo"
            className="text-white bg-primary px-4 py-2"
          />
        </Link>
      </div>
    </div>
  );
};
