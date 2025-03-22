import React from "react";
import { useTranslations } from "next-intl";
import { FaCircleCheck } from "react-icons/fa6";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import {
  ProdouctsBeh,
  ProdouctsBook1,
  ProdouctsBook2,
  ProdouctsBook3,
  Prodouctsknow,
  ProdouctsVector,
  Prodouctsvoice,
} from "@/icons";

interface CustomizationProductsProps {
  productId: string;
}
type ProductId =
  | "AiTravel"
  | "EngagementPackage"
  | "LiveBooking"
  | "OperatorApp"
  | "TurboBooking";

const isValidProductId = (id: string): id is ProductId => {
  return [
    "AiTravel",
    "EngagementPackage",
    "LiveBooking",
    "OperatorApp",
    "TurboBooking",
  ].includes(id);
};

const CustomizationProducts: React.FC<CustomizationProductsProps> = ({
  productId,
}) => {
  const t = useTranslations("products.CustomizationProducts");
  const tLang = useTranslations("lang");

  if (!isValidProductId(productId)) {
    return null; // or handle invalid productId as needed
  }

  // Fetch customization cards data and filter out empty cards
  const customizationCards = [
    {
      icon:
        productId === "TurboBooking" ? <ProdouctsBook1 /> : <Prodouctsvoice />,
      title: t(`${productId}.cards.voicePersonalization.title`),
      description: t(`${productId}.cards.voicePersonalization.description`),
    },
    {
      icon:
        productId === "TurboBooking" ? <ProdouctsBook2 /> : <ProdouctsVector />,
      title: t(`${productId}.cards.avatarCustomization.title`),
      description: t(`${productId}.cards.avatarCustomization.description`),
    },
    {
      icon:
        productId === "TurboBooking" ? <ProdouctsBook3 /> : <Prodouctsknow />,
      title: t(`${productId}.cards.behaviorSettings.title`),
      description: t(`${productId}.cards.behaviorSettings.description`),
    },
    {
      icon: <ProdouctsBeh />,
      title: t(`${productId}.cards.knowledgeBaseManagement.title`),
      description: t(`${productId}.cards.knowledgeBaseManagement.description`),
    },
  ].filter((card) => card.title && card.description); // Filter out cards with empty title or description

  // Fetch benefits cards data and filter out empty cards
  const benefitsCards = [
    {
      title: t(`${productId}.benefits.cards.seamlessIntegration.title`),
      description: t(
        `${productId}.benefits.cards.seamlessIntegration.description`
      ),
    },
    {
      title: t(`${productId}.benefits.cards.enhancedCustomerEngagement.title`),
      description: t(
        `${productId}.benefits.cards.enhancedCustomerEngagement.description`
      ),
    },
    {
      title: t(`${productId}.benefits.cards.increasedProductivity.title`),
      description: t(
        `${productId}.benefits.cards.increasedProductivity.description`
      ),
    },
    {
      title: t(`${productId}.benefits.cards.higherConversionRates.title`),
      description: t(
        `${productId}.benefits.cards.higherConversionRates.description`
      ),
    },
    {
      title: t(`${productId}.benefits.cards.scalableCustomerSupport.title`),
      description: t(
        `${productId}.benefits.cards.scalableCustomerSupport.description`
      ),
    },
  ].filter((card) => card.title && card.description); // Filter out cards with empty title or description

  // Fetch features cards data and filter out empty cards
  const featuresCards = [
    {
      title: t(`${productId}.features.cards.boostEfficiency.title`),
      description: t(`${productId}.features.cards.boostEfficiency.description`),
    },
    {
      title: t(`${productId}.features.cards.enhanceCustomerExperience.title`),
      description: t(
        `${productId}.features.cards.enhanceCustomerExperience.description`
      ),
    },
    {
      title: t(
        `${productId}.features.cards.increaseSalesConversionRates.title`
      ),
      description: t(
        `${productId}.features.cards.increaseSalesConversionRates.description`
      ),
    },
    {
      title: t(`${productId}.features.cards.expandYourReach.title`),
      description: t(`${productId}.features.cards.expandYourReach.description`),
    },
  ].filter((card) => card.title && card.description); // Filter out cards with empty title or description

  return (
    <>
      {productId === "AiTravel" || productId === "TurboBooking" ? (
        <section className="bg-gradient-to-b from-[#ECF8F8] via-[#F9DBE8] to-[#E5F5F6] w-full flex flex-col justify-start items-center gap-6">
          <CustomContainer className="bg-[url(../../assets/images/image/CustomizationProducts.png)] bg-cover bg-center w-full py-10 flex flex-col justify-center items-center gap-6">
            {/* Title */}
            <div className="text-center">
              <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                {t(`${productId}.title.part1`)}
              </span>
              <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                {t(`${productId}.title.part2`)}
              </span>
            </div>

            {/* Conditional Layout */}
            {customizationCards.length > 3 ? (
              /** More than 3 items → Two-column layout */
              <div className="w-full  bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-wrap justify-center items-stretch">
                {customizationCards.map((card, index) => {
                  const isLastInRow =
                    index % 2 === 1 || index === customizationCards.length - 1;

                  return (
                    <div
                      key={index}
                      className={`w-full md:w-1/2 p-6 border-fuchsia-700 flex flex-col justify-start items-start gap-2 
                border-b last:border-b-0 
                md:border-b-0 ${
                  !isLastInRow
                    ? tLang("lang") === "en"
                      ? "md:border-r-2"
                      : "md:border-l-2"
                    : ""
                } 
                ${
                  index < customizationCards.length - 2 ? "md:border-b-2" : ""
                }`}
                    >
                      {/* Icon */}
                      <div className="w-20 h-20 bg-[#F9F5FF] rounded-full flex justify-start items-start">
                        <div className="w-16 h-16">{card.icon}</div>
                      </div>

                      {/* Title */}
                      <div className="text-fuchsia-700 text-xl font-semibold">
                        {card.title}
                      </div>

                      {/* Description */}
                      <div className="text-gray-500 text-base">
                        {card.description}
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              /** 3 or fewer items → Single-row flex-grow layout */
              <div className="w-full  bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-wrap justify-center items-stretch">
                {customizationCards.map((card, index) => (
                  <div
                    key={index}
                    className={`flex-1 min-w-[280px] p-6 border-fuchsia-700 border-b last:border-b-0 
                      ${tLang("lang") === "en" ? "md:border-r" : "md:border-l"} 
                    md:border-b-0 flex flex-col justify-start items-start gap-4`}
                  >
                    {/* Icon */}
                    <div className="w-20 h-20 bg-[#F9F5FF] rounded-full flex justify-start items-start">
                      <div className="w-16 h-16">{card.icon}</div>
                    </div>

                    {/* Title */}
                    <div className="text-fuchsia-700 text-xl font-semibold text-start">
                      {card.title}
                    </div>

                    {/* Description */}
                    <div className="text-gray-500 text-base text-start">
                      {card.description}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CustomContainer>
        </section>
      ) : (
        ""
      )}

      {/* Technology Section */}
      <CustomContainer>
        <section className="w-full py-10 flex flex-col md:flex-row justify-start items-start gap-8 md:gap-16">
          <div className="w-full md:w-auto flex flex-col justify-start items-start">
            <div className="w-full">
              <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                {t(`${productId}.technology.title.part1`)}
              </span>
              <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                {t(`${productId}.technology.title.part2`)}
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center items-start">
            <div className="w-full text-gray-500 text-sm sm:text-base  font-normal leading-normal">
              {t(`${productId}.technology.description`)}
            </div>
          </div>
        </section>

        {/* How Can Travel  Section */}
        {benefitsCards.length > 0 && (
          <section className="w-full py-10 flex flex-col justify-start items-center gap-6">
            <div className="w-full flex flex-col justify-start items-center gap-2 md:px-28">
              <div className="w-full text-center">
                <span className="text-blue-900 text-xl md:text-2xl lg:text-3xl font-medium">
                  {t(`${productId}.benefits.title.part1`)}{" "}
                </span>
                <span className="text-fuchsia-700 text-xl md:text-2xl lg:text-3xl font-medium">
                  {t(`${productId}.benefits.title.part2`)}{" "}
                </span>
                <span className="text-blue-900 text-xl md:text-2xl lg:text-3xl font-medium">
                  {t(`${productId}.benefits.title.part3`)}
                </span>
              </div>
              <div className="w-full text-center text-gray-500 text-sm sm:text-base font-normal">
                {t(`${productId}.benefits.description`)}
              </div>
            </div>
            {/* Benefits Cards */}
            <div className="w-full flex flex-col lg:flex-row lg:flex-wrap gap-6">
              {benefitsCards.map((card, index) => (
                <div
                  key={index}
                  className={`w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3 ${
                    index < 3
                      ? "lg:w-[calc(33.333%-1.5rem)]"
                      : "lg:w-[calc(50%-1.5rem)]"
                  }`}
                >
                  <div className="w-full text-fuchsia-700 text-md sm:text-md font-semibold">
                    {card.title}
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    <div className="flex-1 text-gray-500 text-sm sm:text-base font-normal">
                      {card.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}
          </section>
        )}

        {/* Features Section */}
        {productId !== "EngagementPackage" &&
          productId !== "OperatorApp" &&
          featuresCards.length > 0 && (
            <section className="w-full py-10 flex flex-col justify-center items-center gap-2.5">
              <div className="w-full flex flex-col justify-start items-start gap-6">
                <div className="w-full text-center">
                  <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                    {t(`${productId}.features.title.part1`)}{" "}
                  </span>
                  <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                    {t(`${productId}.features.title.part2`)}{" "}
                  </span>
                  <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                    {t(`${productId}.features.title.part3`)}
                  </span>
                </div>

                {/* Features Cards */}
                <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {featuresCards.map((card, index) => (
                    <div
                      key={index}
                      className="w-full p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-center gap-4"
                    >
                      <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-snug">
                        {card.title}
                      </div>
                      <div className="w-full text-gray-500 text-sm sm:text-base font-normal leading-tight">
                        {card.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

        {/* CTA Section */}
        <section className="w-full py-10 flex justify-center items-center">
          <div className="w-full max-w-3xl p-4 sm:p-6 bg-fuchsia-700 rounded-3xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col justify-start items-center gap-6">
            <div className="w-full flex flex-col justify-start items-center gap-2">
              <div className="w-full text-center text-white text-2xl md:text-3xl lg:text-4xl font-medium">
                {t(`${productId}.cta.title`)}
              </div>
              <div className="w-full text-center text-white text-sm  font-normal">
                {t(`${productId}.cta.description`)}
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-5 py-3 bg-gradient-to-b from-blue-900 to-blue-900 rounded-[100px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center gap-2 overflow-hidden">
                <div className="text-white text-sm font-medium leading-tight tracking-tight">
                  {t(`${productId}.cta.buttons.requestDemo`)}
                </div>
              </button>
              <button className="w-full sm:w-auto px-5 py-3 bg-white rounded-[100px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center gap-2 overflow-hidden">
                <div className="text-slate-900 text-sm font-medium leading-tight tracking-tight">
                  {t(`${productId}.cta.buttons.getQuote`)}
                </div>
              </button>
            </div>
          </div>
        </section>
      </CustomContainer>
    </>
  );
};

export default CustomizationProducts;
