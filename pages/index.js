import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Educations from "../components/Education/Educations";
import Nav from "../components/Navbar/Nav";
import Footers from "../components/Footer/Footers";
import Experiences from "../components/Experience/Experiences";
import Introduces from "../components/Introduce/Introduces";
import Skills from "../components/Skill/Skills";

export default function Home() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [checkPositionY, setCheckPositionY] = useState(false);

  const handleScrollCheck = () => {
    const positionY = window.pageYOffset;

    setScrollPosition(positionY);
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

  const refBtnSkill = useRef();
  const refBtnIntroduce = useRef();
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

      <div className="sections relative w-full">
        <Nav
          refBtnIntroduce={refBtnIntroduce}
          refBtnSkill={refBtnSkill}
          refBtnExperience={refBtnExperience}
          refBtnEducation={refBtnEducation}
          handleScroll={handleScroll}
        />
        <div
          ref={refBtnIntroduce}
          className={`px-3 py-5 lg:fixed w-full h-fit lg:right-[8rem] 
          flex justify-end lg:max-w-[400px] text-white ${
            checkPositionY ? "lg:top-[2rem]" : "top-[5rem]"
          }`}
        >
          <Introduces />
        </div>
        <section className="containers" ref={refBtnSkill}>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 ">
            <div className="col-span-2">
              <Skills />
            </div>
          </div>
        </section>

        <section className="containers " ref={refBtnExperience}>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 ">
            <div className="col-span-2">
              <Experiences />
            </div>
          </div>
        </section>

        <section className="containers  " ref={refBtnEducation}>
          <div className="grid grid-cols-2 gap-10 lg:grid-cols-3 ">
            <div className="col-span-2">
              <Educations />
            </div>
          </div>
        </section>
        <Footers />
      </div>
    </>
  );
}
