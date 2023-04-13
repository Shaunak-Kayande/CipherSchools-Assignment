import React, { useState } from "react";
import HorizontalLine from "./HorizontalLine";

const Password = () => {
  const [open, setInput] = useState(false);

  return (
    <>
      <div className="mx-14 mt-5">
        <div className="flex items-center justify-between">
          <h1 className="text-lg font-bold">PASSWORD AND SECURITY</h1>
          <button onClick={() => setInput(true)} className="btn-orange">
            Change
          </button>
        </div>
        <h1 className="text-lg font-medium my-3">Password</h1>
        <input
          type="text"
          className="w-full bg-white rounded-md items-center py-2 px-4 mb-8"
          placeholder="*******************"
          disabled={true}
        />
        <HorizontalLine />
      </div>
      {open && (
        <div>
          <div className="fixed top-0 flex items-center justify-center h-screen w-screen bg-black opacity-25 z-30"></div>
          <div className="fixed top-1/3 left-1/3 px-8 py-3 rounded-xl w-1/3 bg-white z-50 opacity-100">
            <div className="mx-2 my-4">
              <h1>Current Password</h1>
              <input
                type="text"
                className="w-full bg-slate-200 rounded-md items-center py-2 px-4 mt-2 focus:outline-none"
                placeholder="Current Password"
              />
            </div>
            <div className="mx-2 my-4">
              <h1>New Password</h1>
              <input
                type="text"
                className="w-full bg-slate-200 rounded-md items-center py-2 px-4 mt-2 focus:outline-none"
                placeholder="New Password"
              />
            </div>
            <div className="mx-2 my-4">
              <h1>Confirm Password</h1>
              <input
                type="text"
                className="w-full bg-slate-200 rounded-md items-center py-2 px-4 mt-2 focus:outline-none"
                placeholder="Confirm Password"
              />
            </div>
            <div className="flex justify-end space-x-3 mr-2 my-7">
              <button className="btn-black" onClick={() => setInput(false)}>
                Cancel
              </button>
              <button className="btn-orange" onClick={() => setInput(false)}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Password;
