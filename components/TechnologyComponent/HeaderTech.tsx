import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import { images } from "@/assets/images";
import Image from "next/image";
import { notFound } from "next/navigation";

type TechId =
  | "Metaverse"
  | "AlAndMachineLearning"
  | "DataOps"
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
      "DataOps",
      "DecentraliseServers",
      "HTMX",
    ].includes(id);
  };

  if (!isValidTechId(techId)) {
    return notFound();
  }

  // No need for type guard here, techtId is already of type TechId
  const headerData = {
    titlePart1: t(`${techId}.titlePart1`),
    titlePart2: t(`${techId}.titlePart2`),
    description: t(`${techId}.description`),
    imageSrc: images[techId], // No error, techtId is of type TechId
  };

  return (
    <CustomContainer className="!py-12">
      <section className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4 ">
          <h1 className="flex flex-wrap gap-2  md:text-4xl text-[1.6rem] font-medium mb-4">
            <div className="text-[#9c25a0] ">{headerData.titlePart1}</div>
            <div className="text-[#2d63cf]">{headerData.titlePart2}</div>
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
