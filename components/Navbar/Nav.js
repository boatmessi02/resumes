import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { TbActivityHeartbeat } from "react-icons/tb";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
  const [menu, setMenu] = useState(false);

  const handleOpenMenu = () => {
    setMenu(true);
  };
  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <div className="flex justify-between items-center max-w-[1240px] mx-auto px-5 text-white h-[100px] ">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex rounded-full items-center gap-2 justify-between cursor-pointer"
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

        <div className="lg:hidden cursor-pointer p-4 fixed top-[10px] right-0 ">
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
        <ul
          className={
            !menu
              ? "hidden lg:flex font-bold gap-10"
              : "menuResponsive flex flex-col fixed top-[70px] right-5 p-7 gap-4 items-start bg-[#222] z-[99]"
          }
        >
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <ScrollLink
              className="flex flex-nowrap gap-2"
              to="teerapat"
              smooth={true}
            >
              <Image
                src="/images/teerapatTJ.jpg"
                height={30}
                width={30}
                className="rounded-full object-cover"
              />
              TEERAPAT
            </ScrollLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <ScrollLink
              className="flex flex-nowrap gap-2"
              to="skill"
              smooth={true}
            >
              <TbActivityHeartbeat color="#EC9A23" size={20} />
              SKILL
            </ScrollLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <ScrollLink
              className="flex flex-nowrap gap-2"
              to="experience"
              smooth={true}
              offset={-150}
            >
              <TbActivityHeartbeat color="#B1EB6F" size={20} />
              EXPERIENCE
            </ScrollLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <ScrollLink
              className="flex flex-nowrap gap-2"
              to="education"
              smooth={true}
            >
              <TbActivityHeartbeat color="#35dde5" size={20} />
              EDUCATION
            </ScrollLink>
          </motion.li>
          <motion.li
            whileHover={{ scale: 1.05 }}
            className="flex text-md font-bold hover:text-[#35dde5] hover:duration-300 border-b p-2 hover:opacity-80 items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <Link href="/work">
              <span className="flex gap-2 items-center jus">
                <TbActivityHeartbeat color="pink" size={20} />
                WORKS
              </span>
            </Link>
          </motion.li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
