import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import WorkBuddy from "./WorkExperience/WorkBuddyToTravel/WorkBuddy";
import WorkOpenHouses from "./WorkActivities/WorkOpenHouse/WorkOpenHouses";
import WorkRandom from "./WorkExperience/WorkRandom/WorkRandom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Link as ScrollLink } from "react-scroll";
import { TbActivityHeartbeat } from "react-icons/tb";

const Work = () => {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };
  const handleCloseMenu = () => {
    setMenu(false);
  };
  return (
    <>
      <section className="containers ">
        <div className="flex flex-col gap-7">
          <div className="flex justify-between items-center ">
            <Link href="/">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex rounded-full items-center gap-1 cursor-pointer"
              >
                <Image
                  className="rotate"
                  src="/images/logoT.png"
                  alt="Picture of the author"
                  width={100}
                  height={100}
                />
                <span className="content">
                  <h2>TEERAPATJ</h2>
                  <h2 className="font-bold">TEERAPATJ</h2>
                </span>
              </motion.div>
            </Link>
            <div className="lg:hidden cursor-pointer p-4 fixed top-[50px] right-0 ">
              {!menu ? (
                <AiOutlineMenu
                  onClick={handleOpenMenu}
                  size={30}
                  className="text-[#fff] font-bold "
                />
              ) : (
                <AiOutlineClose
                  size={30}
                  onClick={handleCloseMenu}
                  className="text-[#fff] font-bold"
                />
              )}
            </div>
            <div
              className={
                !menu
                  ? "hidden lg:flex font-bold gap-10"
                  : "menuResponsive flex flex-col fixed top-[110px] right-5 p-7 gap-4 items-start bg-[#222] z-[99]"
              }
            >
              <ScrollLink
                className="flex flex-nowrap "
                to="activity"
                smooth={true}
              >
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
                >
                  <span className="flex gap-2 items-center">
                    <TbActivityHeartbeat color="#35dde5" size={20} />
                    ACTIVITIES
                  </span>
                </motion.div>
              </ScrollLink>

              <ScrollLink
                className="flex flex-nowrap "
                to="experience"
                smooth={true}
              >
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
                >
                  <span className="flex gap-2 items-center">
                    <TbActivityHeartbeat color="#B1EB6F" size={20} />
                    EXPERIENCE
                  </span>
                </motion.div>
              </ScrollLink>
              <ScrollLink
                className="flex flex-nowrap"
                to="certificate"
                smooth={true}
              >
                <motion.div
                  whileHover={{ scale: 0.95 }}
                  className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
                >
                  <span className="flex gap-2 items-center">
                    <TbActivityHeartbeat color="pink" size={20} />
                    CERTIFICATE
                  </span>
                </motion.div>
              </ScrollLink>
            </div>
          </div>
          <motion.div
            initial={{
              y: 150,
              opacity: 0,
            }}
            transition={{ duration: 1 }}
            whileInView={{ y: 0, opacity: 1 }}
            className="w-full h-full flex flex-col gap-6"
          >
            <div>
              <div
                name="activity"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,0.5021358885351015) 0%, rgba(9,9,121,0.6982143199076505) 35%, rgba(6,81,168,0.6141807064622724) 58%, rgba(4,128,199,0.7010154403558299) 73%, rgba(3,150,214,0.6449930313922444) 80%, rgba(3,150,214,0.4405112386751575) 93%)",
                }}
                className="w-full rounded p-[0.5rem] border-solid border-2 border-sky-500 pl-7"
              >
                <h1 className="font-bold">WORK ACTIVITIES</h1>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 p-6 text-center items-center gap-5 mt-10 ">
                <WorkOpenHouses />
              </div>
            </div>

            <motion.div
              initial={{
                y: 150,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <div
                name="experience"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,0.5021358885351015) 0%, rgba(9,9,121,0.6982143199076505) 35%, rgba(6,81,168,0.6141807064622724) 58%, rgba(4,128,199,0.7010154403558299) 73%, rgba(3,150,214,0.6449930313922444) 80%, rgba(3,150,214,0.4405112386751575) 93%)",
                }}
                className="rounded p-[0.5rem] border-solid border-2 border-sky-500 pl-7 "
              >
                <h1 className="font-bold">WORK EXPERIENCE</h1>
              </div>
              <div className="grid md:grid-cols-3 grid-cols-1 p-6 text-center items-center gap-5 mt-10">
                <WorkRandom />
                <WorkBuddy />
              </div>
            </motion.div>

            <motion.div
              initial={{
                y: 150,
                opacity: 0,
              }}
              transition={{ duration: 1 }}
              whileInView={{ y: 0, opacity: 1 }}
            >
              <div
                name="certificate"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(2,0,36,0.5021358885351015) 0%, rgba(9,9,121,0.6982143199076505) 35%, rgba(6,81,168,0.6141807064622724) 58%, rgba(4,128,199,0.7010154403558299) 73%, rgba(3,150,214,0.6449930313922444) 80%, rgba(3,150,214,0.4405112386751575) 93%)",
                }}
                className="rounded p-[0.5rem] border-solid border-2 border-sky-500 pl-7 "
              >
                <h1 className="font-bold">CERTIFICATE</h1>
              </div>
              <div className="grid md:grid-cols-2 grid-cols-1 p-6 text-center items-center gap-10 mt-10">
                <Image
                  className="object-contain"
                  src="/images/certification/Blockchain.png"
                  alt="Blockchain"
                  width={500}
                  height={500}
                />
                <Image
                  className="object-contain"
                  src="/images/certification/Digital.png"
                  alt="Digital"
                  width={500}
                  height={500}
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Work;
