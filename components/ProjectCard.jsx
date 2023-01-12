/** @format */

import React from "react";
import githubIcon from "../public/github.png";
import webLinkIcon from "../public/web-link.png";
import Link from "next/link";
import { MiniTechCard } from "./";

const ProjectCard = ({ imageUri, title, desc, techs }) => {
  return (
    <div className="flex flex-col items-center w-5/6 bg-gray-600 border-2 rounded-md">
      <img src={imageUri} alt="" className=" rounded-t-md" />
      <div className="flex flex-col items-center justify-start w-full px-6">
        <span className="my-2 text-2xl font-bold md:my-4 md:text-3xl text-gray-50">
          {title}
        </span>
        <span className="mb-2 font-semibold text-center text-md md:text-base md:mb-4 text-gray-50">
          {desc}
        </span>

        <div className="grid w-full grid-cols-3 gap-1 my-4 lg:gap-2 xl:grid-cols-4">
          {techs.map((elem, index) => {
            return <MiniTechCard key={index} tech={elem} />;
          })}
        </div>

        <Link href={""}>
          <span className="flex flex-row items-center justify-center py-1 mb-4 font-semibold bg-white rounded-sm cursor-pointer max-w-fit">
            <img src={webLinkIcon.src} className="w-[10%] mr-4" alt="github" />
            Live Preview
          </span>
        </Link>
        <Link href={""}>
          <span className="flex flex-row items-center justify-center py-1 mb-4 font-semibold bg-white rounded-sm cursor-pointer max-w-fit">
            <img src={githubIcon.src} className="w-[10%] mr-4" alt="github" />
            Github Repository
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
