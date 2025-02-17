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
    <div className="flex items-center justify-center h-screen px-4" ref={ref}>
      <div className="flex flex-col items-center justify-center text-center">
        <img
          src="profile.png"
          alt="Profile"
          className="w-24 mb-3 border-1 md:w-40 md:border-2"
        />
        <div className="flex flex-row items-center justify-center space-x-2">
          <h1 className="text-2xl font-bold text-white md:text-4xl">
            Hello, I&apos;m{" "}
            <span className="text-[#4290a3]">Muhammad Tallal Aamir</span>.
          </h1>
          <span className="text-2xl md:text-4xl">👋</span>
        </div>
        <span className="px-4 mt-4 text-2xl font-semibold text-center text-white md:text-3xl">
          <TypeWriter
            options={{
              strings: [
                "I am a passionate full stack developer.",
                "I enjoy solving complex problems.",
                "I love building innovative solutions.",
              ],
              loop: true,
              autoStart: true,
            }}
          />
        </span>

        <div className="flex flex-row items-center justify-center gap-4 mt-4">
          <img
            src={linkedInIcon.src}
            alt="LinkedIn"
            className="w-[10%] h-[10%] object-contain cursor-pointer"
            onClick={() => {
              openSocials("https://www.linkedin.com/in/tallal-aamir-baa71b277");
            }}
          />
        </div>

        <div
          className="px-4 py-2 mt-8 bg-white rounded-md cursor-pointer animate-bounce"
          onClick={scrollToHero}
        >
          <img src={downArrow.src} width={30} height={30} />
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Intro);
