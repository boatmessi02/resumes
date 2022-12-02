import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import WorkBuddy from "./WorkBuddyToTravel/WorkBuddy";
import WorkOpenHouses from "./WorkOpenHouse/WorkOpenHouses";
import WorkRandom from "./WorkRandom/WorkRandom";

const Work = () => {
  return (
    <section className="containers ">
      <div className="flex flex-col gap-7">
        <div className="flex justify-start items-center cursor-pointer">
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex rounded-full items-center gap-2 cursor-pointer"
            >
              <Image
                src="/images/logo.png"
                alt="Picture of the author"
                width={80}
                height={80}
              />
              <p className="textLogo">TEERAPATJ</p>
            </motion.div>
          </Link>
        </div>
        <div className="w-full h-full flex flex-col gap-6">
          <div className="hover:bg-[#222] ">
            <div
              style={{
                background: "rgb(2,0,36)",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,0.5021358885351015) 0%, rgba(9,9,121,0.6982143199076505) 35%, rgba(6,81,168,0.6141807064622724) 58%, rgba(4,128,199,0.7010154403558299) 73%, rgba(3,150,214,0.6449930313922444) 80%, rgba(3,150,214,0.4405112386751575) 93%)",
              }}
              className="rounded p-[0.5rem] border-solid border-2 border-sky-500 pl-7 "
            >
              <h1 className="font-bold">WORK ACTIVITIES</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 p-6 text-center items-center gap-6 ">
            <WorkOpenHouse />
          </div>
          <div className="hover:bg-[#222] ">
            <div
              style={{
                background: "rgb(2,0,36)",
                background:
                  "linear-gradient(90deg, rgba(2,0,36,0.5021358885351015) 0%, rgba(9,9,121,0.6982143199076505) 35%, rgba(6,81,168,0.6141807064622724) 58%, rgba(4,128,199,0.7010154403558299) 73%, rgba(3,150,214,0.6449930313922444) 80%, rgba(3,150,214,0.4405112386751575) 93%)",
              }}
              className="rounded p-[0.5rem] border-solid border-2 border-sky-500 pl-7 "
            >
              <h1 className="font-bold">WORK EXPERIENCE</h1>
            </div>
          </div>
          <div className="grid md:grid-cols-3 grid-cols-1 p-6 text-center items-center gap-5 ">
            <WorkRandom />
            <WorkBuddy />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
