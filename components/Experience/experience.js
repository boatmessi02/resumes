import React from "react";

const experience = () => {
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[50px] text-white">
          <h1 className="text-4xl font-bold">EXPERIENCE</h1>
          <div className="flex flex-col gap-5">
            <h1 className="font-bold text-xl ">
              2021 Smart IOT (Smart School Bus)
            </h1>
            <span className="flex flex-col items-start">
              <p>
                • BU-MIT (Bangkok University Multimedia Intelligent Technology)
              </p>
              <p>• LAB (Motion Detection)</p>
            </span>
            <h1 className="font-bold text-xl ">2022 Create game random</h1>
            <span className="flex flex-col text-left">
              <p>{`• It is a game created for interviewing interns.`}</p>
              <p>{`• It's a game about random numbers.`}</p>
            </span>
            <h1 className="font-bold text-xl ">
              2022 - 2023 Buddy To Travel Project
            </h1>
            <span className="flex flex-col text-left">
              <p>{`• Is a website about community.`}</p>
              <p>
                {`• We created this project for the benefit of people who love to
                hang out with people.`}
              </p>
              <p>
                {`• Now, we going to connect database and only have 2 months for this project.`}
              </p>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default experience;
