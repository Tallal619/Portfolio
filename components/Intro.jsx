/** @format */

import React from "react";
import TypeWriter from "typewriter-effect";
import downArrow from "../public/down-arrow.png";

const Intro = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <img
        src="https://cdn-icons-png.flaticon.com/128/2202/2202112.png"
        alt=""
        className="w-24 h-24 mb-3 border-4 rounded-full"
      />
      <div className="flex flex-row">
        <h1 className="text-4xl font-bold text-white">
          Hi, I'm <span className="text-[#38E54D]">Uzzam Altaf </span>.
        </h1>
        <span className="text-4xl animate-wiggle">👋</span>
      </div>
      <span className="mt-4 text-3xl font-semibold text-white">
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

      <div className="px-2 py-2 mt-8 bg-white rounded-md cursor-pointer animate-bounce">
        <img src={downArrow.src} width={30} height={30} />
      </div>
    </div>
  );
};

export default Intro;
