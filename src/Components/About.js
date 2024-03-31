import React from "react";
import { FaDownload } from "react-icons/fa";

import img from "../Images/photo_2024-03-31_16-33-01.jpg";
const About = () => {
  return (
    <div className="bg-gray-800  text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="w-11/12 mx-auto">
        <div className="lg:flex lg:items-center lg:justify-between">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img
              className="rounded-lg shadow-lg w-full max-w-md mx-auto lg:mx-0"
              src={img}
              alt="Tushar Sahani"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left w-full text-pretty">
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              About Me
            </h1>
            <p className="md:text-lg  text-sm  lg:mb-6 mb-3">
              Hi, I'm Md Tanvir Islam, a Computer Science and Technology student
              based in Patuakhali, Bangladesh. I am passionate about competitive
              programming, development, and UI/UX design.
            </p>
            <p className="md:text-lg  text-sm   lg:mb-6 mb-3">
              Although I have no job experience yet, I am actively involved in
              honing my skills in software development. My expertise includes
              programming in languages like C++, Java, and Python, as well as
              web development technologies such as HTML/CSS, JavaScript,
              React.js, and Django.
            </p>
            <p className="md:text-lg  text-sm  lg:mb-6 mb-3">
              In my spare time, I enjoy participating in coding competitions,
              exploring new technologies, and contributing to open-source
              projects. I am enthusiastic about learning and collaborating with
              others to create innovative solutions.
            </p>

            <div className="flex justify-center lg:justify-start">
              <a
                href="https://docs.google.com/document/d/1NJjEkUVb5oEvfBJZ4DmCqJbvo-b_qwebjgnJPyYk6gk/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full flex items-center transition duration-300"
              >
                <FaDownload className="mr-2" /> Download CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
