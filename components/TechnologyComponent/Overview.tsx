import React from "react";
import Image from "next/image";
import { images } from "@/assets/images";
import { useTranslations } from "next-intl";

const Overview = ({ techId }: { techId: string }) => {
  const tOverview = useTranslations("technology.Overview");

  // Render only if techId is "DataOps" or "DecentraliseServers"
  if (
    techId !== "DataOps" &&
    techId !== "DecentraliseServers" &&
    techId !== "HTMX"
  ) {
    return null; // Or return an empty fragment: return <></>;
  }

  return (
    <div>
      <div className="relative w-full py-12  mb-[3rem]  flex flex-col items-center gap-6 overflow-hidden">
        <div className="w-full text-center text-2xl md:text-4xl font-medium">
          <span className={"text-blue-900 "}>
            {tOverview(`${techId}.titlepart1`)}{" "}
          </span>
          <span className={" text-fuchsia-700"}>
            {tOverview(`${techId}.titlepart2`)}
          </span>
        </div>
        <div className="w-full px-4 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center">
          <div className="max-w-3xl text-center text-gray-500 lg:text-[.8rem] text-xs font-normal">
            {tOverview(`${techId}.description`)}
          </div>
        </div>
        <div className="hidden md:block w-40 h-40 absolute left-10 top-5">
          <Image
            src={images.vsymbolsmall}
            alt="vsymbolsmall"
            width={600}
            height={500}
            className="w-full h-full"
          />
        </div>
        <div className="hidden md:block w-40 h-40 absolute right-10 top-5">
          <Image
            src={images.vsymbolsmall}
            alt="vsymbolsmall"
            width={600}
            height={500}
            className="w-full h-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Overview;
