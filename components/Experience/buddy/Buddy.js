import React from "react";
import { motion } from "framer-motion";

const Buddy = () => {
  return (
    <>
      <h1 className="font-bold text-xl p-2 ">
        2022 - 2023 Buddy To Travel Project
      </h1>
      <span className="flex flex-col w-full text-left gap-2 px-4">
        <p className="border-l-4 border-sky-500 pl-2">{`Create an admin system to manage user information.`}</p>
        <p className="border-l-4 border-sky-500 pl-2">
          {`Database design (ER-Diagram)`}
        </p>
        <p className="border-l-4 border-sky-500 pl-2">{`Able to handle function group chat that problem to success.`}</p>
        <p className="border-l-4 border-sky-500 pl-2">{`Completed work and I got grade A`}</p>
        <p className="border-l-4 pl-2">{`Front-Back end developer`}</p>
      </span>
      <div className="w-full text-[12px] ">
        <span className="flex gap-5 text-[#35DDE5] flex-wrap">
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
    </>
  );
};

export default Buddy;
