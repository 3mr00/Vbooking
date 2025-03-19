import Title from "./Title";
import { useLocale } from "next-intl"; // Import useLocale from next-intl
import Image from "next/image";
import { images } from "@/assets/images";
import { Link, usePathname } from "@/navigation"; // Import Link from next-intl's navigation

export default function LanguageSwitcher() {
  const locale = useLocale(); // Get the current locale
  const pathname = usePathname(); // Get the current pathname (without locale prefix)

  // Construct the full pathname with the new locale
  const newLocale = locale === "en" ? "ar" : "en";
  const newPathname = `/${pathname}`;

  return (
    <div>
      <Link
        href={newPathname} // Use the full pathname with the new locale
        locale={newLocale} // Set the new locale
        className={`bg-[#F2F4F7] w-[5rem] h-[2.5rem] flex justify-center py-5 px-7 gap-2 divide-x-2 ${
          locale === "ar" ? "divide-x-reverse" : ""
        } divide-[#EAECF0]  rounded-[100px] cursor-pointer items-center`}
        scroll={false} // Prevent scrolling to the top
      >
        {locale === "ar" ? (
          <Image
            src={images.EnFlag}
            alt="flag"
            className="w-[1.2rem] h-[1.2rem]"
          />
        ) : (
          <Image
            src={images.EgyptFlag}
            alt="flag"
            className="w-[1.2rem] h-[1.2rem]"
          />
        )}
        <Title
          TransPage="lang"
          title={locale === "en" ? "ar" : "en"}
          titleColor="text-grayText"
          className=" p-1"
        />
      </Link>
    </div>
  );
}
