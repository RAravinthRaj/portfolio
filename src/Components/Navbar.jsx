import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { BiSolidQuoteLeft } from "react-icons/bi";
import { IoEarth } from "react-icons/io5";
import { AiOutlinePicture } from "react-icons/ai";
import { GrBlog } from "react-icons/gr";
import { IoMdMail } from "react-icons/io";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className="mb-5">
      <nav className="flex p-2 mx-2 md:mx-5 lg:mx-5 items-center">
        <div className="flex-1">
          <NavLink to="/" activeClassName="active" exact>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkFK-lENW3YS4W8P8Hn5TTCYSytMbJbdOskw&s"
              className="h-12 w-12 rounded-full hover:border-2 hover:shadow-[0_0_5px_white]"
            />
          </NavLink>
        </div>
        <div className="md:flex-1 items-center justify-between">
          <ul className="hidden md:flex mt-2 justify-between space-x-4 text-sm">
            <li className="flex text-slate-100 items-center gap-2 hover:text-white hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <FaHome />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                exact
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="flex  text-slate-100 items-center  gap-2  hover:text-white    hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <BiSolidQuoteLeft />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="flex  text-slate-100 items-center  gap-2   hover:text-white    hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <IoEarth />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                to="/service"
              >
                SKILLS
              </NavLink>
            </li>
            <li className="flex  text-slate-100 items-center  gap-2   hover:text-white   hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <AiOutlinePicture />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                exact
                to="/project"
              >
                PROJECT
              </NavLink>
            </li>
            <li className="flex  text-slate-100 items-center  gap-2   hover:text-white   hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <GrBlog />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                exact
                to="/blog"
              >
                BLOG
              </NavLink>
            </li>
            <li className="flex  text-slate-100 items-center  gap-2   hover:text-white   hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <IoMdMail />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                exact
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
          <button
            onClick={toggleMenu}
            className="md:hidden h-8 w-8 mr-0 text-white hover:grayscale-0"
          >
            <RxHamburgerMenu />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex flex-row-reverse md:hidden p-2">
          <ul className="flex flex-col items-baseline place-items-end text-center space-y-3 text-md">
            <li className="flex gap-2  text-slate-100 hover:text-white  hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <FaHome />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white font-bold" : "no-underline text-white "
                }
                exact
                to="/"
              >
                HOME
              </NavLink>
            </li>
            <li className="flex gap-2  text-slate-100  hover:text-white  hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <BiSolidQuoteLeft />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white font-bold" : "no-underline text-white "
                }
                exact
                to="/about"
              >
                ABOUT
              </NavLink>
            </li>
            <li className="flex gap-2   text-slate-100 hover:text-white   hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <IoEarth />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white font-bold" : "no-underline text-white "
                }
                exact
                to="/service"
              >
                SKILLS
              </NavLink>
            </li>
            <li className="flex gap-2  text-slate-100 hover:text-white    hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <AiOutlinePicture />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white font-bold" : "no-underline text-white "
                }
                exact
                to="/project"
              >
                PROJECT
              </NavLink>
            </li>
            <li className="flex gap-2   text-slate-100 hover:text-white   hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <GrBlog />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white font-bold" : "no-underline text-white "
                }
                exact
                to="/blog"
              >
                BLOG
              </NavLink>
            </li>
            <li className="flex gap-2   text-slate-100 hover:text-white  hover:font-bold relative after:content after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-current after:transition-all after:duration-300 hover:after:w-full">
              <IoMdMail />
              <NavLink
                className={({ isActive }) =>
                  isActive ? "underline underline-offset-4 decoration-2 text-white  font-bold" : "no-underline text-white "
                }
                exact
                to="/contact"
              >
                CONTACT
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      <div className="border border-white-500"></div>
    </div>
  );
};

export default Navbar;
