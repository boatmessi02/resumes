import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { GiPointyHat } from "react-icons/gi";
import { FaConnectdevelop } from "react-icons/fa";
import { IoIosContract } from "react-icons/io";
import { SiAboutdotme } from "react-icons/si";
import { BsFacebook, BsInstagram, BsTwitter, BsGithub } from "react-icons/bs";
import Typewriter from "typewriter-effect";

const Introduces = () => {
  return (
    <div className="flex flex-col h-fit gap-4 ">
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="flex p-[.5rem] h-[55px] rounded-md text-[white] text-center items-center justify-center text-[16px]"
      >
        <Typewriter
          options={{
            delay: 50,
            loop: true,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("สวัสดี ผมเป็นโปรแกรมเมอร์ที่ขยันและน่ารักครับ ):")
              .pauseFor(1000)
              .deleteAll()
              .start();
            typewriter
              .typeString("I'm TJB, Full Stack Web Developer from Thailand.")
              .pauseFor(5000)
              .start();
          }}
        />
      </div>

      <div className="flex items-center gap-4">
        <div className="flex w-[100px] ">
          <Image
            className="rounded-full object-cover"
            src="/images/teerapatTJ.jpg"
            alt="Picture of the author"
            width={500}
            height={500}
          />
        </div>
        <div className="flex gap-1">
          <div className="flex flex-col">
            <h1>Teerapat Junchuen</h1>
            <span className="flex gap-2 items-center ">
              <GiPointyHat />
              <h1>Computer Science</h1>
            </span>
            <span className="flex gap-2 items-center ">
              <FaConnectdevelop />
              <h1>Font-End Developer</h1>
            </span>
          </div>
          <motion.div
            whileTap={{ scale: 0.9 }}
            className="flex bg-[#35DDE5] hover:bg-transparent border-2  border-white rounded-xl w-[100px] h-[50px] items-center justify-center cursor-pointer"
          >
            <a href="/images/resume.pdf" target="_blank">
              Resume
            </a>
          </motion.div>
        </div>
      </div>

      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="flex flex-col w-full h-full rounded-2xl p-[1.2rem] gap-4"
      >
        <div className="flex flex-col gap-5">
          <span className="flex items-center gap-2">
            <h1 className="text-2xl text-[#35DDE5] font-bold">About</h1>
            <SiAboutdotme color="#35DDE5" size={30} />
          </span>
          <p className="indent-[20px] ">
            {`I'm 22 years old. I'm seeking a suitable job position to utilize 
            my skill and abilities and I have the flexibility to work. I want to achieve professional growth while being resourceful.
             I'm constantly search knowledge and I want to be successful with the organization as an active member,
              Because that's how I role.`}
          </p>
        </div>
        <div className="flex flex-col gap-5">
          <span className="flex gap-2">
            <h1 className="text-2xl text-[#35DDE5] font-bold">Contacts</h1>
            <IoIosContract size={30} />
          </span>
          <span className="flex gap-10">
            <a
              href="https://www.facebook.com/messiboat.score.3"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsFacebook className="hover:text-[#385898]" size={30} />
            </a>
            <a
              href="https://www.instagram.com/__tjbzonboat/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsInstagram className="hover:text-[#FA383E]" size={30} />
            </a>
            <a
              href="https://twitter.com/NDespair7"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsTwitter className="hover:text-[#438eef]" size={30} />
            </a>
            <a
              href="https://github.com/boatmessi02"
              target="_blank"
              rel="noreferrer noopener"
            >
              <BsGithub className="hover:text-[#3ee4ce]" size={30} />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Introduces;
