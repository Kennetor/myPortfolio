import React, { useState } from "react";
// Images,  GIF
import contactImage from "./images/backturned.jpg";
import christmas from "./images/christmasproject.png";
import christmasPreview from "./images/previewGif.gif";
import scoreCard from "./images/scorecard.png";
import beardSite from "./images/beardshite.png";
import Kmdb from "./images/kmdb.png";

// Component
import ProjectWindow from "../components/ProjectWindow";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-28">
        <a className="font-serif text-5xl">Prosjekter</a>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 justify-evenly">
        <ProjectWindow
          imageSrc={isHovered ? christmasPreview : christmas}
          aHref="https://ktkodehode.github.io/Julekalender-TeamGang/"
          //   onMouseEnter={() => setIsHovered(true)}
          mEnter={() => setIsHovered(true)}
          mLeave={() => setIsHovered(false)}
        />
        <div className="divider lg:divider-horizontal"></div>

        <ProjectWindow
          imageSrc={scoreCard}
          aHref="https://ktkodehode.github.io/ScrimbaBasketScoreCard/"
        />
      </div>
      <div className="divider lg:divider-vertical"></div>

      <div className="flex flex-col lg:flex-row mt-6 justify-evenly">
        <ProjectWindow
          imageSrc={beardSite}
          aHref="https://ktkodehode.github.io/vite-styling-opg/"
        />

        <div className="divider lg:divider-horizontal"></div>

        <ProjectWindow imageSrc={Kmdb} aHref="https://github.com/Visuvi/TVDB" />
      </div>
    </>
  );
}

export default Projects;
