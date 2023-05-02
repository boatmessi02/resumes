import React from "react";
import { BsCodeSlash, BsWordpress } from "react-icons/bs";
import {
  SiCoderwall,
  SiRedux,
  SiTailwindcss,
  SiNextdotjs,
  SiMysql,
  SiFirebase,
  SiAdobephotoshop,
  SiCanva,
  SiTypescript,
} from "react-icons/si";
import { AiOutlineAntDesign, AiFillHtml5 } from "react-icons/ai";
import { IoLogoCss3, IoLogoNodejs, IoLogoPython } from "react-icons/io";
import {
  TbBrandJavascript,
  TbLetterS,
  TbActivityHeartbeat,
} from "react-icons/tb";
import { GrReactjs } from "react-icons/gr";
import { FiFigma } from "react-icons/fi";
import { FaAngular } from "react-icons/fa";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[1rem] text-white">
          <span className="flex gap-2 justify-center items-center">
            <TbActivityHeartbeat color="#EC9A23" size={40} />
            <h1 className="text-3xl font-bold">SKILL</h1>
          </span>

          <div className="grid grid-cols-1 md:grid-cols-3 w-full gap-2 md:gap-[2rem] p-[2.5rem]">
            {/* Front-END */}
            <div className="flex gap-2 items-start">
              <span className="flex flex-col gap-2 items-center md:flex w-[120px] iconSkill">
                <BsCodeSlash color="#ffff" size={45} />
                <h1 className="font-bold text-[18px] ">Frontend Dev</h1>
              </span>

              <motion.div
                whileHover={{
                  scale: 0.99,
                }}
                className="flex flex-col w-[170px] text-left text-[#d7dde4] gap-4 border-l-2 border-[#35DDE5] pl-2"
              >
                <span className="flex gap-2 items-center">
                  <AiFillHtml5 color="orange" size={30} />
                  <p> HTML</p>
                </span>
                <span className="flex gap-2 items-center">
                  <IoLogoCss3 color="#264de4" size={30} />
                  <p> CSS</p>
                </span>
                <span className="flex gap-2 items-center">
                  <GrReactjs color="#61DBFB" size={30} />
                  <p> React.js</p>
                </span>
                <span className="flex gap-2 items-center">
                  <FaAngular color="#C3002F" size={30} />
                  <p> AngularJS </p>
                </span>
                <span className="flex gap-2 items-center">
                  <TbBrandJavascript color="#F0DB4F" size={30} />
                  <p>JavaScript(ES6)</p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiRedux color="#764abc" size={30} />
                  <p> Redux</p>
                </span>
                <span className="flex gap-2 items-center">
                  <TbLetterS color="#cc6699" size={30} />
                  <p> SASS / SCSS</p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiTailwindcss color="#61DBFB" size={30} />
                  <p> Tailwind CSS</p>
                </span>
              </motion.div>
            </div>

            {/* Back-END */}
            <div className="flex gap-2 items-start">
              <span className="flex flex-col gap-2  items-center md:flex w-[120px] iconSkill">
                <SiCoderwall color="#ffff" size={40} />
                <h1 className="font-bold text-[18px]  ">Backend Dev</h1>
              </span>
              <motion.div
                whileHover={{
                  scale: 0.99,
                }}
                className="flex flex-col w-[170px] text-left text-[#d7dde4] gap-4 border-l-2 border-[#35DDE5] pl-2"
              >
                <span className="flex gap-2 items-center">
                  <IoLogoNodejs color="#68A063" size={30} />
                  <p> Nodejs</p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiNextdotjs color="black" size={30} />
                  <p> Next.js</p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiTypescript color="#007acc" size={30} />
                  <p> TypeScript </p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiMysql color="#F29111" size={30} />
                  <p> MySQL</p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiFirebase color="#FFA611" size={30} />
                  <p> Firebase</p>
                </span>
                <span className="flex gap-2 items-center">
                  <IoLogoPython color="#FFD43B" size={30} />
                  <p> Python</p>
                </span>
              </motion.div>
            </div>

            {/* Designer */}
            <div className="flex gap-2 items-start">
              <span className="flex flex-col gap-2 items-center md:flex w-[120px] iconSkill">
                <AiOutlineAntDesign color="#ffff" size={45} />
                <h1 className="font-bold text-[18px] ">Designer</h1>
              </span>

              <motion.div
                whileHover={{
                  scale: 0.99,
                }}
                className="flex flex-col w-[170px] text-left text-[#d7dde4] gap-4 border-l-2 border-[#35DDE5] pl-2"
              >
                <span className="flex gap-2 items-center">
                  <SiAdobephotoshop color="#0A287E" size={30} />
                  <p> Photoshop</p>
                </span>
                <span className="flex gap-2 items-center">
                  <FiFigma color="#EAA81A" size={30} />
                  <p> Figma</p>
                </span>
                <span className="flex gap-2 items-center">
                  <SiCanva color="#61DBFB" size={30} />
                  <p> Canva</p>
                </span>
                <span className="flex gap-2 items-center">
                  <BsWordpress color="#2992c2" size={30} />
                  <p> Wordpress</p>
                </span>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
