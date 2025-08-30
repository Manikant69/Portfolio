import React, { useState } from "react";
import pic from "/my photo.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { BsSun, BsMoon } from "react-icons/bs";
import { useTheme } from "../contexts/ThemeContext";

import { Link } from "react-scroll";

function Navbar() {
  const [menu, setMenu] = useState(false);
  const { isDarkMode, toggleTheme } = useTheme();
  const navItems = [
    {
      id: 1,
      text: "Home",
    },
    {
      id: 2,
      text: "About",
    },
    {
      id: 4,
      text: "Experience",
    },
    {
      id: 3,
      text: "Project",
    },
    {
      id: 5,
      text: "Contact",
    },
  ];

  return (
    <>
      <div className="max-w-screen-2xl container h-16 mx-auto px-4 md:px-20 backdrop-blur-md bg-white/95 dark:bg-gray-900/95 fixed top-0 left-0 right-0 z-10 transition-all duration-300 animate-slideInUp">
        <div className="flex justify-between items-center h-16">
          <div className="flex space-x-2 animate-slideInLeft">
            <img src={pic} className="h-12 w-12 rounded-full hover-scale hover:shadow-lg transition-all duration-300" alt="" />
            <Link
              to="Home"
              smooth={true}
              duration={500}
              offset={-70}
              activeClass="active"
              className='font-semibold text-xl cursor-pointer text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 transition-all duration-300'>Manikant
              <p className="text-sm text-gray-600 dark:text-gray-300">Web Developer</p>
            </Link>
          </div>

          {/* desktop Navbar */}
          <div className="flex items-center space-x-4 animate-slideInRight">
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }, index) => (
                <li
                  className="hover:scale-105 duration-200 cursor-pointer text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 relative group animate-fadeIn"
                  key={id}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <Link
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="relative"
                  >
                    {text}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 dark:bg-blue-400 transition-all duration-300 group-hover:w-full"></span>
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* Theme Toggle Button */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12 animate-pulse-custom"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <BsSun className="w-5 h-5 text-yellow-500 animate-bounce-custom" />
              ) : (
                <BsMoon className="w-5 h-5 text-gray-700" />
              )}
            </button>

            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {!menu ? (
                <AiOutlineMenu size={24} className="text-gray-900 dark:text-white hover:scale-110 transition-transform duration-300" />
              ) : (
                <IoCloseSharp size={24} className="text-gray-900 dark:text-white hover:scale-110 transition-transform duration-300" />
              )}
            </div>
          </div>
        </div>

        {/* mobile Navbar */}

        {menu && (
          <div className="animate-slideInUp">
            <ul className="bg-white dark:bg-gray-900 md:hidden flex flex-col h-screen justify-center items-center space-y-3 text-xl transition-all duration-300">
              {navItems.map(({ id, text }, index) => (
                <li
                  className="hover:scale-110 duration-300 font-semibold cursor-pointer text-gray-900 dark:text-white hover:text-blue-500 dark:hover:text-blue-400 animate-fadeIn"
                  key={id}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <Link
                    onClick={() => setMenu(!menu)}
                    to={text}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    activeClass="active"
                    className="hover:glow transition-all duration-300"
                  >
                    {text}
                  </Link>
                </li>
              ))}
              
              {/* Theme Toggle in Mobile Menu */}
              <li className="pt-4 animate-fadeIn" style={{ animationDelay: '750ms' }}>
                <button
                  onClick={toggleTheme}
                  className="p-3 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-all duration-300 hover:scale-110 hover:rotate-12"
                  aria-label="Toggle theme"
                >
                  {isDarkMode ? (
                    <BsSun className="w-6 h-6 text-yellow-500 animate-bounce-custom" />
                  ) : (
                    <BsMoon className="w-6 h-6 text-gray-700" />
                  )}
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
