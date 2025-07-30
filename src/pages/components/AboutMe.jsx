import React from "react";
import aryanPhoto from "../../../public/Website Owner Photo.jpg";

function AboutMe() {
  return (
    <>
      <div className="bg-gray-50 min-h-screen py-10 px-4 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start justify-center">
          {/* Card for Aryan Manjarekar */}
          <div className="flex items-start gap-2.5 lg:ml-10 md:ml-10 lg:justify-between sm:justify-center ml-2 flex-wrap md:justify-start">
            <div className="flex flex-col w-full max-w-[240px] lg:max-w-[350px] bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="flex items-center space-x-2 rtl:space-x-reverse p-4 border-b border-gray-200">
                <span className="text-sm font-semibold text-gray-900">
                  Aryan Manjarekar
                </span>
              </div>
              <div className="p-4">
                <p className="text-sm font-normal py-2.5 text-gray-900">
                  My Introduction here
                </p>
                <p className="text-sm font-normal pb-2.5 text-gray-900">
                  <a
                    href="https://github.com/LegendCoder20?tab=repositories"
                    className="text-blue-700 underline font-medium break-all"
                  >
                    {/* https://github.com/LegendCoder20 */}
                  </a>
                </p>
                <a
                  href="#"
                  className="bg-gray-50 rounded-xl p-4 flex flex-col items-start"
                >
                  <img
                    src={aryanPhoto}
                    className="rounded-lg mb-4"
                    loading="lazy"
                  />
                  <span className="text-sm font-medium text-gray-900 mb-2 block">
                    Introduction related to my Current Webapp
                  </span>
                  <span className="text-xs text-gray-500 font-normal">
                    More details about the webapp
                  </span>
                </a>
              </div>
            </div>
          </div>

          {/* Card for Technology Used */}
          <div className="w-full max-w-md bg-white shadow-lg rounded-lg border border-gray-200">
            <div className="p-4 border-b border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900">
                Technology Stack
              </h3>
            </div>
            <div className="p-4">
              <p className="text-sm text-gray-600 mb-4">
                My Project Description how my project is made using this Stack
              </p>
              <ul className="space-y-3">
                <li>
                  <button className="w-full text-black bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-bold rounded-lg text-sm px-4 py-2.5 text-center">
                    JAVSCRIPT FRAMEWORKS
                  </button>
                </li>
                <li>
                  <button className="w-full text-white bg-emerald-600 hover:bg-emerald-500 focus:ring-4 focus:ring-emerald-300 font-bold rounded-lg text-sm px-4 py-2.5 text-center">
                    MONGODB
                  </button>
                </li>
                <li>
                  <button className="w-full text-white bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 font-bold rounded-lg text-sm px-4 py-2.5 text-center">
                    EXPRESS
                  </button>
                </li>
                <li>
                  <button className="w-full text-white bg-sky-600 hover:bg-sky-500 focus:ring-4 focus:ring-sky-300 font-bold rounded-lg text-sm px-4 py-2.5 text-center">
                    REACT
                  </button>
                </li>
                <li>
                  <button className="w-full text-white bg-green-500 hover:bg-green-400  focus:ring-4 focus:ring-green-300 font-bold rounded-lg text-sm px-4 py-2.5 text-center">
                    NODE
                  </button>
                </li>
                <li>
                  <button className="w-full text-white bg-teal-400 hover:bg-teal-300 focus:ring-4 focus:ring-teal-300 font-bold rounded-lg text-sm px-4 py-2.5 text-center">
                    TAILWIND
                  </button>
                </li>
              </ul>
              <p className="text-xs text-gray-500 mt-4">
                MERN Stack is the Popular JavaScript Framework......
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutMe;
