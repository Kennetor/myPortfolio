import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-200 h-32">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="/src/images/Logo.png"
              className="pr-4 w-60 absolute flex justify-start -top-8 -left-2 z-50"
            />
          </Link>
        </div>
        <div className="navbar-end lg:flex">
          <ul className="menu menu-horizontal px-2">
            <li tabIndex={0}>
              <label
                tabIndex={0}
                className="btn btn-circle p-0 bg-transparent border-none hover:bg-transparent hover:border-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-10 w-10"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h7"
                  />
                </svg>
              </label>
              <ul className="p-0 -translate-x-44 w-fit -mt-16 z-50 text-5xl hover:bg-transparent">
                <li>
                  <Link
                    to="/"
                    className="flex justify-end hover:bg-transparent"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="flex justify-end hover:bg-transparent text-black"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="flex justify-end hover:bg-transparent "
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/projects"
                    className="flex justify-end hover:bg-transparent text-black"
                  >
                    Work
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
