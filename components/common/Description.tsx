import { useTranslations } from "next-intl";
import React from "react";

interface DescriptionProps {
  Description: string;
  DescriptionColor: string;
  className?: string;
  TransPage: string;
}
function Description({
  Description,
  DescriptionColor,
  className,
  TransPage,
}: DescriptionProps) {
  const t = useTranslations(TransPage);
  return (
    <p
      className={`${DescriptionColor} ${className} break-words break-normal leading-relaxed`}
    >
      {t(Description)}
    </p>
  );
}

export default Description;
