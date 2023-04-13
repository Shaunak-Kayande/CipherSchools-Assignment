import React, { useState } from "react";
import {
  AiFillLinkedin,
  AiFillTwitterCircle,
  AiFillInstagram,
  AiOutlineGithub,
} from "react-icons/ai";
import { SiFacebook } from "react-icons/si";
import { SlGlobe } from "react-icons/sl";
import HorizontalLine from "./HorizontalLine";

const OnTheWeb = () => {
  const [open, setInput] = useState(true);
  const [button, setButton] = useState("Edit");

  const changeButton = () => {
    if (button === "Edit") {
      setButton("Save");
      setInput(false);
    } else {
      setButton("Edit");
      setInput(true);
    }
  };

  return (
    <div className="mx-14 mt-5">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">ON THE WEB</h1>
        <button onClick={changeButton} className="btn-orange">
          {button}
        </button>
      </div>
      <div className="flex justify-between space-x-20 w-full items-center mb-8">
        <div className="w-full">
          <div className="relative">
            <h1 className="text-lg font-medium my-2">LinkedIn</h1>
            <input
              type="text"
              disabled={open}
              className="bg-white w-full rounded-md py-2 pl-14 focus:outline-none"
            />
            <AiFillLinkedin
              className="absolute bottom-1 fill-slate-400 ml-2"
              size="30px"
            />
          </div>
          <div className="relative">
            <h1 className="text-lg font-medium my-2">Facebook</h1>
            <input
              type="text"
              disabled={open}
              className="bg-white w-full rounded-md py-2 pl-14 focus:outline-none"
            />
            <SiFacebook
              className="absolute bottom-1 fill-slate-400 ml-2"
              size="30px"
            />
          </div>
          <div className="relative">
            <h1 className="text-lg font-medium my-2">Instagram</h1>
            <input
              type="text"
              disabled={open}
              className="bg-white w-full rounded-md py-2 pl-14 focus:outline-none"
            />
            <AiFillInstagram
              className="absolute bottom-1 fill-slate-400 ml-2"
              size="30px"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="relative">
            <h1 className="text-lg font-medium my-2">GitHub</h1>
            <input
              type="text"
              disabled={open}
              className="bg-white w-full rounded-md py-2 pl-14 focus:outline-none"
            />
            <AiOutlineGithub
              className="absolute bottom-1 fill-slate-400 ml-2"
              size="30px"
            />
          </div>
          <div className="relative">
            <h1 className="text-lg font-medium my-2">Twitter</h1>
            <input
              type="text"
              disabled={open}
              className="bg-white w-full rounded-md py-2 pl-14 focus:outline-none"
            />
            <AiFillTwitterCircle
              className="absolute bottom-1 fill-slate-400 ml-2"
              size="30px"
            />
          </div>
          <div className="relative">
            <h1 className="text-lg font-medium my-2">Your Website</h1>
            <input
              type="text"
              disabled={open}
              className="bg-white w-full rounded-md py-2 pl-14 focus:outline-none"
            />
            <SlGlobe
              className="absolute bottom-1 fill-slate-400 ml-2"
              size="30px"
            />
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default OnTheWeb;
