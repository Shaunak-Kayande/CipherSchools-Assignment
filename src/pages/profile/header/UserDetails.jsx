import React from "react";
import { MdEdit } from "react-icons/md";

const UserDetails = () => {
  return (
    <div className="h-28 flex items-center justify-between bg-gradient-to-r from-white via-stone-300 to-white">
      <div className="flex items-center mx-10">
        <div className="relative flex flex-col items-center">
          <div className="flex items-center justify-center h-20 w-20 text-4xl font-semibold text-white object-cover rounded-full bg-fuchsia-700 ">
            S
          </div>
          <div className="absolute -bottom-2 bg-purple-950 rounded-full p-1">
            <MdEdit className="fill-white" size={"20px"} />
          </div>
        </div>
        <div className="mx-6">
          <h1 className="text-xl">Hello,</h1>
          <h1 className="text-3xl font-bold">Lorem, ipsum.</h1>
          <h1>Loremipsumdolor@gmail.com</h1>
        </div>
      </div>
      <div className="mx-10 text-lg">0 Followers</div>
    </div>
  );
};

export default UserDetails;
