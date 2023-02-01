import React from "react";
import Link from "next/link";
import Image from "next/image";

const WorkItem = ({ title, backgroundImg, projectUrl }) => {
  return (
    <div>
      <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-500 rounded-xl hover:scale-95 duration-300 ease-in p-2 group hover:bg-gradient-to-r from-white to-[#c4cfde]">
        <Image
          className="rounded-xl group-hover:opacity-10"
          src={backgroundImg}
          alt="/"
        />
        <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <Link href={projectUrl}>
            <h3 className="text-2xl text-black text-center">{title}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WorkItem;
