import React, { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { useTranslations } from "next-intl";

interface ButtonProps {
  className: string; // Adjust based on your actual variants
  text: string;
  icon?: ReactNode; // Allow passing a component like ArrowButton
  style?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  TransPage: string;
}

const ButtonShadcn: React.FC<ButtonProps> = ({
  className,
  icon,
  text,
  style,
  TransPage,
}: ButtonProps) => {
  const t = useTranslations(TransPage);

  return (
    <Button variant={style} className={`rounded-[50px] ${className}`}>
      {icon && <span className="mx-2 ">{icon}</span>}
      {t(text)}
    </Button>
  );
};

export default ButtonShadcn;
