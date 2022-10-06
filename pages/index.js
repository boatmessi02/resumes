import Head from "next/head";
import { useRef, useState, useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Introduce from "./components/Introduce/Introduce";
import Skill from "./components/Skill/Skill";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Education from "./components/Education/Education";

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

      <div className="sections relative">
        <Navbar
          refBtnIntroduce={refBtnIntroduce}
          refBtnSkill={refBtnSkill}
          refBtnExperience={refBtnExperience}
          refBtnEducation={refBtnEducation}
          handleScroll={handleScroll}
        />
        <div
          ref={refBtnIntroduce}
          className={`lg:fixed w-full h-fit lg:right-[10rem] 
          flex justify-end lg:max-w-[400px] text-white ${
            checkPositionY ? "lg:top-[3rem]" : "top-[8rem]"
          }`}
        >
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
