"use client";
import { images } from "@/assets/images";
import { CustomContainer } from "@/Wrapper/CustomContainer";
import Image from "next/image";
import React, { useState } from "react";
import LanguageSwitcher from "./LanguageSwitcher";
import Title from "./Title";
import { ArrowButton, CloseIcon } from "@/icons";
import {
  MailOpen,
  Plus,
  X,
  AArrowDown,
  ArrowDown,
  ChevronDownCircle,
  Globe,
} from "lucide-react";
import AccordionSidebar from "./AccordionSidebar";

import { ChevronDown } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";

type LinkType = {
  title: string;
  links?: { title: string; url: string }[];
};

const links: LinkType[] = [
  {
    title: "navbar.turbo",
    links: [
      {
        title: "navbar.turboLinks.incoming_agencies_dmcs",
        url: "/turbo/IncomingAgencies",
      },
      {
        title: "navbar.turboLinks.holiday_rental_managers",
        url: "/turbo/HolidayRental",
      },
      {
        title: "navbar.turboLinks.online_travel_agencies_otas",
        url: "/turbo/OnlineTravel",
      },
      {
        title: "navbar.turboLinks.wholesale_tour_operators_b2b_b2c",
        url: "/turbo/WholesaleTour",
      },
    ],
  },
  {
    title: "navbar.our_technology",
    links: [
      {
        title: "navbar.technologyLinks.Metaverse",
        url: "/technology/Metaverse",
      },
      {
        title: "navbar.technologyLinks.AlAndMachineLearning",
        url: "/technology/AlAndMachineLearning ",
      },
      {
        title: "navbar.technologyLinks.Automation",
        url: "/technology/Automation",
      },
      {
        title: "navbar.technologyLinks.DecentraliseServers",
        url: "/technology/DecentraliseServers",
      },
      {
        title: "navbar.technologyLinks.HTMX",
        url: "/technology/HTMX",
      },
    ],
  },
  {
    title: "navbar.our_product",
    links: [
      {
        title: "navbar.productsLinks.ai_agent",
        url: "/products/AiTravel",
      },

      {
        title: "navbar.productsLinks.engaging_holiday",
        url: "/products/EngagementPackage",
      },
      {
        title: "navbar.productsLinks.live_booking_desk",
        url: "/products/LiveBooking",
      },
      {
        title: "navbar.productsLinks.operator_app",
        url: "/products/OperatorApp",
      },
      {
        title: "navbar.productsLinks.turbo_booking_engine",
        url: "/products/TurboBooking",
      },
    ],
  },
  {
    title: "navbar.why_us",
  },
  {
    title: "navbar.contacts",
  },
  {
    title: "navbar.resources",
    links: [
      {
        title: "navbar.resourcesLinks.join_traveler",
        url: "/resources/join_traveler",
      },
      {
        title: "navbar.resourcesLinks.networking",
        url: "/resources/networking",
      }
    ],
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const tHome = useTranslations("home");
  const tLang = useTranslations("lang");
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white  w-full">
      <CustomContainer className=" !py-4">
        <div className="flex items-center justify-between gap-[48px] w-full">
          {/* Logo on the left */}
          <Link href="/" onClick={() => setIsMenuOpen(false)}>
            <Image
              src={images.logo}
              alt="logo"
              width={800}
              height={800}
              className="xl:w-[12rem] w-[10rem] h-auto"
            />
          </Link>

          {/* Centered navigation for desktop */}
          <nav
            aria-label="Global"
            className="hidden xl:flex flex-1 justify-center"
          >
            <ul className="flex items-center gap-[22px] text-sm">
              {links.map((link, index) => (
                <li key={index} className="relative">
                  {link.links && link.links.length > 0 ? (
                    <DropdownMenu>
                      <DropdownMenuTrigger className="flex items-center gap-[8px] hover:text-secondary transition outline-none text-[#004CA6] text-[16px] font-normal">
                        <Title
                          TransPage="home"
                          title={link.title}
                          titleColor=""
                          className="text-[#004CA6] text-[13px] font-normal"
                        />
                        <ChevronDown className="w-4 h-4" />
                      </DropdownMenuTrigger>
                      <DropdownMenuContent
                        align={tLang("lang") === "en" ? "start" : "end"}
                        className="w-auto bg-white shadow-lg rounded-md"
                      >
                        {link.links.map((sublink, subIndex) => (
                          <DropdownMenuItem
                            dir={tLang("dir")}
                            key={subIndex}
                            asChild
                          >
                            <Link
                              href={sublink.url}
                              className={`w-full block px-4 py-2 text-[#004CA6] hover:bg-gray-100 `}
                            >
                              <Title
                                TransPage="home"
                                title={sublink.title}
                                titleColor=""
                                className="text-[#004CA6] text-[13px] font-normal"
                              />
                            </Link>
                          </DropdownMenuItem>
                        ))}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  ) : (
                    <Link
                      href="#"
                      className="text-[#004CA6] font-normal text-[13px]"
                    >
                      <Title
                        TransPage="home"
                        title={link.title}
                        titleColor=""
                      />
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* Buttons for desktop */}
          <div className="hidden xl:flex items-center gap-4">
            <LanguageSwitcher />
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button className="rounded-[50px] py-3 px-4 text-white bg-primary flex items-center gap-2 h-[40px]">
                  {tHome("navbar.login")} <ChevronDown />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-auto">
                <DropdownMenuItem>
                  {tHome("navbar.login_supplier")}
                </DropdownMenuItem>
                <DropdownMenuItem>
                  {tHome("navbar.login_agent")}
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="block rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 xl:hidden"
          >
            <span className="sr-only">Toggle menu</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 bg-white z-50 xl:hidden overflow-y-auto">
            <div className="p-4">
              <div className="flex justify-between items-center my-[18px]">
                <Link href="/" onClick={toggleMenu}>
                  <Image src={images.smallLogo} alt="logo" />
                </Link>
                <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
              </div>

              <AccordionSidebar
                toggleMenu={toggleMenu}
                items={links}
                className=" text-grayText bg-white"
              />

              <div className="mt-8 space-y-4">
                {/* Mobile buttons section */}
                <div className="grid grid-cols-2 gap-4 mt-6">
                  <Button className="text-white bg-primary flex items-center justify-center gap-2 h-[40px] rounded-[25px] px-4">
                    {tHome("navbar.login_supplier")}
                  </Button>

                  <Button className="text-white bg-primary flex items-center justify-center gap-2 h-[40px] rounded-[25px] px-4">
                    {tHome("navbar.login_agent")}
                  </Button>
                </div>
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </CustomContainer>
    </header>
  );
}

export default NavBar;
