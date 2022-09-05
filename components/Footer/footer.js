import React from "react";

const footer = () => {
  return (
    <>
      <div className=" text-white p-[1rem]">
        <span className="flex justify-center">
          <p>
            Copyright Ⓒ Since 2022 by{" "}
            <a
              className="underline text-[#d7dde4]"
              href="https://www.facebook.com/messiboat.score.3"
              target="_blank"
              rel="noopener"
            >
              Teerapat Junchuen
            </a>{" "}
            View source code on{" "}
            <a
              className="underline text-[#d7dde4]"
              href="https://github.com/boatmessi02"
              target="_blank"
              rel="noopener"
            >
              Github
            </a>{" "}
            Background Image by{" "}
            <a
              className="underline text-[#d7dde4]"
              href="https://www.freepik.com/"
              target="_blank"
              rel="noopener"
            >
              fanjianhua / Freepik.
            </a>
          </p>
        </span>
      </div>
    </>
  );
};

export default footer;
