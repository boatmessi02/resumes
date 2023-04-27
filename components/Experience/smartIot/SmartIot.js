import React from "react";
import { motion } from "framer-motion";
const SmartIot = (props) => {
  return (
    <>
      <h1 className="font-bold text-xl p-2">
        2021 Smart IOT (Smart School Bus)
      </h1>
      <span className="flex flex-col text-left w-full gap-2 px-4 ">
        <p className="border-l-4 border-sky-500 pl-2">
          BU-MIT (Bangkok University Multimedia Intelligent Technology)
        </p>
        <p className="border-l-4 border-sky-500 pl-2">LAB (Motion Detection)</p>
        <p className="border-l-4 border-sky-500 pl-2">
          Detect people entering and exiting BU-LAB
        </p>
        <p className="border-l-4 pl-2">{`Back end developer`}</p>
      </span>
      <div className="w-full text-[12px] ">
        <span className="flex gap-5 flex-wrap">
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
        onClick={props.handleOpenModal}
      >
        View Motion Detection
      </motion.div>
    </>
  );
};

export default SmartIot;
