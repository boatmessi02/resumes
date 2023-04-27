import React from "react";
import AwesomeSlider from "react-awesome-slider";

const projectList = [
  {
    src: "/images/project-management-hr/projectTable.png",
    title: "project",
  },
  {
    src: "/images/project-management-hr/viewProjectDetail.png",
    title: "view",
  },
  {
    src: "/images/project-management-hr/addProject.png",
    title: "add",
  },
  {
    src: "/images/project-management-hr/editProject.png",
    title: "edit",
  },
  {
    src: "/images/project-management-hr/deleteProject.png",
    title: "delete",
  },
];

const ProjectManagement = () => {
  return (
    <>
      <div className="pt-6">
        <h1 className="font-bold text-3xl">Project management module</h1>
      </div>
      <div className="flex flex-col gap-[5rem] items-center justify-center">
        <div className="w-[300px] md:w-[700px] h-full m-auto ">
          <AwesomeSlider animation="cubeAnimation">
            {projectList.map((items, index) => (
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

export default ProjectManagement;
