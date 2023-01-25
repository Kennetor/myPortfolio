import React, { useState } from "react";
// Images,  GIF
import christmas from "./images/christmasproject.png";
import christmasPreview from "./images/previewGif.gif";
import scoreCard from "./images/scorecard.png";
import beardSite from "./images/beardshite.png";
import Kmdb from "./images/kmdb.png";
import rockps from "./images/rockps.png";
import hoverDisc from "./images/discordbotimg.png";
// CSS
import "../css/index.css";
// Component
import ProjectWindow from "../components/ProjectWindow";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  const [isHovered2, setIsHovered2] = useState(false);

  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-28">
        <a className="font-serif text-5xl">Prosjekter</a>
      </div>

      <div className="flex flex-col lg:flex-row mt-6 justify-evenly">
        <ProjectWindow
          imageSrc={rockps}
          aHref="https://github.com/KTkodehode/rockps"
        />
        <div className="divider lg:divider-horizontal"></div>

        <ProjectWindow
          imageSrc={
            isHovered2
              ? hoverDisc
              : "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=751"
          }
          aHref="https://github.com/KTkodehode/DiscordBot"
          mEnter={() => setIsHovered2(true)}
          mLeave={() => setIsHovered2(false)}
        />
        <div className="divider lg:divider-horizontal"></div>
        <ProjectWindow
          imageSrc={isHovered ? christmasPreview : christmas}
          aHref="https://ktkodehode.github.io/Julekalender-TeamGang/"
          mEnter={() => setIsHovered(true)}
          mLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-col lg:flex-row mt-6 justify-evenly ">
        <ProjectWindow
          imageSrc={scoreCard}
          aHref="https://ktkodehode.github.io/ScrimbaBasketScoreCard/"
        />

        <div className="divider lg:divider-horizontal"></div>
        <ProjectWindow imageSrc={Kmdb} aHref="https://github.com/Visuvi/TVDB" />
        <div className="divider lg:divider-horizontal"></div>
        <ProjectWindow
          imageSrc={beardSite}
          aHref="https://ktkodehode.github.io/vite-styling-opg/"
        />
      </div>
    </>
  );
}

export default Projects;
