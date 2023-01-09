import React, { useState } from "react";
// Images,  GIF
import contactImage from "./images/backturned.jpg";
import christmas from "./images/christmasproject.png";
import christmasPreview from "./images/previewGif.gif";

// Component
import ProjectWindow from "../components/ProjectWindow";

function Projects() {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <>
      <div className="text-center text-4xl mt-10">Projects</div>
      <div className="flex flex-col w-9/12 lg:flex-row m-auto mt-10">
        <a
          href="https://github.com/KTkodehode/Julekalender-TeamGang"
          className="w-full"
        >
          <div className="flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            <img
              src={isHovered ? christmasPreview : christmas}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>
        <div className="divider lg:divider-horizontal"></div>
        <a href="#" className="w-full">
          <div
            className="flex-grow h-64 card bg-base-300 rounded-box place-items-center"
            href="www.google.com"
          >
            <img
              src={contactImage}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>

        {/* <div className="flex m-auto">
          <div className="flex-grow h-64 w-auto card rounded-box place-items-center">
            <ProjectWindow
              imageSrc={christmas}
              aHref="https://github.com/KTkodehode/Julekalender-TeamGang"
            />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="flex-grow h-64 card rounded-box place-items-center">
            <ProjectWindow imageSrc={christmas} />
          </div>
        </div>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex  m-auto">
        <div className="flex-grow h-64 card rounded-box place-items-center">
          <ProjectWindow imageSrc={christmas} />
        </div>
        <div className="divider lg:divider-horizontal"></div>
        <div className="flex-grow h-64 card rounded-box place-items-center">
          <ProjectWindow imageSrc={christmas} />
        </div>
      </div> */}
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-col w-9/12 lg:flex-row m-auto mt-10">
        <a href="#" className="w-full">
          <div className="flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            <img
              src={contactImage}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>
        <div className="divider lg:divider-horizontal"></div>
        <a href="#" className="w-full">
          <div
            className="flex-grow h-64 card bg-base-300 rounded-box place-items-center"
            href="www.google.com"
          >
            <img
              src={contactImage}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>
      </div>
    </>
  );
}

export default Projects;

{
  /* <div className="flex-grow h-64 card bg-base-300 rounded-box place-items-center">
<img
  src={isHovered ? christmasPreview : christmas}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
  className="h-64 w-full hover:scale-110 hover:z-50 rounded-3xl"
/>
</div> */
}
