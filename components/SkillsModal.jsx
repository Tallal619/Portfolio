/** @format */

import React from "react";
import { allSkills } from "../config/skills";
import { Skill } from "./";
import cancelIcon from "../public/cancel.png";

const SkillsModal = ({ changeModalState }) => {
  return (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-screen bg-gray-500 bg-opacity-0 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm">
      <div className="flex gap-3 overflow-y-scroll flex-col items-center h-[80%] rounded-md w-[95%] md:w-[55%] lg:w-[40%] justify-center bg-gray-50 px-4 relative pb-10 pt-10">
        <img
          src={cancelIcon.src}
          className="absolute w-8 h-8 cursor-pointer right-4 top-4"
          alt=""
          onClick={changeModalState}
        />
        <span className="mt-4 text-2xl font-bold md:mt-28">Skills</span>
        {allSkills.map((skill, index) => {
          return (
            <Skill key={index} skill={skill.skill} progress={skill.progress} />
          );
        })}
      </div>
    </div>
  );
};

export default SkillsModal;
