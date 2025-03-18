import {
  ProdouctsBeh,
  Prodouctsknow,
  ProdouctsVector,
  Prodouctsvoice,
} from "@/icons";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const CustomizationProducts = () => {
  return (
    <>
      <section className="bg-gradient-to-b from-[#ECF8F8] via-[#F9DBE8] to-[#E5F5F6]  w-full  py-10  flex flex-col justify-start items-start gap-2.5">
        <CustomContainer className="bg-[url(../../assets/images/image/CustomizationProducts.png)] bg-cover bg-center">
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full text-center">
              <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                Customization{" "}
              </span>
              <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                Options
              </span>
            </div>

            {/* First row of cards */}
            <div className="w-full bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col md:flex-row justify-center items-start">
              <div className="w-full md:w-1/2 p-6 border-b-[2.40px] md:border-b-0 md:border-r-[2.40px] border-fuchsia-700 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-[#F9F5FF] rounded-[100px]">
                  <div className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] absolute left-[0px] top-[0px] sm:top-[0px] overflow-hidden">
                    {/* SVG placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-fuchsia-700">
                      <Prodouctsvoice />
                    </div>
                  </div>
                </div>
                <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-9">
                  Voice Personalization
                </div>
                <div className="w-full">
                  <div className="text-gray-500 text-sm sm:text-base font-normal leading-tight">
                    Select the AI's voice to fit the desired tone and accent,
                    ensuring it aligns with your brand's communication style.
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-[#F9F5FF] rounded-[100px]">
                  <div className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] absolute left-[0px] top-[0px] sm:top-[0px] overflow-hidden">
                    {/* SVG placeholder */}
                    <ProdouctsVector />
                  </div>
                </div>
                <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-9">
                  Avatar Customization
                </div>
                <div className="w-full">
                  <div className="text-gray-500 text-sm sm:text-base font-normal leading-tight">
                    Design the AI's avatar to visually represent your brand,
                    from professional and formal to friendly and casual.
                  </div>
                </div>
              </div>
            </div>

            {/* Second row of cards */}
            <div className="w-full bg-white rounded-2xl outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col md:flex-row justify-center items-start">
              <div className="w-full md:w-1/2 p-6 border-b-[2.40px] md:border-b-0 md:border-r-[2.40px] border-fuchsia-700 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-[#F9F5FF] rounded-[100px]">
                  <div className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] absolute left-[0px] top-[0px] sm:top-[0px] overflow-hidden">
                    {/* SVG placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-fuchsia-700">
                      <ProdouctsBeh />
                    </div>
                  </div>
                </div>
                <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-9">
                  Behavior Settings
                </div>
                <div className="w-full">
                  <div className="text-gray-500 text-sm sm:text-base font-normal leading-tight">
                    Adjust the AI’s interaction style, choosing between formal,
                    professional, or friendly based on your service standards.
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2 p-6 flex flex-col justify-start items-start gap-2">
                <div className="w-16 h-16 sm:w-20 sm:h-20 relative bg-[#F9F5FF] rounded-[100px]">
                  <div className="w-[4rem] h-[4rem] sm:w-[5rem] sm:h-[5rem] absolute left-[0px] top-[0px] sm:top-[0px] overflow-hidden">
                    {/* SVG placeholder */}
                    <div className="absolute inset-0 flex items-center justify-center text-fuchsia-700">
                      <Prodouctsknow />
                    </div>
                  </div>
                </div>
                <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-9">
                  Knowledge Base Management
                </div>
                <div className="w-full">
                  <div className="text-gray-500 text-sm sm:text-base font-normal leading-tight">
                    Keep the AI’s knowledge up to date by adding specific
                    information related to your services and offerings, ensuring
                    it remains relevant and accurate.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CustomContainer>
      </section>

      <CustomContainer>
        {/* Technology Section */}
        <section className="w-full  py-10 flex flex-col md:flex-row justify-start items-start gap-8 md:gap-16">
          <div className="w-full md:w-auto flex flex-col justify-start items-start">
            <div className="w-full">
              <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                Techn
              </span>
              <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                ology
              </span>
            </div>
          </div>
          <div className="w-full flex justify-center items-start">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full">
                <div className="text-gray-500 text-sm sm:text-base font-normal leading-normal">
                  The Ai Travel Agent leverages cutting-edge artificial
                  intelligence and machine learning technologies to deliver a
                  highly responsive and interactive customer experience. Its
                  extensive knowledge base, equipped with over 4 million travel
                  industry articles and multimedia content, allows it to provide
                  accurate and up-to-date information on a global scale. The
                  AI's customizable features, including voice, avatar, and
                  behavior settings, ensure it aligns perfectly with your
                  brand's identity, offering a tailored service to every client.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How can Travel Agents benefit section */}
        <section className="w-full  py-10 flex flex-col justify-start items-center gap-6">
          <div className="w-full flex flex-col justify-start items-center gap-2">
            <div className="w-full flex flex-col justify-start items-start">
              <div className="w-full text-center">
                <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                  How can Travel{" "}
                </span>
                <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                  Agents benefit from
                </span>
                <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                  {" "}
                  this feature?
                </span>
              </div>
            </div>
            <div className="w-full text-center text-gray-500 text-sm sm:text-base font-normal">
              Maximizing the AI Agent's Potential:
              <br />
              For travel agents, the Ai Travel Agent is a game-changer. It acts
              as an extension of your sales team, handling routine inquiries,
              providing detailed travel information, and guiding customers
              through the booking process. Here's how you can benefit:
            </div>
          </div>

          {/* Benefits cards - first row */}
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-fuchsia-700 text-md sm:text-lg font-normal">
                    Seamless Integration
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center text-fuchsia-700">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm sm:text-base font-normal">
                      Easily integrate the Ai Travel Agent with your existing
                      Live Booking Desk, enhancing your service offerings
                      without disrupting your current workflow.
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-fuchsia-700 text-md sm:text-lg font-normal">
                    Enhanced Customer Engagement
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center text-fuchsia-700">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm sm:text-base font-normal">
                      The AI's ability to interact in real-time with
                      customizable voice and video features allows for a more
                      engaging and personal customer experience, increasing
                      customer loyalty.
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-fuchsia-700 text-md sm:text-lg font-normal">
                    Increased Productivity
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center text-fuchsia-700">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm sm:text-base font-normal">
                      Free up your human agents to focus on more complex tasks
                      by allowing the Ai Travel Agent to handle routine bookings
                      and inquiries.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits cards - second row */}
            <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-fuchsia-700 text-md sm:text-lg font-normal">
                    Higher Conversion Rates
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center ">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm sm:text-base font-normal">
                      The AI's capability to facilitate bookings and process
                      payments during the call increases the likelihood of
                      closing sales on the spot, driving higher conversion
                      rates.
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-3">
                <div className="w-full flex flex-col justify-start items-start gap-2">
                  <div className="w-full text-fuchsia-700 text-md sm:text-lg font-normal">
                    Scalable Customer Support
                  </div>
                  <div className="w-full flex justify-start items-start gap-2">
                    <div className="w-6 h-6 relative overflow-hidden flex items-center justify-center text-fuchsia-700">
                      <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />
                    </div>
                    <div className="flex-1 text-gray-500 text-sm sm:text-base font-normal">
                      The AI can manage multiple clients at once, ensuring that
                      all customer inquiries are addressed promptly, regardless
                      of peak demand times.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How Our Features Make a Difference section */}
        <section className="w-full  py-10 flex flex-col justify-center items-center gap-2.5">
          <div className="w-full flex flex-col justify-start items-start gap-6">
            <div className="w-full flex justify-start items-start gap-4">
              <div className="w-full text-center">
                <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                  How Our{" "}
                </span>
                <span className="text-fuchsia-700 text-2xl md:text-3xl lg:text-4xl font-medium">
                  Features Make
                </span>
                <span className="text-blue-900 text-2xl md:text-3xl lg:text-4xl font-medium">
                  {" "}
                  a Difference?
                </span>
              </div>
            </div>

            {/* Features cards */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="w-full p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-center gap-4">
                <div className="w-full pb-[0.60px] flex flex-col justify-start items-start">
                  <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-snug">
                    Boost Efficiency
                  </div>
                </div>
                <div className="w-full text-gray-500 text-sm sm:text-base font-normal leading-tight">
                  Our tools streamline operations, automate repetitive tasks,
                  and enhance process management, allowing your team to focus on
                  delivering exceptional customer service.
                </div>
              </div>

              <div className="w-full p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-center gap-4">
                <div className="w-full pb-[0.60px] flex flex-col justify-start items-start">
                  <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-snug">
                    Enhance Customer Experience
                  </div>
                </div>
                <div className="w-full text-gray-500 text-sm sm:text-base font-normal leading-tight">
                  With real-time interactions, personalized quotations, and
                  immersive previews, you can provide a superior experience that
                  builds trust and loyalty among your clients.
                </div>
              </div>

              <div className="w-full p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-center gap-4">
                <div className="w-full pb-[0.60px] flex flex-col justify-start items-start">
                  <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-snug">
                    Increase Sales & Conversion Rates
                  </div>
                </div>
                <div className="w-full text-gray-500 text-sm sm:text-base font-normal leading-tight">
                  Our features are designed to improve engagement, facilitate
                  immediate bookings, and drive higher conversion rates,
                  ensuring your sales potential is maximized.
                </div>
              </div>

              <div className="w-full p-6 bg-white rounded-2xl shadow-[8px_9px_0px_0px_rgba(0,0,0,0.10)] outline outline-2 outline-offset-[-2px] outline-fuchsia-700 flex flex-col justify-start items-start gap-4">
                <div className="w-full pb-[0.60px] flex flex-col justify-start items-start">
                  <div className="w-full text-fuchsia-700 text-lg sm:text-xl font-semibold leading-snug">
                    Expand Your Reach
                  </div>
                </div>
                <div className="w-full text-gray-500 text-sm sm:text-base font-normal leading-tight">
                  Leverage our tools to reach more clients through enhanced
                  online presence and direct sales options on the vbooking
                  marketplace.
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full  py-10 flex justify-center items-center">
          <div className="w-full max-w-3xl p-4 sm:p-6 bg-fuchsia-700 rounded-3xl shadow-[0px_1px_2px_0px_rgba(10,13,18,0.05)] flex flex-col justify-start items-center gap-6">
            <div className="w-full flex flex-col justify-start items-center gap-2">
              <div className="w-full text-center text-white text-2xl md:text-3xl lg:text-4xl font-medium">
                Transform Your Business Today
              </div>
              <div className="w-full text-center text-white text-sm sm:text-base font-normal">
                Experience the difference that vbooking's innovative features
                can make for your tourism business. Contact us to schedule a
                demo and see our tools in action.
              </div>
            </div>
            <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-4">
              <button className="w-full sm:w-auto px-5 py-3 bg-gradient-to-b from-blue-900 to-blue-900 rounded-[100px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] flex justify-center items-center gap-2 overflow-hidden">
                <div className="text-white text-sm font-medium leading-tight tracking-tight">
                  Request a Demo
                </div>
              </button>
              <button className="w-full sm:w-auto px-5 py-3 bg-white rounded-[100px] shadow-[0px_1px_2px_0px_rgba(16,24,40,0.05)] outline outline-1 outline-offset-[-1px] outline-gray-300 flex justify-center items-center gap-2 overflow-hidden">
                <div className="text-slate-900 text-sm font-medium leading-tight tracking-tight">
                  Get a Quote
                </div>
              </button>
            </div>
          </div>
        </section>
      </CustomContainer>
    </>
  );
};

export default CustomizationProducts;
