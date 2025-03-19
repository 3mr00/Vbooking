"use client";

import { images } from "@/assets/images";
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
    title: "footer.ourTechnology",
    links: [
      { title: "footer.links.aiAndML", url: "" },
      { title: "footer.links.nlpSearch", url: "" },
      { title: "footer.links.dataOps", url: "" },
      { title: "footer.links.automation", url: "" },
      { title: "footer.links.metaverse", url: "" },
      { title: "footer.links.decentralisedServers", url: "" },
    ],
  },
  {
    title: "footer.ourProduct",
    links: [
      { title: "footer.links.turboBooking", url: "" },
      { title: "footer.links.aiAgent", url: "" },
      { title: "footer.links.travelCrm", url: "" },
      { title: "footer.links.engagingHoliday", url: "" },
      { title: "footer.links.liveBookingDesk", url: "" },
      { title: "footer.links.operatorApp", url: "" },
    ],
  },
  {
    title: "footer.ourCommunity",
    links: [
      { title: "footer.links.joinTraveler", url: "" },
      { title: "footer.links.academy", url: "" },
      { title: "footer.links.moments", url: "" },
      { title: "footer.links.vBookingHub", url: "" },
      { title: "footer.links.networking", url: "" },
      { title: "footer.links.metaverse", url: "" },
    ],
  },
  {
    title: "footer.doBusinessWithUs",
    links: [
      { title: "footer.links.listProperty", url: "" },
      { title: "footer.links.claimBusiness", url: "" },
      { title: "footer.links.turboTravelSuite", url: "" },
      { title: "footer.links.travelExpertProgram", url: "" },
      { title: "footer.links.agentPortal", url: "" },
    ],
  },
  {
    title: "footer.contact",
    links: [
      { title: "footer.links.aboutUs", url: "" },
      { title: "footer.links.contactUs", url: "" },
      { title: "footer.links.enquiries", url: "" },
      { title: "footer.links.investorRelations", url: "" },
      { title: "footer.links.partnerWithUs", url: "" },
      { title: "footer.links.supportEmail", url: "support@vbooking.com" },
    ],
  },
  {
    title: "footer.resources",
    links: [
      { title: "footer.links.blog", url: "" },
      { title: "footer.links.faqs", url: "" },
      { title: "footer.links.training", url: "" },
      { title: "footer.links.privacyPolicy", url: "" },
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
  const thome = useTranslations("home");
  const tLang = useTranslations("lang");

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
                  {thome(item.title)}
                </h3>
                <ul>
                  {item.links.map((link, i) => (
                    <li key={i} className="mb-2">
                      <Link
                        href={link.url}
                        className="text-gray-300 hover:text-white transition text-sm"
                      >
                        {thome(link.title)}
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
            TransPage="home"
            title="footer.connectWithUs"
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
              tLang("lang") === "ar" ? "sm:divide-x-reverse" : ""
            } sm:divide-slate-500 sm:divide-x-2 flex flex-wrap gap-3 justify-center`}
          >
            <Title
              TransPage="home"
              title="footer.awards"
              titleColor="text-white"
              className="text-center"
            />
            <Title
              TransPage="home"
              title="footer.trusted"
              titleColor="text-white"
              className="ps-3 text-center"
            />
            <div className="flex gap-3">
              <Title
                TransPage="home"
                title="footer.securePayments"
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
              tLang("lang") === "ar" ? "sm:divide-x-reverse" : ""
            }  sm:divide-slate-500 sm:divide-x-2 flex flex-wrap gap-3 justify-center mt-4`}
          >
            <Title
              TransPage="home"
              title="footer.copyright"
              titleColor="text-white text-center"
            />
            <Title
              TransPage="home"
              title="footer.poweredBy"
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
