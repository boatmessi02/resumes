import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { SiCoderwall } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
const Skills = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[2rem] text-white">
          <span className="flex gap-2 justify-center items-center">
            <DiCodeigniter color="red" size={40} />
            <h1 className="text-3xl">SKILL</h1>
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-8 md:gap-4 py-2">
            <div className="flex gap-5 items-center md:flex-col">
              <span className="flex flex-col gap-2 items-center md:flex w-[120px]">
                <BsCodeSlash color="#35DDE5" size={45} />
                <h1 className="font-bold text-xl ]">Frontend Dev</h1>
              </span>

              <div className="flex flex-col w-[170px] text-left text-[#d7dde4] gap-4 pl-2">
                <p className="border-l-4 border-sky-500 px-4"> HTML</p>
                <p className="border-l-4 border-sky-500 px-4"> CSS</p>
                <p className="border-l-4 border-sky-500 px-4">
                  JavaScript(ES6)
                </p>
                <p className="border-l-4 border-sky-500 px-4"> React.js</p>
                <p className="border-l-4 border-sky-500 px-4"> Redux</p>
                <p className="border-l-4 border-sky-500 px-4"> SASS / SCSS</p>
                <p className="border-l-4 border-sky-500 px-4"> Tailwind CSS</p>
              </div>
            </div>

            <div className="flex gap-5 items-center md:flex-col">
              <span className="flex flex-col gap-2 items-center md:flex w-[120px]">
                <SiCoderwall color="#35DDE5" size={40} />
                <h1 className="font-bold text-xl ">Backend Dev</h1>
              </span>

              <span className="flex flex-col w-[170px] text-left text-[#d7dde4] gap-4">
                <p className="border-l-4 border-sky-500 px-4"> Nodejs</p>
                <p className="border-l-4 border-sky-500 px-4"> Next.js</p>
                <p className="border-l-4 border-sky-500 px-4"> MySQL</p>
                <p className="border-l-4 border-sky-500 px-4"> Firebase</p>
                <p className="border-l-4 border-sky-500 px-4"> Python</p>
              </span>
            </div>
            <div className="flex gap-5 items-center md:flex-col">
              <span className="flex flex-col gap-2 items-center md:flex w-[120px]">
                <AiOutlineAntDesign color="#35DDE5" size={45} />
                <h1 className="font-bold text-xl ">Designer</h1>
              </span>

              <span className="flex flex-col w-[170px] text-left text-[#d7dde4] mt-6 gap-4 ">
                <p className="border-l-4 border-sky-500 px-4"> Photoshop</p>
                <p className="border-l-4 border-sky-500 px-4"> Figma</p>
                <p className="border-l-4 border-sky-500 px-4"> Canva</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
