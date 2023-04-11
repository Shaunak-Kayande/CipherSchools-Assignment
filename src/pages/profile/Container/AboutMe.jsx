import React, { useState } from "react";
import HorizontalLine from "./HorizontalLine";

const AboutMe = () => {
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
    <div className="pt-52 mx-14">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">ABOUT ME</h1>
        <button onClick={changeButton} className="btn-orange">
          {button}
        </button>
      </div>
      <div className="my-6">
        <input
          className="flex w-full pt-3 pb-24 bg-white px-5 rounded-xl focus:outline-none"
          type="text"
          placeholder="Add something about you."
          disabled={open}
        />
      </div>
      <HorizontalLine />
    </div>
  );
};

export default AboutMe;
