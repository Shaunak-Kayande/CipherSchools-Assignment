import React, { useState } from "react";

let IData = [
  { name: "Web Development", selected: true },
  { name: "App Development", selected: true },
  { name: "Game Development", selected: true },
  { name: "Data Sctructures", selected: true },
  { name: "Programming", selected: true },
  { name: "Machine Learning", selected: true },
  { name: "Data Science", selected: true },
  { name: "Others", selected: true },
];

const Interests = () => {
  const [open, setInput] = useState(false);
  const [InterestData, setInterestData] = useState(IData);
  const [tempData, setTempData] = useState([]);
  const [color, setColor] = useState("");

  return (
    <>
      <div className="mx-14 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">INTERESTS</h1>
          <button
            onClick={() => {
              const json = JSON.stringify(InterestData);
              setTempData(JSON.parse(json));
              setInput(true);
            }}
            className="btn-orange"
          >
            Edit
          </button>
        </div>
        <div className="flex mt-3 mb-12 space-x-3">
          {InterestData.map((item, index) => {
            if (item.selected == true)
              return (
                <div
                  key={index}
                  className="bg bg-orange-100 text-orange-400 text-sm rounded-md px-2 py-1"
                >
                  {item.name}
                </div>
              );
          })}
        </div>
      </div>
      {open && (
        <div>
          <div className="fixed top-0 flex items-center justify-center h-screen w-screen bg-black opacity-25 z-30"></div>
          <div className="fixed top-1/3 left-1/3 px-8 py-3 rounded-xl bg-white z-50 opacity-100">
            <div className="grid grid-cols-2 grid-rows-4 mx-2 my-4 justify-between">
              {tempData.map((item, index) => {
                return (
                  <div
                    key={index}
                    style={{
                      backgroundColor: item.selected ? "#fb923c" : "#e2e8f0",
                      color: item.selected ? "white" : "black",
                    }}
                    className="rounded-md pl-2 pr-20 py-2 my-2 mx-4 cursor-pointer"
                    onClick={() => {
                      item.selected = !item.selected;
                    }}
                  >
                    {item.name}
                  </div>
                );
              })}
            </div>
            <div className="flex justify-end space-x-3 mr-2 my-7">
              <button className="btn-black" onClick={() => setInput(false)}>
                Cancel
              </button>
              <button
                className="btn-orange"
                onClick={() => {
                  const json = JSON.stringify(tempData);
                  setInterestData(JSON.parse(json));
                  setInput(false);
                  console.log(InterestData);
                }}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Interests;
