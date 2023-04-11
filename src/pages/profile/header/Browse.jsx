import React, { useEffect, useState } from "react";
import { TbBrandSafari } from "react-icons/tb";
import { IoIosArrowDown } from "react-icons/io";
import BrowseDropDown from "./BrowseDropDown";

const Browse = () => {
  const [dropDownState, setState] = useState(true);

  return (
    <div
      onClick={() => setState(!dropDownState)}
      className="relative flex items-center max-w-max cursor-pointer"
      id="browse"
    >
      <div className="flex ml-6 items-center">
        <TbBrandSafari size={"20px"} />
        <h1 className="mx-2">Browse</h1>
        <IoIosArrowDown size={"12px"} />
      </div>
      {dropDownState || <BrowseDropDown />}
    </div>
  );
};

export default Browse;
