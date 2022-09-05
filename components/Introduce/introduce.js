import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiPointyHat } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { IoIosContract } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
const introduce = (props) => {
  return (
    <div className="flex flex-col h-fit gap-2 ">
      <div className="flex items-center gap-4">
        <div className="flex w-[100px] ">
          <Image
            className="rounded-full"
            src="/images/boat.png"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="flex">
          <div className="flex flex-col">
            <h1>Teerapat Junchuen</h1>
            <span className="flex gap-2 items-center ">
              <GiPointyHat />
              <h1>Computer Science</h1>
            </span>
            <span className="flex gap-2 items-center ">
              <FaConnectdevelop />
              <h1>Full Stack Developer</h1>
            </span>
          </div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex bg-[#35DDE5] hover:bg-[#222] rounded-xl w-[100px] h-[50px] items-center justify-center cursor-pointer"
          >
            <a href="/images/Resume.pdf" target="_blank">
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="flex flex-col w-full h-full rounded-2xl p-[2rem] gap-4"
      >
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-2">
            <h1 className="text-2xl font-bold text-[#35DDE5]">About</h1>
            <SiAboutdotme color="#35DDE5" size={30} />
          </span>
          <p className="indent-[20px] ">
            {`I'm boat or my name is Teerapat Junchuen. I'm 21 year old. I’m
            studying at Bangkok University. I have a dream to work from home and
            make a lot of money from working coding. I'll create amazing things
            about what I like. I can work at any company if I get a job that I
            love. Because that's how I row.`}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex gap-2">
            <h1 className="text-2xl font-bold text-[#35DDE5]">Contacts</h1>
            <IoIosContract size={30} />
          </span>
          <span className="flex gap-10">
            <a
              href="https://www.facebook.com/messiboat.score.3"
              target="_blank"
              rel="noopener"
            >
              <BsFacebook className="hover:text-[#385898]" size={30} />
            </a>
            <a
              href="https://www.instagram.com/__tjbzonboat/"
              target="_blank"
              rel="noopener"
            >
              <BsInstagram className="hover:text-[#FA383E]" size={30} />
            </a>
            <a
              href="https://twitter.com/BoatMess"
              target="_blank"
              rel="noopener"
            >
              <BsTwitter className="hover:text-[#438eef]" size={30} />
            </a>
            <a
              href="https://github.com/boatmessi02"
              target="_blank"
              rel="noopener"
            >
              <BsGithub className="hover:text-[#3ee4ce]" size={30} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default introduce;
