import React from "react";
import { MdOutlineCastForEducation, MdOutlineGrade } from "react-icons/md";
import { SiWolframmathematica } from "react-icons/si";
import { AiFillCode } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
const Educations = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-5 text-white">
          <span className="flex gap-2 justify-center items-center">
            <TbActivityHeartbeat color="#35dde5" size={40} />
            <h1 className="text-3xl font-bold">EDUCATION</h1>
          </span>

          <div className="flex flex-col gap-5 w-full">
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-xl">2013 - 2018</h1>
              <span className="flex flex-col w-full text-left">
                <p className="border-l-4 border-sky-500 pl-2">
                  {" "}
                  Ratwinit Bangkaow school
                </p>
                <span className="flex items-center gap-1">
                  <SiWolframmathematica size={20} />
                  <p>English-Mathematics</p>
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineGrade color="yellow" />
                  <p>Grade 2.74</p>
                </span>
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-xl">2018 - 2023</h1>
              <span className="flex flex-col w-full text-left">
                <p className="text-[#35DDE5] font-bold text-center">Present</p>
                <p className="border-l-4 border-sky-500 pl-2">
                  {" "}
                  Bangkok University
                </p>
                <span className="flex items-center gap-1">
                  <AiFillCode size={20} />
                  <p>
                    Information Technology and Innovation (Computer Science)
                  </p>
                </span>
                <span className="flex items-center gap-1">
                  <MdOutlineGrade color="yellow" />
                  <p>Grade 3.74</p>
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Educations;
