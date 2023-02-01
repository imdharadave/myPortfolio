import React, { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100]"
          : "fixed w-full h-20 z-[100]"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-gray-400">
        <h2 className="font-abc text-5xl">
          Dhar<span className="text-[#f6034c]">a</span>
        </h2>
        <div className="font-ABC">
          <ul className="hidden md:flex">
            <Link href="/">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Home
              </li>
            </Link>
            <Link href="/#about">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                About
              </li>
            </Link>
            <Link href="/#services">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Services
              </li>
            </Link>
            <Link href="/#myWork">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                My Work
              </li>
            </Link>
            <Link href="/#contact">
              <li
                onClick={() => setNav(false)}
                className="ml-10 text-sm uppercase hover:border-b"
              >
                Contact
              </li>
            </Link>
          </ul>
          <div onClick={handleNav} className="md:hidden">
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/80" : ""
        }
      >
        <div
          className={
            nav
              ? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[65%] md:w-[45%] h-screen bg-gray-200  ease-in duration-500"
              : "fixed left-[-200vw] top-0  p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex  item-center  justify-between">
              <h2 className="font-abc text-2xl">
                Dhar<span className="text-[#f6034c]">a</span>
              </h2>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-300 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b  border-gray-400 my-0">
              <p className="  pt-4 pb-1 px-3">
                Let's build something legendary together.
              </p>
            </div>
          </div>
          <div className="py-6 flex flex-col px-3  items-center justify-center">
            <ul className="uppercase">
              <Link href="/">
                <li className="pt-0 text-sm">Home</li>
              </Link>
              <Link href="/#about">
                <li className="pt-4 text-sm">About</li>
              </Link>
              <Link href="/#services">
                <li className="pt-4 text-sm">Services</li>
              </Link>
              <Link href="/#myWork">
                <li className="pt-4 text-sm">My Work</li>
              </Link>
              <Link href="/#contact">
                <li className="pt-4 pb-4 text-sm">Contact</li>
              </Link>
            </ul>
            <div className="pt-0">
              <p className="uppercase tracking-widest pb-4">Find with me</p>
              <div className="flex items-center justify-between my-0 w-full gap-3">
                <div className="rounded-full shadow-lg shaow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
                  <Link href="https://www.linkedin.com/">
                    <a target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shaow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
                  <Link href="https://www.github.com/">
                    <a target={"_blank"}>
                      <FaGithub />
                    </a>
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shaow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
                  <Link href="https://www.twitter.com/">
                    <a target="_blank">
                      <FaTwitter />
                    </a>
                  </Link>
                </div>
                <div className="rounded-full shadow-lg shaow-gray-400 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
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
      </div>
    </div>
  );
};

export default Navbar;
