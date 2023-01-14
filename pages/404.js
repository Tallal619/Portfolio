/** @format */

import React from "react";
import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-screen gap-4 overflow-hidden bg-gray-700 md:flex-row">
      <div className="px-4 py-4 border-b-2 border-gray-100 md:border-b-0 md:border-r-2">
        <span className="font-semibold text-8xl text-gray-50">404</span>
      </div>
      <div className="flex flex-col items-center md:items-start">
        <span className="md:text-2xl text-gray-50">
          Page you are looking for does not exists
        </span>
        <Link href={"/"} className="mt-4">
          <button className="font-bold rounded-md text-[#0be779] bg-gray-900 py-2 px-4">
            Return Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Custom404;
