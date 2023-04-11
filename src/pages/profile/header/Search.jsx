import React from "react";
import { RxMixerHorizontal } from "react-icons/rx";
import { TbSearch } from "react-icons/tb";

const Search = () => {
  return (
    <div className="relative">
      <input
        id="search"
        type="text"
        className="bg-gray-200 rounded-full px-16 py-2 focus:outline-none"
        placeholder="Search and Learn"
      />
      {/* <div className="absolute flex w-full items-center justify-between top-3 px-4"> */}
      <div className="absolute top-3 left-4 flex items-center">
        <TbSearch size={"14px"} className="" />
      </div>
      <RxMixerHorizontal className="absolute top-3 right-4" />
      {/* </div> */}
    </div>
  );
};

export default Search;
