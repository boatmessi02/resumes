import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { SiCoderwall } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";
import { DiCodeigniter } from "react-icons/di";
const skill = () => {
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

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-4">
            <div className="flex flex-col gap-4 items-center">
              <BsCodeSlash color="#35DDE5" size={45} />
              <h1 className="font-bold text-xl ]">Frontend Dev</h1>
              <span className="flex flex-col text-[#d7dde4] gap-4">
                <p>• HTML</p>
                <p>• CSS</p>
                <p>• JavaScript(ES6)</p>
                <p>• React.js</p>
                <p>• Redux</p>
                <p>• SASS / SCSS</p>
                <p>• Tailwind CSS</p>
              </span>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <SiCoderwall color="#35DDE5" size={40} />
              <h1 className="font-bold text-xl ">Backend Dev</h1>
              <span className="flex flex-col text-[#d7dde4] gap-4">
                <p>• Nodejs</p>
                <p>• Next.js</p>
                <p>• MySQL</p>
                <p>• Firebase</p>
                <p>• Python</p>
              </span>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <AiOutlineAntDesign color="#35DDE5" size={45} />
              <h1 className="font-bold text-xl ">Designer</h1>
              <span className="flex flex-col text-[#d7dde4] gap-4">
                <p>• Photoshop</p>
                <p>• Figma</p>
                <p>• Canva</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default skill;
