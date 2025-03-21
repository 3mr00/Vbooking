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
  inventory: icons.inventory,
  booking: icons.booking,
  control: icons.control,
  operations: icons.operations,
  functionalities: icons.functionalities,

  propertymanagement: icons.propertymanagement,
  guestcommunication: icons.guestcommunication,
  revenue: icons.revenue,
  maintenance: icons.maintenance,
  marketing: icons.marketing,
  payment: icons.payment,
  customization: icons.customization,

  // bookingengine
  // rapiddeployment
  // suppliernetwork
  // multilingualsupport
  // automatedprocesses
  // travelmodules
  // paymentfinance
  // backoffice
  // customersupport
  // scalability

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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {Object.entries(data.sections).map(([sectionId, section]) => (
          <div key={sectionId} className="bg-white p-6 rounded-xl shadow-md">
            <div className="flex justify-start mb-6">
              <div
                onClick={() => alert(section?.id)}
                className="p-4 rounded-full md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] relative"
              >
                <Image
                  src={iconMap[section?.id]} // Fallback to prevent errors
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
                    <p className="font-semibold md:text-base text-sm">
                      {feature.title}
                    </p>
                    <ul className="list-disc list-inside">
                      {feature.points.map((point, idx) => (
                        <li key={idx} className="text-sm">
                          {point}
                        </li>
                      ))}
                    </ul>
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
