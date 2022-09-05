import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";

const education = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[2rem] text-white">
          <span className="flex gap-2 justify-center items-center">
            <MdOutlineCastForEducation color="blue" size={40} />
            <h1 className="text-4xl font-bold">EDUCATION</h1>
          </span>

          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl ">2013-2019</h1>
              <span className="flex flex-col w-full text-left">
                <p>• Ratwinit Bangkaow school</p>
                <p>- calculation art</p>
              </span>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl ">2019-2023</h1>
              <span className="flex flex-col w-full text-left">
                <p>• Bangkok University</p>
                <p>
                  - Information Technology and Innovation (Computer Science)
                </p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default education;
