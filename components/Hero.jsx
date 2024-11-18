/** @format */

import React, { forwardRef, useState } from "react";
import { Header, Skill, SkillsModal } from "./";
import TypeWriter from "typewriter-effect";
import { skills } from "../config/skills";

// COMPONENT
const Hero = (
  { scrollTo, scrollToProjects, scrollToContact, skillsRef, changeModalState },
  ref
) => {
  const [showSkillModal, setShowSkillModal] = useState(false);

  return (
    <div
      ref={ref}
      className="flex flex-col items-start justify-start w-full h-auto pb-12 font-bold bg-gray-800"
    >
      <Header
        scrollTo={scrollTo}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <span className="self-center py-4 mt-10 text-2xl md:text-4xl border-b-[#3b82f6] text-center border-b-4 text-gray-50">
        About
      </span>
      <div className="flex flex-col w-full px-2 mt-10 lg:flex-row md:px-28">
        <div className="flex flex-col flex-1 gap-4 px-8 text-white">
          <span className="text-xl font-bold md:text-3xl">Who am I?</span>
          <span className="text-md md:text-lg">I&apos;m Tallal Aamir.</span>
          <span className="text-md md:text-lg">
            ⚡ A passionate full-stack web developer focused on crafting modern,
            high-performance applications using cutting-edge technologies.
          </span>
          <span className="text-md md:text-lg">
            ⚡ My expertise lies in technologies like JavaScript, React,
            Node.js, Express, MongoDB, and Tailwind CSS.
          </span>
          <span className="flex flex-row gap-2 text-md md:text-lg">
            ⚡
            <TypeWriter
              options={{
                strings: [
                  "I enjoy solving complex problems.",
                  "I'm constantly exploring new technologies.",
                  "I thrive on building creative solutions.",
                  "I specialize in debugging hard-to-fix bugs.",
                ],
                loop: true,
                autoStart: true,
              }}
            />
          </span>
          <span className="text-md md:text-lg">
            Since 2020, I&apos;ve been dedicated to learning and evolving as a
            developer. This journey has allowed me to work on impactful projects
            and refine my skills.
          </span>
        </div>
        <div
          className="flex flex-col flex-1 gap-4 px-2 md:px-8 text-gray-50"
          ref={skillsRef}
        >
          <span className="mt-8 text-2xl font-bold text-center md:mt-0 md:text-3xl">
            Skills
          </span>
          <div className="flex flex-col gap-4">
            {skills.map((elem, index) => {
              return (
                <Skill
                  key={index}
                  progress={elem.progress}
                  skill={elem.skill}
                />
              );
            })}
            <span
              className="font-bold rounded-md text-[#3b82f6] bg-gray-900 py-2 w-fit px-4 cursor-pointer"
              onClick={changeModalState}
            >
              Many more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Hero);
