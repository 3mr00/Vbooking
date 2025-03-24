import { useTranslations } from "next-intl";
import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import { FaCircleCheck } from "react-icons/fa6";

const BenefitsTech = ({ techId }: { techId: string }) => {
  const t = useTranslations("technology.benefits");

  if (techId === "DataOps") {
    return null;
  }

  const sections = t.raw(`${techId}.sections`);

  return (
    <section
      className={`relative ${techId === "AlAndMachineLearning" && "py-12"}`}
    >
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={images.techBooking}
          alt="Suspension bridge in misty forest"
          fill
          // className="object-cover"
          priority
        />
      </div>

      {/* Content with semi-transparent overlay */}
      <CustomContainer className="!py-0 !pb-12">
        <div className="relative">
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
            <span className="text-[#1C3D80] md:text-[30px] text-[22px] font-medium">
              {t(`${techId}.titlepart1`)}
            </span>{" "}
            <span className="text-fuchsia-700 md:text-[30px] text-[22px] font-medium">
              {t(`${techId}.titlepart2`)}
            </span>
          </h2>

          {/* Special Grid Layout for 5 Items */}
          {sections.length === 5 ? (
            <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
              {/* First Two Items */}
              <div className="space-y-6">
                {sections.slice(0, 2).map((section: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.items.map((item: any, itemIndex: number) => (
                        <li key={itemIndex} className="flex gap-3">
                          <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />
                          <div className="text-[#667085] md:text-base text-sm">
                            <span className="font-semibold text-secondary">
                              {item.title ? `${item.title}:` : ""}
                            </span>{" "}
                            {item.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Center Item */}
              <div className="flex items-center justify-center">
                <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm max-w-md">
                  <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                    {sections[2].title}
                  </h3>
                  <ul className="space-y-4">
                    {sections[2].items.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} className="flex gap-3">
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />
                        <div className="text-[#667085] md:text-base text-sm">
                          <span className="font-semibold text-secondary">
                            {item.title ? `${item.title}:` : ""}
                          </span>{" "}
                          {item.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Last Two Items */}
              <div className="space-y-6">
                {sections.slice(3, 5).map((section: any, index: number) => (
                  <div
                    key={index}
                    className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm"
                  >
                    <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                      {section.title}
                    </h3>
                    <ul className="space-y-4">
                      {section.items.map((item: any, itemIndex: number) => (
                        <li key={itemIndex} className="flex gap-3">
                          <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />
                          <div className="text-[#667085] md:text-base text-sm">
                            <span className="font-semibold text-secondary">
                              {item.title ? `${item.title}:` : ""}
                            </span>{" "}
                            {item.description}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {sections.map((section: any, index: number) => (
                <div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm"
                >
                  <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                    {section.title}
                  </h3>
                  <ul className="space-y-4">
                    {section.items.map((item: any, itemIndex: number) => (
                      <li key={itemIndex} className="flex gap-3">
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0" />
                        <div className="text-[#667085] md:text-base text-sm">
                          <span className="font-semibold text-secondary">
                            {item.title ? `${item.title}:` : ""}
                          </span>{" "}
                          {item.description}
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>
      </CustomContainer>
    </section>
  );
};

export default BenefitsTech;
