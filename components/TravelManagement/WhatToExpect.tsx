import React from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";

interface Card {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

const WhatToExpect = () => {
  const t = useTranslations("TravelManagementPage");

  return (
    <div>
      {" "}
      <section className="bg-[#d7eff1] py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-center text-4xl font-bold mb-12">
            <span className="text-[#224A9A]">
              {t("whatToExpect.title.part1")}
            </span>{" "}
            <span className="text-[#9C25A0]">
              {t("whatToExpect.title.part2")}
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* log whatToExpect */}

            {t.raw("whatToExpect.cards").map((card: Card, index: number) => (
              <div
                key={index}
                className="bg-white p-4 rounded-lg shadow-sm relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 w-24 h-24">
                  <Image
                    src="/images/Pattern (1).svg"
                    alt="Corner Pattern"
                    width={120}
                    height={120}
                    className=""
                  />
                </div>
                <div className="w-12 h-12 mb-4 relative z-10 flex items-center justify-center bg-white rounded-md">
                  <Image
                    src="/images/what-to-expect.png"
                    alt={card.alt}
                    width={20}
                    height={20}
                  />
                </div>
                <h3 className="text-xl font-bold text-[#9C25A0] mb-3 relative z-10">
                  {card.title}
                </h3>
                <p className="text-gray-600 relative z-10">
                  {card.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-[#9C25A0] text-white px-8 py-3 rounded-full hover:bg-[#9C25A0] transition-colors">
              {t("whatToExpect.cta.text")}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatToExpect;
