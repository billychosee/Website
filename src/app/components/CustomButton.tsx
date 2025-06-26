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
    variantClasses = "bg-white text-black px-5 md:px-20 font-bold shadow-2xl hover:shadow-md";
  } else if (variant === "link") {
    variantClasses = "underline text-[#4A90A4] hover:text-[#3c7485] px-10";
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