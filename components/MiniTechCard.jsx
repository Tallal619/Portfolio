/** @format */

import React from "react";

const MiniTechCard = ({ tech }) => {
  return (
    <span className="flex items-center justify-center w-full px-1 py-1 text-[0.65rem] xl:text-sm font-bold text-gray-100 bg-gray-500 rounded-md">
      {tech}
    </span>
  );
};

export default MiniTechCard;
