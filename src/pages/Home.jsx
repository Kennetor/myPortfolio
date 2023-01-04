import React from "react";
import { Link } from "react-router-dom";

// Images
import homeScreen from "./images/homescreen.png";

function Home() {
  return (
    <>
      <div className="absolute w-full h-full">
        <img
          class="object-cover h-full w-full -z-50 absolute opacity-60"
          src={homeScreen}
        ></img>
        <h1 className="z-50 text-5xl flex justify-center mt-60 text-center font-serif">
          Kenneth Tørhaug
        </h1>
        <h4 className="text-xl flex justify-center mt-6 font-serif">
          I'm a <span className="text-green-500 ml-1">developer</span>
        </h4>
        <btn className="flex justify-center mt-6">
          <Link to="/contact">
            <button className="btn btn-active bg-transparent p-4 text-gray-50 border-blue-500 bg-blue-500 hover:border-blue-500 hover:bg-blue-500">
              Hire me
            </button>
          </Link>
          <button className="btn btn-active bg-transparent p-4 ml-2 text-gray-50 hover:bg-blue-500 border-blue-500 hover:border-blue-500">
            <a href="/src/cv/cv-test.txt" download>
              Download CV
            </a>
          </button>
        </btn>
      </div>
    </>
  );
}

export default Home;
