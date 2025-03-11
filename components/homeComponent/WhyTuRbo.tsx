import {
  AiToolIcon,
  AutomationIcon,
  BookingManagementIcon,
  HolidayPackagesIcon,
  ItineraryBuilderIcon,
  OnePlatFormIcon,
  QuotationSystemIcon,
} from "@/icons";
import InventoryManagementIcon from "@/icons/src/inventoryManagement";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Description from "../common/Description";
import Title from "../common/Title";

const items = [
  {
    title: "home.why_turbo.all_in_one_platform",
    description: "home.why_turbo.manage_travel_business",
    icon: <OnePlatFormIcon />,
  },
  {
    title: "home.why_turbo.advanced_itinerary_builder",
    description: "home.why_turbo.design_travel_plans",
    icon: <ItineraryBuilderIcon />,
  },
  {
    title: "home.why_turbo.real_time_booking_management",
    description: "home.why_turbo.stay_updated_availability",
    icon: <BookingManagementIcon />,
  },
  {
    title: "home.why_turbo.dynamic_quotation_system",
    description: "home.why_turbo.create_customize_quotes",
    icon: <QuotationSystemIcon />,
  },
  {
    title: "home.why_turbo.engaging_holiday_packages",
    description: "home.why_turbo.offer_customizable_travel",
    icon: <HolidayPackagesIcon />,
  },
  {
    title: "home.why_turbo.supplier_inventory_management",
    description: "home.why_turbo.streamline_operations",
    icon: <InventoryManagementIcon />,
  },
  {
    title: "home.why_turbo.automation_efficiency",
    description: "home.why_turbo.save_time_automation",
    icon: <AutomationIcon />,
  },
  {
    title: "home.why_turbo.ai_powered_tools",
    description: "home.why_turbo.enhance_efficiency_with_ai",
    icon: <AiToolIcon />,
  },
];
function WhyTuRbo() {
  return (
    <CustomContainer>
      <div className="bg-[#F8E6F9] p-8 rounded-[20px]">
        <div className="text-center">
          <Title
            title="common.our"
            titleColor="text-secondary"
            className="text-clamp-[22px,3.6vw,36px]"
          />{" "}
          <Title
            title="common.turbo"
            titleColor="text-primary"
            className="text-clamp-[22px,3.6vw,36px]"
          />
          <Description
            Description="home.why_turbo.empower_business_platform"
            DescriptionColor="text-grayText"
            className="md:text-[.8rem] text-[.5rem]"
          />
          <Description
            Description="home.why_turbo.streamline_reservations"
            DescriptionColor="text-grayText"
            className="md:text-[.8rem] text-[.5rem]"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4 mt-4">
          {items.map((item, index) => (
            <Box key={index} index={index} {...item} />
          ))}
        </div>
      </div>
    </CustomContainer>
  );
}

export default WhyTuRbo;

interface BoxProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}
const Box = ({ title, description, icon, index }: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1", // div1
    "lg:col-span-2 lg:row-span-1 lg:col-start-3", // div2
    "lg:col-span-2 lg:row-span-1 lg:col-start-5", // div3
    "lg:col-span-2 lg:row-span-1 lg:col-start-1 lg:row-start-2", // div4
    "lg:col-span-2 lg:row-span-1 lg:col-start-3 lg:row-start-2", // div5
    "lg:col-span-2 lg:row-span-1 lg:col-start-5 lg:row-start-2", // div6
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-3", // div7
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-3", // div8
  ];
  return (
    <div
      className={`flex items-center flex-col text-center ${gridClasses[index]} space-x-4  bg-white p-4 rounded-[20px] sm:col-span-1 md:col-span-1 animations-box`}
    >
      <div>{icon}</div>
      <div className="mt-4">
        <Title
          title={title}
          titleColor="text-secondary"
          className="text-[18px] mb-8 font-semibold"
        />
        <Description
          Description={description}
          DescriptionColor="text-grayText md:text-[.8rem] text-[.7rem]"
        />
      </div>
    </div>
  );
};
