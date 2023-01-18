/** @format */

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

// INTERSECTION OBSERVER
const useOnScreen = (options) => {
  const [ref, setRef] = useState(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (!visible) {
        setVisible(entry.isIntersecting);
      }
    }, options);

    if (ref) {
      observer.observe(ref);
    }

    return () => {
      if (ref) {
        observer.unobserve(ref);
      }
    };
  }, [ref, options]);

  return [setRef, visible];
};

const Skill = ({ skill, progress }) => {
  // CUSTOM HOOK
  const [setRef, visible] = useOnScreen({ threshold: 0 });

  return (
    <div className="flex flex-row items-center w-full bg-gray-600 rounded-sm">
      <span className="bg-[#2dcc7d] text-white font-bold flex-[0.4] md:flex-[0.3] text-md text-center py-1 px-2 capitalize">
        {skill}
      </span>
      <div className="flex-1 w-full h-full" ref={setRef}>
        {visible && (
          <motion.div
            className="w-0 h-[32px] z-50 bg-[#5ea36f]"
            animate={{ width: `${progress}%` }}
            transition={{
              duration: 2,
            }}
          />
        )}
      </div>
    </div>
  );
};

export default Skill;
