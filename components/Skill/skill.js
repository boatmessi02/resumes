import React from "react";
import { BsCodeSlash } from "react-icons/bs";
import { SiCoderwall } from "react-icons/si";
import { AiOutlineAntDesign } from "react-icons/ai";

const skill = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[50px] text-white">
          <h1 className="text-4xl font-bold">SKILL</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[7rem]">
            <div className="flex flex-col gap-4 items-center">
              <BsCodeSlash color="#35DDE5" size={45} />
              <h1 className="font-bold text-xl ]">Frontend Dev</h1>
              <span className="flex flex-col text-[#d7dde4] gap-4">
                <p>• HTML</p>
                <p>• CSS</p>
                <p>• JavaScrip</p>
                <p>• React.js</p>
                <p>• SASS / SCSS</p>
                <p>• Framer Motion</p>
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
