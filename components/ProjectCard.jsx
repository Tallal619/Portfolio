/** @format */

import React from "react";
import githubIcon from "../public/github.png";
import webLinkIcon from "../public/web-link.png";
import Link from "next/link";
import { MiniTechCard } from "./";

const ProjectCard = ({
  imageUri,
  title,
  desc,
  techs,
  livePreview,
  githubLink,
}) => {
  const openWindow = (link) => {
    if (githubLink == "" || livePreview == "") {
      return;
    }
    window.open(link, "_blank", "noreferrer");
  };

  return (
    <div className="flex flex-col items-center w-5/6 bg-gray-600 border-2 rounded-md">
      <img
        src={`${imageUri}`}
        alt=""
        className="object-cover w-full rounded-t-md h-72"
      />
      <div className="flex flex-col items-center justify-start w-full px-6">
        <span className="my-2 text-xl font-bold text-center md:my-4 md:text-3xl text-gray-50">
          {title}
        </span>
        <span className="mb-2 text-sm font-semibold text-center md:text-md md:mb-4 text-gray-50">
          {desc}
        </span>
        <div className="grid w-full grid-cols-3 gap-1 my-4 lg:gap-2 xl:grid-cols-4">
          {techs.map((elem, index) => {
            return <MiniTechCard key={index} tech={elem} />;
          })}
        </div>

        {/* <Link href={livePreview ? livePreview : ""}> */}
        <span
          onClick={() => {
            openWindow(livePreview);
          }}
          className="flex flex-row items-center justify-center py-1 mb-4 font-semibold bg-white rounded-sm cursor-pointer max-w-fit"
        >
          <img src={webLinkIcon.src} className="w-[10%] mr-4" alt="github" />
          Live Preview
        </span>
        {/* </Link> */}
        {/* <Link href={githubLink ? githubLink : ""}> */}
        <span
          onClick={() => {
            openWindow(githubLink);
          }}
          className="flex flex-row items-center justify-center py-1 mb-4 font-semibold bg-white rounded-sm cursor-pointer max-w-fit"
        >
          <img src={githubIcon.src} className="w-[10%] mr-4" alt="github" />
          {githubLink != "" ? "Github Repository" : "Private repository"}
        </span>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default ProjectCard;
