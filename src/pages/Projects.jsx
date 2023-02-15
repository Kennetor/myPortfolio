// Component
import { MappingOutData } from "../components/ProjectWindow";

function Projects() {
  return (
    <>
      <div className="navbar-center absolute top-10 right-1/2 translate-x-16 md:translate-x-28">
        <a className="font-serif text-2xl md:text-5xl">Prosjekter</a>
      </div>

      <MappingOutData />
    </>
  );
}

export default Projects;
