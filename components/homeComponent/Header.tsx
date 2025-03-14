"use client";
import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Button from "../common/Button";
import Description from "../common/Description";
import Title from "../common/Title";
import ButtonShadcn from "../common/Shadcn/ButtonShadcn";
function Header() {
  return (
    <div className="bg-[#F7FCFC] pt-4 w-full">
      <CustomContainer className=" pt-[16px]  pb-0  flex items-center justify-between flex-col-reverse lg:flex-row ">
        <div className="2xl:w-[50rem] xl:w-[40rem] w-full ">
          {" "}
          {/* Add padding for better spacing */}
          <Title
            title="home.header.empowering_tourism"
            titleColor="text-primary"
            className="md:text-[3.3rem] text-[1.7rem] block font-medium "
          />
          <Title
            title="home.header.elevating_experiences"
            className="md:text-[3.3rem] text-[1.7rem] font-medium "
            titleColor="text-secondary"
          />
          <div>
            <Description
              Description="home.header.vbooking_your_partner_in_seamless_travel_solutions"
              DescriptionColor=""
              className="text-secondary mb-[6px] md:text-[.8rem] text-[.5rem] font-normal "
            />
            <Description
              Description="home.header.revolutionizing_global_travel_with_cutting_edge_ai"
              DescriptionColor=""
              className="text-wrap text-[#647087] mb-[6px] md:text-[.8rem] text-[.5rem] font-normal  "
            />
          </div>
          <div className="flex gap-4 mt-3 flex-wrap">
            {" "}
            {/* Allow wrapping for buttons */}
            <ButtonShadcn
              text="home.header.join_our_community"
              className="text-white bg-primary px-4 py-2"
            />
            <ButtonShadcn
              style="outline"
              text="common.book_demo"
              className="border-primary border bg-white text-primary px-4 py-2"
            />
          </div>
        </div>
        <Image
          src={images.animatedHeaderImage}
          alt="headerImage"
          className="w-[22rem] max-w-full"
          width={400}
          height={400}
          priority
          sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
        />
      </CustomContainer>
    </div>
  );
}

export default Header;
