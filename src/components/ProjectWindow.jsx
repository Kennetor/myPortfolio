import "../css/index.css";

function ProjectWindow(props) {
  return (
    <>
      <a href={props.aHref}>
        <div className="flex-grow card rounded-box"></div>
        <img
          src={props.imageSrc}
          className="imageSize hover:scale-105 rounded-3xl opacity-50 hover:opacity-100"
          onMouseEnter={props.mEnter}
          onMouseLeave={props.mLeave}
        />
      </a>
    </>
  );
}
export default ProjectWindow;
