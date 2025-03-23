"use client";

import { useState } from "react";
import Title from "./Title";
import { useTranslations } from "next-intl";
import { Link } from "@/navigation";
import { Plus } from "lucide-react";

interface LinkItem {
  title: string;
  url: string;
}

interface AccordionItem {
  title: string;
  url?: string;
  links?: LinkItem[]; // Make links optional
}

interface AccordionSidebarProps {
  items: AccordionItem[];
  className?: string;
  toggleMenu?: () => void;
}

export default function AccordionSidebar({
  items,
  className = "",
  toggleMenu,
}: AccordionSidebarProps) {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleItem = (itemTitle: string) => {
    setOpenItem(openItem === itemTitle ? null : itemTitle);
  };

  const thome = useTranslations("home");
  const tLang = useTranslations("lang");

  return (
    <div className={`bg-[#2a4795]  p-4 rounded-sm ${className}`}>
      <div className="space-y-1">
        {items.map((item) =>
          !item.links ? (
            <Link
              href={item.url || "#"}
              onClick={toggleMenu}
              className="flex items-center  justify-between w-full py-[.5rem] px-4  text-left font-medium"
            >
              <Title
                TransPage="home"
                title={item.title}
                titleColor=""
                className={`${className}  transition text-sm font-semibold`}
              />
            </Link>
          ) : (
            <div
              key={item.title}
              className="last:border-b last:border-blue-400 last:border-opacity-30 last:pb-6"
            >
              <button
                onClick={() => toggleItem(item.title)}
                className="flex items-center  justify-between w-full py-[.5rem] px-4  text-left font-medium"
              >
                <div className="flex items-center gap-3">
                  {item.links && item.links.length > 0 && (
                    <div
                      className={`transition-transform duration-300 ${
                        openItem === item.title ? "rotate-45" : ""
                      }`}
                    >
                      <Plus className="h-4 w-4 " />
                    </div>
                  )}
                  <Title
                    TransPage="home"
                    title={item.title}
                    titleColor=""
                    className={`${className}  transition text-sm font-semibold`}
                  />
                </div>
              </button>
              {item.links && item.links.length > 0 && (
                <div
                  className={`overflow-hidden px-12   transition-all duration-300 ease-in-out ${
                    openItem === item.title
                      ? "max-h-[500px] opacity-100"
                      : "max-h-0 opacity-0"
                  }`}
                >
                  <div
                    className={`${
                      tLang("lang") === "en" ? "pl-2" : "pr-2"
                    }  pb-3 gap-3`}
                  >
                    {item.links.map((link, index) => (
                      <Link
                        onClick={toggleMenu}
                        key={index}
                        href={link.url || "#"}
                        className={`block text-sm mb-3 ${className} transition-all  hover:text-inherit ${
                          tLang("lang") === "en"
                            ? "hover:translate-x-[-4px]"
                            : "hover:translate-x-1"
                        }`}
                      >
                        {thome(link.title)}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )
        )}
      </div>
    </div>
  );
}
