import React from "react";
import AwesomeSlider from "react-awesome-slider";

const EmployeeList = [
  {
    src: "/images/employee-hr/newEmployee.png",
    title: "new",
  },
  {
    src: "/images/employee-hr/viewEmployee.png",
    title: "view",
  },
];
const Employee = () => {
  return (
    <>
      <div className="pt-6">
        <h1 className="font-bold text-3xl">Employee module</h1>
      </div>
      <div className="flex flex-col gap-[5rem] items-center justify-center">
        <div className="w-[300px] md:w-[700px] h-full m-auto ">
          <AwesomeSlider animation="cubeAnimation">
            {EmployeeList.map((items, index) => (
              <div
                key={index}
                className="h-full w-full overflow-hidden rounded-md border-solid border-[1px]"
              >
                <img
                  src={items.src}
                  alt={items.title}
                  className="w-full h-full"
                />
              </div>
            ))}
          </AwesomeSlider>
        </div>
      </div>
    </>
  );
};

export default Employee;
