import React from "react";
import { icons } from "@/assets/icons";
import { images } from "@/assets/images";
import { Link } from "@/navigation";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import { useTranslations } from "next-intl";
import Shadows from "./Shadows";
import Steps from "./Steps";
import HTMXinAction from "./HTMXinAction";

const RepeatedCom = ({ techId }: { techId: string }) => {
  const t = useTranslations("technology.repeatedCom");
  const tLang = useTranslations("lang");
  const tShadows = useTranslations("technology.Shadows");
  const tSteps = useTranslations("technology.Steps");

  const features = [
    {
      icon: icons.tech1,
      title: t("scalableSolutions"),
      desc: t("scalableDescription"),
    },
    {
      icon: icons.tech2,
      title: t("globalReach"),
      desc: t("globalDescription"),
    },
    {
      icon: icons.tech3,
      title: t("futureProof"),
      desc: t("futureProofDescription"),
    },
  ];

  const whyChooseUs = [
    {
      title: t("cuttingEdge"),
      desc: t("cuttingEdgeDescription"),
    },
    {
      title: t("support"),
      desc: t("supportDescription"),
    },
    {
      title: t("provenResults"),
      desc: t("provenResultsDescription"),
    },
  ];

  let DataOpsShadows = null;
  let DataOpSteps = null;

  if (techId === "DataOps") {
    DataOpsShadows = {
      titlePart1: tShadows(`${techId}.titlePart1`),
      titlePart2: tShadows(`${techId}.titlePart2`),
      description: tShadows(`${techId}.description`),
      items: [
        {
          icon: icons.DataOpsShadows,
          title: tShadows(`${techId}.items.1.title`),
          description: tShadows(`${techId}.items.1.description`),
        },
        {
          icon: icons.DataOpsShadows2,
          title: tShadows(`${techId}.items.2.title`),
          description: tShadows(`${techId}.items.2.description`),
        },
      ],
    };

    DataOpSteps = {
      titlePart1: tSteps(`${techId}.titlePart1`),
      titlePart2: tSteps(`${techId}.titlePart2`),
      description: tShadows(`${techId}.description`),

      items: [
        {
          icon: icons.DataOpsShadows,
          title: tSteps(`${techId}.items.1.title`),
          description: tSteps(`${techId}.items.1.description`),
        },
        {
          icon: icons.DataOpsShadows2,
          title: tSteps(`${techId}.items.2.title`),
          description: tSteps(`${techId}.items.2.description`),
        },
        {
          icon: icons.DataOpsShadows2,
          title: tSteps(`${techId}.items.3.title`),
          description: tSteps(`${techId}.items.3.description`),
        },
      ],
    };
  }

  let DecentraliseServersShadows = null;

  if (techId === "DecentraliseServers") {
    DecentraliseServersShadows = {
      titlePart1: tShadows(`${techId}.titlePart1`),
      titlePart2: tShadows(`${techId}.titlePart2`),
      description: tShadows(`${techId}.description`),
      items: [
        {
          icon: icons.DecentraliseServersShadows,
          title: tShadows(`${techId}.items.1.title`),
          description: tShadows(`${techId}.items.1.description`),
        },
        {
          icon: icons.DecentraliseServersShadows2,
          title: tShadows(`${techId}.items.2.title`),
          description: tShadows(`${techId}.items.2.description`),
        },
        {
          icon: icons.DecentraliseServersShadows3,
          title: tShadows(`${techId}.items.3.title`),
          description: tShadows(`${techId}.items.3.description`),
        },
      ],
    };
  }

  let HTMXShadows = null;

  if (techId === "HTMX") {
    HTMXShadows = {
      titlePart1: tShadows(`${techId}.titlePart1`),
      titlePart2: tShadows(`${techId}.titlePart2`),
      description: tShadows(`${techId}.description`),
      items: [
        {
          icon: icons.HTMX1,
          title: tShadows(`${techId}.items.1.title`),
          description: tShadows(`${techId}.items.1.description`),
        },
        {
          icon: icons.HTMX2,
          title: tShadows(`${techId}.items.2.title`),
          description: tShadows(`${techId}.items.2.description`),
        },
      ],
    };
  }

  return (
    <div>
      <div className="bg-gradient-to-b from-[#EBF7F7] via-[#F9DBE8] to-[#E8F6F6]">
        {techId === "DataOps" ||
        techId === "DecentraliseServers" ||
        techId === "HTMX" ? (
          <Shadows
            data={
              techId === "DataOps"
                ? DataOpsShadows
                : techId === "DecentraliseServers"
                ? DecentraliseServersShadows
                : techId === "HTMX" && HTMXShadows
            }
          />
        ) : (
          ""
        )}
      </div>
      {techId === "DataOps" && <Steps data={DataOpSteps} />}

      {techId === "DecentraliseServers" && (
        <div className="w-full mb-12 flex flex-col justify-center items-center gap-2">
          <div className="text-center">
            <span className="text-blue-900 text-2xl sm:text-3xl md:text-4xl font-medium ">
              Comparison with
            </span>
            <span className="text-fuchsia-700 text-2xl sm:text-3xl md:text-4xl font-medium ">
              Traditional Servers
            </span>
          </div>
          <div className="w-full px-4 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center">
            <div className="max-w-3xl text-center text-gray-500 lg:text-[.8rem] text-xs font-normal">
              Unlike traditional centralized servers, which rely on single or
              clustered data centers, decentralized servers distribute data
              across numerous nodes globally. This approach
            </div>
          </div>
        </div>
      )}

      {techId === "HTMX" && <HTMXinAction />}

      <div className="bg-gradient-to-b from-[#EBF7F7] via-[#F9DBE8] to-[#E0F3F4]">
        <CustomContainer className="!py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 relative">
            <Image
              src={images.vsymbolsmall}
              alt="Turbo Booking Engine Platform Interface"
              width={600}
              height={500}
              className="w-[14rem] h-[14rem] lg:mx-[-120px] absolute"
            />
            <div className="relative md:ml-[7rem]">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-primary">{t("titlePart1")} </span>
                <span className="text-secondary">{t("titlePart2")}</span>
              </h2>
            </div>
            <div>
              <p className="text-gray-600 mb-4 text-sm">{t("description1")}</p>
              <p className="text-gray-600">{t("description2")}</p>
            </div>
          </div>
        </CustomContainer>
      </div>

      {/* Partner Section */}
      <CustomContainer className="!py-12">
        <div className="w-full py-12 flex flex-col justify-center items-center gap-6">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <div className="text-center">
                <span className="text-blue-900 text-4xl font-medium">
                  {" "}
                  {t("partnerWithpart1")}{" "}
                </span>
                <span className="text-fuchsia-700 text-4xl font-medium">
                  {t("partnerWithpart2")}
                </span>
              </div>
              <p className="w-full max-w-[714px] text-center text-gray-500 text-base font-normal">
                {t("partnerDescription")}
              </p>
            </div>

            <div className="bg-white rounded-2xl shadow-[12px_12px_0px_0px_rgba(70,118,215,1.00)] outline outline-1 outline-offset-[-1px] outline-fuchsia-700 flex flex-col md:flex-row">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex-1 p-6 flex flex-col justify-start items-start gap-2 ${
                    index !== features.length - 1
                      ? `border-b md:border-b-0 ${
                          tLang("lang") === "ar"
                            ? "md:border-l-[1.5px]"
                            : "md:border-r-[1.5px]"
                        } border-fuchsia-700`
                      : ""
                  }`}
                >
                  <div className="p-4 rounded-full md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] relative">
                    <Image
                      src={feature.icon}
                      alt="feature-icon"
                      className="object-contain"
                      fill
                    />
                  </div>
                  <h3 className="text-fuchsia-700 text-xl font-semibold leading-9">
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-base font-normal leading-tight">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="py-12 flex flex-col justify-center items-center">
          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-medium text-white mb-4">
              {t("takeNextStep")}
            </h2>
            <p className="text-white mb-8 lg:max-w-3xl text-sm mx-auto">
              {t("takeNextStepDescription")}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="bg-gradient-to-b from-[#224A9A] to-[#1C3D80] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                {t("requestDemo")}
              </Link>
              <Link
                href="#"
                className="bg-white text-secondary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                {t("getQuote")}
              </Link>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="w-full py-12 flex flex-col justify-center items-center gap-6">
          <div className="text-center">
            <span className="text-blue-900 text-4xl font-medium">
              {t("whyChoose").split(" ")[0]}{" "}
            </span>
            <span className="text-fuchsia-700 text-4xl font-medium">
              {t("whyChoose").split(" ").slice(1).join(" ")}
            </span>
          </div>
          <div className="w-full md:w-[744px] text-center text-gray-500 text-base font-normal">
            {t("whyChooseDescription")}
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center items-center gap-12 relative"
              >
                <div className="w-14 h-14 bg-blue-700 rounded-full flex justify-center items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] border-2 border-neutral-800 text-white font-semibold text-lg">
                  {index + 1}
                </div>
                <div className="z-0 w-[2.40px] h-24 absolute top-[59px] opacity-20 border-dashed border-l-[2.40px] border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]"></div>
                <div className="z-10 w-[22rem] h-[7.5rem] p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-center gap-4">
                  <div className="text-fuchsia-700 text-lg font-semibold leading-snug">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-[.8rem] font-normal leading-tight">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
};

export default RepeatedCom;
