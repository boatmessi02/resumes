import React from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import Image from "next/image";
import { Player } from "video-react";
import "video-react/dist/video-react.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  boxShadow: 24,
};

const motionList = [
  {
    src: "/images/motion/2.png",
    title: "Concept",
  },
  {
    src: "/images/motion/3.png",
    title: "How to put id",
  },
  {
    src: "/images/motion/4.png",
    title: "Button start video",
  },
  {
    src: "/images/motion/5.png",
    title: "Button start camera",
  },
  {
    src: "/images/motion/6.png",
    title: "Button play/pause",
  },
  {
    src: "/images/motion/7.png",
    title: "Reset video",
  },
  {
    src: "/images/motion/8.png",
    title: "Save video",
  },
  {
    src: "/images/motion/9.png",
    title: "Save log",
  },

  {
    src: "/images/motion/10.png",
    title: "Alert message camera",
  },
  {
    src: "/images/motion/11.png",
    title: "Alert message video",
  },
  {
    src: "/images/motion/12.png",
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
        className="scrollModal border-2 flex flex-col w-[380px] md:w-full max-w-[1024px]  h-[600px] bg-[#222] text-white text-center gap-[2rem] rounded-lg"
      >
        <div style={{ fontSize: "18px" }}>
          <h1 className="font-bold text-4xl">Motion Detection Work</h1>
        </div>
        <div className="flex flex-col gap-5">
          {motionList.map((items, index) => (
            <div
              key={index}
              className="font-bold text-2xl flex flex-col gap-5 items-center"
            >
              <h1 className="border-4 border-dotted p-2">{items.title}</h1>
              <Image
                className="rounded-md"
                src={items.src}
                alt={index}
                width={800}
                height={500}
              />
            </div>
          ))}
          <div className="font-bold text-2xl flex flex-col gap-5 items-center">
            <h1>Video Result Motion</h1>
            <div className="w-[340px] md:w-[800px]">
              <Player
                playsInline
                poster="/images/motion/motion.jpg"
                src="/videos/2021-06-27.mp4"
              />
            </div>
          </div>
        </div>
        <div className="flex gap-5 justify-end pt-[10px] border-t-[2px] border-dotted border-grey">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={props.handleClose}
            className="flex cursor-pointer w-[100px] h-[35px] justify-center items-center gap-1 bg-[#2799d1] rounded-[10px] hover:bg-[#3590a7]"
          >
            Close
          </motion.div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalMotion;
