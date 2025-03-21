import { icons } from "@/assets/icons";
import { images } from "@/assets/images";
import BenefitsTech from "@/components/TechnologyComponent/BenefitsTech";
import HeaderTech from "@/components/TechnologyComponent/HeaderTech";
import KeyFeaturesTech from "@/components/TechnologyComponent/KeyFeaturesTech";
import RepeatedCom from "@/components/TechnologyComponent/RepeatedCom";
import { Link } from "@/navigation";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import { notFound } from "next/navigation";

type TechId =
  | "Metaverse"
  | "AlAndMachineLearning"
  | "Automation"
  | "DecentraliseServers"
  | "HTMX";

const isValidTechId = (id: string): id is TechId => {
  return [
    "Metaverse",
    "AlAndMachineLearning",
    "Automation",
    "DecentraliseServers",
    "HTMX",
  ].includes(id);
};

const Page = ({ params }: { params: { id: string } }) => {
  if (!isValidTechId(params.id)) {
    return notFound();
  }

  const techId: TechId = params.id; // Declare techId as TechId

  return (
    <div className="bg-gradient-to-b from-[#F7FCFC] to-[#D7EFF1]">
      <HeaderTech techId={techId} /> {/* params.id is now of type TechId */}
      <KeyFeaturesTech techId={techId} />
      <BenefitsTech techId={techId} />
      {/* Other sections */}
      <RepeatedCom />
    </div>
  );
};

export default Page;
