/** @format */

import React from "react";
import { ProjectCard } from "./";
import {
  techsForWordpress,
  techsForBlogContentful,
  techsForSkatule,
  techsForPorfolio,
  techsForLucncy,
  techsForDentalWeb,
  techsForMarketingWeb,
  techsForHrvWeb,
  techsForDigiCricWeb,
} from "../config/techs";

const ProjectsSection = () => {
  return (
    <div className="flex flex-col items-center justify-start h-auto py-10 bg-gray-700">
      <span className="text-3xl md:text-4xl font-bold border-b-[#4966b6] border-b-4 py-4 text-white">
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
        {/* <ProjectCard
          imageUri="portfolioImage.png"
          title="Porfolio"
          desc="Stunning porfolio made using the best of my skills."
          techs={techsForPorfolio}
          githubLink="https://github.com/Tallal619/Portfolio"
          livePreview="https://tallal-portfolio.netlify.app/"
        />
        <ProjectCard
          imageUri="skatulWebImage.png"
          title="Image reseizer design"
          desc="Web design for image resizing company."
          techs={techsForSkatule}
          livePreview="https://skatule-web-design.netlify.app/"
          githubLink="https://github.com/uzzam-web-dev/we_design_skatule"
        /> */}
        {/* <ProjectCard
          imageUri="helperDevImage.png"
          title="Helper dev"
          desc="Simple project mainly focusing on content management."
          techs={techsForBlogContentful}
          livePreview="https://helper-dev.netlify.app/"
          githubLink={""}
        /> */}
        <ProjectCard
          imageUri={"LucncyImage.png"}
          title={"LUCNCY"}
          desc={"Shopify website for a skincare store"}
          techs={techsForLucncy}
          livePreview="https://www.lucncy.com"
        />
        <ProjectCard
          imageUri={"dentalWebImage.png"}
          title={"MM Dental Associates"}
          desc={
            "A Dental Clinic website with google map and customer appointment forms along with whatsapp direct message"
          }
          techs={techsForDentalWeb}
          livePreview="https://mmdentalassociates.com/"
        />
        <ProjectCard
          imageUri={"marketingWebImage.png"}
          title={"SHM Agency"}
          desc={"A Marketing Agency Website with customer appointment forms."}
          techs={techsForMarketingWeb}
          livePreview="https://testahmarketing.netlify.app/"
        />
        <ProjectCard
          imageUri={"hrvImage.png"}
          title={"HR Vertica"}
          desc={"HR Audit Services Website made completely on Wordpress"}
          techs={techsForHrvWeb}
          livePreview="https://hrvertica.com/"
        />
        <ProjectCard
          imageUri={"digiCricImage.png"}
          title={"DIGI Cricket"}
          desc={
            "ESPN Cricket Clone Completely Coded And developed from scratch."
          }
          techs={techsForDigiCricWeb}
          livePreview="https://digicrick.github.io/crickdigi/Home.html"
        />
      </div>
    </div>
  );
};

export default ProjectsSection;
