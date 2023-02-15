// Images
import html from "../pages/images/htmlIcon.png";
import css from "../pages/images/cssIcon.png";
import js from "../pages/images/jsIcon.png";
import react from "../pages/images/reactIcon.png";
import vite from "../pages/images/vitelogo.png";
import git from "../pages/images/Git-Icon.png";
import python from "../pages/images/pythonIcon.png";
import figma from "../pages/images/figmaIcon.png";
import cshrp from "../pages/images/sharp.png";
import sql from "../pages/images/sqlIcon.png";
import get from "../pages/images/getacademy.png";
import get2 from "../pages/images/get2.png";

function ImageOpenerA() {
  window.open(get, "_blank");
}
function ImageOpenerB() {
  window.open(get2, "_blank");
}

const skills = [
  {
    src: html,
    dataTip: "HTML",
  },
  {
    src: css,
    dataTip: "CSS",
  },
  {
    src: js,
    dataTip: "Javascript",
  },
  {
    src: react,
    dataTip: "React",
  },
  {
    src: vite,
    dataTip: "Vite",
  },
  {
    src: git,
    dataTip: "Git",
  },
  {
    src: figma,
    dataTip: "Figma",
  },
  {
    src: python,
    dataTip: "Python",
  },
  {
    src: cshrp,
    dataTip: "C#",
  },
  {
    src: sql,
    dataTip: "SQL",
  },
];
export function MappingOutSkills() {
  return (
    <>
      <div className="flex flex-wrap lg:grid grid-cols-5 grid-flow-row mt-20">
        {skills.map((element, index) => (
          <SkillInfo
            key={index}
            index={index}
            src={element.src}
            dataTip={element.dataTip}
          />
        ))}
      </div>

      <div className="mt-10">
        <div className="text-2xl flex">
          <h1 className="m-auto">Sertifikater</h1>
        </div>
        <div className="flex justify-center gap-2">
          <img
            onClick={ImageOpenerA}
            src={get}
            className="w-[200px] h-[250px] rounded hover:scale-110"
          ></img>
          <img
            onClick={ImageOpenerB}
            src={get2}
            className="w-[200px] h-[250px] rounded hover:scale-110"
          ></img>
        </div>
      </div>
    </>
  );
}

export function SkillInfo({ src, dataTip }) {
  return (
    <div
      className="grid gap-2 m-auto mt-2 hover:scale-110 transition ease-in-out tooltip"
      data-tip={dataTip}
    >
      <img
        src={src}
        alt="dev-tool icon"
        style={{
          width: "100px",
          height: "100px",
          borderRadius: "5px",
        }}
      />
      <div className="divider lg:divider-vertical"></div>
    </div>
  );
}
