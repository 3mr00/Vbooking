import React from 'react'
import Image from 'next/image'
import { useTranslations } from "next-intl";

const ProductivityChanges = () => {
          const t = useTranslations("Traveler");
    
        return (
          <div>
            <div className="bg-[#d7eff1]">
              <div className="py-12 md:py-20">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      <span className="text-[#2d63cf]">
                        {t("productivity.title.part1")}
                      </span>
                      <span className="text-[#9c25a0]">
                        {t("productivity.title.part2")}
                      </span>
                    </h2>
                    <p className="text-gray-600 text-lg max-w-4xl mx-auto">
                      {t("productivity.description")}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.raw("productivityData").map((item: any) => (
                      <div key={item.id} className="flex items-start gap-6">
                        <div className="relative">
                          <div className="bg-white rounded-xl shadow-sm relative z-[2] w-[48px] h-[48px] flex items-center justify-center">
                            <div className="absolute inset-0 z-[1] opacity-20">
                              <Image
                                src="/images/Pattern.svg"
                                alt={t("productivity.pattern.alt")}
                                fill
                                className="rounded-xl object-cover"
                              />
                            </div>
                            <div className="relative z-[2]">
                              <Image
                                src="/images/solutions 1.svg"
                                alt={t(item.title)}
                                width={20}
                                height={20}
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-[#9C25A0] text-[20px] font-semibold leading-tight mb-1">
                            {t(item.title)}
                          </h3>
                          <p className="text-[#647087] text-[16px] leading-normal">
                            {t(item.description)}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}

export default ProductivityChanges