import React from "react";
import PointsIcon from "../../../assets/CipherPoints.svg";
import { MdOutlineNotificationsNone, MdOutlineWbSunny } from "react-icons/md";

const Icons = () => {
  return (
    <div className="flex ml-8 items-center space-x-9">
      <div className="flex items-center">
        <MdOutlineNotificationsNone size={"22px"} />
        <h1 className="bg-orange-400 text-center w-fit h-fit px-1 py-0.5 mb-3 rounded-md text-white text-xs">
          0
        </h1>
      </div>
      <h1 className="rounded-full bg-fuchsia-700 text-center px-2 py-1 text-xs text-white">
        S
      </h1>
      <div className="flex items-center">
        <img src={PointsIcon} alt="" className="h-5" />
        <h1 className="ml-1 text-orange-400 font-bold text-lg">0</h1>
      </div>
      <div className="relative flex items-center">
        <div className="absolute -left-2 bg-white border-4 border-orange-400 w-6 h-6 rounded-full"></div>
        <div className="bg-gray-700 rounded-r-full pl-5 pr-1 py-0.5 mr-10">
          <MdOutlineWbSunny size={"15px"} className="fill-orange-400" />
        </div>
      </div>
    </div>
  );
};

export default Icons;
