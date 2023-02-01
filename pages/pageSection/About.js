import React from "react";
import Image from "next/image";
const About = () => {
  return (
    <div
      id="about"
      className="w-full h-auto flex items-center py-5"
    >
      <div className="max-w-7xl m-auto px-8 pt-7 md:pt-9 pb-12 lg:pb-16 md:grid md:grid-cols-1 lg:grid-cols-2 gap-1 border-b-2 border-gray-400">
        <div className="w-[75%] md:w-[50%] lg:w-[75%] m-auto shadow-xl shadow-gray-600 flex items-center justify-center rounded-lg p-3 lg:p-1 hover:scale-110 ease-in duration-500">
          <img
            className="rounded-lg"
            src="https://cdn.dribbble.com/users/2131993/screenshots/15628402/media/7bb0d27e44d8c2eff47276ae86bfd6a3.png"
          />
        </div>
        <div className="row-span-2 md:pb-7">
          <h1 className="text-[#f6034c] py-3 pt-5 md:pt-7 lg:pt-9 font-ABC">Dhara Dave</h1>
          <h2 className="text-[#3c3e41] pb-4 font-ABC">Front-End Developer</h2>
          <p className="text-[#3c3e41]  pt-0 md:pt-0 lg:pt-3 text-justify font-ABC text-3xl">
            I'm a front-end web developer specializing in building exception
            digital experiences.Currently, I'm focused on building responsive
            front-end web applications while learning back-end technologies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
