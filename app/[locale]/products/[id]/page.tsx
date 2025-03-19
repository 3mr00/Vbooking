import React from "react";
import CustomizationProducts from "@/components/ProductsComponent/CustomizationProducts";
import HeaderProducts from "@/components/ProductsComponent/HeaderProducts";
import KeyBenefitsProducts from "@/components/ProductsComponent/KeyBenefitsProducts";
import { notFound } from "next/navigation";

// Define the valid product IDs
type ProductId =
  | "AiTravel"
  | "EngagementPackage"
  | "LiveBooking"
  | "OperatorApp"
  | "TurboBooking";

// Function to check if a string is a valid ProductId
const isValidProductId = (id: string): id is ProductId => {
  return [
    "AiTravel",
    "EngagementPackage",
    "LiveBooking",
    "OperatorApp",
    "TurboBooking",
  ].includes(id);
};

const Page = ({ params }: { params: { id: string } }) => {
  // Validate if the provided ID is a valid ProductId
  if (!isValidProductId(params.id)) {
    return notFound();
  }

  return (
    <section>
      <HeaderProducts productId={params.id} />
      <div className="bg-gradient-to-b from-[#f7fcfc] to-[#D7EFF1]">
        <KeyBenefitsProducts productId={params.id} />
        <CustomizationProducts productId={params.id} />
      </div>
    </section>
  );
};

export default Page;
