import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import React from "react";
import { FaCircleCheck } from "react-icons/fa6";

const KeyBenefitsProducts = () => {
  const benefitsData = [
    {
      category: "Real-Time Interaction",
      items: [
        {
          title: "Voice and Video Communication",
          description:
            "The AI Travel Agent interacts with customers through voice and video, delivering a lifelike and engaging experience that mimics a human sales representative.",
        },
        {
          title: "Customizable Voice and Avatar",
          description:
            "The AI’s voice, visual appearance, and interaction style can be tailored to match your brand’s identity, creating a consistent and immersive customer experience.",
        },
      ],
    },
    {
      category: "Extensive Knowledge Base",
      items: [
        {
          title: "Vast Content Library",
          description:
            "With access to over 4 million articles, the AI provides detailed information on travel destinations worldwide, helping customers make informed decisions.",
        },
        {
          title: "Multimedia Sharing",
          description:
            "During conversations, the AI can display articles, images, and videos, enriching the customer experience and aiding their decision-making process.",
        },
      ],
    },
    {
      category: "Sales Optimization",
      items: [
        {
          title: "Booking Facilitation",
          description:
            "The AI guides customers through the entire booking process, answering queries, making recommendations, and assisting with reservations.",
        },
        {
          title: "Live Booking Desk Integration",
          description:
            "Seamlessly integrates with your Live Booking Desk system, allowing for real-time customer interaction and bookings.",
        },
      ],
    },
    {
      category: "Secure Payments",
      items: [
        {
          title: "Payment During Call",
          description:
            ": The Ai Travel Agent can process payments securely during the conversation, ensuring a smooth and hassle-free transaction experience for the customer.",
        },
      ],
    },
  ];

  return (
    <CustomContainer>
      <div className=" relative w-full py-10 flex flex-col items-center gap-6 overflow-hidden">
        <div className="w-full text-center text-2xl md:text-4xl font-medium ">
          <span className="text-blue-900">Over </span>
          <span className="text-fuchsia-700">view</span>
        </div>
        <div className=" w-full px-4 md:px-16 lg:px-32 xl:px-64 flex flex-col items-center">
          <div className="max-w-3xl text-center text-gray-500 lg:text-[.8rem] text-xs  font-normal ">
            The Ai Travel Agent is a state-of-the-art AI-driven assistant
            designed to elevate the booking experience for both customers and
            travel agents. Acting as a virtual sales employee, this AI engages
            in real-time, providing personalized support through voice and video
            interactions. It seamlessly integrates into your Live Booking Desk,
            facilitating smooth and efficient bookings while enhancing customer
            satisfaction.
          </div>
        </div>
        <div className="hidden md:block w-40 h-40 absolute left-10 top-5">
          <Image
            src={images.vsymbolsmall}
            alt="vsymbolsmall"
            width={600}
            height={500}
            className=" w-full h-full"
          />
        </div>
        <div className="hidden md:block w-40 h-40 absolute right-10 top-5">
          <Image
            src={images.vsymbolsmall}
            alt="vsymbolsmall"
            width={600}
            height={500}
            className=" w-full h-full"
          />{" "}
        </div>
      </div>

      <div className=" py-12 flex flex-col justify-start items-center gap-2.5 overflow-hidden">
        <div className="w-full flex flex-col justify-start items-start gap-6">
          <div className="w-full flex flex-col justify-start items-center">
            <div className="w-full h-14 text-center justify-start">
              <span className="text-blue-900 text-3xl sm:text-4xl font-medium">
                Key
              </span>
              <span className="text-fuchsia-700 text-3xl sm:text-4xl font-medium">
                {" "}
                Benefits
              </span>
            </div>
          </div>

          {/* Benefits Container */}
          <div className="w-full p-6 bg-white rounded-2xl flex flex-col justify-start items-start gap-6">
            {benefitsData?.map((benefit, index) => (
              <div
                key={index}
                className="w-full flex flex-col sm:flex-row justify-start items-start gap-6 sm:gap-20"
              >
                {/* Category Title */}
                <div className="w-full sm:w-72 text-start  text-fuchsia-700 text-xl font-normal">
                  {benefit.category}
                </div>

                {/* Benefit Items */}
                <div className="flex-1 flex flex-col justify-center items-start gap-4">
                  {benefit.items.map((item, idx) => (
                    <>
                      <div key={idx} className="w-full flex items-start gap-2">
                        {/* Icon */}
                        <FaCircleCheck className="h-5 w-5 text-[#2d63cf] flex-shrink-0 mt-1" />

                        {/* Text Content */}
                        <div className="flex-1">
                          <span className="text-blue-700 text-base font-semibold">
                            {item.title}:
                          </span>
                          <span className="text-gray-500 text-base font-normal">
                            {" "}
                            {item.description}
                          </span>
                        </div>
                      </div>

                      {/* Separator */}
                      {index < benefitsData.length - 1 && (
                        <div className="w-full">
                          <svg
                            width="100%"
                            height="2"
                            viewBox="0 0 1374 2"
                            fill="none"
                          >
                            <path
                              d="M1373 1.00012L1 1"
                              stroke="url(#gradient)"
                              strokeLinecap="round"
                            />
                            <defs>
                              <radialGradient
                                id="gradient"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                              >
                                <stop stopColor="#A8DCE1" />
                                <stop offset="1" stopColor="#D7EFF1" />
                              </radialGradient>
                            </defs>
                          </svg>
                        </div>
                      )}
                    </>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </CustomContainer>
  );
};

export default KeyBenefitsProducts;
