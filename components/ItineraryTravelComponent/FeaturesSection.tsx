import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const featuresData = [
  {
    id: 1,
    title: "Booking Engine",
    description:
      "A seamless and efficient system to handle all client bookings effortlessly.",
  },
  {
    id: 2,
    title: "CRM",
    description:
      "Advanced tools to manage client relationships and enhance engagement.",
  },
  {
    id: 3,
    title: "Website",
    description:
      "A professional, responsive online presence integrated with your services.",
  },
  {
    id: 4,
    title: "AI Agent",
    description:
      "Smart automation for customer inquiries, bookings, and 24/7 support.",
  },
  {
    id: 5,
    title: "Management Tools",
    description: "Real-time tracking and control of your business operations.",
  },
  {
    id: 6,
    title: "Holiday Builder",
    description:
      "Easily craft unique, customized holiday packages for your clients.",
  },
  {
    id: 7,
    title: "Itinerary Builder",
    description: "Effortlessly design and share stunning, dynamic itineraries.",
  },
  {
    id: 8,
    title: "Operations App",
    description:
      "Streamline day-to-day tasks with mobile-friendly tools for management on the go.",
  },
  {
    id: 9,
    title: "Live Booking Desk",
    description:
      "Real-time support to handle complex booking needs and inquiries.",
  },
  {
    id: 10,
    title: "Inventory and Supplier Management",
    description:
      "Optimize and manage your inventory and supplier network seamlessly.",
  },
];

const FeaturesSection = () => {
  const t = useTranslations("Traveler");
  return (
    <div>
      <div className="bg-[#d7eff1]">
        <div className="container mx-auto  py-10 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="relative">
              <h2 className="text-[16px] md:text-4xl font-bold mb-4 md:mb-16">
                <span className="text-[#2d63cf]">
                  {t("features.title.part1")}
                </span>
                <span className="text-[#9c25a0]">
                  {t("features.title.part2")}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.raw("features.items").map((item: any) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-start  overflow-hidden"
                >
                  <div className="absolute inset-0 z-[1] transform opacity-50">
                    <Image
                      src="/images/Pattern.svg"
                      alt="Pattern background"
                      className="top-0 left-0"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-semibold text-[#9c25a0] pb-2">
                      {t(`features.items.${item.id}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`features.items.${item.id}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
