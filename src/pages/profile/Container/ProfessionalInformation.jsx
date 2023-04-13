import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import HorizontalLine from "./HorizontalLine";

const highEduData = [
  "Primary",
  "Secondary",
  "Higher Secondary",
  "Graduation",
  "Post Graduation",
];

const currStatusData = [
  "Schooling",
  "College Student",
  "Job",
  "Teaching",
  "Freelancing",
];

const ProfessionalInformation = () => {
  const [open, setInput] = useState(true);
  const [button, setButton] = useState("Edit");
  const [hiEdu, setHighEdu] = useState("Graduation");
  const [eduModalVisibility, setEduModalVisibility] = useState(false);
  const [currStatus, setCurrStatus] = useState("College Student");
  const [currStatusVisibility, setCurrStatusVisibility] = useState(false);

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
        <h1 className="text-lg font-bold">PROFESSIONAL INFORMATION</h1>
        <button onClick={changeButton} className="btn-orange">
          {button}
        </button>
      </div>
      <div className="flex w-full space-x-20 mb-8">
        <div
          className="relative w-full"
          onClick={() => {
            if (!open) setEduModalVisibility(!eduModalVisibility);
          }}
        >
          <h1 className="text-lg font-medium my-2">Highest Education</h1>
          <div className="w-full bg-white flex rounded-md justify-between items-center py-2 px-4">
            <h1>{hiEdu}</h1> <IoIosArrowDown size={"12px"} />
          </div>
          {eduModalVisibility && (
            <div className="absolute w-full top-20 bg-white my-2 rounded-md px-2 py-2">
              {highEduData.map((item, index) => {
                return (
                  <h1
                    key={index}
                    className="hover:bg-orange-400 px-2 rounded-md py-1"
                    onClick={() => {
                      setHighEdu(item);
                      setEduModalVisibility(!eduModalVisibility);
                    }}
                  >
                    {item}
                  </h1>
                );
              })}
            </div>
          )}
        </div>
        <div
          className="relative w-full"
          onClick={() => {
            if (!open) setCurrStatusVisibility(!currStatusVisibility);
          }}
        >
          <h1 className="text-lg font-medium my-2">
            What do you do currently?
          </h1>
          <div className="w-full bg-white flex rounded-md justify-between items-center py-2 px-4">
            <h1>{currStatus}</h1> <IoIosArrowDown size={"12px"} />
            {currStatusVisibility && (
              <div className="absolute w-full top-20 left-0 bg-white my-2 rounded-md px-2 py-2">
                {currStatusData.map((item, index) => {
                  return (
                    <h1
                      key={index}
                      className="hover:bg-orange-400 px-2 rounded-md py-1"
                      onClick={() => {
                        setCurrStatus(item);
                        setCurrStatusVisibility(!currStatusVisibility);
                      }}
                    >
                      {item}
                    </h1>
                  );
                })}
              </div>
            )}
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default ProfessionalInformation;
