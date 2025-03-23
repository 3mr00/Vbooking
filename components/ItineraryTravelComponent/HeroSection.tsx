import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HeroSection = () => {
  const t = useTranslations("Traveler");

  return (
    <div className="bg-[#f7fcfc] ">
      <div className="absolute top-0 right-[350px] w-[500px] h-[500px] z-0 hidden lg:block">
        <Image
          src="/images/snake.svg"
          alt="Decorative snake"
          width={450}
          height={450}
          className="object-contain"
        />
      </div>
      <div className="absolute bottom-[-320px] left-[0] w-[450px] h-[450px] z-0 hidden lg:block">
        <Image
          src="/images/snakedown.svg"
          alt="Decorative snake"
          width={300}
          height={300}
          className="object-contain"
        />
      </div>
      <div className="container mx-auto py-6 md:py-12 relative z-10">
        <div
          className="grid md:grid-cols-2 gap-4 md:gap-8 items-center"
          style={{ justifyItems: "end" }}
        >
          <div className="order-1 md:order-1">
            <h1 className="text-[12px] md:text-[16px] lg:text-6xl font-bold mb-4 md:mb-6">
              <span className="text-[#9C25A0] text-[20px] md:text-[56px] font-medium leading-[32px] md:leading-[64px]">
                {t("hero.title.part1")}
              </span>
              <br />
              <span className="text-[#2d63cf] text-[24px] md:text-[56px] font-medium leading-[32px] md:leading-[64px]">
                {t("hero.title.part2")}
              </span>
            </h1>

            <p className="text-[#647087] text-[12px] font-normal leading-[20px]">
              {t("hero.description")}
            </p>

            <button className="bg-[#BA00AB] hover:bg-[#8a1f8e] my-4 text-white rounded-[100px] flex h-[56px] px-8 py-4 justify-center items-center gap-3 text-lg shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)]">
              {t("hero.button")}
            </button>

            <p className="mt-4 text-[#647087] text-[12px] font-normal leading-[18px]">
              {t("hero.subtext")}
            </p>
          </div>

          <div className="order-2 md:order-2 md:h-[500px]">
            <Image
              src="/images/turbo-travel-suit.svg"
              alt={t("hero.image.alt")}
              width={500}
              height={500}
              priority
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
