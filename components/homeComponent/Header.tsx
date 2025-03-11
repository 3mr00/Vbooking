"use client";
import { images } from "@/assets";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import Button from "../common/Button";
import Description from "../common/Description";
import Title from "../common/Title";
function Header() {
  return (
    <CustomContainer className="w-full flex items-center justify-between flex-col lg:flex-row  bg-[#F7FCFC]">
      <div className="2xl:w-[50rem] xl:w-[40rem] w-full">
        <Title
          title="home.header.empowering_tourism"
          titleColor="text-primary"
          className="md:text-[2.5rem] text-[2rem] block font-medium"
        />
        <Title
          title="home.header.elevating_experiences"
          className="md:text-[2.5rem] text-[2rem] font-medium"
          titleColor="text-secondary"
        />
        <div>
          <Description
            Description="home.header.vbooking_your_partner_in_seamless_travel_solutions"
            DescriptionColor="text-text mb-[6px] text-[.8rem]"
          />
          <Description
            Description="home.header.revolutionizing_global_travel_with_cutting_edge_ai"
            DescriptionColor="text-text"
            className="text-wrap font-normal text-[.7rem]"
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
      {/* <video
                controls={false}
                loop
                muted
                playsInline
                autoPlay
                preload="metadata"
                width="100%"
                height="100%"
                className="w-full h-full object-cover rounded-[1rem]"
                title="videoSlider"
              >
                <source src={`${item.src}`} type="video/mp4" />
                Your bro wser does not support the video tag.
              </video> */}

      <Image
        src={images.animatedHeaderImage}
        alt="headerImage"
        className="w-[30rem]"
        width={500}
        height={500}
        priority
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 40vw, 40vw"
      />
    </CustomContainer>
  );
}

export default Header;
