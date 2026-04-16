import React from "react";
import { AiTwotoneHome } from "react-icons/ai";
import { FiClock } from "react-icons/fi";
import { ImStatsDots } from "react-icons/im";
import { Link, NavLink } from "react-router";

const Navbar = () => {
  const links = (
    <div className="flex items-center align-center gap-3">
      <li>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "bg-[#244d3f] text-white" : ""
          }
        >
          <AiTwotoneHome className="text-xl" />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/timeline"}
          className={({ isActive }) =>
            isActive ? "bg-[#244d3f] text-white" : ""
          }
        >
          <FiClock />
          Timeline
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/stats"}
          className={({ isActive }) =>
            isActive ? "bg-[#244d3f] text-white" : ""
          }
        >
          <ImStatsDots />
          Stats
        </NavLink>
      </li>
    </div>
  );
  return (
    <nav className="bg-base-100 shadow-sm">
      <div className="navbar  container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow text-[16px]"
            >
              {links}
            </ul>
          </div>

          <a className="btn btn-ghost text-xl">
            <span>
              Keen<span className="text-[#244d3f]">Keeper</span>
            </span>
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-[16px]">{links}</ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
