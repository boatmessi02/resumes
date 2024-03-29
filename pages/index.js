import Head from "next/head";
import { useState, useEffect } from "react";
import Educations from "../components/Education/Educations";
import Nav from "../components/Navbar/Nav";
import Footers from "../components/Footer/Footers";
import Experiences from "../components/Experience/Experiences";
import Introduces from "../components/Introduce/Introduces";
import Skills from "../components/Skill/Skills";
import { motion } from "framer-motion";

export default function Home() {
  const [checkPositionY, setCheckPositionY] = useState(false);

  const handleScrollCheck = () => {
    const positionY = window.pageYOffset;

    if (positionY > 1100) {
      setCheckPositionY(true);
    } else {
      setCheckPositionY(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollCheck);
    return () => {
      window.removeEventListener("scroll", handleScrollCheck);
    };
  }, []);

  return (
    <>
      <Head>
        <title>Teerapat TJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logoT.png" />
      </Head>
      <Nav />

      <motion.div
        initial={{
          y: 150,
          opacity: 0,
        }}
        transition={{ duration: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="w-full relative "
      >
        <div
          name="teerapat"
          className={`px-3 py-12 xl:fixed w-full h-fit xl:right-[8rem] 
          flex justify-end xl:max-w-[400px] text-white ${
            checkPositionY ? "xl:top-[4rem]" : "top-[5rem]"
          }`}
        >
          <Introduces />
        </div>
        <div>
          <section name="skill" className="containers">
            <div className=" grid grid-cols-1 gap-10 xl:grid-cols-3 ">
              <div className="col-span-2">
                <Skills />
              </div>
            </div>
          </section>
        </div>

        <motion.div
          initial={{
            y: 150,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <section name="experience" className="containers">
            <div className="grid grid-cols-2 gap-10 xl:grid-cols-3 ">
              <div className="col-span-2">
                <Experiences />
              </div>
            </div>
          </section>
        </motion.div>

        <motion.div
          initial={{
            y: 150,
            opacity: 0,
          }}
          transition={{ duration: 1 }}
          whileInView={{ y: 0, opacity: 1 }}
        >
          <section name="education" className="containers">
            <div className="grid grid-cols-2 gap-10 xl:grid-cols-3 ">
              <div className="col-span-2">
                <Educations />
              </div>
            </div>
          </section>
        </motion.div>

        <Footers />
      </motion.div>
    </>
  );
}
