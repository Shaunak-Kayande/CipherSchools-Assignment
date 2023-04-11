import React from "react";
import LogoIcon from "../assets/Cipherschools_icon.png";

const Logo = () => {
  return (
    <div className="flex items-center">
      <img src={LogoIcon} alt="" className="w-8 h-fit ml-5 mr-1" />
      <h1 className="font-bold text-lg">CipherSchools</h1>
    </div>
  );
};

export default Logo;
