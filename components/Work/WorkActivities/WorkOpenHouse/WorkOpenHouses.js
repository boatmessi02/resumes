import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalOpenHouse from "./openHouse/ModalOpenHouse";

const WorkOpenHouses = () => {
    
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      {" "}
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="w-[300px] h-[280px] flex flex-col rounded-xl"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
      >
        <div onClick={handleOpenModal} className="cursor-pointer rounded-t-md ">
          <Image
            className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
            src="/images/openhouse/Open-house.jpg"
            width={600}
            height={300}
            objectFit="cover"
            quality={100}
            alt="activity"
          />
        </div>
        <div className="p-2">
          <div className="flex gap-2 font-bold border-l-4 border-sky-500 pl-2 text-left">
            <h1>Open house BU </h1>
            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/openhouse/BuLogo.png"
              width={30}
              height={30}
              objectFit="cover"
              alt="activity"
            />
          </div>
          <div className="indent-[20px] text-left text-[#a4a1a1] text-[12px]">
            <p>
              Presented{" "}
              <a
                className="hover:text-sky-500"
                href="https://buddytotravel.vercel.app/"
                target="_blank"
                rel="noreferrer noopener"
              >
                Buddy to tavel
              </a>{" "}
              at Bangkok University open house.
            </p>
          </div>
        </div>
        <ModalOpenHouse isOpen={isOpen} handleClose={handleClose} />
      </motion.div>
    </>
  );
};

export default WorkOpenHouses;
