import { useTranslations } from "next-intl";
import React from "react";

interface TitleProps {
  title: string;
  titleColor: string;
  className?: string;
  TransPage: string;
}

function Title({ title, titleColor, className, TransPage }: TitleProps) {
  const t = useTranslations(TransPage);

  return (
    <span className={`break-words break-normal ${titleColor} ${className}`}>
      {t(title)}
    </span>
  );
}

export default Title;
