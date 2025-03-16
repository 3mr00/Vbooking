import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const BenefitsTech = () => {
  return (
    <section className="relative ">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full ">
        <Image
          src={images.techBooking}
          alt="Suspension bridge in misty forest"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content with semi-transparent overlay */}
      <CustomContainer className="!py-0 !pb-12">
        <div className="relative ">
          <h2 className="text-3xl font-bold text-center text-white mb-12"></h2>
          <h2 className="text-center text-2xl md:text-3xl font-bold mb-16">
            <span className="text-[#1C3D80] md:text-[36px] text-[22px] font-medium">
              Benefits
            </span>{" "}
          </h2>
          <div className="grid md:grid-cols-3 gap-6 md:grid-rows-1">
            {/* Benefit Column 1 */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                  Increased Online Presence
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />
                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Enhanced Visibility:
                      </span>{" "}
                      Establishing a virtual presence in the Metaverse
                      significantly boosts a hotel's or attraction's online
                      visibility. This innovative approach allows businesses to
                      reach a wider audience, including tech-savvy travelers who
                      seek modern, interactive experiences.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Attractive Presentation:
                      </span>{" "}
                      Presenting properties and attractions in a visually
                      compelling and interactive format captures the interest of
                      potential customers more effectively than traditional
                      methods. This engaging presentation keeps users engaged
                      and encourages them to explore further.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                  Boosted Sales and Bookings
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Higher Conversion Rates:
                      </span>{" "}
                      Offering a realistic and immersive preview of destinations
                      enables customers to make more informed decisions. This
                      level of detail reduces uncertainty and increases the
                      likelihood of bookings, leading to higher conversion
                      rates.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Convincing Experience:
                      </span>{" "}
                      The ability to virtually experience a destination before
                      booking creates a persuasive argument for potential
                      customers. By immersing themselves in the environment,
                      they are more likely to proceed with their travel plans.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit Column 2 - Middle column with centered content */}
            <div className="flex items-center justify-center h-full">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                  Operational Efficiency
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Streamlined Updates:
                      </span>{" "}
                      Maintaining 3D environments on our platform is a
                      straightforward process. The ease of use ensures that the
                      environments remain current and accurate, reflecting any
                      changes in the properties or attractions.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        AI Assistance:
                      </span>{" "}
                      Our AI-powered solutions enhance the user experience while
                      also providing timely support and information. This
                      reduces the workload on human agents and ensures that
                      customers always receive accurate, up-to-date information.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Dashboard Control:
                      </span>{" "}
                      The dashboard provides businesses with comprehensive
                      control over the AI avatar's behavior and knowledge base.
                      This management system ensures that the AI delivers
                      information that is aligned with the business's goals,
                      enhancing customer satisfaction and operational
                      efficiency.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Benefit Column 3 */}
            <div className="space-y-6">
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                  Enhanced Customer Engagement
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Interactive Exploration:
                      </span>{" "}
                      Customers are empowered to explore destinations at their
                      own pace, discovering features and amenities that interest
                      them the most. This self-directed exploration ensures that
                      customers focus on what matters most to them, increasing
                      their satisfaction.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Personalized Experience:
                      </span>{" "}
                      By leveraging the data collected during virtual
                      explorations, businesses can personalize the experience
                      for each user. This tailored approach makes the journey
                      more relevant and engaging, increasing the likelihood of a
                      successful booking.
                    </div>
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-[#9c25a0] mb-4">
                  Seamless Integration with Live Booking Desk
                </h3>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Shared Experience:
                      </span>{" "}
                      Travel agents using the our booking desk can join the 3D
                      environment with clients during consultations. This shared
                      virtual experience enhances the booking process by
                      allowing agents to guide clients through the destination
                      in real-time.
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 " />

                    <div className="text-[#667085] md:text-base text-sm">
                      <span className="font-semibold text-secondary">
                        Real-Time Interaction:
                      </span>{" "}
                      Customers can interact with the virtual environment while
                      discussing their options with the agent. This real-time
                      engagement leads to a more persuasive sales process, as
                      clients can immediately see the value of their choices
                      immediately.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </CustomContainer>
    </section>
  );
};

export default BenefitsTech;
