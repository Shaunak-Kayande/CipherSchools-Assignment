import React, { useEffect, useState } from "react";
import HorizontalLine from "./HorizontalLine";

const month = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];
const day = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const CipherMap = () => {
  const today = new Date();
  const [firstDate, setDate] = useState(today);
  const [currDate, setCurrDate] = useState(today);
  const [xposition, setxPosition] = useState();
  const [yposition, setyPosition] = useState();
  const [hoverDisplay, setHoverDisplay] = useState(false);

  const setPositions = (e) => {
    setHoverDisplay(true);
    let p = parseInt(e.target.getAttribute("id"));
    setxPosition(Math.floor(p % 7));
    setyPosition(Math.floor(p / 7));
    const msPerDay = 24 * 60 * 60 * 1000;
    setCurrDate(new Date(firstDate.getTime() + p * msPerDay));
  };

  useEffect(() => {
    const msPerDay = 24 * 60 * 60 * 1000; // milliseconds per day
    const x = 367; // calculate x using formula
    setDate(new Date(today.getTime() - x * msPerDay)); // subtract x days
  }, []);

  const items = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 53; j++) {
      if (i <= firstDate.getDay() && j == 0)
        items.push(
          <div className="h-4 w-4 bg-slate-200" key={j + 53 * i}></div>
        );
      else if (i > today.getDay() && j == 52)
        items.push(
          <div className="h-4 w-4 bg-slate-200" key={j + 53 * i}></div>
        );
      else
        items.push(
          <div
            className="h-4 w-4 bg-white hover:border-2 hover:border-black"
            key={j + 53 * i}
            id={i + 7 * j}
            onMouseEnter={setPositions}
            onMouseLeave={() => setHoverDisplay(false)}
          ></div>
        );
    }
  }

  const availMonths = [];
  for (let i = firstDate.getMonth() + 1; i < 12; i++) {
    availMonths.push(month[i]);
  }
  for (let i = 0; i <= today.getMonth(); i++) {
    availMonths.push(month[i]);
  }

  const cipherHoverStyle = {
    top: xposition * 21 - 40,
    left: yposition * 21 - 40,
  };

  return (
    <div className="mx-14 z-0">
      <h1 className="text-lg font-bold my-5">CIPHER MAP</h1>
      <div className="mb-7">
        <div className="flex justify-between ml-24 mr-72 mb-3">
          {availMonths.map((item, index) => {
            return <h1 key={index}>{item}</h1>;
          })}
        </div>
        <div className="relative flex">
          <div className="grid grid-rows-3 mr-2 mt-8">
            <h1>Mon</h1>
            <h1>Wed</h1>
            <h1>Fri</h1>
          </div>
          <div className="my-grid px-3">{items}</div>
          {hoverDisplay && (
            <div
              className="absolute w-auto bg-black opacity-80 text-white text-sm h-fit p-2"
              style={cipherHoverStyle}
            >
              0 cipher points on {day[currDate.getDay()]},{" "}
              {month[currDate.getMonth()]} {currDate.getDate()},{" "}
              {currDate.getUTCFullYear()}
            </div>
          )}
          <div className="flex h-full mt-28 ml-20">
            <h1>Less</h1>
            <div className="h-4 w-4 bg-white m-1"></div>
            <div className="h-4 w-4 bg-orange-200 m-1"></div>
            <div className="h-4 w-4 bg-orange-400 m-1"></div>
            <div className="h-4 w-4 bg-orange-600 m-1"></div>
            <h1>More</h1>
          </div>
        </div>
      </div>
      <HorizontalLine />
    </div>
  );
};

export default CipherMap;
