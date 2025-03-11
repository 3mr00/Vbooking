import { useTranslations } from "next-intl";
import React from "react";

interface DescriptionProps {
  Description: string;
  DescriptionColor: string;
  className?: string;
}
function Description({
  Description,
  DescriptionColor,
  className,
}: DescriptionProps) {
  const t = useTranslations();
  return (
    <p
      className={`${DescriptionColor} ${className} break-words break-normal leading-relaxed`}
    >
      {t(Description)}
    </p>
  );
}

export default Description;
