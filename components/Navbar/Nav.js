import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

import { FaHatWizard } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { GiAgave } from "react-icons/gi";
import { MdOutlineCastForEducation, MdWorkspacesOutline } from "react-icons/md";
import Link from "next/link";

const Nav = (props) => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(true);
    if (menu) {
      setMenu(false);
    }
  };

  return (
    <>
      <div className="flex justify-between items-center max-w-[1240px] mx-auto text-white h-[90px]">
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex rounded-full items-center gap-2 justify-between cursor-pointer"
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

        <div
          className="md:hidden cursor-pointer p-4 fixed top-[10px] right-0"
          onClick={handleMenu}
        >
          {!menu ? (
            <AiOutlineMenu size={30} className="text-[#fff] font-bold " />
          ) : (
            <AiOutlineClose size={30} className="text-[#fff] font-bold" />
          )}
        </div>
        <ul
          className={
            !menu
              ? "hidden lg:flex font-bold gap-10"
              : "menuResponsive flex flex-col fixed top-[70px] right-2 p-4 gap-4 items-start bg-[#222] z-[99]"
          }
        >
          <motion.li
            onClick={() => props.handleScroll(props.refBtnIntroduce.current)}
            whileHover={{ scale: 1.2 }}
            className="flex text-md items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <FaHatWizard color="purple" size={20} />
            TEERAPAT
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnSkill.current)}
            whileHover={{ scale: 1.2 }}
            className="flex text-md items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <DiCodeigniter color="red" size={20} />
            SKILL
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnExperience.current)}
            whileHover={{ scale: 1.2 }}
            className="flex text-md items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <GiAgave color="green" size={20} />
            EXPERIENCE
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnEducation.current)}
            whileHover={{ scale: 1.2 }}
            className="flex text-md items-center gap-2 justify-center rounded-2xl cursor-pointer"
          >
            <MdOutlineCastForEducation color="blue" size={20} />
            EDUCATION
          </motion.li>
          <motion.li whileHover={{ scale: 1.2 }}>
            <Link href="/work">
              <div className="flex text-md items-center gap-2 justify-center rounded-2xl cursor-pointer">
                <MdWorkspacesOutline color="pink" size={20} />
                WORK
              </div>
            </Link>
          </motion.li>
        </ul>

        {/* <div
          onClick={handleMenu}
          className="text-4xl cursor-pointer lg:hidden block fixed top-0 right-0 p-[2rem] mt-4"
        >
          {!menu ? <AiOutlineClose size={2} /> : <AiOutlineMenu size={30} />}
        </div>
        <ul
          style={{ backgroundColor: "rgba(0, 0, 0, 0.9)" }}
          className={
            !menu
              ? "fixed right-0 top-0 w-fit h-full p-[1rem] border-r-gray-900 ease-in-out duration-500 lg:hidden block font-bold"
              : "fixed left-[-100%] "
          }
        >
          <div
            onClick={handleMenu}
            className="text-4xl cursor-pointer flex lg:hidden justify-end"
          >
            {!menu ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
          </div>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnIntroduce.current)}
            whileHover={{ scale: 0.9 }}
            className="flex w-[150px] h-[40px] gap-2 lg:ml-8 ml-3 text-[18px] lg:my-0 my-7 bg-[#222] hover:bg-[#] items-center justify-center rounded-2xl cursor-pointer"
          >
            <FaHatWizard color="purple" size={20} />
            TEERAPAT
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnSkill.current)}
            onChange={() => handleMenu()}
            whileHover={{ scale: 0.9 }}
            className="flex w-[150px] h-[40px] gap-2 lg:ml-8 ml-3 text-[18px] lg:my-0 my-7 bg-[#222] hover:bg-[#35DDE5] items-center justify-center rounded-2xl cursor-pointer"
          >
            <DiCodeigniter color="red" size={20} />
            SKILL
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnExperience.current)}
            whileHover={{ scale: 0.9 }}
            className="flex w-[150px] h-[40px] gap-2 lg:ml-8 ml-3 text-[18px] lg:my-0 my-7 bg-[#222] hover:bg-[#35DDE5] items-center justify-center rounded-2xl cursor-pointer"
          >
            <GiAgave color="green" size={20} />
            EXPERIENCE
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnEducation.current)}
            whileHover={{ scale: 0.9 }}
            className="flex w-[150px] h-[40px] gap-2 lg:ml-8 ml-3 text-[18px] lg:my-0 my-7 bg-[#222] hover:bg-[#35DDE5] items-center justify-center rounded-2xl cursor-pointer"
          >
            <MdOutlineCastForEducation color="blue" size={20} />
            EDUCATION
          </motion.li>
        </ul> */}
      </div>
    </>
  );
};

export default Nav;
