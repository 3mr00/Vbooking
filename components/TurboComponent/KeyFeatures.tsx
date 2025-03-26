"use client";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { useTranslations } from "next-intl"; // or 'react-i18next'
import { icons } from "@/assets/icons";

// Assuming you have a mapping of id to icons
interface Feature {
  title: string;
  points: string[];
}

interface Section {
  title: string;
  id: string;
  features: Record<string, Feature>; // Use Record for dynamic keys
}

interface KeyFeaturesData {
  title: string;
  sections: Record<string, Section>; // Use Record for dynamic keys
}

const iconMap: Record<string, any> = {
  // IncomingAgencies
  inventory: icons.IncomingAgencies1,
  booking: icons.IncomingAgencies2,
  control: icons.IncomingAgencies3,
  operations: icons.IncomingAgencies4,
  functionalities: icons.IncomingAgencies5,

  // HolidayRental
  propertymanagement: icons.HolidayRental1,
  guestcommunication: icons.HolidayRental2,
  revenue: icons.HolidayRental3,
  maintenance: icons.HolidayRental4,
  marketing: icons.HolidayRental5,
  payment: icons.HolidayRental6,
  customization: icons.HolidayRental7,

  //OnlineTravel
  rapiddeployment: icons.OnlineTravel1,
  suppliernetwork: icons.OnlineTravel2,
  multilingualsupport: icons.OnlineTravel3,
  automatedprocesses: icons.OnlineTravel4,
  travelmodules: icons.OnlineTravel5,
  paymentfinance: icons.OnlineTravel6,
  backoffice: icons.OnlineTravel7,
  scalability: icons.OnlineTravel8,
  bookingengine: icons.OnlineTravel9,
  customersupport: icons.OnlineTravel10,

  // inventorymanagement
  // suppliersportal
  // advancedbooking
  // fullcontrol
  // Add more mappings as needed
};

const KeyFeatures = ({ turboId }: { turboId: string }) => {
  const t = useTranslations("turbo.KeyFeatures"); // Use the namespace for KeyFeatures

  // Get the relevant data based on turboId
  const data = t.raw(turboId) as KeyFeaturesData; // Cast the data to the defined type

  if (!data) {
    return null;
  }

  return (
    <CustomContainer className="!py-12">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
        <span className="text-[#2d63cf] md:text-[36px] text-[22px] font-medium">
          {data.title.split(" ")[0]}
        </span>{" "}
        <span className="text-[#9c25a0] md:text-[36px] text-[22px] font-medium">
          {data.title.split(" ").slice(1).join(" ")}
        </span>
      </h2>

      <div className=" flex flex-wrap gap-12 justify-center">
        {Object.entries(data.sections).map(([sectionId, section], index) => (
          <div
            key={sectionId}
            className="bg-white p-6 rounded-xl shadow-md w-full md:w-[48%] lg:w-[45%]"
          >
            <div className="flex justify-start mb-6">
              <div
                onClick={() => alert(section?.id)}
                className="p-4 rounded-full md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] relative"
              >
                <Image
                  src={iconMap[section?.id] && iconMap[section?.id]}
                  alt={`${section.title} Icon`}
                  className="object-contain"
                  fill
                />
              </div>
            </div>
            <h3 className="text-[#9c25a0] md:text-xl text-lg font-bold text-start mb-4">
              {section.title}
            </h3>
            <div className="space-y-4">
              {Object.entries(section.features).map(([featureId, feature]) => (
                <div key={featureId} className="flex gap-3">
                  <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-secondary md:text-base text-sm">
                      {feature.title && feature.title + ":"}{" "}
                    </span>
                    {feature.points.map((point, idx) => (
                      <span key={idx} className="text-sm">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CustomContainer>
  );
};

export default KeyFeatures;
