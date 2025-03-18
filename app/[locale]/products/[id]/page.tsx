import CustomizationProducts from "@/components/ProductsComponent/CustomizationProducts";
import HeaderProducts from "@/components/ProductsComponent/HeaderProducts";
import KeyBenefitsProducts from "@/components/ProductsComponent/KeyBenefitsProducts";
import React from "react";

const page = () => {
  return (
    <section>
      {/* Hero Section */}
      <HeaderProducts />

      <div className="bg-gradient-to-b from-[#f7fcfc] to-[#D7EFF1]">
        {/* Hero Section */}
        <KeyBenefitsProducts />

        <CustomizationProducts />
      </div>
    </section>
  );
};

export default page;
