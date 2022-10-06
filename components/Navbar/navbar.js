import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaHatWizard } from "react-icons/fa";
import { DiCodeigniter } from "react-icons/di";
import { GiAgave } from "react-icons/gi";
import { MdOutlineCastForEducation } from "react-icons/md";

const Navbar = (props) => {
  const [menu, setMenu] = useState(true);

  const handleMenu = () => {
    setMenu(!menu);
  };

  return (
    <>
      <div className="flex lg:justify-center justify-between items-center max-w-[1224px] mx-auto px-4 text-white p-6">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="flex rounded-full items-center justify-between"
        >
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={100}
            height={100}
          />
        </motion.div>
        <ul className="hidden lg:flex font-bold">
          <motion.li
            onClick={() => props.handleScroll(props.refBtnIntroduce.current)}
            whileHover={{ scale: 1.2 }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="flex w-[200px] h-[60px] lg:ml-8 text-md my-7 lg:my-0 items-center gap-2 p-[2rem] justify-center rounded-2xl cursor-pointer"
          >
            <FaHatWizard color="purple" size={20} />
            TEERAPAT
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnSkill.current)}
            whileHover={{ scale: 1.2 }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="flex w-[200px] h-[60px] lg:ml-8 text-md lg:my-0 my-7 gap-2 items-center p-[2rem] justify-center rounded-2xl cursor-pointer"
          >
            <DiCodeigniter color="red" size={20} />
            
            SKILL
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnExperience.current)}
            whileHover={{ scale: 1.2 }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="flex w-[200px] h-[60px] lg:ml-8 text-md my-7 gap-2 lg:my-0 items-center p-[2rem] justify-center rounded-2xl cursor-pointer"
          >
            <GiAgave color="green" size={20} />
            EXPERIENCE
          </motion.li>
          <motion.li
            onClick={() => props.handleScroll(props.refBtnEducation.current)}
            whileHover={{ scale: 1.2 }}
            style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
            className="flex w-[200px] h-[60px] gap-2 lg:ml-8 text-md lg:my-0 my-7 items-center p-[2rem] justify-center rounded-2xl cursor-pointer"
          >
            <MdOutlineCastForEducation color="blue" size={20} />
            EDUCATION
          </motion.li>
        </ul>
        <div
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
        </ul>
      </div>
    </>
  );
};

export default Navbar;
