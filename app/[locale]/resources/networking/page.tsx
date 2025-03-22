// import WhyUs from '@/components/WhyUsComponent/WhyUs';
import { Metadata } from "next";
import Image from "next/image";
import { useTranslations } from "next-intl";
import TestimonialSection from "@/components/joinTravelerComponent/TestimonialSection";

interface Card {
  icon: string;
  alt: string;
  title: string;
  description: string;
}

export const metadata: Metadata = {
  title: "Why Choose Us | VBooking",
  description:
    "Discover why VBooking is your best choice for booking solutions."
};

export default function WhyUsPage() {
  const t = useTranslations("WhyUs");

  return (
    <>
      {/* Hero Section */}
      <section className="bg-[#f7fcfc] py-16 relative overflow-hidden">
        <div className="container mx-auto px-4 ">
          <div className="absolute top-0 right-[350px] w-[500px] h-[500px] z-0 hidden lg:block">
            <Image
              src="/images/snake.svg"
              alt="Decorative snake"
              width={450}
              height={450}
              className="object-contain"
            />
          </div>
          <div className="absolute bottom-[-320px] left-[-10px] w-[450px] h-[450px] z-0 hidden lg:block">
            <Image
              src="/images/snakedown.svg"
              alt="Decorative snake"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative overflow-hidden">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">
                <span className="text-[#9C25A0] text-[32px] md:text-[56px] font-medium leading-[40px] md:leading-[64px]">
                  Less Time on Travel Management
                </span>{" "}
                -{" "}
                <span className="text-[#224A9A] text-[32px] md:text-[56px] font-medium leading-[40px] md:leading-[64px]">
                  More Time Growing Your Business
                </span>
              </h2>
              <p className="text-[#647087] text-[14px] md:text-[12px] font-normal leading-[20px] md:leading-[18px]">
                Take the first step toward transforming your travel business. In
                this 1-on-1 intro session, our experts will explore your unique
                needs and workflows to show you how TuRbo Travel Suite can
                revolutionize your operations.
              </p>
              <div className="space-y-4 w-full flex flex-col items-start">
                <div>
                  <label className="block text-gray-700 mb-2">
                    Fill in your business email{" "}
                    <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-2 border rounded-full w-[370px] border-[#D0D5DD] rounded-[100px] focus:outline-none focus:ring-2 focus:ring-purple-500"
                  />
                </div>
                <button className="flex h-[56px] px-8 py-4 justify-center items-center gap-3 rounded-[100px] bg-[#BA00AB] text-white shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)] hover:bg-[#BA00AB]/90 transition-colors">
                  Book a Discovery Meeting
                </button>
                <p className="text-gray-600 text-sm">
                  Don't miss this opportunity to see how TuRbo can simplify your
                  travel management and help your business thrive!
                </p>
              </div>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/turbo-travel-suit.svg"
                alt="Travel Management Illustration"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* What to expect */}
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

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* Supercharge Section */}
      <div className="bg-[#d7eff1] py-8 md:py-12">
        <div className="max-w-[879px] min-h-[202px] mx-auto bg-[#9c25a0] rounded-xl flex items-center p-4 md:p-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              Transform Your Business Today
            </h2>
            <p className="text-white text-base md:text-lg mb-6 md:mb-8">
              Experience the difference that vbooking’s innovative features can
              make for your tourism business. Contact us to schedule a demo and
              see our tools in action.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-[#2d63cf] hover:bg-[#2456b8] text-white rounded-full px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto">
                Request a Demo
              </button>
              <button className="bg-white text-[#9c25a0] hover:bg-gray-100 rounded-full px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto">
                Get a Quote
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
