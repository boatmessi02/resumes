import React from "react";
import { motion } from "framer-motion";
import { GiAgave } from "react-icons/gi";

const experience = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[2rem] text-white">
          <span className="flex gap-2 justify-center items-center">
            <GiAgave color="green" size={40} />
            <h1 className="text-3xl">EXPERIENCE</h1>
          </span>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4">
              <h1 className="font-bold text-xl ">
                2021 Smart IOT (Smart School Bus)
              </h1>
              <span className="flex flex-col text-left gap-2 ">
                <p>
                  • BU-MIT (Bangkok University Multimedia Intelligent
                  Technology)
                </p>
                <p>• LAB (Motion Detection)</p>
              </span>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-xl ">2022 Create game random</h1>
              <span className="flex flex-col text-left w-full gap-2">
                <p>{`• It is a game created for interviewing interns.`}</p>
                <p>{`• It's a game about random numbers.`}</p>
              </span>
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="flex items-center w-fit rounded-md p-[1rem] bg-[#222]  h-[30px]"
              >
                <button>
                  <a
                    href="https://random-game-9kcszqbqr-boatmessi02.vercel.app/"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View Game Random
                  </a>
                </button>
              </motion.div>
            </div>

            <div className="flex flex-col gap-4 items-center">
              <h1 className="font-bold text-xl ">
                2022 - 2023 Buddy To Travel Project
              </h1>
              <span className="flex flex-col w-full text-left gap-2">
                <p>{`• Is a website about community.`}</p>
                <p>
                  {`• We created this project for the benefit of people who love to
                hang out with people.`}
                </p>
                <p>
                  {`• Now, we going to connect database and only have 2 months for this project.`}
                </p>
              </span>
              <motion.div
                whileHover={{ scale: 0.9 }}
                className="flex items-center w-fit rounded-md p-[1rem] bg-[#222] h-[30px]"
              >
                <button>
                  <a
                    href="https://buddytotravel.vercel.app/login"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    View Project Buddy
                  </a>
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
