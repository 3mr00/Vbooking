import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { images } from "@/assets/images";
import Image from "next/image";
import { notFound } from "next/navigation";

type TechId =
  | "Metaverse"
  | "AlAndMachineLearning"
  | "Automation"
  | "DecentraliseServers"
  | "HTMX";

interface HeaderTechProps {
  techId: string;
}

const HeaderProducts: React.FC<HeaderTechProps> = ({ techId }) => {
  const t = useTranslations("technology.header");

  // Validate if the provided ID is a valid ProductId
  const isValidTechId = (id: string): id is TechId => {
    return [
      "Metaverse",
      "AlAndMachineLearning",
      "Automation",
      "DecentraliseServers",
      "HTMX",
    ].includes(id);
  };

  if (!isValidTechId(techId)) {
    return notFound();
  }

  // No need for type guard here, techtId is already of type TechId
  const headerData = {
    title: t(`${techId}.title`),
    description: t(`${techId}.description`),
    imageSrc: images[techId], // No error, techtId is of type TechId
  };

  return (
    <CustomContainer className="!py-12">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="md:text-[2.4rem] text-[1.6rem] font-medium mb-4">
            <span className="text-[#9c25a0] block">
              {headerData.title.split("\n")[0]} {/* First line of the title */}
            </span>
            <span className="text-[#41444b] block mt-2">
              {headerData.title.split("\n")[1]} {/* Second line of the title */}
            </span>
          </h1>
          <p className="text-[#222222] max-w-xl md:text-[.8rem] text-[.6rem] font-normal">
            {headerData.description}
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="relative md:w-[400px] md:h-[400px] w-[300px] h-[300px]">
            <Image
              src={headerData.imageSrc}
              alt="Person wearing futuristic VR headset"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </CustomContainer>
  );
};

export default HeaderProducts;
