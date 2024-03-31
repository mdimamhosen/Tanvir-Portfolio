import React from "react";

const EducationAndSkill = () => {
  return (
    <div className="bg-gray-800  text-white py-5  ">
      <div className="flex   w-11/12 mx-auto  justify-center items-start lg:gap-[260px]  lg:flex-row">
        {/* Education */}
        <div className=" max-sm:mt-2 pl-2 max-lg:pl-2 max-sm:pl-0">
          <h1 className="text-2xl mb-2 text-[#009e66]">Education</h1>
          <div className="card max-w-[500px] max-lg:w-[335px] box-border bg-[#161616] lg:pt-4 lg:pl-6 lg:pb-4 lg:pr-6 max-lg:pt-2 max-lg:pl-4 max-lg:pb-2 max-lg:pr-4 border-b border-l-[#009e66] border-l-2 mb-5">
            {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4 after:border-transparent'></span> */}
            <h1 className=" inline text-lg">
              Patuakhali Science & Technology University
            </h1>
            <p className="text-[rgb(159,159,159)] text-base pb-1 pt-1 ">
              Patuakhali{" "}
              <span className="text-xs">(Feb'21'2023 - Present)</span>
            </p>
            <p className="text-[#9f9f9f] text-xs pb-1">
              Bachelors degree in Computer Science ( CGPA : 3.59 )
            </p>
          </div>
          <div className="card max-w-[500px] max-lg:w-[335px] box-border bg-[#161616] lg:pt-4 lg:pl-6 lg:pb-4 lg:pr-6 max-lg:pt-2 max-lg:pl-4 max-lg:pb-2 max-lg:pr-4 border-l-[#009e66] border-l-2 mb-5">
            {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4'></span> */}
            <h1 className="inline text-lg">Barguna Govt College</h1>
            <p className="text-[#9f9f9f] text-base pb-1 pt-1">
              Barguna{" "}
              <span className="text-xs">(Jan'1'2020 - June'20'2021)</span>
            </p>
            <p className="text-[#9f9f9f] text-xs">
              Intermediate , Science ( Score: 100% ){" "}
            </p>
          </div>
          <div className="card max-w-[500px] max-lg:w-[335px] box-border bg-[#161616] lg:pt-4 lg:pl-6 lg:pb-4 lg:pr-6 max-lg:pt-2 max-lg:pl-4 max-lg:pb-2 max-lg:pr-4 border-l-[#009e66] border-l-2 mb-5">
            {/* <span className='before:absolute before:left-0 before:h-4 before:w-4 before:bg-[#009e66] after:absolute after:border-[8px] after:border-solid after:border-[#009e66] after:left-4'></span> */}
            <h1 className="inline text-lg">Barguna Zila School</h1>
            <p className="text-[#9f9f9f] text-base pb-1 pt-1">
              Barguna{" "}
              <span className="text-xs">(Jan'1'2014 - May'20'2019)</span>
            </p>
            <p className="text-[#9f9f9f] text-xs">
              Secondary , Science ( Score: 100% ){" "}
            </p>
          </div>
        </div>
        {/* Experience */}
        <div className="max-sm:mt-2 hidden md:block pl-2 max-lg:pl-2 max-sm:pl-0">
          <h1 className="text-2xl mb-2 text-[#009e66]">Experience</h1>
          <div className="card max-w-[500px] max-lg:w-[335px] box-border bg-[#161616] lg:pt-4 lg:pl-6 lg:pb-4 lg:pr-6 max-lg:pt-2 max-lg:pl-4 max-lg:pb-2 max-lg:pr-4 border-l-[#009e66] border-l-2 mb-5">
            <h1 className="inline text-lg py-2">Fresher</h1>
          </div>
        </div>
      </div>
      {/* skill */}
      <div>
        <div className="flex justify-center items-center  w-full">
          <div className="py-4 mt-3    lg:w-[60%] md:w-[70%] w-11/12   mx-auto">
            <div className="">
              <p className="text-thin text-[#9f9f9f]">
                My level of knowledge in some tools
              </p>
              <h1 className="text-4xl pt-3">My Skills</h1>
            </div>

            <div className="grid grid-cols-2 gap-x-10 gap-y-4 max-sm:grid-cols-1 lg:gap-x-24 mt-8">
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  C
                </label>
                <progress
                  className="w-full h-3 bg-green-600 rounded-full dark:bg-green-500"
                  id="file"
                  value="95"
                  max="100"
                />
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  JavaScript
                </label>
                <progress
                  className="w-full h-3"
                  id="file"
                  value="85"
                  max="100"
                />
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  Django
                </label>
                <progress
                  className="w-full h-3"
                  id="file"
                  value="80"
                  max="100"
                />
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  MySql
                </label>
                <progress className="w-full h-3" id="file" value="55" max="100">
                  32%
                </progress>
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  HTML/CSS
                </label>
                <progress className="w-full h-3" id="file" value="98" max="100">
                  32%
                </progress>
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  React
                </label>
                <progress className="w-full h-3" id="file" value="90" max="100">
                  32%
                </progress>
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  Python
                </label>
                <progress className="w-full h-3" id="file" value="70" max="100">
                  32%
                </progress>
              </div>
              <div className="max-w-md">
                <label className="block" htmlFor="file">
                  Java
                </label>
                <progress className="w-full h-3" id="file" value="83" max="100">
                  32%
                </progress>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationAndSkill;
