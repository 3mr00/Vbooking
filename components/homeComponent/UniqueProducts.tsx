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

const UniqueProductsItems = [
  {
    title: "home.unique_products.turbo_search_engine",
    icon: <TuRboSearchEngineIcon />,
  },
  {
    title: "home.unique_products.ai_travel_agent",
    icon: <AITravelAgentIcon />,
  },
  {
    title: "home.unique_products.engagement_holiday_builder",
    icon: <EngagementHolidayBuilderIcon />,
  },
  {
    title: "home.unique_products.turbo_travel_crm",
    icon: <TuRboSearchEngineIcon />,
  },
  {
    title: "home.unique_products.live_booking_desk",
    icon: <LiveBookingDeskIcon />,
  },
  {
    title: "home.unique_products.operator_app",
    icon: <OperatorAppIcon />,
  },
  {
    title: "home.unique_products.vbooking_hub",
    icon: <VBookingHubIcon />,
  },
];

function UniqueProducts() {
  return (
    <CustomContainer className="pt-16">
      <Title
        title="common.our"
        titleColor="text-secondary"
        className="text-clamp-[22px,3.6vw,28px]"
      />
      <Title
        title="home.unique_products.unique_products"
        titleColor="text-primary"
        className="text-clamp-[22px,3.6vw,28px]"
      />
      <Description
        Description="home.unique_products.crafting_unique_products_from_innovative_technology"
        DescriptionColor="text-grayText"
        className="text-clamp-[12px,3vw,16px]"
      />
      <div className="hidden sm:flex flex-wrap gap-24 mt-24">
        {UniqueProductsItems.map((item, index) => (
          <Box key={index} title={item.title} icon={item.icon} />
        ))}
      </div>

      <div className="block sm:hidden mt-24">
        <ScrollableCards
          options={UniqueProductsItems}
          renderCard={(option) => (
            <Box title={option.title} icon={option.icon} />
          )}
        />
      </div>
    </CustomContainer>
  );
}

export default UniqueProducts;

const Box = ({ title, icon }: any) => {
  return (
    <div className="animations-box bg-white p-[16px] rounded-[16px] flex flex-col justify-center items-center gap-4 flex-1 w-[144px] md:w-[174px]  h-[174px] ">
      {icon}
      <Title
        title={title}
        titleColor="text-secondary"
        className="text-wrap text-center font-semibold bg-gradient-to-r from-[#1C3D80] to-[#4676D7] inline-block text-transparent bg-clip-text text-[14px]"
      />
    </div>
  );
};
