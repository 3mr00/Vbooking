import { CustomContainer } from "@/Wrapper/CustomContainer";
import { images } from "@/assets/images";
import Image from "next/image";

const HeaderTech = () => {
  return (
    <CustomContainer className="!py-12">
      <section className=" flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 space-y-4">
          <h1 className="md:text-[2.4rem] text-[1.6rem] font-medium mb-4">
            <span className="text-[#9c25a0] block">
              Unlock Higher Engagement and Sales with vbooking's
            </span>
            <span className="text-[#2d63cf] block mt-2">
              Metaverse-Enhanced 3D Booking Technology
            </span>
          </h1>
          <p className="text-[#222222] max-w-xl md:text-[.8rem] text-[.6rem] font-normal">
            The introduction of Metaverse technology into the travel sector
            marks a significant leap forward in how tourism products are
            marketed and sold. By collaborating with hotels, resorts, and
            tourist attractions, vbooking has developed a state-of-the-art 3D
            builder that creates fully interactive, realistic 3D environments.
          </p>
        </div>
        <div className="md:w-1/2 flex justify-end">
          <div className="relative md:w-[400px] md:h-[400px] w-[300px] h-[300px]">
            <Image
              src={images.techHeader}
              alt="Person wearing futuristic VR headset"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </section>
    </CustomContainer>
  );
};

export default HeaderTech;
