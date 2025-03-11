"use client";
import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Button from "../common/Button";
import Description from "../common/Description";
import Title from "../common/Title";
function Header() {
  return (
    <CustomContainer className="flex items-center min-[1920px]:justify-between flex-col lg:flex-row md:gap-[35px] xl:gap-[123px] bg-[#F7FCFC]">
      <div className="2xl:w-[813px]">
        <Title
          title="home.header.empowering_tourism"
          titleColor="text-primary"
          className="text-clamp-[34px,3.6vw,64px] block font-medium"
        />
        <Title
          title="home.header.elevating_experiences"
          className="text-clamp-[34px,3.6vw,64px] font-medium"
          titleColor="text-secondary"
        />
        <div>
          <Description
            Description="home.header.vbooking_your_partner_in_seamless_travel_solutions"
            DescriptionColor="text-text mb-[6px] text-[14px]"
          />
          <Description
            Description="home.header.revolutionizing_global_travel_with_cutting_edge_ai"
            DescriptionColor="text-text"
            className="text-wrap font-normal text-[12px]"
          />
        </div>
        <div className="flex gap-4 mt-24">
          <Button
            text="home.header.join_our_community"
            className="text-white bg-primary"
          />
          <Button
            text="common.book_demo"
            className="border-primary border bg-white text-primary"
          />
        </div>
      </div>
      <Image
        src={images.animatedHeaderImage}
        alt="headerImage"
        className="w-[35rem]"
        width={500}
        height={500}
        priority
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 40vw"
      />
    </CustomContainer>
  );
}

export default Header;
