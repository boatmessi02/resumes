import React from "react";

const NtDashboard = () => {
  return (
    <>
      <h1 className="font-bold text-xl p-2 ">
        2023 Nt-dashboard Project (Internship Project)
      </h1>
      <span className="flex flex-col w-full text-left gap-2 px-4">
        <p className="border-l-4 border-sky-500 pl-2">{`Able to handle bar-chart.js to success so it's something very new to me in to do dashboard and chart.js`}</p>
        <p className="border-l-4 border-sky-500 pl-2">
          {`Support to handle style Css and Html in my team.`}
        </p>
        <p className="border-l-4 pl-2">{`Front-end developer`}</p>
      </span>
      <div className="w-full text-[12px] ">
        <span className="flex gap-5 text-[#35DDE5]">
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            className=" w-fit h-[35px] rounded-md p-2 "
          >
            <p>AngularJs</p>
          </div>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            className=" w-fit  h-[35px] rounded-md p-2 "
          >
            <p>Bootstrap</p>
          </div>
          <div
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
            className=" w-fit  h-[35px] rounded-md p-2 "
          >
            <p>TypeScript</p>
          </div>
        </span>
      </div>
    </>
  );
};

export default NtDashboard;
