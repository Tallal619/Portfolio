/** @format */

import React from "react";
import githubIcon from "../public/github.png";
import instaIcon from "../public/instagram.png";
import linkedInIcon from "../public/linkedin.png";

const Contact = () => {
  const openSocials = (link) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-full mt-10 text-gray-50">
      <span className="text-2xl font-bold md:text-4xl border-b-[#0be779] border-b-4 pb-4">
        Contact
      </span>

      <div className="flex flex-row mt-4">
        <span className="flex mr-3 text-xl font-semibold text-gray-50">
          Email :{" "}
        </span>
        <span className="text-[#0be779] text-xl font-semibold">
          uzzamwebdev@gmail.com
        </span>
      </div>

      <div className="flex flex-row items-center justify-center h-auto gap-4 my-4">
        <img
          src={githubIcon.src}
          alt=""
          className="w-[10%] h-[10%] md:w-[3%] cursor-pointer"
          onClick={() => {
            openSocials("https://github.com/uzzam-web-dev");
          }}
        />
        <img
          src={instaIcon.src}
          alt=""
          className="w-[10%] h-[10%] md:w-[3%] cursor-pointer"
          onClick={() => {
            openSocials("https://www.instagram.com/uzzam.codes");
          }}
        />
        <img
          src={linkedInIcon.src}
          alt=""
          className="w-[10%] h-[10%] md:w-[3%] cursor-pointer"
          onClick={() => {
            openSocials("https://www.linkedin.com/in/uzzam-altaf-1b1675260/");
          }}
        />
      </div>

      <span className="mb-4 font-semibold text-gray-50">
        Made with ❤️ by Uzzam Altaf
      </span>
    </div>
  );
};

export default Contact;
