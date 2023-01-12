/** @format */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const currentRoute = useRouter().pathname;

  return (
    <div className="flex flex-row items-center justify-around w-full px-10 md:px-20 py-6 text-white bg-gray-800 border-b-4 border-b-[#0be779] text-sm md:text-base">
      <Link href={"/"}>
        <span
          className={`uppercase ${
            currentRoute == "/"
              ? "font-bold text-white"
              : "font-semibold text-gray-300"
          }`}
        >
          Home
        </span>
      </Link>

      <Link href={"/projects"}>
        <span
          className={`uppercase ${
            currentRoute == "/projects"
              ? "font-bold text-white"
              : "font-semibold text-gray-300"
          }`}
        >
          Projects
        </span>
      </Link>

      <Link href={"/skills"}>
        <span
          className={`uppercase ${
            currentRoute == "/skills"
              ? "font-bold text-white"
              : "font-semibold text-gray-300"
          }`}
        >
          skills
        </span>
      </Link>

      <Link href={"/cv"}>
        <span
          className={`uppercase ${
            currentRoute == "/cv"
              ? "font-bold text-white"
              : "font-semibold text-gray-300"
          }`}
        >
          cv
        </span>
      </Link>
    </div>
  );
};

export default Header;
