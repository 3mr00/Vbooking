import BenefitsTech from "@/components/TechnologyComponent/BenefitsTech";
import HeaderTech from "@/components/TechnologyComponent/HeaderTech";
import KeyFeaturesTech from "@/components/TechnologyComponent/KeyFeaturesTech";
import Shadows from "@/components/TechnologyComponent/Shadows";
import RepeatedCom from "@/components/TechnologyComponent/RepeatedCom";

import { notFound } from "next/navigation";
import Overview from "@/components/TechnologyComponent/Overview";

type TechId =
  | "Metaverse"
  | "DecentraliseServers"
  | "DataOps"
  | "DecentraliseServers"
  | "HTMX";

const isValidTechId = (id: string): id is TechId => {
  return [
    "Metaverse",
    "AlAndMachineLearning",
    "DataOps",
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
      <Overview techId={techId} />
      <KeyFeaturesTech techId={techId} />
      <BenefitsTech techId={techId} />
      {/* Other sections */}
      <RepeatedCom techId={techId} />
    </div>
  );
};

export default Page;
