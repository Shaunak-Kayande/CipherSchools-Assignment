import React, { useEffect, useState } from "react";

const CipherMap = () => {
  const today = new Date();
  const [firstDate, setDate] = useState(today);
  useEffect(() => {
    const msPerDay = 24 * 60 * 60 * 1000; // milliseconds per day
    const x = 366; // calculate x using formula
    setDate(new Date(today.getTime() - x * msPerDay)); // subtract x days
  }, []);

  const items = [];
  for (let i = 0; i < 7; i++) {
    for (let j = 0; j < 53; j++) {
      if (i < firstDate.getDay() && j == 0)
        items.push(<div className="h-5 w-5 bg-slate-200" key={i}></div>);
      else if (i > today.getDay() && j == 52)
        items.push(<div className="h-5 w-5 bg-slate-200" key={i}></div>);
      else items.push(<div className="h-5 w-5 bg-white" key={i}></div>);
    }
  }

  return (
    <div className="mx-14">
      <h1 className="text-lg font-bold my-5">CIPHER MAP</h1>
      <div>
        <div className="grid grid-cols-12">
          <h1></h1>
        </div>
        <div className="flex">
          <div className="grid grid-rows-3 mr-8 mt-8">
            <h1>Mon</h1>
            <h1>Wed</h1>
            <h1>Fri</h1>
          </div>
          <div className="my-grid">{items}</div>
        </div>
      </div>
    </div>
  );
};

export default CipherMap;
