import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="navbar bg-base-100 ">
      <nav>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div className="m-3">
          <Link to="/about">About Us</Link>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
