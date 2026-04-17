import React from "react";
import { House, Clock5, ChartLine } from "lucide-react";
import { NavLink,Link } from "react-router";
const Navbar = () => {
  const HomeLinks = (
    <>
      <li >
        <NavLink to="/" className={({isActive })=> isActive
            ? "bg-white lg:bg-[#244D3F] rounded text-[#64748B] lg:text-white p-[7px] flex items-center gap-1"
            : "text-[#64748B] font-medium flex items-center gap-1"}>
          <House></House> Home es
        </NavLink>
      </li>
      <li >
        <NavLink to="/timeline" className={({isActive })=> isActive
            ? "bg-white lg:bg-[#244D3F] rounded text-[#64748B] lg:text-white p-[7px] flex items-center gap-1"
            : "text-[#64748B] font-medium flex items-center gap-1"}>
          
          <Clock5 /> Timeline
        </NavLink>
      </li>
      <li>
        <NavLink to="/status-graph" className={({isActive })=> isActive
            ? "bg-white lg:bg-[#244D3F] lg:bg-[#244D3F] rounded text-[#64748B] lg:text-white p-[7px] flex items-center gap-1"
            : "text-[#64748B] font-medium flex items-center gap-1"}>
          <ChartLine /> Status
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="max-lg:collapse  lg:mb-16 shadow-sm  w-full rounded-md">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <div className="collapse-title navbar">
        <div className="navbar-start">
          <label htmlFor="navbar-1-toggle" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
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
          </label>
          <button className="text-xl">
            <Link to="/">
              <span className="font-extrabold text-[24px] text-[#1F2937]">
              Keen
            </span>
            <span className="text-[#244D3F] font-semibold">Keeper</span>
            </Link>
          
          </button>
        </div>

        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-2">
            {
              HomeLinks
            }
          </ul>
        </div>
      </div>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
         {
              HomeLinks
            }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
