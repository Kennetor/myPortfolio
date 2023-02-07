import { useState } from "react";
// CSS
import "../css/index.css";
// Images
import rockps from "../pages/images/rockps.png";
import christmas from "../pages/images/christmasproject.png";
import gif from "../pages/images/previewGif.gif";
import scorecard from "../pages/images/scorecard.png";
import kmdb from "../pages/images/kmdb.png";
import discord from "../pages/images/discordbotimg.png";
import beard from "../pages/images/vitestyling.png";
import urlShortener from "../pages/images/urlShortener.png";
import productCard from "../pages/images/productCard.png";
import nft from "../pages/images/nft.png";

const projects = [
  {
    src: rockps,
    githubLink: "https://github.com/KTkodehode/rockps",
  },
  {
    src: urlShortener,
    githubLink: "https://ktkodehode.github.io/url-shortener/",
  },
  {
    src: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=751",
    githubLink: "https://github.com/KTkodehode/DiscordBot",
  },
  {
    src: christmas,
    githubLink: "https://ktkodehode.github.io/Julekalender-TeamGang/",
  },
  {
    src: scorecard,
    githubLink: "https://ktkodehode.github.io/ScrimbaBasketScoreCard/",
  },
  {
    src: nft,
    githubLink: "https://ktkodehode.github.io/vite-styling-opg/",
  },
  {
    src: productCard,
    githubLink: "https://ktkodehode.github.io/vite-styling-opg/",
  },
  {
    src: kmdb,
    githubLink: "https://github.com/Visuvi/TVDB",
  },
  {
    src: beard,
    githubLink: "https://ktkodehode.github.io/vite-styling-opg/",
  },
];

export function MappingOutData() {
  return (
    <div className="flex flex-wrap gap-10 my-12 mx-3">
      {projects.map((element, index) => (
        <ProjectCard
          key={index}
          index={index}
          src={element.src}
          githubLink={element.githubLink}
        />
      ))}
    </div>
  );
}

export function ProjectCard({ src, githubLink, index }) {
  const [hoverImage, setHoverImage] = useState(false);
  return (
    <>
      <div
        className="grid gap-2 m-auto mt-2 hover:scale-110 transition ease-in-out"
        onMouseEnter={() => setHoverImage(true)}
        onMouseLeave={() => setHoverImage(false)}
      >
        <a href={githubLink}>
          <img
            src={
              hoverImage && index == 2
                ? discord
                : hoverImage && index === 3
                ? gif
                : src
            }
            alt="projectImage"
            style={{
              width: "500px",
              height: "350px",
              objectfit: "cover",
              borderRadius: "10px",
            }}
          />
          <div className="divider lg:divider-vertical"></div>
        </a>
      </div>
    </>
  );
}
