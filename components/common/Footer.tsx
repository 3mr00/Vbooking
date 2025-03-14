"use client";

import { images } from "@/assets";
import {
  FaceBookIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
  WhatUsAppIcon,
} from "@/icons";
import Image from "next/image";
import Link from "next/link";
import LanguageSwitcher from "./LanguageSwitcher";
import Title from "./Title";
import AccordionSidebar from "./AccordionSidebar";
import { useTranslations } from "next-intl";
import { CustomContainer } from "@/Wrapper/CustomContainer";

const data = [
  {
    title: "home.footer.ourTechnology",
    links: [
      { title: "home.footer.links.aiAndML", url: "" },
      { title: "home.footer.links.nlpSearch", url: "" },
      { title: "home.footer.links.dataOps", url: "" },
      { title: "home.footer.links.automation", url: "" },
      { title: "home.footer.links.metaverse", url: "" },
      { title: "home.footer.links.decentralisedServers", url: "" },
    ],
  },
  {
    title: "home.footer.ourProduct",
    links: [
      { title: "home.footer.links.turboBooking", url: "" },
      { title: "home.footer.links.aiAgent", url: "" },
      { title: "home.footer.links.travelCrm", url: "" },
      { title: "home.footer.links.engagingHoliday", url: "" },
      { title: "home.footer.links.liveBookingDesk", url: "" },
      { title: "home.footer.links.operatorApp", url: "" },
    ],
  },
  {
    title: "home.footer.ourCommunity",
    links: [
      { title: "home.footer.links.joinTraveler", url: "" },
      { title: "home.footer.links.academy", url: "" },
      { title: "home.footer.links.moments", url: "" },
      { title: "home.footer.links.vBookingHub", url: "" },
      { title: "home.footer.links.networking", url: "" },
      { title: "home.footer.links.metaverse", url: "" },
    ],
  },
  {
    title: "home.footer.doBusinessWithUs",
    links: [
      { title: "home.footer.links.listProperty", url: "" },
      { title: "home.footer.links.claimBusiness", url: "" },
      { title: "home.footer.links.turboTravelSuite", url: "" },
      { title: "home.footer.links.travelExpertProgram", url: "" },
      { title: "home.footer.links.agentPortal", url: "" },
    ],
  },
  {
    title: "home.footer.contact",
    links: [
      { title: "home.footer.links.aboutUs", url: "" },
      { title: "home.footer.links.contactUs", url: "" },
      { title: "home.footer.links.enquiries", url: "" },
      { title: "home.footer.links.investorRelations", url: "" },
      { title: "home.footer.links.partnerWithUs", url: "" },
      { title: "home.footer.links.supportEmail", url: "support@vbooking.com" },
    ],
  },
  {
    title: "home.footer.resources",
    links: [
      { title: "home.footer.links.blog", url: "" },
      { title: "home.footer.links.faqs", url: "" },
      { title: "home.footer.links.training", url: "" },
      { title: "home.footer.links.privacyPolicy", url: "" },
    ],
  },
];

const socialLinks = [
  {
    icon: <LinkedInIcon />,
    url: "",
  },
  {
    icon: <FaceBookIcon />,
    url: "",
  },
  {
    icon: <InstagramIcon />,
    url: "",
  },
  {
    icon: <TwitterIcon />,
    url: "",
  },
  {
    icon: <WhatUsAppIcon />,
    url: "",
  },
];

function footer() {
  const t = useTranslations();

  return (
    <footer className="py-16 bg-gradient-to-b from-[#224A9A] to-[#1C3D80]  text-white ">
      <CustomContainer>
        <div className="hidden md:block">
          <div className="mb-[32px]">
            <Image src={images.footerLogo} alt="logo" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-8 text-sm">
            {data.map((item, index) => (
              <div key={index}>
                <h3 className="text-[.9rem] font-semibold mb-4">
                  {t(item.title)}
                </h3>
                <ul>
                  {item.links.map((link, i) => (
                    <li key={i} className="mb-2">
                      <Link
                        href={link.url}
                        className="text-gray-300 hover:text-white transition text-sm"
                      >
                        {t(link.title)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="block md:hidden">
          <AccordionSidebar items={data} />
        </div>

        <div className="flex items-center justify-between sm:justify-end mt-8">
          <Title
            title="home.footer.connectWithUs"
            titleColor="text-white"
            className=""
          />
          <ul className="flex gap-4 sm:me-8 sm:ms-16">
            {socialLinks.map((link, index) => (
              <li key={index} className="cursor-pointer">
                {link.icon}
              </li>
            ))}
          </ul>
          <div className="hidden md:block">
            <LanguageSwitcher />
          </div>
        </div>

        <div className="mt-[44px]">
          <div
            className={`${
              t("language.lang") === "ar" ? "sm:divide-x-reverse" : ""
            } sm:divide-slate-500 sm:divide-x-2 flex flex-wrap gap-3 justify-center`}
          >
            <Title
              title="home.footer.awards"
              titleColor="text-white"
              className="text-center"
            />
            <Title
              title="home.footer.trusted"
              titleColor="text-white"
              className="ps-3 text-center"
            />
            <div className="flex gap-3">
              <Title
                title="home.footer.securePayments"
                titleColor="text-white"
                className="ps-3 text-center"
              />
              <div className="flex gap-3">
                {[images.payment1, images.payment2, images.payment3].map(
                  (payment, index) => (
                    <Image key={index} src={payment} alt="payment" />
                  )
                )}
              </div>
            </div>
          </div>
          <div
            className={`${
              t("language.lang") === "ar" ? "sm:divide-x-reverse" : ""
            }  sm:divide-slate-500 sm:divide-x-2 flex flex-wrap gap-3 justify-center mt-4`}
          >
            <Title
              title="home.footer.copyright"
              titleColor="text-white text-center"
            />
            <Title
              title="home.footer.poweredBy"
              titleColor="text-white"
              className="ps-3 text-center"
            />
          </div>
        </div>
      </CustomContainer>
    </footer>
  );
}

export default footer;
