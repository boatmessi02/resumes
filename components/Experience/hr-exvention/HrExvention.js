import React from "react";

const HrExvention = () => {
  return (
    <>
      <h1 className="font-bold text-xl p-2 ">
        2023 HR Exvention project (Internship Project)
      </h1>
      <span className="flex flex-col w-full text-left gap-2 px-4">
        <p className="border-l-4 border-sky-500 pl-2">{`Create calendar for employee want to take time off.`}</p>
        <p className="border-l-4 border-sky-500 pl-2">
          {`Able to handle add equipment for new employee.`}
        </p>
        <p className="border-l-4 border-sky-500 pl-2">{`Create function adding tasks for manager in organization.`}</p>
        <p className="border-l-4 border-sky-500 pl-2">
          {`Able to help out with opinions about UI design for uncomplicated to development.`}
        </p>
        <p className="border-l-4 border-sky-500 pl-2">
          {`Refactor code for easier revisions.`}
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

export default HrExvention;
