import React from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import ProjectManagement from "./ProjectManagement";
import Calendar from "./Calendar";
import Employee from "./Employee";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const ModalHr = (props) => {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box
        sx={style}
        className="scrollModal border-2 flex p-[30px] flex-col w-[350px] md:w-[1024px] h-[500px] md:h-[600px] text-white text-center gap-[2rem] md:gap-[4rem] rounded-lg"
      >
        <ProjectManagement />

        <Calendar />

        <Employee />

        <div className="flex gap-5 justify-end pt-[10px] text-[14px] md:text-[16px] border-t-[2px] border-[#0B88A6] border-dotted ">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={props.handleClose}
            className="flex cursor-pointer w-[75px] md:w-[100px] h-[35px] justify-center items-center gap-1 bg-[#2799d1] rounded-[10px] hover:bg-[#3590a7]"
          >
            Close
          </motion.div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalHr;
