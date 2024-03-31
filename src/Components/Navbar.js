import React from "react";
import img from "../Images/photo_2024-03-31_15-25-38.jpg";
const Navbar = () => {
  return (
    <div className="shadow-md bg-gray-100">
      <div className="  bg-gray-100 mx-auto">
        <div className="w-11/12   bg-gray-100 mx-auto navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost md:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-7 w-7"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-dropdown-toggle dropdown-content mt-3 z-[1]   shadow bg-base-100 rounded-box w-52"
              >
                <li className="  p-1 rounded-md  cursor-pointer    font-bold">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "border p-1 rounded-md border-green-400 text-green-400 font-bold"
                        : "border p-1 rounded-md font-bold"
                    }
                    to="/"
                  >
                    About Me
                  </a>
                </li>
                <li className="  p-1 rounded-md   cursor-pointer   font-bold">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "border p-1 rounded-md border-green-400 text-green-400 font-bold"
                        : "border p-1 rounded-md font-bold"
                    }
                    to="/listedbook"
                  >
                    Services
                  </a>
                </li>
                <li className=" p-1 rounded-md    font-bold">
                  <a
                    className={({ isActive }) =>
                      isActive
                        ? "border p-1 rounded-md border-green-400 text-green-400 font-bold"
                        : "border p-1 rounded-md font-bold"
                    }
                    to="/pagetoread"
                  >
                    Contact Me
                  </a>
                </li>
              </ul>
            </div>
            <div
              to="/"
              className="btn btn-ghost shadow-sm font-bold lg:text-3xl md:text-2xl text-xl"
            >
              Tanvir <span className="text-green-600">Islam</span>
            </div>
          </div>
          {/* <div className="navbar-center hidden lg:flex items-center">
            <ul className="menu-horizontal  gap-2">
              <li className="  p-1 rounded-md  cursor-pointer    font-bold">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? "border p-1 rounded-md border-green-400 text-green-400 font-bold"
                      : "border p-1 rounded-md font-bold"
                  }
                  to="/"
                >
                  About Me
                </a>
              </li>

              <li className="  p-1 rounded-md   cursor-pointer   font-bold">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? "border p-1 rounded-md border-green-400 text-green-400 font-bold"
                      : "border p-1 rounded-md font-bold"
                  }
                  to="/listedbook"
                >
                  Services
                </a>
              </li>
              <li className=" p-1 rounded-md  cursor-pointer  font-bold">
                <a
                  className={({ isActive }) =>
                    isActive
                      ? "border p-1 rounded-md border-green-400 text-green-400 font-bold"
                      : "border p-1 rounded-md font-bold"
                  }
                  to="/pagetoread"
                >
                  Skills
                </a>
              </li>
            </ul>
          </div> */}
          <div className="navbar-end gap-2 ">
            <div className="">
              <div className="dropdown dropdown-end ">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 border-gray-500 border rounded-full">
                    <img alt="Tanvir" src={img} />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu hidden md:flex menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                >
                  <li>
                    <a className=" font-bold">About Me</a>
                  </li>
                  <li>
                    <a className=" font-bold">Services</a>
                  </li>
                  <li>
                    <a className=" font-bold">Contact Me</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
