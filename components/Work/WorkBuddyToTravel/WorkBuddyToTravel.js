import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const WorkBuddyToTravel = () => {
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
            href="https://buddytotravel.vercel.app/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/buddytotravel/buddy.png"
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
            <h1>Buddy to travel </h1>

            <Image
              className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
              src="/images/buddytotravel/logoBuddy.png"
              width={30}
              height={30}
              objectFit="cover"
              alt="experience"
            />
          </div>
          <div className="indent-[20px] text-left text-[#a4a1a1] text-[12px]">
            <p>
              The website gathers who people to find require friends in
              different places.
            </p>
          </div>
          <div className="w-full text-[12px] text-[#35DDE5]">
            <div className="flex">
              <span className="rounded-md p-2 ">
                <p>Next.Js</p>
              </span>
              <span className=" rounded-md p-2 ">
                <p>Tailwind CSS</p>
              </span>
              <span className=" rounded-md p-2 ">
                <p>Firebase</p>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WorkBuddyToTravel;
