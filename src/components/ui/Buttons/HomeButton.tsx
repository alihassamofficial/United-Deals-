import React from "react";

interface HomeButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
}

const HomeButton: React.FC<HomeButtonProps> = ({
  children = "VIEW ALL",
  onClick,
  className = "",
  type = "button",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`min-w-[111px] text-[12px] md:text-[15px] font-extrabold leading-none tracking-[0.22px] uppercase text-[#0A0A0A] bg-[#FCBD01] px-[20px] py-[11.65px] rounded-[6.88px] hover:text-[#FCBD01] hover:bg-[#0A0A0A] cursor-pointer transition ${className}`}
    >
      {children}
    </button>
  );
};

export default HomeButton;
