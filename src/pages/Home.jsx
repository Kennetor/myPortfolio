import React from "react";
import { Link } from "react-router-dom";

import CV from "../cv/cv.pdf";
// Images
import homeScreen from "./images/hometest2.png";

function CvOpen() {
  window.open(CV, "_blank");
}
function Home() {
  return (
    <div className="absolute w-full h-full">
      <img
        className="object-cover h-full w-full -z-50 absolute opacity-40"
        src={homeScreen}
      ></img>
      <h1 className="z-50 text-7xl flex justify-center mt-20 md:mt-60 text-center font-serif">
        Kenneth Tørhaug
      </h1>
      <div className="text-2xl md:text-5xl flex justify-center mt-8 font-serif">
        En aspirerende
        <span className="text-green-400 ml-4">junior utvikler</span>
      </div>
      <div className="flex justify-center mt-12">
        <Link to="/contact">
          <button className="rounded-xl bg-transparent font-semibold text-xl p-4 text-gray-50 border-blue-500 border-2 bg-blue-500 hover:border-blue-500 hover:bg-blue-500">
            Kontakt meg
          </button>
        </Link>
        <button
          className="rounded-xl bg-transparent text-xl font-semibold p-4 ml-6 text-gray-50 border-blue-500 border-2  hover:border-blue-500 hover:bg-blue-500"
          onClick={CvOpen}
        >
          Åpne CV
        </button>
      </div>
    </div>
  );
}

export default Home;
