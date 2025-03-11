import React from "react";
import Title from "../common/Title";
import Description from "../common/Description";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import {
  ExhibitionCentersIcon,
  NetworkingPlatformIcon,
  VBookingAcademyIcon,
  VBookingHubIcon,
  WorldTravelLibraryIcon,
} from "@/icons";
import ScrollableCards from "../common/ScrollableCards";
import Button from "../common/Button";

const data = [
  {
    title: "home.travel_community.networkingPlatform.title",
    description: "home.travel_community.networkingPlatform.description",
    subDescription: "home.travel_community.networkingPlatform.subDescription",
    icon: <NetworkingPlatformIcon />,
    buttons: [
      {
        title: "home.travel_community.networkingPlatform.buttons.traveler",
      },
      {
        title: "home.travel_community.networkingPlatform.buttons.travelExpert",
      },
      {
        title: "home.travel_community.networkingPlatform.buttons.travelAgent",
      },
    ],
  },
  {
    title: "home.travel_community.vbookingAcademy.title",
    description: "home.travel_community.vbookingAcademy.description",
    icon: <VBookingAcademyIcon />,
    buttons: [
      {
        title: "home.travel_community.vbookingAcademy.buttons.enroll",
      },
    ],
  },
  {
    title: "home.travel_community.exhibitionCenters.title",
    description: "home.travel_community.exhibitionCenters.description",
    subDescription: "home.travel_community.exhibitionCenters.subDescription",
    icon: <ExhibitionCentersIcon />,
    buttons: [
      {
        title: "home.travel_community.exhibitionCenters.buttons.register",
      },
    ],
  },
  {
    title: "home.travel_community.worldTravelLibrary.title",
    description: "home.travel_community.worldTravelLibrary.description",
    icon: <WorldTravelLibraryIcon />,
    buttons: [
      {
        title: "home.travel_community.worldTravelLibrary.buttons.explore",
      },
    ],
  },
  {
    title: "home.travel_community.vbookingHub.title",
    description: "home.travel_community.vbookingHub.description",
    icon: <VBookingHubIcon width={100} height={100} />,
    buttons: [
      {
        title: "home.travel_community.vbookingHub.buttons.access",
      },
    ],
  },
];

function TravelCommunity() {
  return (
    <CustomContainer className="bg-[url(../../assets/images/OurCommunity.png)] bg-cover bg-center pt-[64px] mt-[32px] relative pb-[3rem]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#e2f4f5] via-[#F9DBE8] to-[#DBF1F2] opacity-55"></div>
      <div className="relative z-10">
        <div className="text-center">
          <p>
            <Title
              title="home.travel_community.bringing"
              titleColor="text-secondary"
              className="text-clamp-[22px,3.6vw,36px]"
            />
            <Title
              title="home.travel_community.travel"
              titleColor="text-primary"
              className="text-clamp-[22px,3.6vw,36px]"
            />
            <Title
              title="home.travel_community.together"
              titleColor="text-secondary"
              className="text-clamp-[22px,3.6vw,36px]"
            />
          </p>
          <Description
            Description="home.travel_community.subtitle"
            DescriptionColor="text-grayText"
            className="text-[12px]"
          />
          <Description
            Description="home.travel_community.description"
            DescriptionColor="text-grayText"
            className="text-[12px]"
          />
        </div>
        <div className="hidden sm:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-16 mt-24">
          {data.map((item, index) => (
            <Box
              key={index}
              title={item.title}
              description={item.description}
              subDescription={item.subDescription}
              icon={item.icon}
              index={index}
              buttons={item.buttons}
            />
          ))}
        </div>

        <div className="block sm:hidden mt-24">
          <ScrollableCards
            options={data}
            renderCard={(option, index) => (
              <Box
                index={index}
                {...option}
                className="w-[340px] min-h-[450px]"
              />
            )}
          />
        </div>
      </div>
    </CustomContainer>
  );
}

export default TravelCommunity;
interface BoxProps {
  title: string;
  description: string;
  subDescription?: string;
  icon: React.ReactNode;
  index: number;
  className?: string;
  buttons: { title: string }[];
}
const Box = ({
  title,
  description,
  subDescription,
  icon,
  index,
  className,
  buttons,
}: BoxProps) => {
  const gridClasses = [
    "lg:col-span-2 lg:row-span-1",
    "lg:col-span-2 lg:row-span-1 lg:col-start-3",
    "lg:col-span-2 lg:row-span-1 lg:col-start-5",
    "lg:col-span-2 lg:row-span-1 lg:col-start-2 lg:row-start-2",
    "lg:col-span-2 lg:row-span-1 lg:col-start-4 lg:row-start-2",
  ];
  return (
    <div
      className={`p-24 rounded-[24px] bg-white space-y-8 ${gridClasses[index]} sm:col-span-1 md:col-span-1 ${className} flex flex-col justify-between h-full`}
    >
      <div className="flex-grow">
        {icon}
        <Title
          title={title}
          titleColor="text-primary"
          className="text-[22px]"
        />
        <Description
          Description={description}
          DescriptionColor="text-grayText"
          className="text-[14px]"
        />
        {subDescription && (
          <Description
            Description={subDescription}
            DescriptionColor="text-secondary h-[24px]"
            className="text-[14px] mt-20"
          />
        )}
      </div>

      <div className="flex flex-wrap gap-3 mt-8">
        {buttons.map((button, index) => (
          <Button
            key={index}
            className={`bg-white text-primary border border-primary flex-1 rounded-[50px] text-[12px] md:text-[14px] md:px-8 px-[1rem] py-2 ${
              index === buttons.length - 1 ? "flex-auto md:flex-1" : ""
            }`}
            text={button.title}
          />
        ))}
      </div>
    </div>
  );
};
