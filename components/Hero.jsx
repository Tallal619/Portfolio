/** @format */

import React, { forwardRef } from "react";
import { Header, Skill } from "./";
import TypeWriter from "typewriter-effect";
import { skills } from "../config/skills";

// COMPONENT
const Hero = (
  { scrollTo, scrollToProjects, scrollToContact, skillsRef },
  ref
) => {
  return (
    <div
      ref={ref}
      className="flex flex-col items-start justify-start w-full h-auto pb-12 font-bold bg-gray-700"
    >
      <Header
        scrollTo={scrollTo}
        scrollToProjects={scrollToProjects}
        scrollToContact={scrollToContact}
      />
      <span className="self-center py-4 mt-10 text-2xl md:text-4xl border-b-[#0be779] text-center border-b-4 text-gray-50">
        About
      </span>
      <div className="flex flex-col w-full px-2 mt-10 lg:flex-row md:px-28">
        <div className="flex flex-col flex-1 gap-4 px-8 text-white">
          <span className="text-xl font-bold md:text-3xl">Who am I?</span>
          <span className="text-md md:text-lg">I am Uzzam Altaf</span>
          <span className="text-md md:text-lg">
            ⚡ I&apos;m a full stack web developer mainly focusing on emerging
            technologies
          </span>
          <span className="text-md md:text-lg">
            ⚡ You can find me working mainly with Javascript, React, Node,
            Express, Mongoo and Tailwind CSS
          </span>
          <span className="flex flex-row gap-2 text-md md:text-lg">
            ⚡
            <TypeWriter
              options={{
                strings: [
                  "I love solving complex problems.",
                  "I love learning new technologies.",
                  "I love trying new things.",
                  "I love fixing hard-to-fix bugs.",
                ],
                loop: true,
                autoStart: true,
              }}
            />
          </span>
          <span className="text-md md:text-lg">
            Since 2020 - I&apos;ve spent my time seeking and learning new
            technologies and techniques. This has lead me to working on some
            awesome personal projects.
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default forwardRef(Hero);
