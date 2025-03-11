"use client";
import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Button from "../common/Button";
import Description from "../common/Description";
import Title from "../common/Title";
function Header() {
  return (
    <CustomContainer className="w-full flex items-center justify-between flex-col lg:flex-row bg-[#F7FCFC]">
      <div className="2xl:w-[50rem] xl:w-[40rem] w-full px-4">
        {" "}
        {/* Add padding for better spacing */}
        <Title
          title="home.header.empowering_tourism"
          titleColor="text-primary"
          className="md:text-[2.5rem] text-[1.8rem] block font-medium "
        />
        <Title
          title="home.header.elevating_experiences"
          className="md:text-[2.5rem] text-[1.8rem] font-medium "
          titleColor="text-secondary"
        />
        <div>
          <Description
            Description="home.header.vbooking_your_partner_in_seamless_travel_solutions"
            DescriptionColor="text-text mb-[6px] text-[0.85rem] "
          />
          <Description
            Description="home.header.revolutionizing_global_travel_with_cutting_edge_ai"
            DescriptionColor="text-text"
            className="text-wrap font-normal text-[0.75rem] "
          />
        </div>
        <div className="flex gap-4 mt-12 flex-wrap">
          {" "}
          {/* Allow wrapping for buttons */}
          <Button
            text="home.header.join_our_community"
            className="text-white bg-primary px-4 py-2"
          />
          <Button
            text="common.book_demo"
            className="border-primary border bg-white text-primary px-4 py-2"
          />
        </div>
      </div>
      <Image
        src={images.animatedHeaderImage}
        alt="headerImage"
        className="w-[24rem] max-w-full"
        width={400}
        height={400}
        priority
        sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 40vw"
      />
    </CustomContainer>
  );
}

export default Header;
