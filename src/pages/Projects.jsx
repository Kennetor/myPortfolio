import contactImage from "./images/backturned.jpg";

function Projects() {
  return (
    <>
      <div className="text-center text-4xl mt-10">Projects</div>
      <div className="flex flex-col w-9/12 lg:flex-row m-auto mt-10">
        <a
          href="https://github.com/KTkodehode/Julekalender-TeamGang"
          className="w-full"
        >
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            <img
              src={contactImage}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>

        <div className="divider lg:divider-horizontal"></div>
        <a href="#" className="w-full">
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            <img
              src={contactImage}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>
      </div>
      <div className="divider lg:divider-vertical"></div>
      <div className="flex flex-col w-9/12 lg:flex-row m-auto mt-10">
        <a href="#" className="w-full">
          <div className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center">
            <img
              src={contactImage}
              className="h-64 w-full hover:scale-110 rounded-3xl"
            />
          </div>
        </a>
        <div className="divider lg:divider-horizontal"></div>
        <a href="#" className="w-full">
          <div
            className="grid flex-grow h-64 card bg-base-300 rounded-box place-items-center"
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
