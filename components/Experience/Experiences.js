import React, { useState } from "react";
import ModalMotion from "./motion/ModalMotion";
import { TbActivityHeartbeat } from "react-icons/tb";
import SmartIot from "./smartIot/SmartIot";
import Random from "./random/Random";
import Buddy from "./buddy/Buddy";
import NtDashboard from "./nt-dashboard/NtDashboard";
import HrExvention from "./hr-exvention/HrExvention";

const Experiences = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <div
        style={{ backgroundColor: "rgba(0, 0, 0, 0.4)" }}
        className="w-full h-full p-[2rem] rounded-2xl"
      >
        <div className="flex flex-col items-center justify-center text-center gap-[2rem] text-white">
          <span className="flex gap-2 justify-center items-center">
            <TbActivityHeartbeat color="#B1EB6F" size={40} />
            <h1 className="text-3xl font-bold">EXPERIENCE</h1>
          </span>
          <div className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <SmartIot handleOpenModal={handleOpenModal} />
            </div>
            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <Random />
            </div>
            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <Buddy />
            </div>
            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <NtDashboard />
            </div>
            <div className="flex flex-col gap-4 items-center border-2 p-6">
              <HrExvention />
            </div>
            <ModalMotion handleClose={handleClose} isOpen={isOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
