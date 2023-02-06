import React, { useState } from "react";
import { Link } from "react-router-dom";

// Image
// import Logo from "./KennethLogo.png";
import Logo from "../pages/images/KTlogo2.png";

//CSS
import "../css/navbar.css";

function Navbar() {
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };
  return (
    <>
      <div className="navbar bg-base-200 h-32 z-50 w-full">
        <div className="navbar-start">
          <Link to="/">
            <img
              src={Logo}
              className="w-20 md:w-32 absolute flex justify-start top-4 md:top-2 left-4 z-50"
            />
          </Link>
        </div>
        <div className="navbar-end">
          <ul className="menu menu-horizontal px-2">
            <li tabIndex={0}>
              <label
                tabIndex={0}
                className="btn btn-circle p-0 bg-transparent border-none hover:bg-transparent hover:border-none text-sky-600"
                onClick={() => setDropdownOpen(!dropdownOpen)}
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
<<<<<<< HEAD
              {dropdownOpen && (
                <ul className="-translate-x-48  -mt-14 z-50 text-5xl">
                  <li>
                    <Link
                      to="/"
                      className="navBarCss text-sky-600 hover:text-green-300"
                      //   onClick={toggleDropdown}
                    >
                      Hjem
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/about"
                      className="navBarCss text-sky-400 hover:text-green-300"
                    >
                      Om meg
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/contact"
                      className="navBarCssOther text-sky-600 hover:text-green-300"
                    >
                      Kontakt
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/projects"
                      className="navBarCss text-sky-400 hover:text-green-300"
                    >
                      Prosjekt
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/skills"
                      className="navBarCss text-sky-600 hover:text-green-300"
                    >
                      Skills
                    </Link>
                  </li>
                </ul>
              )}
=======
              <ul className="-translate-x-44  -mt-10 z-50 text-5xl">
                <li>
                  <Link to="/" className="navBarCss  text-sky-600">
                    Hjem
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="navBarCss text-sky-400">
                    Profil
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="navBarCssOther text-sky-600">
                    Kontakt
                  </Link>
                </li>
                <li>
                  <Link to="/projects" className="navBarCss text-sky-400">
                    Prosjekt
                  </Link>
                </li>
                <li>
                  <Link to="/skills" className="navBarCss text-sky-600">
                    Skills
                  </Link>
                </li>
              </ul>
>>>>>>> c9a3cce87a316da6de585384cb16aa35fa0c2d75
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Navbar;
