/** @format */

import React, { forwardRef } from "react";
import TypeWriter from "typewriter-effect";
import downArrow from "../public/down-arrow.png";
import linkedInIcon from "../public/linkedin.png";

const Intro = ({ scrollToHero }, ref) => {
  const openSocials = (link) => {
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="flex items-center justify-center h-screen" ref={ref}>
      <div className="flex flex-col items-center justify-center">
        <img
          src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
          alt=""
          className="w-16 h-16 mb-3 border-2 rounded-full md:w-24 md:h-24 md:border-4"
        />
        <div className="flex flex-row">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Hi, I&apos;m <span className="text-[#0be779]">Tallal Aamir</span>.
          </h1>
          <span className="text-2xl md:text-4xl animate-wiggle">👋</span>
        </div>
        <span className="px-2 mt-4 text-2xl font-semibold text-center text-white md:text-3xl">
          <TypeWriter
            options={{
              strings: [
                "I am a full stack web developer.",
                "I love to implement new designs.",
              ],
              loop: true,
              autoStart: true,
            }}
          />
        </span>

        <div className="flex flex-row items-center justify-center gap-4 mt-4">
          <img
            src={linkedInIcon.src}
            alt=""
            className="w-[10%] h-[10%] object-contain cursor-pointer"
            onClick={() => {
              openSocials("https://www.linkedin.com/in/uzzam-altaf-1b1675260/");
            }}
          />
        </div>

        <div
          className="px-2 py-2 mt-8 bg-white rounded-md cursor-pointer animate-bounce"
          onClick={scrollToHero}
        >
          <img src={downArrow.src} width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Intro);
