import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import AutoScrollFeatures from "@/components/joinTravelerComponent/AutoScrollFeatures";
import { useTranslations } from "next-intl";

const featuresData = [
  {
    id: 1,
    title: "Booking Engine",
    description:
      "A seamless and efficient system to handle all client bookings effortlessly.",
  },
  {
    id: 2,
    title: "CRM",
    description:
      "Advanced tools to manage client relationships and enhance engagement.",
  },
  {
    id: 3,
    title: "Website",
    description:
      "A professional, responsive online presence integrated with your services.",
  },
  {
    id: 4,
    title: "AI Agent",
    description:
      "Smart automation for customer inquiries, bookings, and 24/7 support.",
  },
  {
    id: 5,
    title: "Management Tools",
    description: "Real-time tracking and control of your business operations.",
  },
  {
    id: 6,
    title: "Holiday Builder",
    description:
      "Easily craft unique, customized holiday packages for your clients.",
  },
  {
    id: 7,
    title: "Itinerary Builder",
    description: "Effortlessly design and share stunning, dynamic itineraries.",
  },
  {
    id: 8,
    title: "Operations App",
    description:
      "Streamline day-to-day tasks with mobile-friendly tools for management on the go.",
  },
  {
    id: 9,
    title: "Live Booking Desk",
    description:
      "Real-time support to handle complex booking needs and inquiries.",
  },
  {
    id: 10,
    title: "Inventory and Supplier Management",
    description:
      "Optimize and manage your inventory and supplier network seamlessly.",
  },
];

const productivityData = [
  {
    id: 1,
    title: "Increased Productivity",
    description: "Up by 80%, freeing up time for strategic growth.",
    icon: "/images/calendar.svg",
  },
  {
    id: 2,
    title: "Higher Conversions",
    description: "Achieving a 42% boost in client bookings.",
    icon: "/images/settings.svg",
  },
  {
    id: 3,
    title: "Faster Itinerary Creation",
    description:
      "Create itineraries 15X faster, reducing planning time from hours to minutes.",
    icon: "/images/chart.svg",
  },
  {
    id: 4,
    title: "Reduced Manual Work",
    description: "Automate repetitive tasks, cutting manual workload by 70%.",
    icon: "/images/calendar.svg",
  },
  {
    id: 5,
    title: "Enhanced Customer Response Times",
    description:
      "Respond to inquiries 3X faster, ensuring exceptional customer service.",
    icon: "/images/settings.svg",
  },
  {
    id: 6,
    title: "Improved Team Collaboration",
    description:
      "Boost team efficiency by 60% with real-time collaboration and streamlined workflows.",
    icon: "/images/chart.svg",
  },
];

// export async function generateMetadata({
//   params: { locale },
// }: {
//   params: { locale: string };
// }): Promise<Metadata> {
//   const t = await getTranslations({ locale, namespace: "JoinTraveler" });
//   return {
//     title: t("title"),
//     description: t("description"),
//   };
// }

export default function JinTravelerPage() {
  const t = useTranslations("Traveler");

  const whyTurboData = [
    "designed",
    "all_in_one",
    "user_friendly",
    "cost_effective",
    "support",
  ];

  const productivityData = [1, 2, 3, 4, 5, 6].map((id) => ({
    id,
    title: `productivity.items.${id}.title`,
    description: `productivity.items.${id}.description`,
  }));

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-[#f7fcfc] relative overflow-hidden">
        <div className="absolute top-0 right-[500px] w-[450px] h-[450px] z-0 hidden lg:block">
          <Image
            src="/images/snake.svg"
            alt="Decorative snake"
            width={450}
            height={450}
            className="object-contain"
          />
        </div>
        <div className="absolute bottom-[-320px] w-[450px] h-[450px] z-0 hidden lg:block">
          <Image
            src="/images/snakedown.svg"
            alt="Decorative snake"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
        <div className="container mx-auto px-4 py-6 md:py-12 relative z-10">
          <div className="grid md:grid-cols-2 gap-4 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6">
                <span className="text-[#9C25A0] text-[56px] font-medium leading-[64px]">
                  {t("hero.title.part1")}
                </span>
                <br />
                <span className="text-[#2d63cf] text-[56px] font-medium leading-[64px]">
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

            <div className="order-1 md:order-2">
              <Image
                src="/images/turbo-travel-suit.svg"
                alt={t("hero.image.alt")}
                width={600}
                height={500}
                className="w-full"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Power of TuRbo Section */}
      <div className="bg-[#d7eff1]">
        <div className="py-10 md:py-20 relative overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 md:mb-6">
              <span className="text-[#2d63cf]">
                {t("powerOfTurbo.title.part1")}{" "}
              </span>
              <span className="text-[#9c25a0]">
                {t("powerOfTurbo.title.part2")}
              </span>
            </h2>

            <div className="max-w-4xl mx-auto">
              <span className="text-[16px] text-[#647087] ">
                {t("powerOfTurbo.subtitle")}
              </span>

              <p
                className="text-center font-['Poppins'] text-base font-normal leading-6 text-[#647087] text-[16px]"
                style={{ color: "color(display-p3 0.4 0.4392 0.5216)" }}
              >
                {t("powerOfTurbo.description")}
              </p>
            </div>
          </div>

          {/* Background Decorative Elements */}
          {/* hidden lg:block */}
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block">
            <Image
              src="/images/Artboard 1 copy 3.svg"
              alt={t("decorative.left.alt")}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
          <div className="absolute right-0 top-1/2 transform -translate-y-1/2 opacity-10 hidden lg:block">
            <Image
              src="/images/Artboard 1 copy 3.svg"
              alt={t("decorative.right.alt")}
              width={200}
              height={200}
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-[#d7eff1]">
        <div className="container mx-auto px-4 py-10 md:py-16">
          <div className="text-center mb-8 md:mb-12">
            <div className="relative">
              <h2 className="text-3xl md:text-4xl font-bold mb-10 md:mb-16  ">
                <span className="text-[#2d63cf]">
                  {t("features.title.part1")}
                </span>
                <span className="text-[#9c25a0]">
                  {t("features.title.part2")}
                </span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuresData.map((item) => (
                <div
                  key={item.id}
                  className="relative bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border border-gray-100 text-start  overflow-hidden"
                >
                  <div className="absolute inset-0 z-[1] transform opacity-50">
                    <Image
                      src="/images/Pattern.svg"
                      alt="Pattern background"
                      className="top-0 left-0"
                      width={60}
                      height={60}
                    />
                  </div>
                  <div className="">
                    <h3 className="text-xl font-semibold text-[#9c25a0]">
                      {t(`features.items.${item.id}.title`)}
                    </h3>
                    <p className="text-gray-600">
                      {t(`features.items.${item.id}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Auto-scrolling Features Section */}
      <div className="bg-[#d7eff1] w-full">
        <AutoScrollFeatures />
      </div>

      {/* Productivity Changes Section */}
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
              {productivityData.map((item) => (
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

      {/* Call to Action Section */}
      <div className="bg-[#d7eff1]">
        <div className="py-8 md:py-8">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <p
                className="text-[#647087] text-center font-['Poppins'] text-[18px] font-normal leading-[27px] max-w-4xl mx-auto mb-6 md:mb-8"
                style={{ color: "color(display-p3 0.4 0.4392 0.5216)" }}
              >
                {t("cta.description")}
              </p>
              <Button className="bg-[#BA00AB] hover:bg-[#8a1f8e] text-white rounded-[100px] px-6 py-8 text-lg shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)]">
                {t("cta.button")} <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Why TuRbo Section */}
      <div className="bg-[#d7eff1]">
        <div className="py-12 md:py-15">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              <span className="text-[#2d63cf]">
                {t("whyTurbo.title.part1")}
              </span>
              <span className="text-[#9c25a0]">
                {t("whyTurbo.title.part2")}
              </span>
            </h2>

            <div className="grid md:grid-cols-3 gap-6">
              {whyTurboData.map((key) => (
                <div
                  key={key}
                  className="bg-white rounded-xl p-6 shadow-sm flex flex-col"
                >
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2 mb-1"></div>
                    <h3 className="text-[#9c25a0] text-xl font-semibold">
                      {t(`whyTurbo.${key}.title`)}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed flex items-start gap-2">
                      <span className="rounded-full flex-shrink-0 w-6 h-6 flex items-center justify-center">
                        <Image
                          src="/images/Group.svg"
                          alt="Checkmark"
                          width={24}
                          height={24}
                          className="object-contain"
                        />
                      </span>
                      {t(`whyTurbo.${key}.description`)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* DMCs Customers Section */}
      <div className="bg-[#d7eff1]">
        <div className="py-12 md:py-18 border-[#d1e9ef]">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
              <span className="text-[#2d63cf] uppercase px-4">
                {t("customers.title.part1")}
              </span>
              <span className="text-[#C41BCD]">
                {t("customers.title.part2")}
              </span>
            </h2>

            <div className="flex justify-center items-center gap-8">
              <Image
                src="/images/Placeholder logo (1).png"
                alt={t("customers.logo2.alt")}
                width={200}
                height={80}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Supercharge Section */}
      <div className="bg-[#d7eff1] py-8 md:py-12">
        <div className="max-w-[879px] min-h-[202px] mx-auto bg-[#9c25a0] rounded-xl flex items-center p-4 md:p-8">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 md:mb-4">
              {t("supercharge.title")}
            </h2>
            <p className="text-white text-base md:text-lg mb-6 md:mb-8">
              {t("supercharge.description")}
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button className="bg-[#2d63cf] hover:bg-[#2456b8] text-white rounded-[100px] px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)]">
                {t("supercharge.button1")}
              </Button>
              <Button className="bg-white text-[#BA00AB] hover:bg-gray-100 rounded-[100px] px-6 md:px-8 py-2 md:py-3 w-full sm:w-auto shadow-[0px_1px_2px_0px_rgba(14,24,41,0.05)]">
                {t("supercharge.button2")}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
