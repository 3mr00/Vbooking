import { useTranslations } from "next-intl";
import React from "react";

interface TitleProps {
  title: string;
  titleColor: string;
  className?: string;
}

function Title({ title, titleColor, className }: TitleProps) {
  const t = useTranslations();

  return (
    <span className={`break-words ${titleColor} ${className}`}>{t(title)}</span>
  );
}

export default Title;
