import React from "react";

const BrowseDropDown = () => {
  return (
    <div className="absolute w-[180px] top-11 bg-white rounded-xl shadow-lg shadow-gray-400">
      <ul className="justify-center w-full text-sm">
        <li className="w-full px-7 py-1 rounded-t-xl hover:bg-gray-200">
          Web Development
        </li>
        <li className="w-full px-7 py-1 hover:bg-gray-200">App Development</li>
        <li className="w-full px-7 py-1 hover:bg-gray-200">Game Development</li>
        <li className="w-full px-7 py-1 hover:bg-gray-200">Data Structures</li>
        <li className="w-full px-7 py-1 hover:bg-gray-200">Programming</li>
        <li className="w-full px-7 py-1 hover:bg-gray-200">Machine Learning</li>
        <li className="w-full px-7 py-1 hover:bg-gray-200">Data Science</li>
        <li className="w-full px-7 py-1 rounded-b-xl hover:bg-gray-200">
          Others
        </li>
      </ul>
    </div>
  );
};

export default BrowseDropDown;
