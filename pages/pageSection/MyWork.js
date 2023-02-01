import React from "react";
import Image from "next/image";
import ProjectImg from "/public/assets/projectImg1.jpg";
import UiUxImg from "/public/assets/uiUxImg.jpg";
import Link from "next/link";
import WorkItem from "../components/WorkItem";

const MyWork = () => {
  return (
    <div id="myWork" className="w-full h-auto ">
      <div className="max-w-7xl mx-auto px-8 py-16 border-b-2 border-gray-400">
        <p className="text-xl uppercase text-[#FF014f] text-center font-ABC">My Work</p>
        <h1 className="py-4 text-center text-[#3c3e41] font-ABC">What I've Built</h1>
        <div className="grid md:grid-cols-2 font-ABC lg:grid-cols-2 grid-cols-1 gap-8">
          <WorkItem
            title="Project Finder"
            backgroundImg={ProjectImg}
            projectUrl="#"
          />
          <WorkItem
            title="Project Finder"
            backgroundImg={UiUxImg}
            projectUrl="#"
          />
        </div>
      </div>
    </div>
  );
};

export default MyWork;
