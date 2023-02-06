import "../css/index.css";

function ProjectWindow(props) {
  return (
    <>
      <a href={props.href}>
        <div className="flex-grow card rounded-box"></div>
        <img
<<<<<<< HEAD
          src={props.src}
          className="imageSize hover:scale-105 rounded-3xl"
          onMouseEnter={props.onMouseEnter}
          onMouseLeave={props.onMouseLeave}
=======
          src={props.imageSrc}
          className="imageSize hover:scale-110 rounded-3xl opacity-50 hover:opacity-100"
          onMouseEnter={props.mEnter}
          onMouseLeave={props.mLeave}
>>>>>>> c9a3cce87a316da6de585384cb16aa35fa0c2d75
        />
      </a>
    </>
  );
}
export default ProjectWindow;
