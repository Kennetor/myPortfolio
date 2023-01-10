import React, { useState } from "react";
// Images,  GIF
import contactImage from "./images/backturned.jpg";
import christmas from "./images/christmasproject.png";
import christmasPreview from "./images/previewGif.gif";
import scoreCard from "./images/scorecard.png";
import beardSite from "./images/beardsite.png";
import Kmdb from "./images/kmdb.png";

// Component
import ProjectWindow from "../components/ProjectWindow";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="text-center text-5xl">Projects</div>
      <div className="flex flex-col w-7/12 lg:flex-row m-auto mt-6">
        <a
          href="https://ktkodehode.github.io/Julekalender-TeamGang/"
          className="w-full"
        >
          <div className="flex-grow h-96 card rounded-box place-items-center">
            <img
              src={isHovered ? christmasPreview : christmas}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="h-full w-full hover:scale-105 rounded-3xl"
            />
          </div>
        </a>
        <div className="divider lg:divider-horizontal"></div>
        <a
          href="https://ktkodehode.github.io/ScrimbaBasketScoreCard/"
          className="w-full"
        >
          <div
            className="flex-grow h-96 card rounded-box place-items-center"
            href="#"
          >
            <img
              src={scoreCard}
              className="h-96 w-full hover:scale-105 rounded-3xl"
            />
          </div>
        </a>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-col w-7/12 lg:flex-row m-auto mt-2">
        <a
          href="https://ktkodehode.github.io/vite-styling-opg/"
          className="w-full"
        >
          <div className="flex-grow h-full card rounded-box place-items-center">
            <img
              src={beardSite}
              className="h-96 w-full hover:scale-105 rounded-3xl"
            />
          </div>
        </a>
        <div className="divider lg:divider-horizontal"></div>
        <a href="https://github.com/Visuvi/TVDB" className="w-full">
          <div
            className="flex-grow h-64 card rounded-box place-items-center"
            href="www.google.com"
          >
            <img
              src={Kmdb}
              className="h-96 w-full hover:scale-105 rounded-3xl opacity-70"
            />
          </div>
        </a>
      </div>
    </>
  );
}

export default Projects;
