import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalWorkExvention from "./ModalWorkExvention";

const WorkExvention = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="w-[300px] h-[280px] flex flex-col rounded-xl"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div className="cursor-pointer rounded-t-md ">
          <div className="hover:text-sky-500" onClick={handleOpenModal}>
            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/calendar-hr/largeCalendar.png"
              width={600}
              height={300}
              objectFit="cover"
              quality={100}
              alt="experience"
            />
          </div>
        </div>
        <div className="p-2 ">
          <div className="flex gap-2 font-bold border-l-4 border-sky-500 pl-2 text-left">
            <h1>Exvention </h1>

            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/exvention.png"
              width={30}
              height={30}
              objectFit="cover"
              alt="experience"
            />
          </div>
          <div className="indent-[20px] text-left text-[#a4a1a1] text-[12px]">
            <p>Work experience for internship.</p>
          </div>
          <div className="w-full text-[12px] text-[#35DDE5]">
            <div className="flex">
              <span className="rounded-md p-2 ">
                <p>Angular.Js</p>
              </span>
              <span className=" rounded-md p-2 ">
                <p>TypeScript</p>
              </span>
              <span className=" rounded-md p-2 ">
                <p>Bootstrap</p>
              </span>
              <span className=" rounded-md p-2 ">
                <p>Postman</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
      <ModalWorkExvention handleClose={handleClose} isOpen={isOpen} />
    </>
  );
};

export default WorkExvention;
