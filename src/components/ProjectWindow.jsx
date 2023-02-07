import "../css/index.css";

const projects = [
  {
    src: "/src/pages/images/rockps.png",
    githubLink: "https://github.com/KTkodehode/rockps",
  },
  {
    src: "https://beebom.com/wp-content/uploads/2018/02/discord-bots.jpg?w=730&h=487&crop=1&quality=751",
    githubLink: "https://github.com/KTkodehode/DiscordBot",
  },
  {
    src: "/src/pages/images/christmasproject.png",
    githubLink: "https://ktkodehode.github.io/Julekalender-TeamGang/",
  },
  {
    src: "/src/pages/images/scorecard.png",
    githubLink: "https://ktkodehode.github.io/ScrimbaBasketScoreCard/",
  },
  {
    src: "/src/pages/images/kmdb.png",
    githubLink: "https://github.com/Visuvi/TVDB",
  },
  {
    src: "/src/pages/images/beardshite.png",
    githubLink: "https://ktkodehode.github.io/vite-styling-opg/",
  },
];

export function MappingOutData() {
  return (
    <div className="flex flex-wrap grid-cols-2 gap-10 my-12 mx-3">
      {projects.map((element, index) => (
        <ProjectCard
          key={index}
          src={element.src}
          githubLink={element.githubLink}
        />
      ))}
    </div>
  );
}

export function ProjectCard({ src, githubLink }) {
  return (
    <>
      <div className="grid gap-2 m-auto mt-2 hover:scale-110 transition ease-in-out">
        <a href={githubLink}>
          <img
            src={src}
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

// function ProjectWindow(props) {
//   return (
//     <>
//       <a href={props.href}>
//         <div className="flex-grow card rounded-box"></div>
//         <img
//           src={props.src}
//           className="imageSize hover:scale-105 rounded-3xl"
//           onMouseEnter={props.onMouseEnter}
//           onMouseLeave={props.onMouseLeave}
//         />
//       </a>
//     </>
//   );
// }
// export default ProjectWindow;
