import React from "react";
import Image from "next/image";
import CloseupImg from "/public/assets/close-upImg.jpg";
import { FaLinkedinIn, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import Link from "next/link";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-auto">
      <div className="max-w-7xl mx-auto px-8 py-16  ">
        <p className="text-xl uppercase text-[#FF014f] text-center font-ABC">contact</p>
        <h1 className="py-4 pb-6 text-center text-[#3c3e41] font-ABC">
          Contact With Me
        </h1>
        <div className="grid lg:grid-cols-5 gap-8">
          {/*left*/}
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-700 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <Image
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src={CloseupImg}
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2 font-ABC">Dhara Dave</h2>
                <p className="font-ABC text-2xl">Front-End Developer</p>
                <p className="py-4 font-ABC text-2xl">
                  I'm available for full-time work. Connect with me via and call
                  in to my account.
                </p>
                <p className="pb-7 font-ABC text-xl">Email: admin@example.com</p>
              </div>
              <div>
                <p className="uppercase pt-8 font-ABC text-xl">Find With Me</p>
                <div className="flex items-center justify-between py-6">
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
                  <Link href="https://www.linkedin.com/">
                    <a target="_blank">
                      <FaLinkedinIn />
                    </a>
                  </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
                  <Link href="https://www.github.com/">
                <a target={"_blank"}>
                <FaGithub />
                </a>
              </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
                  <Link href="https://www.twitter.com/">
                <a target={"_blank"}>
                <FaTwitter />
                </a>
              </Link>
                  </div>
                  <div className="rounded-full shadow-lg shadow-gray-600 p-3 cursor-pointer hover:scale-110 hover:bg-[#f6034c] hover:text-white ease-in duration-300">
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

          {/*right*/}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-700 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-2 ">
                  <div className="flex flex-col font-ABC">
                    <label className="uppercase text-sm py-2 font-ABC">Your Name</label>
                    <input
                      className="border-2 rounded-lg p-3 border-gray-400"
                      type="text"
                    />
                  </div>
                  <div className=" flex flex-col font-ABC">
                    <label className="uppercase text-sm py-2 font-ABC">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-400"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2 font-ABC">
                  <label className="uppercase text-sm py-2 font-ABC">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="email"
                  />
                </div>
                <div className="flex flex-col py-2 font-ABC">
                  <label className="uppercase text-sm py-2 font-ABC">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-400"
                    type="text"
                  />
                </div>
                <div className="flex flex-col py-2 font-ABC">
                  <label className="uppercase text-sm py-2 font-ABC">Message</label>
                  <textarea
                    className="border-2 rounded-lg p-3 mt-3 border-gray-400"
                    rows="10"
                  ></textarea>
                </div>
                <button className="w-full p-4 font-ABC">Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-end pt-10">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-5 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#f6034c]" size={25} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
