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
    <div className={`px-[5rem]  py-24 lg:py-40 ${className}`}>{children}</div>
  );
};
