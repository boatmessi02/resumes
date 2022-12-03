import React, { useRef } from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import AwesomeSlider from "react-awesome-slider";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const sliderList = [
  {
    url: "./images/openhouse/Open-house.jpg",
  },
  {
    url: "./images/openhouse/Open-house3.jpg",
  },
  {
    url: "./images/openhouse/Open-house4.jpg",
  },
  {
    url: "./images/openhouse/Open-house5.jpg",
  },
  {
    url: "./images/openhouse/Open-house2.jpg",
  },
];
const ModalOpenHouse = (props) => {
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
        className="scrollModal  border-2 flex p-[30px] flex-col w-[350px] md:w-[1024px] h-[450px] gap-6 md:h-[600px] text-white text-center rounded-lg"
      >
        <div className="w-full flex justify-center">
          <h1 className="font-bold text-md md:text-3xl w-fit p-2">
            Open house Bangkok University
          </h1>
        </div>
        <div className="flex justify-center">
          <div className="w-[300px] md:w-[600px] m-auto z-[99]">
            <AwesomeSlider animation="cubeAnimation">
              {sliderList.map((slider, index) => (
                <div
                  key={index}
                  className="h-full overflow-hidden rounded-md border-solid border-[1px]"
                >
                  <img src={slider.url} alt="images" />
                </div>
              ))}
            </AwesomeSlider>
          </div>
        </div>

        <div className="flex justify-end pt-[10px] mt-[30px] text-[14px] md:text-[16px] border-t-[2px] border-[#0B88A6] border-dotted ">
          <motion.div
            whileTap={{ scale: 0.9 }}
            onClick={props.handleClose}
            className="flex cursor-pointer w-[75px] md:w-[100px] h-[35px] justify-center items-center bg-[#2799d1] rounded-[10px] hover:bg-[#3590a7]"
          >
            Close
          </motion.div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalOpenHouse;
