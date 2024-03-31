import React from "react";
import { Typewriter } from "react-simple-typewriter";
import img from "../Images/photo_2024-03-31_15-24-03.jpg";

const HeroSection = () => {
  return (
    <div className="bg-gray-800 text-white py-8 px-2 sm:px-3 lg:px-6 relative">
      <div className="w-11/12 mx-auto">
        <div className=" flex flex-col-reverse lg:flex-row lg:items-center lg:gap-3 lg:justify-between">
          <div className="lg:w-1/2">
            <h1 className="font-extrabold text-6xl sm:text-7xl">
              I'm Tanvir Islam
            </h1>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
              A{" "}
              <span className="text-green-500">
                <Typewriter
                  words={[
                    "Problem Solver",
                    "Developer",
                    "Programmer",
                    "Learner",
                  ]}
                  loop={true}
                  cursor
                  cursorStyle="_"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            {/* <div className="mt-8">
              <a
                href="#"
                className="text-white bg-green-500 rounded-full py-3 px-6 font-semibold hover:bg-green-600 transition duration-300"
              >
                Learn More
              </a>
            </div> */}
          </div>
          <div className="lg:w-1/2 w-full flex justify-center items-center mb-8 lg:mb-0">
            <img
              className="rounded-lg shadow-lg w-full lg:max-w-md"
              src={img}
              alt=" "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
