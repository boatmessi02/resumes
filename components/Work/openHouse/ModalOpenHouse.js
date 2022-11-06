import React, { useRef } from "react";
import { Box } from "@mui/material";
import Modal from "@mui/material/Modal";
import { motion } from "framer-motion";
import SliderImage from "./SliderImage";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
};

const sliderList = [
  {
    url: "./images/openhouse/Open-house.jpg",
    title: "1",
  },
  {
    url: "./images/openhouse/Open-house3.jpg",
    title: "2",
  },
  {
    url: "./images/openhouse/Open-house4.jpg",
    title: "3",
  },
  {
    url: "./images/openhouse/Open-house5.jpg",
    title: "4",
  },
  {
    url: "./images/openhouse/Open-house2.jpg",
    title: "5",
  },
];
const ModalOpenHouse = (props) => {
  const revalRef = useRef([]);
  revalRef.current = [];

  const handlePrevious = () => {
    let left = document.querySelector(".wrapperSlide");
    left.scrollBy(-550, 0);
  };

  const handleNext = () => {
    let right = document.querySelector(".wrapperSlide");
    right.scrollBy(550, 0);
  };

  const handleRef = (ref) => {
    if (ref && !revalRef.current.includes(ref)) {
      revalRef.current.push(ref);
    }
  };

  const handleScroll = (index) => {
    const itemRef = revalRef.current;
    itemRef.map((item, i) => {
      if (index === i) {
        item.scrollIntoView();
      }
    });
  };
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
        className="scrollModal flex p-[30px] flex-col w-[380px] md:w-full max-w-[1024px] h-[600px] text-white text-center gap-[3rem] md:gap-[5rem] rounded-lg"
      >
        <div
          style={{ fontSize: "18px" }}
          className="border-2 border-[#35DDE5] p-2"
        >
          <h1 className="font-bold text-md md:text-4xl">
            Open house Bangkok University
          </h1>
        </div>
        <div className="boxSlide">
          <div className="wrapperElements">
            <div className="icon">
              <FaAngleLeft onClick={handlePrevious} />
            </div>
            <div className="wrapperSlide">
              {sliderList.map((slider, index) => (
                <div key={index} className="wrapperSlideImage">
                  <SliderImage handleRef={handleRef} sliderList={slider.url} />
                </div>
              ))}
            </div>
            <div className="icon">
              <FaAngleRight onClick={handleNext} />
            </div>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default ModalOpenHouse;
