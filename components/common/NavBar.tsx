"use client";
import { images } from "@/assets";
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
} from "lucide-react";
import AccordionSidebar from "./AccordionSidebar";

import { ChevronDown } from "lucide-react";
import { Link } from "@/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import { useTranslations } from "next-intl";

type LinkType = {
  title: string;
  links?: { title: string; url: string }[];
};
const links: LinkType[] = [
  {
    title: "home.navbar.turbo",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
      {
        title: "AI and Machine Learning",
        url: "",
      },
      {
        title: "AI and Machine Learning",
        url: "",
      },
      {
        title: "AI and Machine Learning",
        url: "",
      },
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.our_technology",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.our_product",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
  {
    title: "home.navbar.why_us",
  },
  {
    title: "home.navbar.contacts",
  },
  {
    title: "home.navbar.resources",
    links: [
      {
        title: "AI and Machine Learning",
        url: "",
      },
    ],
  },
];

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const t = useTranslations();
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <CustomContainer className="mt-[36px] !py-0">
      <header className="bg-white h-[80px]">
        <div className=" flex items-center gap-48">
          <a href="#">
            <Image src={images.logo} alt="logo" />
          </a>
          <div className="flex flex-1 items-center justify-end lg:justify-between">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-24 text-sm">
                {links.map((link, index) => (
                  <li key={index} className="relative">
                    {link.links && link.links.length > 0 ? (
                      <DropdownMenu>
                        <DropdownMenuTrigger className="flex items-center gap-2 text-gray-600 hover:text-secondary transition text-[1rem] outline-none">
                          <Title title={link.title} titleColor="" />
                          <ChevronDown className="w-4 h-4" />
                        </DropdownMenuTrigger>

                        <DropdownMenuContent className="w-auto bg-white shadow-lg rounded-md">
                          {link.links.map((sublink, subIndex) => (
                            <DropdownMenuItem key={subIndex} asChild>
                              <Link
                                href={sublink.url}
                                className="w-full block px-4 py-2 text-gray-700 hover:bg-gray-100"
                              >
                                {sublink.title}
                              </Link>
                            </DropdownMenuItem>
                          ))}
                        </DropdownMenuContent>
                      </DropdownMenu>
                    ) : (
                      <Link
                        href="#"
                        className="text-gray-600 hover:text-secondary transition text-[1rem]"
                      >
                        <Title title={link.title} titleColor="" />
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <div className="hidden lg:flex items-center gap-4">
                <LanguageSwitcher />
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button className="rounded-[50px] py-10 px-18 text-white bg-primary flex items-center gap-2 h-[40px]">
                      {t("home.navbar.login")} <ChevronDown />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-auto">
                    <DropdownMenuItem>
                      {t("home.navbar.login_supplier")}
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      {t("home.navbar.login_agent")}
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>

              <button
                onClick={toggleMenu}
                className="block rounded-full bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 lg:hidden"
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
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white z-50 lg:hidden overflow-y-auto">
          <div className="p-4">
            <div className="flex justify-between items-center my-[18px]">
              <a href="#">
                <Image src={images.smallLogo} alt="logo" />
              </a>
              <CloseIcon onClick={toggleMenu} className="cursor-pointer" />
            </div>

            <AccordionSidebar
              items={links}
              className=" text-grayText bg-white"
            />

            <div className="mt-8 space-y-4">
              {/* Mobile buttons section */}
              <div className="grid grid-cols-2 gap-4 mt-6">
                <Button className="text-white bg-primary flex items-center justify-center gap-2 h-[40px] rounded-[25px] px-4">
                  {t("home.navbar.login_supplier")}
                </Button>

                <Button className="text-white bg-primary flex items-center justify-center gap-2 h-[40px] rounded-[25px] px-4">
                  {t("home.navbar.login_agent")}
                </Button>
              </div>
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </CustomContainer>
  );
}

export default NavBar;
