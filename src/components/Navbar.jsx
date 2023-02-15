import React, { useState } from "react";
import { Link } from "react-router-dom";

// Image
import Logo from "../pages/images/KTlogo2.png";

//CSS
import "../css/navbar.css";

function Navbar() {
  const [hover, setHover] = useState(true);
  const [timer, setTimer] = useState(null);
  // Sets a timer before the hover state can be shown again, so after a click it doesnt keep the hover-state
  const handleClick = () => {
    clearTimeout(timer);
    setHover(false);
    setTimer(
      setTimeout(() => {
        setHover(true);
      }, 10)
    );
  };

  return (
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
            {/* When the hover-state is true - here it is truthy with the "", it is visible, hidden when false */}
            <ul
              className={`-translate-x-48  -mt-14 z-50 text-5xl ${
                hover ? "" : "hidden"
              }`}
              onClick={handleClick}
            >
              {/* Each list has the onclick to trigger the delay hide function */}
              <li>
                <Link
                  to="/"
                  className="navBarCss text-sky-600 hover:text-[#49DE80]"
                  onClick={handleClick}
                >
                  Hjem
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="navBarCss text-sky-400 hover:text-[#49DE80]"
                  onClick={handleClick}
                >
                  Om meg
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="navBarCssOther text-sky-600 hover:text-[#49DE80]"
                  onClick={handleClick}
                >
                  Kontakt
                </Link>
              </li>
              <li>
                <Link
                  to="/projects"
                  className="navBarCss text-sky-400 hover:text-[#49DE80]"
                  onClick={handleClick}
                >
                  Prosjekt
                </Link>
              </li>
              <li>
                <Link
                  to="/skills"
                  className="navBarCss text-sky-600 hover:text-[#49DE80]"
                  onClick={handleClick}
                >
                  Skills
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
