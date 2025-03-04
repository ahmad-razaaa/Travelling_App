import React from "react";
import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
   const location = useLocation();
  const visible = location.pathname === "/signwithgoogle" ? "hidden" : "";

  return (
    <header className={`backdrop-blur-md ${visible} bg-white shadow sticky z-50 top-0 `}>
      <nav className="flex h-20 items-center justify-evenly">
        <Link to={'/'}>
          <img src="./logo.png" className="h-16 w-auto mt-1" alt="Logo" />
        </Link>
        <div>
          <ul className="flex gap-6 font-semibold">
            <li className="relative group pb-2 cursor-pointer">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `text-gray-700 ${isActive ? "text-orange-600 font-bold" : ""}`
                }
              >
                Home
              </NavLink>
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-300"></div>
            </li>
            <li className="relative group pb-2 cursor-pointer active:scale-95">
              <NavLink
                to="/route"
                className={({ isActive }) =>
                  `text-gray-700 ${isActive ? "text-orange-600 font-bold" : ""}`
                }
              >
                Routes
              </NavLink>
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-300"></div>
            </li>
            <li className="relative group pb-2 cursor-pointer active:scale-95">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `text-gray-700 ${isActive ? "text-orange-600 font-bold" : ""}`
                }
              >
                About us
              </NavLink>
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-300"></div>
            </li>
            <li className="relative group pb-2 cursor-pointer active:scale-95">
              <NavLink
                to="/services"
                className={({ isActive }) =>
                  `text-gray-700 ${isActive ? "text-orange-600 font-bold" : ""}`
                }
              >
                Services
              </NavLink>
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-300"></div>
            </li>

            <li className="relative group pb-2 cursor-pointer active:scale-95">
              <NavLink
                to="/policy"
                className={({ isActive }) =>
                  `text-gray-700 ${isActive ? "text-orange-600 font-bold" : ""}`
                }
              >
                Policy
              </NavLink>
              <div className="absolute left-0 bottom-0 w-full h-[2px] bg-transparent group-hover:bg-blue-600 transition-all duration-300"></div>
            </li>
          </ul>
        </div>
        <div>
          <button className="bg-orange-600 text-white font-semibold transition-all px-7 py-2 rounded-lg hover:bg-orange-500 hover:scale-105 active:scale-95">
            <NavLink to={"/form"}>Sign In</NavLink>
          </button>
        </div>
      </nav>
    </header>
  );
}
