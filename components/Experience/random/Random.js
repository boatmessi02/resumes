import React from "react";
import { motion } from "framer-motion";
const Random = () => {
  return (
    <>
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
    </>
  );
};

export default Random;
