import { CustomContainer } from "@/Wrapper/CustomContainer";
import Description from "../common/Description";
import Title from "../common/Title";
import ButtonShadcn from "../common/Shadcn/ButtonShadcn";
import dynamic from "next/dynamic";
import animationData from "../../icons/src/animationHomeLogo.json"; // Adjust path to your JSON file

const LottieAnimation = dynamic(() => import("@/icons/src/LottieAnimation"), {
  ssr: false,
});

function Header() {
  return (
    <div className="bg-[#F7FCFC] pt-4 w-full">
      <CustomContainer className=" pt-[16px]  pb-0  flex items-center justify-between flex-col lg:flex-row md:gap-0 gap-5 ">
        <div className="2xl:w-[50rem] xl:w-[40rem] w-full  flex flex-col gap-1">
          {" "}
          {/* Add padding for better spacing */}
          <Title
            TransPage="home"
            title="header.empowering_tourism"
            titleColor="text-primary"
            className="md:text-[3.3rem] text-[1.7rem] block font-medium "
          />
          <Title
            TransPage="home"
            title="header.elevating_experiences"
            className="md:text-[3.3rem] text-[1.7rem] font-medium "
            titleColor="text-secondary"
          />
          <div>
            <Description
              TransPage="home"
              Description="header.vbooking_your_partner_in_seamless_travel_solutions"
              DescriptionColor=""
              className="text-secondary mb-[6px] md:text-[.8rem] text-[.5rem] font-normal "
            />
            <Description
              TransPage="home"
              Description="header.revolutionizing_global_travel_with_cutting_edge_ai"
              DescriptionColor=""
              className="text-wrap text-[#647087] mb-[6px] md:text-[.8rem] text-[.5rem] font-normal  "
            />
          </div>
          <div className="flex gap-4 mt-3 flex-wrap">
            {" "}
            {/* Allow wrapping for buttons */}
            <ButtonShadcn
              TransPage="home"
              text="header.join_our_community"
              className="text-white bg-primary px-4 py-2"
            />
            <ButtonShadcn
              TransPage="home"
              style="outline"
              text="common.book_demo"
              className="border-primary border bg-white text-primary px-4 py-2"
            />
          </div>
        </div>
        <div className="w-[26rem] max-w-full">
          {" "}
          <LottieAnimation />
        </div>
      </CustomContainer>
    </div>
  );
}

export default Header;
