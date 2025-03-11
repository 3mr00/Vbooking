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
      className={`md:px-[4.5rem] px-[1rem] py-[1.5rem] lg:py-[2.5rem] ${className}`}
    >
      {children}
    </div>
  );
};
