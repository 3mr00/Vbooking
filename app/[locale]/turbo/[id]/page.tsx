import React from "react";
import HeaderTurbo from "@/components/TurboComponent/HeaderTurbo";
import KeyFeatures from "@/components/TurboComponent/KeyFeatures";
import EnhancedServices from "@/components/TurboComponent/EnhancedServices";

// Define the type for nested feature content

const Turbo = () => {
  return (
    <div className="bg-gradient-to-b from-[#F7FCFC] to-[#D7EFF1]">
      {/* Hero Section */}
      <HeaderTurbo />
      {/* Key Features Section */}
      <KeyFeatures />
      {/* Key Enhanced Services Section */}
      <EnhancedServices />
    </div>
  );
};

export default Turbo;
