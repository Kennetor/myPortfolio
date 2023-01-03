import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 h-32">
        <div className="navbar-start">
          <Link to="/">
            <img
              src="/src/images/[removal.ai]_tmp-63b3f80a398f0.png"
              className="pr-4 w-60 absolute flex justify-start -top-8 -left-2 z-50"
            />
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
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
              <ul className="p-0 -translate-x-36 w-fit mt-0 z-50 text-5xl">
                <li>
                  <Link to="/" className="flex justify-end">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="flex justify-end">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="flex justify-end">
                    Projects
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="flex justify-end">
                    Contact
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
