import React from "react";
import HeaderTurbo from "@/components/TurboComponent/HeaderTurbo";
import KeyFeatures from "@/components/TurboComponent/KeyFeatures";
import EnhancedServices from "@/components/TurboComponent/EnhancedServices";
import { notFound } from "next/navigation";

// Define the type for nested feature content

type TurboId =
  | "IncomingAgencies"
  | "HolidayRental "
  | "OnlineTravel"
  | "WholesaleTour";

const isValidTurboId = (id: string): id is TurboId => {
  return [
    "IncomingAgencies",
    "HolidayRental",
    "OnlineTravel",
    "WholesaleTour",
  ].includes(id);
};
const Turbo = ({ params }: { params: { id: string } }) => {
  if (!isValidTurboId(params.id)) {
    return notFound();
  }

  const turboId: TurboId = params.id; // Declare techId as TechId

  return (
    <div className="bg-gradient-to-b from-[#F7FCFC] to-[#D7EFF1]">
      {/* Hero Section */}
      <HeaderTurbo turboId={turboId} />
      {/* Key Features Section */}
      <KeyFeatures turboId={turboId} />
      {/* Key Enhanced Services Section */}
      <EnhancedServices turboId={turboId} />
    </div>
  );
};

export default Turbo;
