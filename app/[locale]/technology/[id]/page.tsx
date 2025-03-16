import { icons } from "@/assets/icons";
import { images } from "@/assets/images";
import BenefitsTech from "@/components/TechnologyComponent/BenefitsTech";
import HeaderTech from "@/components/TechnologyComponent/HeaderTech";
import KeyFeaturesTech from "@/components/TechnologyComponent/KeyFeaturesTech";
import { Link } from "@/navigation";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";

export default function technology() {
  return (
    <div className="bg-gradient-to-b from-[#F7FCFC] to-[#D7EFF1]">
      {/* Hero Section */}
      <HeaderTech />

      {/* Key Features Section */}
      <KeyFeaturesTech />

      {/* Benefits Section */}
      <BenefitsTech />

      <div className="bg-gradient-to-b from-[#EBF7F7] via-[#F9DBE8] to-[#E0F3F4]">
        <CustomContainer className=" !py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 relative">
            <Image
              src={images.vsymbolsmall}
              alt="Turbo Booking Engine Platform Interface"
              width={600}
              height={500}
              className={`w-[14rem] h-[14rem] lg:mx-[-120px] absolute`}
            />
            <div className="relative">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                <span className="text-primary">Empowering Your </span>
                <span className="text-secondary">
                  Business with Our Technology
                </span>
              </h2>
            </div>
            <div>
              <p className="text-gray-600 mb-4 text-sm">
                VBooking’s technology is more than just a set of tools; it's a
                complete ecosystem designed to empower tourism companies. By
                integrating our ML and AI, Metaverse, Big Data Analysis, and
                Travel Web Builder into your operations, you can offer an
                enhanced customer experience, improve operational efficiency,
                and ultimately drive growth.
              </p>
              <p className="text-gray-600">
                Whether you're looking to streamline your processes, expand your
                market reach, or offer cutting-edge experiences, our technology
                provides the foundation you need to succeed in the competitive
                travel industry.
              </p>
            </div>
          </div>
        </CustomContainer>
      </div>

      {/* ///////////////////////////// */}
      <CustomContainer className="!py-12">
        <div className="w-full py-12 flex flex-col justify-center items-center gap-6 ">
          <div className="w-full flex flex-col justify-center items-center gap-6">
            <div className="w-full flex flex-col justify-center items-center gap-2">
              <div className="inline-flex justify-center items-center gap-4">
                <div className="w-full  text-center">
                  <span className="text-blue-900 text-4xl font-medium">
                    Partner{" "}
                  </span>
                  <span className="text-fuchsia-700 text-4xl font-medium">
                    with VBooking
                  </span>
                </div>
              </div>
              <p className="w-full max-w-[714px] text-center text-gray-500 text-base font-normal">
                Ready to transform your travel business with the power of
                innovative technology? Partner with VBooking and unlock new
                possibilities in the digital travel landscape:
              </p>
            </div>

            <div className=" bg-white rounded-2xl shadow-[12px_12px_0px_0px_rgba(70,118,215,1.00)] outline outline-1 outline-offset-[-1px] outline-fuchsia-700 flex flex-col md:flex-row">
              {/* Box 1 */}
              <div className="flex-1 pl-6 pr-7 py-6 border-b md:border-b-0 md:border-r-[1.5px] border-fuchsia-700 flex flex-col justify-start items-start gap-2">
                <div className=" p-4 rounded-full md:w-[5rem] md:h-[5rem]  w-[3rem] h-[3rem] relative">
                  <Image
                    src={icons.tech1}
                    alt={"tech1"}
                    className="object-contain"
                    fill
                  />
                </div>
                <h3 className="text-fuchsia-700 text-xl font-semibold leading-9">
                  Scalable Solutions
                </h3>
                <p className="text-gray-500 text-base font-normal leading-tight">
                  Whether you're a small tour operator or a large travel
                  company, our technology scales with your needs.
                </p>
              </div>

              {/* Box 2 */}
              <div className="flex-1 pl-6 pr-7 py-6 border-b md:border-b-0 md:border-r-[1.5px] border-fuchsia-700 flex flex-col justify-start items-start gap-2">
                <div className=" p-4 rounded-full md:w-[5rem] md:h-[5rem]  w-[3rem] h-[3rem] relative">
                  <Image
                    src={icons.tech2}
                    alt={"tech1"}
                    className="object-contain"
                    fill
                  />
                </div>
                <h3 className="text-fuchsia-700 text-xl font-semibold leading-9">
                  Global Reach
                </h3>
                <p className="text-gray-500 text-base font-normal leading-tight">
                  Tap into a worldwide network of travel offices and customers.
                </p>
              </div>

              {/* Box 3 */}
              <div className="flex-1 p-6 flex flex-col justify-start items-start gap-2">
                <div className=" p-4 rounded-full md:w-[5rem] md:h-[5rem]  w-[3rem] h-[3rem] relative">
                  <Image
                    src={icons.tech3}
                    alt={"tech1"}
                    className="object-cover"
                    fill
                  />
                </div>
                <h3 className="text-fuchsia-700 text-xl font-semibold leading-9">
                  Future-Proof Technology
                </h3>
                <p className="text-gray-500 text-base font-normal leading-tight">
                  Stay ahead of the curve with tools designed for the evolving
                  travel industry.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////// */}

        <div className=" py-12 flex flex-col justify-center items-center">
          <div className="bg-primary rounded-xl p-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Take the Next Step
            </h2>
            <p className="text-white mb-8 lg:max-w-3xl text-sm mx-auto">
              Empower your business with VBooking’s advanced technology today.
              Contact Us to learn more about how we can help you deliver
              exceptional travel experiences and drive your business forward.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#"
                className="bg-gradient-to-b from-[#224A9A] to-[#1C3D80] text-white px-6 py-3 rounded-full font-medium hover:bg-opacity-90 transition-colors"
              >
                Request a Demo
              </Link>
              <Link
                href="#"
                className="bg-white text-secondary px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
        {/* ///////////////////////////// */}

        <div className="w-full py-12 flex flex-col justify-center items-center gap-6 ">
          <div className="w-full flex flex-col justify-start items-center gap-6">
            <div className="text-center">
              <span className="text-blue-900 text-4xl font-medium">Why </span>
              <span className="text-fuchsia-700 text-4xl font-medium">
                Choose VBooking?
              </span>
            </div>
            <div className="w-full md:w-[744px] text-center text-gray-500 text-base font-normal">
              We understand the unique challenges faced by tourism companies in
              today’s market. Our technology is not just about providing tools;
              it's about empowering your business to reach its full potential.
              With VBooking, you gain a partner committed to your success,
              offering:
            </div>
          </div>

          <div className="w-full flex flex-col md:flex-row justify-center items-center gap-6">
            {[
              {
                title: "Cutting-Edge Innovation",
                desc: "Stay ahead with the latest in travel technology.",
              },
              {
                title: "Comprehensive Support",
                desc: "From onboarding to ongoing support, we’re with you every step of the way.",
              },
              {
                title: "Proven Results",
                desc: "Join a network of satisfied partners who have transformed their businesses with VBooking.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex-1 flex flex-col justify-center items-center gap-12 relative"
              >
                <div className="w-14 h-14 bg-blue-700 rounded-full flex justify-center items-center shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)] border-2 border-neutral-800 text-white font-semibold text-lg">
                  {index + 1}
                </div>

                {/* Vertical Line */}

                <div className="z-0 w-[2.40px] h-24  top-[59px] absolute opacity-20 border-dashed border-l-[2.40px] border-white shadow-[6px_6px_0px_0px_rgba(0,0,0,0.25)]"></div>

                <div className="w-[22rem] h-[7.5rem] z-10 p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-center gap-4">
                  <div className="text-fuchsia-700 text-lg font-semibold leading-snug">
                    {item.title}
                  </div>
                  <div className="text-gray-500 text-[.8rem] font-normal leading-tight">
                    {item.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </CustomContainer>
    </div>
  );
}
