import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import WhyChooseSection from "./WhyChooseSection";

export default function EnhancedServices({ turboId }: { turboId: string }) {
  return (
    <>
      <CustomContainer className="">
        {/* Header Section */}
        <div className="mx-auto px-4 pb-12 text-center">
          <h1 className="text-[#2d63cf] md:text-[30px] text-[22px] font-medium">
            Key Services{" "}
            <span className="text-[#9c25a0] md:text-[30px] text-[22px] font-medium">
              We Offer
            </span>
          </h1>
        </div>

        {/* Services Grid - First Row */}
        <div className="mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-[150px] relative">
              <Image
                src={images.Enhanced1}
                alt="Holiday Packages Management"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Holiday Packages Management
              </h3>
              <p className="text-gray-600 text-sm">
                Manage and customize holiday packages effortlessly.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-[150px] relative">
              <Image
                src={images.Enhanced2}
                alt="Integrated Payment Gateway"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Integrated Payment Gateway
              </h3>
              <p className="text-gray-600 text-sm">
                Seamless and secure payment integrations.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-[150px] relative">
              <Image
                src={images.Enhanced3}
                alt="Charter Services Management"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Charter Services Management
              </h3>
              <p className="text-gray-600 text-sm">
                Efficiently handle charter service bookings.
              </p>
            </div>
          </div>
        </div>

        {/* Services Grid - Second Row */}
        <div className="lg:w-[50rem] mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-6 mb-16">
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-[150px] relative">
              <Image
                src={images.Enhanced4}
                alt="Channel Manager Integration"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Channel Manager Integration
              </h3>
              <p className="text-gray-600 text-sm">
                Sync inventory across multiple platforms.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="h-[150px] relative">
              <Image
                src={images.Enhanced5}
                alt="Transfers Inventory Management"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-secondary mb-2">
                Transfers Inventory Management
              </h3>
              <p className="text-gray-600 text-sm">
                Manage transfers and logistics effortlessly.
              </p>
            </div>
          </div>
        </div>
      </CustomContainer>

      {/* Why Choose Section */}
      <WhyChooseSection turboId={turboId} />
    </>
  );
}
