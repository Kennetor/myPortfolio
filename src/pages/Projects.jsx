import React, { useState } from "react";

// Component
import { MappingOutData } from "../components/ProjectWindow";

function Projects() {
  //   const [isHovered, setIsHovered] = useState(false);
  //   const [isHovered2, setIsHovered2] = useState(false);

  return (
    <>
      <div className="navbar-center absolute top-8 right-1/2 translate-x-20 md:translate-x-28">
        <a className="font-serif text-2xl md:text-5xl">Prosjekter</a>
      </div>

      <MappingOutData />

      {/* <div className="flex flex-col lg:flex-row mt-6 justify-evenly mx-2">
        <ProjectWindow
          src={rockps}
          href="https://github.com/KTkodehode/rockps"
        />
        <div className="divider lg:divider-horizontal"></div>

        <ProjectWindow
          src={
            isHovered2
              ? hoverDisc
              : "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=751"
          }
          href="https://github.com/KTkodehode/DiscordBot"
          onMouseEnter={() => setIsHovered2(true)}
          onMouseLeave={() => setIsHovered2(false)}
        />
        <div className="divider lg:divider-horizontal"></div>
        <ProjectWindow
          src={isHovered ? christmasPreview : christmas}
          href="https://ktkodehode.github.io/Julekalender-TeamGang/"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        />
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-col lg:flex-row mt-6 justify-evenly mx-2">
        <ProjectWindow
          src={scoreCard}
          href="https://ktkodehode.github.io/ScrimbaBasketScoreCard/"
        />

        <div className="divider lg:divider-horizontal"></div>
        <ProjectWindow src={Kmdb} href="https://github.com/Visuvi/TVDB" />
        <div className="divider lg:divider-horizontal"></div>
        <ProjectWindow
          src={beardSite}
          href="https://ktkodehode.github.io/vite-styling-opg/"
        />
      </div> */}
    </>
  );
}

export default Projects;
