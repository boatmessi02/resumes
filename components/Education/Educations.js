import React from "react";
import { MdOutlineCastForEducation } from "react-icons/md";
const Educations = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-5 text-white">
          <span className="flex gap-2 justify-center items-center">
            <MdOutlineCastForEducation color="blue" size={40} />
            <h1 className="text-3xl">EDUCATION</h1>
          </span>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-xl border-4 border-gray-500 p-2">2013 - 2018</h1>
              <span className="flex flex-col w-full text-left">
                <p className="border-l-4 border-sky-500 pl-2">
                  {" "}
                  Ratwinit Bangkaow school
                </p>
                <p>• Calculation art</p>
                <p>• Grade 2.74</p>
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-xl border-4 border-gray-500 p-2 ">2018 - 2023</h1>
              <span className="flex flex-col w-full text-left">
                <p className="text-[#35DDE5] font-bold text-center">Present</p>
                <p className="border-l-4 border-sky-500 pl-2">
                  {" "}
                  Bangkok University
                </p>
                <p>
                  • Information Technology and Innovation (Computer Science)
                </p>
                <p>• Grade 3.74</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
