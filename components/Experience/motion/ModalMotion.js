import React from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import { Player } from "video-react";
import "video-react/dist/video-react.css";
import AwesomeSlider from "react-awesome-slider";

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
        sx={style}
        className="scrollModal border-2 flex p-[30px] flex-col w-[350px] md:w-[1024px] h-[500px] md:h-[600px] text-white text-center gap-[2rem] md:gap-[4rem] rounded-lg"
      >
        <div className="pt-6">
          <h1 className="font-bold text-3xl">Motion detection work</h1>
        </div>
        <div className="flex flex-col gap-[5rem] items-center justify-center">
          <div className="w-[300px] md:w-[700px] h-full m-auto ">
            <AwesomeSlider animation="cubeAnimation">
              {motionList.map((items, index) => (
                <div
                  key={index}
                  className="h-full w-full overflow-hidden  rounded-md border-solid border-[1px]"
                >
                  <img
                    src={items.src}
                    alt={items.title}
                    className='w-full h-full'
                  />
                </div>
              ))}
            </AwesomeSlider>
          </div>

          <div className="font-bold text-2xl flex flex-col gap-5 items-center">
            <h1 className="border-4 border-dotted p-2">Video Result Motion</h1>
            <div className="w-[300px] md:w-[800px]">
              <Player
                playsInline
                poster="/images/motion/motion.jpg"
                src="/videos/2021-06-27.mp4"
              />
            </div>
          </div>
        </div>

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

export default ModalMotion;
