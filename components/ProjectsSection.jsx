/** @format */

import React from "react";
import { ProjectCard } from "./";
import {
  techsForPorfolio,
  techsForWordpress,
  techsForBlogContentful,
  techsForSkatule,
} from "../config/techs";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center justify-start h-auto py-10 bg-gray-700">
      <span className="text-3xl md:text-4xl font-bold border-b-[#0be779] border-b-4 py-4 text-white">
        Projects
      </span>
      <div className="grid grid-cols-1 gap-4 px-2 mt-10 lg:gap-10 md:grid-cols-2 place-items-center md:px-10 lg:px-28">
        <ProjectCard
          imageUri="wordpress_portfolio.png"
          title="Wordpress Website Replica"
          desc="A replica of 2021 wordpress website made using complex grid and many more design patterns"
          techs={techsForWordpress}
          livePreview="https://wordpress-homepage-design-clone.netlify.app/"
          githubLink="https://github.com/uzzam-web-dev/wordpress_web_design"
        />
        <ProjectCard
          imageUri="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Title"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloremque aliquid. Eius iste."
          techs={techsForBlogContentful}
        />
        <ProjectCard
          imageUri="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Title"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloremque aliquid. Eius iste."
          techs={techsForWordpress}
        />
        <ProjectCard
          imageUri="https://images.pexels.com/photos/3183153/pexels-photo-3183153.jpeg?auto=compress&cs=tinysrgb&w=1600"
          title="Title"
          desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, doloremque aliquid. Eius iste."
          techs={techsForSkatule}
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
