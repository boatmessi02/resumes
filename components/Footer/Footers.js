import React from "react";

const Footers = () => {
  return (
    <>
      <div className=" text-white p-[1rem]">
        <span className="flex justify-center text-center">
          <p>
            Copyright Ⓒ Since 2022 by{" "}
            <a
              className="underline text-[#d7dde4]"
              href="https://www.facebook.com/messiboat.score.3"
              target="_blank"
              rel="noreferrer noopener"
            >
              Teerapat Junchuen
            </a>{" "}
            View source code on{" "}
            <a
              className="underline text-[#d7dde4]"
              href="https://github.com/boatmessi02"
              target="_blank"
              rel="noreferrer noopener"
            >
              Github
            </a>
          </p>
        </span>
      </div>
    </>
  );
};

export default Footers;
