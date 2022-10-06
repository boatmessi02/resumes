import React from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const motionList = [
  {
    src: "./motion/2.png",
    title: "Concept",
  },
  {
    src: "./motion/3.png",
    title: "How to put id",
  },
  {
    src: "./motion/4.png",
    title: "Button start video",
  },
  {
    src: "./motion/5.png",
    title: "Button start camera",
  },
  {
    src: "./motion/6.png",
    title: "Button play/pause",
  },
  {
    src: "./motion/7.png",
    title: "Reset video",
  },
  {
    src: "./motion/8.png",
    title: "Save video",
  },
  {
    src: "./motion/9.png",
    title: "Save log",
  },

  {
    src: "./motion/10.png",
    title: "Alert message camera",
  },
  {
    src: "./motion/11.png",
    title: "Alert message video",
  },
  {
    src: "./motion/12.png",
    title: "ERD Motion",
  },
];

const ModalMotion = (props) => {
  return (
    <Modal
      open={props.isOpen}
      onClose={props.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableAutoFocus
    >
      <Box
        style={{ padding: "20px" }}
        sx={style}
        className="scrollModal flex flex-col w-full max-w-[1024px] h-[600px] bg-[#222] text-white text-center gap-[2rem] rounded-lg"
      >
        <div style={{ fontSize: "18px" }}>
          <h1 className="font-bold text-4xl">Motion Detection Work</h1>
        </div>
        <div className="flex flex-col gap-5">
          {motionList.map((items, index) => (
            <p key={index} className="font-bold text-2xl flex flex-col gap-5 items-center">
              <h1>{items.title}</h1>
              <img src={items.src} width={800} alt={index}></img>
            </p>
          ))}
          <div className="font-bold text-2xl flex flex-col gap-5">
            <h1>Video Result Motion</h1>
          </div>
        </div>
        <div className="flex gap-5 justify-end pt-[10px] border-t-[2px] border-dotted border-grey">
          <div
            whileTap={{ scale: 0.9 }}
            onClick={props.handleClose}
            className="flex cursor-pointer w-[100px] h-[35px] justify-center items-center gap-1 bg-[red] rounded-[10px] hover:bg-[#3590a7]"
          >
            Close
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalMotion;
