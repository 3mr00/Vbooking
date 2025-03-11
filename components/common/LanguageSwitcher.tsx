import Title from "./Title";
import { useLocale } from "next-intl";
import Image from "next/image";
import { images } from "@/assets";
import { Link } from "@/navigation";

export default function LanguageSwitcher() {
  const locale = useLocale();

  return (
    <div>
      <Link
        href="/"
        locale={locale === "en" ? "ar" : "en"}
        className={`bg-[#F2F4F7] w-[5rem] h-[2.5rem] flex justify-center py-5 px-7 gap-2 divide-x-2 ${
          locale === "ar" ? "divide-x-reverse" : ""
        } divide-[#EAECF0]  rounded-[100px] cursor-pointer items-center`}
        scroll={false}
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
          title={locale === "en" ? "language.ar" : "language.en"}
          titleColor="text-grayText"
          className=" p-1"
        />
      </Link>
    </div>
  );
}
