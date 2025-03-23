import React from "react";

const Hero = () => {
  return (
    <div className="bg-[rgba(247,252,252,1)] w-full max-md:max-w-full ">
      <div className="bg-white flex w-full flex-col items-stretch justify-center py-10 max-md:max-w-full ">
        <div className="flex w-full flex-col items-stretch justify-center py-10 max-md:max-w-full ">
          <div className="flex w-full flex-col items-stretch max-md:max-w-full">
            <div className="self-center border border-[#d7efef] text-base text-[var(--fonts-B1,#0D65D6)] font-medium px-3 py-1 rounded-3xl border-solid font-poppins text-[16px] font-normal leading-[24px]">
              Why Choose VBooking?
            </div>
            <div className="flex w-full flex-col items-stretch text-start md:text-center mt-4 max-md:max-w-full">
              <h1 className="text-[#9c25a0] text-[16px] md:text-[56px] font-medium self-center w-[927px] max-md:max-w-full ">
                Powering the Future of{" "}
                <span className="text-[#2d63cf]">
                  Travel with Smart Innovation
                </span>
              </h1>
              <p className="text-[var(--G2,#647087)]  px-12 text-start md:text-center font-poppins text-[11px] font-normal mt-2 max-md:max-w-full">
                At VBooking, we redefine how travel businesses operate. Our
                all-in-one AI-driven travel platform empowers you to streamline
                operations, enhance customer experiences, and expand your
                reach—effortlessly. Whether you're a tour operator, travel
                agency, or holiday home manager, VBooking provides the
                technology, flexibility, and automation you need to stay ahead
                in a rapidly evolving industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full max-md:max-w-full">
        <div className="w-full max-md:max-w-full">
          <img
            src="/images/VBookingPlatformHero.png"
            alt="VBooking Platform"
            className="aspect-[2.09] object-contain w-full rounded-2xl max-md:max-w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
