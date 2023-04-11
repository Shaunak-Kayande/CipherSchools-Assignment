import React from "react";
import Logo from "../../../components/Logo";
import Browse from "./Browse";
import Search from "./Search";
import RightIcons from "./RightIcons";
import UserDetails from "./UserDetails";

const Header = () => {
  return (
    <div className="fixed top-0 w-full h-fit bg-white">
      <div className="flex w-full h-16 border-b-2 items-center justify-between">
        <div className="flex">
          <Logo />
          <Browse />
        </div>
        <div className="flex items-center">
          <Search />
          <RightIcons />
        </div>
      </div>
      <UserDetails />
    </div>
  );
};

export default Header;
