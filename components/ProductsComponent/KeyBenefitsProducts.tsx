import { useTranslations } from "next-intl";
import { FaCircleCheck } from "react-icons/fa6";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import { images } from "@/assets/images";

type ProductId =
  | "AiTravel"
  | "EngagementPackage"
  | "LiveBooking"
  | "OperatorApp"
  | "TurboBooking";

type BenefitItem = {
  title: string;
  description: string;
};

type BenefitCategory = {
  category: string;
  items: BenefitItem[];
};

type BenefitsData = BenefitCategory[];

const KeyBenefitsProducts = ({ productId }: { productId: ProductId }) => {
  const t = useTranslations("products");

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
    console.error(`Invalid product ID: ${productId}`);
    return null;
  }

  // Fetch the benefits data dynamically based on the product ID
  const benefitsData = t.raw(
    `KeyBenefits.${productId}.benefits`
  ) as BenefitsData;

  return (
    <CustomContainer>
      <div className="relative w-full py-10 flex flex-col items-center gap-6 overflow-hidden">
        <div className="w-full text-center text-2xl md:text-4xl font-medium">
          {t(`Overview.${productId}.title`)
            .split(" ") // Split the string into words
            .map((word, index) => (
              <span
                key={index}
                className={index === 0 ? "text-blue-900" : "text-fuchsia-700"}
              >
                {word}{" "}
              </span>
            ))}
        </div>
        <div className="w-full px-4 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center">
          <div className="max-w-3xl text-center text-gray-500 lg:text-[.8rem] text-xs font-normal">
            {t(`Overview.${productId}.description`)}
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

      <div className="py-12 flex flex-col justify-start items-center gap-2.5 overflow-hidden">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col justify-start items-center">
            <div className="w-full text-center text-2xl md:text-4xl font-medium">
              {t(`KeyBenefits.title`)
                .split(" ") // Split the string into words
                .map((word, index) => (
                  <span
                    key={index}
                    className={
                      index === 0 ? "text-blue-900" : "text-fuchsia-700"
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
            </div>
          </div>

          {/* Benefits Container */}
          <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
            {benefitsData?.map((benefit: BenefitCategory, index: number) => (
              <>
                <div
                  key={index}
                  className="w-full flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-20"
                >
                  {/* Category Title */}
                  <div className="w-full sm:w-72 text-start text-fuchsia-700 text-xl font-semibold">
                    {benefit.category}
                  </div>

                  {/* Benefit Items */}
                  <div className="flex-1 flex flex-col justify-center items-start gap-4">
                    {benefit.items.map((item: BenefitItem, idx: number) => (
                      <>
                        <div key={idx}>
                          <div className="w-full flex items-start gap-2">
                            {/* Icon */}
                            <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />

                            {/* Text Content */}
                            <div className="flex-1">
                              <span className="text-blue-700 text-base font-semibold">
                                {item.title ? item.title + ":" : item.title}
                              </span>
                              <span className="text-gray-500 text-base font-normal">
                                {" "}
                                {item.description}
                              </span>
                            </div>
                          </div>
                        </div>
                      </>
                    ))}
                  </div>
                </div>

                {/* Separator */}
                {index < benefitsData.length - 1 && (
                  <div className="w-full">
                    <svg
                      width="100%"
                      height="2"
                      viewBox="0 0 1374 2"
                      fill="none"
                    >
                      <path
                        d="M1373 1.00012L1 1"
                        stroke="url(#gradient)"
                        strokeLinecap="round"
                      />
                      <defs>
                        <radialGradient
                          id="gradient"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#A8DCE1" />
                          <stop offset="1" stopColor="#D7EFF1" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </div>
                )}
              </>
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default KeyBenefitsProducts;
