import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
const Main = () => {
  return (
    <div
      id="main"
      className=" md:pt-24 w-screen h-auto pt-20 lg:pt-28   text-center "
    >
      <div className="max-w-7xl mx-auto px-8 flex items-center justify-center border-b-2 border-gray-400">
        <div>
          <p className="uppercase font-ABC text-sm lg:text-xl pt-10 md:pt-0 lg:pt-0 tracking-widest text-[#3c3e41]">
            Welcome To My World
          </p>
          <h1 className="py-0 md:py-2 lg:py-4 lg:pt-7 text-black font-ABC lg:text-7xl">
            Hi, I'm <span className="text-[#f6034c]"> Dhara Dave</span>
          </h1>
          <h1 className="py-0 md:py-2 lg:py-4 lg:pb-10 pb-3 md:pb-7 text-black font-ABC lg:text-7xl">
            a <span className="text-[#f6034c]">Front-End Developer</span>
          </h1>
          <p className=" text-[#3c3e41] m-auto"></p>
          <div className="flex items-center justify-between py-0 pb-14 lg:pb-20 max-w-[330px] m-auto">
            <div className="rounded-lg shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
              <Link href="https://www.linkedin.com/">
                <a target={"_blank"}>
                  <FaLinkedinIn />
                </a>
              </Link>
            </div>
            <div className="rounded-lg shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
              <Link href="https://www.github.com/">
                <a target={"_blank"}>
                  <FaGithub />
                </a>
              </Link>
            </div>
            <div className="rounded-lg shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
              <Link href="https://www.twitter.com/">
                <a target={"_blank"}>
                  <FaTwitter />
                </a>
              </Link>
            </div>
            <div className="rounded-lg shadow-lg shadow-gray-600 p-4 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
              <Link href="https://www.instagram.com/">
                <a target={"_blank"}>
                  <FaInstagram />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
