/** @format */

import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const currentRoute = useRouter().pathname;

  return (
    <div className="bg-white flex flex-row justify-between items-center px-20 py-6 text-white">
      <div className="text-2xl font-semibold">LOGO</div>
      <div className="flex flex-row gap-4">
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
    </div>
  );
};

export default Header;
