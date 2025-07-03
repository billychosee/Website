"use client";

import React from "react";
import Link from 'next/link';

interface CustomButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "link";
}

const CustomButton: React.FC<CustomButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  let variantClasses = "";

  if (variant === "primary") {
    variantClasses = "bg-white text-black px-14 xl:px-20 lg:px-8 font-bold shadow-2xl hover:shadow-md text-sm xl:text-sm lg:text-xs";
  } else if (variant === "link") {
    variantClasses = `
      relative
      font-bold
      text-black
      after:content-['']
      after:absolute
      after:left-0
      after:bottom-5
      after:h-[1px]
      after:w-full
      after:bg-[#00b956]
      after:transition-all
      after:duration-300
      hover:after:w-0
      hover:after:left-full
    `;
  }

  return (
    <Link href="/contact-us" passHref>
      <button
        className={`p-5 cursor-pointer ${variantClasses} ${className}`}
        {...props}
      >
        {children}
      </button>
    </Link>
  );
};

export default CustomButton;