import React from "react";

const education = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[50px] text-white">
          <h1 className="text-4xl font-bold">EDUCATION</h1>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl ">2013-2019</h1>
            <span className="flex flex-col items-start">
              <p>• Ratwinit Bangkaow school</p>
              <p> - calculation art</p>
            </span>
            <h1 className="font-bold text-xl ">2019-2023</h1>
            <span className="flex flex-col text-left">
              <p>• Bangkok University</p>
              <p>- Information Technology and Innovation (Computer Science)</p>
            </span>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default education;
