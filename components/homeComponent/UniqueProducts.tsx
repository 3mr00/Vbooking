import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import {
  AITravelAgentIcon,
  EngagementHolidayBuilderIcon,
  LiveBookingDeskIcon,
  OperatorAppIcon,
  TuRboSearchEngineIcon,
  VBookingHubIcon,
} from "@/icons";
import ScrollableCards from "../common/ScrollableCards";
import { Link } from "@/navigation";

const UniqueProductsItems = [
  {
    title: "unique_products.turbo_search_engine",
    icon: <TuRboSearchEngineIcon />,
    Link: "/products/EngagementPackage",
  },
  {
    title: "unique_products.ai_travel_agent",
    icon: <AITravelAgentIcon />,
    Link: "/products/AiTravel",
  },
  {
    title: "unique_products.engagement_holiday_builder",
    icon: <EngagementHolidayBuilderIcon />,
    Link: "/products/EngagementPackage",
  },
  {
    title: "unique_products.turbo_travel_crm",
    icon: <TuRboSearchEngineIcon />,
    Link: "/products/TurboBooking",
  },
  {
    title: "unique_products.live_booking_desk",
    icon: <LiveBookingDeskIcon />,
    Link: "/products/LiveBooking",
  },
  {
    title: "unique_products.operator_app",
    icon: <OperatorAppIcon />,
    Link: "/products/OperatorApp",
  },
  {
    title: "unique_products.vbooking_hub",
    icon: <VBookingHubIcon />,
    Link: "/products/TurboBooking",
  },
];

function UniqueProducts() {
  return (
    <div className=" bg-gradient-to-b from-[#F7FCFC] to-[#D7EFF1]">
      <CustomContainer>
        <Title
          TransPage="home"
          title="common.our"
          titleColor="text-secondary"
          className="md:text-[28px] text-[22px] font-medium"
        />
        <Title
          TransPage="home"
          title="unique_products.unique_products"
          titleColor="text-primary"
          className="md:text-[28px] text-[22px] font-medium"
        />
        <Description
          TransPage="home"
          Description="unique_products.crafting_unique_products_from_innovative_technology"
          DescriptionColor="text-grayText"
          className="md:text-[.8rem] text-[.7rem]"
        />
        <div className="hidden sm:flex flex-wrap gap-[0.5rem] mt-6">
          {UniqueProductsItems.map((item, index) => (
            <Box key={index} title={item.title} icon={item.icon} />
          ))}
        </div>

        <div className="block sm:hidden mt-6">
          <ScrollableCards
            options={UniqueProductsItems}
            renderCard={(option) => (
              <Box title={option.title} icon={option.icon} />
            )}
          />
        </div>
      </CustomContainer>
    </div>
  );
}

export default UniqueProducts;

const Box = ({ title, icon }: any) => {
  return (
    <Link
      href={"/products/1"}
      className="animations-box bg-white p-[16px] rounded-[16px] flex flex-col justify-center items-center gap-4 flex-1 w-[144px] md:w-[174px]  h-[174px] "
    >
      {icon}
      <Title
        TransPage="home"
        title={title}
        titleColor="text-secondary"
        className="text-wrap text-center font-semibold bg-gradient-to-r from-[#1C3D80] to-[#4676D7] inline-block text-transparent bg-clip-text text-[14px]"
      />
    </Link>
  );
};
