import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar/navbar";
import Introduce from "../components/Introduce/introduce";
import Skill from "../components/Skill/skill";
import Experience from "../components/Experience/experience";
import { useRef, useState } from "react";
import Education from "../components/Education/education";
import Footer from "../components/Footer/footer";

export default function Home() {
  const refBtnSkill = useRef();

  const refBtnExperience = useRef();
  const refBtnEducation = useRef();

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Head>
        <title>Teerapat TJ</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/images/logo.png" />
      </Head>

      <div className="sections relative">
        <Navbar
          refBtnSkill={refBtnSkill}
          refBtnExperience={refBtnExperience}
          refBtnEducation={refBtnEducation}
          handleScroll={handleScroll}
        />
        <div className="lg:fixed w-full h-full lg:top-[10rem] lg:right-[10rem] flex justify-end lg:max-w-[400px] text-white">
          <Introduce />
        </div>
        <section className="containers " ref={refBtnSkill}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 ">
            <div className="col-span-2">
              <Skill />
            </div>
          </div>
        </section>

        <section className="containers " ref={refBtnExperience}>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 ">
            <div className="col-span-2">
              <Experience />
            </div>
          </div>
        </section>

        <section className="containers  " ref={refBtnEducation}>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 ">
            <div className="col-span-2">
              <Education />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}
