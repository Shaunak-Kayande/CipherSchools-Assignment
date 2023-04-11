import React from "react";
import Icon from "../assets/Cipherschools_icon.png";
import PointsIcon from "../assets/CipherPoints.svg";
import { TbBrandSafari, TbSearch } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import { RxMixerHorizontal } from "react-icons/rx";
import {
  MdOutlineNotificationsNone,
  MdOutlineWbSunny,
  MdOutlineCircle,
} from "react-icons/md";

const Header = () => {
  return (
    <div className="w-full h-auto border-2 border-black bg-white">
      <div className="flex w-full h-16 border-b-2 items-center justify-between">
        <div className="flex">
          <div className="flex items-center">
            <img src={Icon} alt="" className="w-8 h-fit ml-5 mr-1" />
            <h1 className="font-bold text-lg">CipherSchools</h1>
          </div>
          <div className="flex ml-6 items-center">
            <TbBrandSafari size={"20px"} />
            <h1 className="mx-2">Browse</h1>
            <IoIosArrowDown size={"12px"} />
          </div>
        </div>
        <div className="flex items-center">
          <div className="relative">
            <input
              type="text"
              className="bg-gray-200 rounded-full px-16 py-2"
            />
            <div className="absolute flex w-full items-center justify-between top-2 px-4 ">
              <div className="flex items-center">
                <TbSearch size={"14px"} className="mr-2" />
                <h1 className="text-gray-400 text-sm">Search and Learn</h1>
              </div>
              <RxMixerHorizontal className="" />
            </div>
          </div>
          <div className="flex ml-8 items-center space-x-9">
            <div className="flex items-center">
              <MdOutlineNotificationsNone size={"22px"} />
              <h1 className="bg-orange-400 text-center w-fit h-fit px-1 py-0.5 mb-3 rounded-md text-white text-xs">
                0
              </h1>
            </div>
            <h1 className="rounded-full bg-purple-600 text-center px-2 py-1 text-xs text-white">
              S
            </h1>
            <div className="flex items-center">
              <img src={PointsIcon} alt="" className="h-5" />
              <h1 className="ml-1 text-orange-400 font-bold text-lg">0</h1>
            </div>
            <div className="relative flex items-center">
              <div className="absolute -left-2 bg-white border-4 border-orange-400 w-6 h-6 rounded-full">
                {/* <MdOutlineCircle size={"25px"} className="fill-orange-400 " /> */}
              </div>
              <div className="bg-gray-700 rounded-r-full pl-5 pr-1 py-0.5 mr-10">
                <MdOutlineWbSunny size={"15px"} className="fill-orange-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-28"></div>
    </div>
  );
};

export default Header;
