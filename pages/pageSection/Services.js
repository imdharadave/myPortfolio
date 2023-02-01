import React from "react";
import Image from "next/image";

const Services = () => {
  return (
    <div
      id="services"
      className="w-full h-auto pt-10  md:pt-16  lg:pt-20  "
    >
      <div className="max-w-7xl mx-auto px-8 flex flex-col justify-center pb-14 md:pb-16 lg:pb-20 border-b-2 border-gray-400">
        <h3 className="text-xl uppercase  text-[#FF014f] text-center font-ABC">
          Services
        </h3>
        <h1 className="py-2 pb-7 text-[#3c3e41] text-center font-ABC">What I Can Do</h1>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-5 shadow-lg bg-white rounded-lg hover:scale-105 hover:bg-[#f6034c] hover:text-white ease-in-out duration-200 ">
            <div className="grid  gap-4 justify-center items-center">
              <div className="text-center justify-center">
                <Image
                  src="/../public/assets/design-icon.png"
                  width="64px"
                  height="56px"
                  alt="/"
                />
                <h3 className="font-ABC text-2xl">Web Desing</h3>
              </div>
              <div className=" items-center">
                <p className="font-semibold text-justify font-ABC text-2xl">
                  I desing simple content structures, clean patterns from
                  scratch and enjoy brining ideas to life in the browser.
                </p>
              </div>
            </div>
          </div>

          <div className="p-5 shadow-lg bg-white rounded-lg hover:scale-105 hover:bg-[#f6034c] hover:text-white ease-in duration-200">
            <div className="grid gap-4 justify-center items-center">
              <div className="text-center justify-center">
                <Image
                  src="/../public/assets/development-icon.png"
                  width="72px"
                  height="64px"
                  alt="/"
                />
                <h3 className="font-ABC text-2xl">Web Development</h3>
              </div>
              <div className="items-center">
                <p className="font-semibold text-justify font-ABC text-2xl">
                  I can develop responsive web applications using the latest
                  frameworks.
                </p>
              </div>
            </div>
          </div>
          <div className="p-5 shadow-lg bg-white rounded-lg hover:scale-105 hover:bg-[#f6034c] hover:text-white ease-in duration-200">
            <div className="grid gap-4 justify-center items-center">
              <div className="text-center justify-center">
                <Image
                  src="/../public/assets/ui-icon.png"
                  width="72px"
                  height="64px"
                  alt="/"
                />
                <h3 className="font-ABC text-2xl">UI Desing</h3>
              </div>
              <div className="items-center">
                <p className="font-semibold text-justify font-ABC text-2xl">
                  The field of design concerning all the visual elements the
                  users of a website, app, or piece of software interact with.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
