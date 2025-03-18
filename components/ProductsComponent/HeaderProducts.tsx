import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { useTranslations } from "next-intl";
import ButtonShadcn from "../common/Shadcn/ButtonShadcn";
import { Button } from "../ui/button";

const HeaderProducts = () => {
  const t = useTranslations("");

  return (
    <div
      className={`max-w-[1920px] mx-auto ${
        t("lang.lang") === "en"
          ? "lg:pl-[120px] lg:!pr-0 px-[1.5rem]"
          : "lg:pr-[120px] lg:!pl-0  px-[1.5rem]"
      }  py-6 bg-[#F7FCFC]`}
    >
      <div className="   grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="md:text-[2rem] text-[1.6rem] font-medium mb-4">
            <span className="text-[#9c25a0]">
              {" "}
              Ai Travel Agent - Revolutionize
            </span>
            <br />
            <span className="text-[#2d63cf]">Your Booking Experience</span>
          </h1>
          <p className="text-[#667085]  md:text-[.8rem] text-[.6rem] font-normal mb-4">
            Empower your sales team with AI-driven real-time interactions,
            boosting engagement and conversions.
          </p>
          <Button className="text-white bg-primary px-4 py-2 rounded-full">
            Try the Ai Travel Agent Now
          </Button>
        </div>
        <div className="relative">
          <Image
            src={images.productsHeader}
            alt="Turbo Booking Engine Platform Interface"
            width={600}
            height={500}
            className=" w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default HeaderProducts;
