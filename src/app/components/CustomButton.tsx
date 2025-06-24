"use client";

import React from "react";

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
    variantClasses = "bg-[#4A90A4] text-white px-5 md:px-20";
  } else if (variant === "link") {
    variantClasses = "underline text-[#4A90A4] hover:text-[#3c7485] px-10";
  }

  return (
    <button
      className={`p-5 cursor-pointer ${variantClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default CustomButton;
