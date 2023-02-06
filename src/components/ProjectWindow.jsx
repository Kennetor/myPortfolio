import "../css/index.css";

function ProjectWindow(props) {
  return (
    <>
      <a href={props.href}>
        <div className="flex-grow card rounded-box"></div>
        <img
          src={props.src}
          className="imageSize hover:scale-105 rounded-3xl"
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
        />
      </a>
    </>
  );
}
export default ProjectWindow;
