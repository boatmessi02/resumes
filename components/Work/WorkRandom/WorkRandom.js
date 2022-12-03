import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkRandom = () => {
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
          <a
            className="hover:text-sky-500"
            href="https://random-game-9kcszqbqr-boatmessi02.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/randomGame/showRandom.png"
              width={600}
              height={300}
              objectFit="cover"
              quality={100}
              alt="experience"
            />
          </a>
        </div>
        <div className="p-2 ">
          <div className="flex gap-2 font-bold border-l-4 border-sky-500 pl-2 text-left">
            <h1>Random Game </h1>

            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/randomGame/dice.png"
              width={30}
              height={30}
              objectFit="cover"
              alt="experience"
            />
          </div>
          <div className="indent-[20px] text-left text-[#a4a1a1] text-[12px]">
            <p>A random game created for internship interviews.</p>
          </div>
          <div className="w-full text-[12px] text-[#35DDE5]">
            <div className="flex">
              <span className="rounded-md p-2 ">
                <p>React</p>
              </span>
              <span className=" rounded-md p-2 ">
                <p>Tailwind CSS</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkRandom;
