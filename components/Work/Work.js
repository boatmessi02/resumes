import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import ModalOpenHouse from "./openHouse/ModalOpenHouse";

const Work = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
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
                <h1 className="font-bold">WORK ACTIVITY</h1>
              </div>
            </div>
            <div className="grid md:grid-cols-3 grid-cols-1 p-6 px-8 text-center items-center gap-6 ">
              <div
                className="w-[300px] h-[250px] ] flex flex-col rounded-xl"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                <div onClick={handleOpenModal} className="overflow-hidden cursor-pointer rounded-t-md ">
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
                      ได้นำโปรเจกต์{" "}
                      <a
                        className="hover:text-sky-500"
                        href="https://buddytotravel.vercel.app/"
                        target="_blank"
                        rel="noreferrer noopener"
                      >
                        Buddy to tavel
                      </a>{" "}
                      ไปขึ้นโชว์ในงาน Open house
                    </p>
                  </div>
                </div>
                <ModalOpenHouse isOpen={isOpen} handleClose={handleClose} />
              </div>
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
            <div className="grid md:grid-cols-3 grid-cols-1 p-6 px-8 text-center items-center gap-5 ">
              <div
                className="w-[300px] h-[250px] ] flex flex-col rounded-xl"
                style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
              >
                <div className="overflow-hidden cursor-pointer rounded-t-md ">
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
                      alt="activity"
                    />
                  </a>
                </div>
                <div className="p-2">
                  <div className="flex gap-2 font-bold border-l-4 border-sky-500 pl-2 text-left">
                    <h1>Buddy to travel </h1>

                    <Image
                      className="transition duration-[.6s] hover:scale-[1.15] w-full h-full"
                      src="/images/buddytotravel/logoBuddy.png"
                      width={30}
                      height={30}
                      objectFit="cover"
                      alt="activity"
                    />
                  </div>
                  <div className="indent-[20px] text-left text-[#a4a1a1] text-[12px]">
                    <p>
                      เว็บไซต์รวมกลุ่มคนเพื่อหาเพื่อนเที่ยวในสถานที่ต่างๆ
                      ตามวันและเวลาที่ต้องการ ทำให้เกิดสังคมใหม่ๆ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
