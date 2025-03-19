import React from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import { notFound } from "next/navigation";

type ProductId =
  | "AiTravel"
  | "EngagementPackage"
  | "LiveBooking"
  | "OperatorApp"
  | "TurboBooking";

interface HeaderProductsProps {
  productId: string;
}

const HeaderProducts: React.FC<HeaderProductsProps> = ({ productId }) => {
  const t = useTranslations("products");
  const tLang = useTranslations("lang");

  // Validate if the provided ID is a valid ProductId
  const isValidProductId = (id: string): id is ProductId => {
    return [
      "AiTravel",
      "EngagementPackage",
      "LiveBooking",
      "OperatorApp",
      "TurboBooking",
    ].includes(id);
  };

  if (!isValidProductId(productId)) {
    return notFound();
  }

  // Dynamically fetch the header data based on the product ID
  const headerData = {
    titlePart1: t(`Header.${productId}.titlePart1`),
    titlePart2: t(`Header.${productId}.titlePart2`),
    description: t(`Header.${productId}.description`),
    buttonText: t(`Header.${productId}.buttonText`),
    imageSrc: images[productId],
  };

  return (
    <div
      className={`max-w-[1920px] mx-auto ${
        tLang("lang") === "en"
          ? "lg:pl-[120px] lg:!pr-0 px-[1.5rem]"
          : "lg:pr-[120px] lg:!pl-0 px-[1.5rem]"
      } py-6 bg-[#F7FCFC]`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="md:text-[2rem] text-[1.6rem] font-medium mb-4">
            <span className="text-[#9c25a0]">{headerData.titlePart1}</span>
            <br />
            <span className="text-[#2d63cf]">{headerData.titlePart2}</span>
          </h1>
          <p className="text-[#667085] md:text-[.8rem] text-[.6rem] font-normal mb-4">
            {headerData.description}
          </p>
          <Button className="text-white bg-primary px-4 py-2 rounded-full">
            {headerData.buttonText}
          </Button>
        </div>
        <div className="relative">
          <Image
            src={headerData.imageSrc}
            alt="Turbo Booking Engine Platform Interface"
            width={600}
            height={500}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderProducts;
