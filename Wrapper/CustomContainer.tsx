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
      className={`px-16 md:px-32 xl:px-72 2xl:px-250 py-24 lg:py-40 ${className}`}
    >
      {children}
    </div>
  );
};
