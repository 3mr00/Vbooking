import { ArrowButton } from "@/icons";
import React from "react";
import Title from "./Title";

interface ButtonProps {
  text: string;
  className: string;
  withIcon?: boolean;
}
function Button({ text, className, withIcon }: ButtonProps) {
  return (
    <button className={` rounded-[50px]  ${className}`}>
      <Title title={text} titleColor="" className=" text-[.8rem]" />
      {withIcon && <ArrowButton />}
    </button>
  );
}

export default Button;
