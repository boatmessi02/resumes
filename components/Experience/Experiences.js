import React, { useState } from "react";
import { motion } from "framer-motion";
import ModalMotion from "./motion/ModalMotion";
import { TbActivityHeartbeat } from "react-icons/tb";

const Experiences = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[2rem] text-white">
          <span className="flex gap-2 justify-center items-center">
            <TbActivityHeartbeat color="#B1EB6F" size={40} />
            <h1 className="text-3xl font-bold">EXPERIENCE</h1>
          </span>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <h1 className="font-bold text-xl p-2">
                2021 Smart IOT (Smart School Bus)
              </h1>
              <span className="flex flex-col text-left w-full gap-2 px-4 ">
                <p className="border-l-4 border-sky-500 pl-2">
                  BU-MIT (Bangkok University Multimedia Intelligent Technology)
                </p>
                <p className="border-l-4 border-sky-500 pl-2">
                  LAB (Motion Detection)
                </p>
                <p className="border-l-4 pl-2">{`Back end developer`}</p>
              </span>
              <div className="w-full text-[12px] ">
                <span className="flex gap-5 ">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit h-[35px] rounded-md p-2 text-[#35DDE5]"
                  >
                    <p>Python</p>
                  </div>
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit  h-[35px] rounded-md p-2 text-[#35DDE5]"
                  >
                    <p>OpenCV</p>
                  </div>
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit h-[35px] rounded-md p-2 text-[#35DDE5]"
                  >
                    <p>Tensorflow</p>
                  </div>
                </span>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="button md:text-[14px] text-[12px] cursor-pointer"
                onClick={handleOpenModal}
              >
                View Motion Detection
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <h1 className="font-bold text-xl p-2">2022 Random game </h1>
              <span className="flex flex-col text-left w-full gap-2 px-4 ">
                <p className="border-l-4 border-sky-500 pl-2">{`It is a job prepared for an internship interview.`}</p>
                <p className="border-l-4 border-sky-500 pl-2">{`Random number game.`}</p>
                <p className="border-l-4 pl-2">{`Front end developer`}</p>
              </span>
              <div className="w-full text-[12px] ">
                <span className="flex gap-5 ">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit h-[35px] rounded-md p-2 text-[#35DDE5]"
                  >
                    <p>React</p>
                  </div>
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit  h-[35px] rounded-md p-2 text-[#35DDE5]"
                  >
                    <p>Tailwind Css</p>
                  </div>
                </span>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="button md:text-[14px] text-[12px] cursor-pointer"
              >
                <a
                  href="https://random-game-9kcszqbqr-boatmessi02.vercel.app/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Game Random
                </a>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <h1 className="font-bold text-xl p-2 ">
                2022 - 2023 Buddy To Travel Project
              </h1>

              <span className="flex flex-col w-full text-left gap-2 px-4">
                <p className="border-l-4 border-sky-500 pl-2">{`Website community.`}</p>
                <p className="border-l-4 border-sky-500 pl-2">
                  {`We're created this project for the benefit of people 
                  who love to travel and who want to make some friends.`}
                </p>
                <p className="border-l-4 border-sky-500 pl-2">{`We have already launched.`}</p>
                <p className="border-l-4 pl-2">{`Front-Back end developer`}</p>
              </span>
              <div className="w-full text-[12px] ">
                <span className="flex gap-5 text-[#35DDE5]">
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit h-[35px] rounded-md p-2 "
                  >
                    <p>NextJs</p>
                  </div>
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit  h-[35px] rounded-md p-2 "
                  >
                    <p>Tailwind CSS</p>
                  </div>
                  <div
                    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
                    className=" w-fit  h-[35px] rounded-md p-2 "
                  >
                    <p>Firebase</p>
                  </div>
                </span>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="button md:text-[14px] text-[12px] cursor-pointer"
              >
                <a
                  href="https://buddytotravel.vercel.app/login"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  View Project Buddy
                </a>
              </motion.div>
            </div>
            <ModalMotion handleClose={handleClose} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
