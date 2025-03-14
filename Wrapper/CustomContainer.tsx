import React, { ReactNode } from "react";

interface CustomContainerProps {
  children: ReactNode;
  className?: string;
}

export const CustomContainer = ({
  className = "",
  children,
}: CustomContainerProps) => {
  return (
    <div
      className={`max-w-[1920px] mx-auto  md:px-[120px] px-[1.5rem] pb-[2.5rem] md:pt-[16px] pt-[8px] ${className}`}
    >
      {children}
    </div>
  );
};
